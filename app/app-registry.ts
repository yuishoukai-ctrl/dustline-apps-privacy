/**
 * The release-facing source of truth for App Store Connect and local-only apps.
 * Keep a record blocking until its public English and Japanese pages are ready.
 */
export const PUBLIC_ORIGIN = "https://yuishoukai-ctrl.github.io/dustline-apps-privacy" as const;
export const SUPPORT_CONTACT = "support@dustline.jp" as const;

export type PublicationExpectation = "published" | "unpublished" | "local-only" | "paused";
export type ReleaseBlockerState =
  | "clear"
  | "missing-published-policy-pages"
  | "local-only-not-approved"
  | "paused";

export type AppRegistryEntry = {
  bundleId: string;
  slug: string;
  identity: { en: string; ja: string };
  privacyUrl: { en: string; ja: string };
  supportUrl: { en: string; ja: string };
  supportContact: typeof SUPPORT_CONTACT;
  publicationExpectation: PublicationExpectation;
  releaseBlocker: ReleaseBlockerState;
};

function urls(slug: string) {
  return {
    privacyUrl: {
      en: `${PUBLIC_ORIGIN}/en/privacy/${slug}/`,
      ja: `${PUBLIC_ORIGIN}/ja/privacy/${slug}/`,
    },
    supportUrl: {
      en: `${PUBLIC_ORIGIN}/en/support/`,
      ja: `${PUBLIC_ORIGIN}/ja/support/`,
    },
  } as const;
}

const appRegistryEntries = [
  { bundleId: "com.dustline.zanurami", slug: "zanurami", identity: { en: "Zanurami", ja: "Zanurami 圃場証跡ノート" }, publicationExpectation: "published", releaseBlocker: "clear", ...urls("zanurami") },
  { bundleId: "com.dustline.enginenote", slug: "engine-note", identity: { en: "Engine Note", ja: "Engine Note" }, publicationExpectation: "published", releaseBlocker: "clear", ...urls("engine-note") },
  { bundleId: "com.dustline.aquariumlog", slug: "aquarium-log", identity: { en: "Aquarium Log by DUSTLINE", ja: "Aquarium Log by DUSTLINE（水槽管理）" }, publicationExpectation: "published", releaseBlocker: "clear", ...urls("aquarium-log") },
  { bundleId: "com.dustline.batchCost", slug: "batch-cost", identity: { en: "Batch Cost by DUSTLINE", ja: "Batch Cost by DUSTLINE（レシピ原価計算）" }, publicationExpectation: "published", releaseBlocker: "clear", ...urls("batch-cost") },
  { bundleId: "com.dustline.beelogbook", slug: "bee-logbook", identity: { en: "Bee Logbook", ja: "養蜂・巣箱点検手帳" }, publicationExpectation: "published", releaseBlocker: "clear", ...urls("bee-logbook") },
  { bundleId: "com.dustline.calibrqr", slug: "calibrqr", identity: { en: "CalibrQR", ja: "CalibrQR" }, publicationExpectation: "published", releaseBlocker: "clear", ...urls("calibrqr") },
  { bundleId: "com.wc35nk3h2t.homeledger", slug: "homeledger", identity: { en: "HomeLedger", ja: "HomeLedger" }, publicationExpectation: "unpublished", releaseBlocker: "missing-published-policy-pages", ...urls("homeledger") },
  { bundleId: "jp.dustline.dustlineApp", slug: "dustline", identity: { en: "DUSTLINE", ja: "DUSTLINE" }, publicationExpectation: "paused", releaseBlocker: "paused", ...urls("dustline") },
  { bundleId: "com.dustline.bichikuchecker", slug: "bichiku-checker", identity: { en: "Emergency Stock Checker", ja: "備蓄チェッカー" }, publicationExpectation: "published", releaseBlocker: "clear", ...urls("bichiku-checker") },
  { bundleId: "com.dustline.cleaningRhythm", slug: "cleaning-rhythm", identity: { en: "Cleaning Rhythm", ja: "Cleaning Rhythm" }, publicationExpectation: "published", releaseBlocker: "clear", ...urls("cleaning-rhythm") },
  { bundleId: "com.dustline.cleantextlab", slug: "cleantext-lab", identity: { en: "CleanText Lab", ja: "CleanText Lab" }, publicationExpectation: "published", releaseBlocker: "clear", ...urls("cleantext-lab") },
  { bundleId: "com.dustline.custombingosheet", slug: "custom-bingo-sheet", identity: { en: "Custom Bingo Sheet", ja: "カスタム・ビンゴシート" }, publicationExpectation: "published", releaseBlocker: "clear", ...urls("custom-bingo-sheet") },
  { bundleId: "com.dustline.photocontactsheet", slug: "photo-contact-sheet", identity: { en: "Photo Contact Sheet", ja: "写真コンタクトシート" }, publicationExpectation: "published", releaseBlocker: "clear", ...urls("photo-contact-sheet") },
] satisfies readonly Omit<AppRegistryEntry, "supportContact">[];

export const appRegistry: readonly AppRegistryEntry[] = appRegistryEntries.map((entry) => ({
  ...entry,
  supportContact: SUPPORT_CONTACT,
}));

export function assertSiteContentMatchesRegistry(
  apps: readonly { slug: string; en: { name: string }; ja: { name: string } }[],
) {
  for (const entry of appRegistry) {
    const app = apps.find((candidate) => candidate.slug === entry.slug);
    if (!app) {
      if (entry.releaseBlocker === "clear") {
        throw new Error(`Published registry entry ${entry.slug} is missing site content.`);
      }
      continue;
    }
    if (app.en.name !== entry.identity.en || app.ja.name !== entry.identity.ja) {
      throw new Error(`Registry identity does not match site content for ${entry.slug}.`);
    }
  }
}
