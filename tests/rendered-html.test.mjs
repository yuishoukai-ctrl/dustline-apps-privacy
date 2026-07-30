import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

async function page(relativePath) {
  return readFile(new URL(relativePath, outputRoot), "utf8");
}

test("exports the app directory without starter metadata", async () => {
  const html = await page("index.html");

  assert.match(html, /Dustline Apps/);
  assert.match(html, /LeaseLens/);
  assert.match(html, /RigKeeper/);
  assert.match(html, /Homeschool Binder/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/);
});

for (const app of [
  { slug: "leaselens", en: "LeaseLens", ja: "賃貸物件チェック" },
  { slug: "rigkeeper", en: "RigKeeper", ja: "RV整備記録" },
  { slug: "homeschool-binder", en: "Homeschool Binder", ja: "学習記録" },
]) {
  test(`exports English and Japanese privacy pages for ${app.slug}`, async () => {
    const [en, ja] = await Promise.all([
      page(`en/privacy/${app.slug}/index.html`),
      page(`ja/privacy/${app.slug}/index.html`),
    ]);

    assert.match(en, new RegExp(app.en));
    assert.match(en, /Google Play Billing/);
    assert.match(en, /support@dustline\.jp/);
    assert.match(ja, new RegExp(app.ja));
    assert.match(ja, /Google Play Billing/);
    assert.match(ja, /support@dustline\.jp/);
  });
}

test("states the parent-managed child-data model for Homeschool Binder", async () => {
  const [en, ja] = await Promise.all([
    page("en/privacy/homeschool-binder/index.html"),
    page("ja/privacy/homeschool-binder/index.html"),
  ]);

  assert.match(en, /parent, guardian, or adult educator/);
  assert.match(en, /not sent to a developer-operated server/);
  assert.match(ja, /保護者または成人の教育者/);
  assert.match(ja, /開発者のサーバーへ送信されません/);
});
