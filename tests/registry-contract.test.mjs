import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import test from "node:test";
import ts from "typescript";

const require = createRequire(import.meta.url);
const registryPath = new URL("../app/app-registry.ts", import.meta.url);
const outputRoot = new URL("../out/", import.meta.url);
const expectedOrigin = "https://yuishoukai-ctrl.github.io/dustline-apps-privacy";

async function registry() {
  const source = await readFile(registryPath, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    fileName: "app-registry.ts",
  }).outputText;
  const module = { exports: {} };
  new Function("exports", "require", "module", "__filename", "__dirname", compiled)(
    module.exports,
    require,
    module,
    registryPath.pathname,
    new URL("../app/", import.meta.url).pathname,
  );
  return module.exports;
}

async function page(path) {
  return readFile(new URL(path, outputRoot), "utf8");
}

test("registry uses the approved origin, canonical localized paths, and unique identities", async () => {
  const { PUBLIC_ORIGIN, SUPPORT_CONTACT, appRegistry } = await registry();
  assert.equal(PUBLIC_ORIGIN, expectedOrigin);
  assert.equal(SUPPORT_CONTACT, "support@dustline.jp");
  assert.equal(new Set(appRegistry.map((app) => app.bundleId)).size, appRegistry.length);
  assert.equal(new Set(appRegistry.map((app) => app.slug)).size, appRegistry.length);

  for (const app of appRegistry) {
    assert.equal(app.supportContact, SUPPORT_CONTACT);
    assert.equal(app.privacyUrl.en, `${expectedOrigin}/en/privacy/${app.slug}/`);
    assert.equal(app.privacyUrl.ja, `${expectedOrigin}/ja/privacy/${app.slug}/`);
    assert.equal(app.supportUrl.en, `${expectedOrigin}/en/support/`);
    assert.equal(app.supportUrl.ja, `${expectedOrigin}/ja/support/`);
    assert.doesNotMatch(JSON.stringify(app), /chatgpt\.site/i);
    if (app.publicationExpectation === "published") {
      assert.equal(app.releaseBlocker, "clear", `${app.slug} cannot be release-ready with a blocker`);
    } else {
      assert.notEqual(app.releaseBlocker, "clear", `${app.slug} must state an explicit release blocker`);
    }
  }
});

test("published registry entries render their registered identity and support contact", async () => {
  const { appRegistry, SUPPORT_CONTACT } = await registry();
  const [supportEn, supportJa] = await Promise.all([
    page("en/support/index.html"),
    page("ja/support/index.html"),
  ]);
  const contactPattern = new RegExp(SUPPORT_CONTACT.replace(".", "\\."));
  assert.match(supportEn, contactPattern);
  assert.match(supportJa, contactPattern);

  for (const app of appRegistry.filter((entry) => entry.releaseBlocker === "clear")) {
    const [en, ja] = await Promise.all([
      page(`en/privacy/${app.slug}/index.html`),
      page(`ja/privacy/${app.slug}/index.html`),
    ]);
    assert.match(en, new RegExp(app.identity.en));
    assert.match(ja, new RegExp(app.identity.ja));
    assert.match(en, contactPattern);
    assert.match(ja, contactPattern);
    assert.match(supportEn, new RegExp(app.identity.en));
    assert.match(supportJa, new RegExp(app.identity.ja));
  }
});
