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
  assert.match(html, /TrayVault/);
  assert.match(html, /BoothWorth/);
  assert.match(html, /RoastTrace/);
  assert.match(html, /FlockLedger/);
  assert.match(html, /Batch Cost by DUSTLINE/);
  assert.match(html, /Zanurami/);
  assert.match(html, /ToolLife Pocket/);
  assert.match(html, /CalibrQR/);
  assert.match(html, /CleanText Lab/);
  assert.match(html, /Custom Bingo Sheet/);
  assert.match(html, /Photo Contact Sheet/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/);
});

for (const app of [
  { slug: "kyou-no-mikata", en: "Your Ally Today", ja: "今日のミカタ", billing: false },
  { slug: "moving-checklist", en: "Moving Checklist", ja: "引越しチェックリスト" },
  { slug: "aquarium-log", en: "Aquarium Log by DUSTLINE", ja: "Aquarium Log by DUSTLINE（水槽管理）" },
  { slug: "batch-cost", en: "Batch Cost by DUSTLINE", ja: "Batch Cost by DUSTLINE（レシピ原価計算）" },
  { slug: "bee-logbook", en: "Bee Logbook", ja: "養蜂・巣箱点検手帳" },
  { slug: "bichiku-checker", en: "Emergency Stock Checker", ja: "備蓄チェッカー" },
  { slug: "leaselens", en: "LeaseLens", ja: "賃貸物件チェック" },
  { slug: "rigkeeper", en: "RigKeeper", ja: "RV整備記録" },
  { slug: "homeschool-binder", en: "Homeschool Binder", ja: "学習記録" },
  { slug: "trayvault", en: "TrayVault", ja: "フリーズドライ記録" },
  { slug: "boothworth", en: "BoothWorth", ja: "クラフトフェア計画" },
  { slug: "roasttrace", en: "RoastTrace", ja: "コーヒー焙煎ログ" },
  { slug: "flockledger", en: "FlockLedger", ja: "FlockLedger 鶏・採卵・費用台帳" },
  { slug: "engine-note", en: "Engine Note", ja: "Engine Note", billing: false },
  { slug: "calibrqr", en: "CalibrQR", ja: "CalibrQR", billing: false },
  { slug: "cleantext-lab", en: "CleanText Lab", ja: "CleanText Lab", billing: false },
  { slug: "custom-bingo-sheet", en: "Custom Bingo Sheet", ja: "カスタム・ビンゴシート", billing: false },
  { slug: "photo-contact-sheet", en: "Photo Contact Sheet", ja: "写真コンタクトシート", billing: false },
]) {
  test(`exports English and Japanese privacy pages for ${app.slug}`, async () => {
    const [en, ja] = await Promise.all([
      page(`en/privacy/${app.slug}/index.html`),
      page(`ja/privacy/${app.slug}/index.html`),
    ]);

    assert.match(en, new RegExp(app.en));
    if (app.billing === false) {
      assert.doesNotMatch(en, /App Store \(StoreKit\).*Google Play Billing/);
    } else {
      assert.match(en, /App Store \(StoreKit\).*Google Play Billing/);
    }
    assert.match(en, /support@dustline\.jp/);
    assert.match(ja, new RegExp(app.ja));
    if (app.billing === false) {
      assert.doesNotMatch(ja, /App Store（StoreKit）.*Google Play Billing/);
    } else {
      assert.match(ja, /App Store（StoreKit）.*Google Play Billing/);
    }
    assert.match(ja, /support@dustline\.jp/);
  });
}

test("states Your Ally Today no-retention, no-SDK, and wellbeing boundaries", async () => {
  const [en, ja] = await Promise.all([
    page("en/privacy/kyou-no-mikata/index.html"),
    page("ja/privacy/kyou-no-mikata/index.html"),
  ]);

  assert.match(en, /does not save what you enter or the response it generates/);
  assert.match(en, /does not record audio or access the microphone/);
  assert.match(en, /no feature that exports or shares your entries or responses/);
  assert.match(en, /does not provide medical care, diagnosis, treatment, or emergency support/);
  assert.doesNotMatch(en, /advertising SDK.*Premium purchase/s);
  assert.match(ja, /入力した内容や生成された回答は保存せず/);
  assert.match(ja, /録音やマイクへのアクセスは行いません/);
  assert.match(ja, /入力内容や回答を開発者または第三者へエクスポート・共有する機能はありません/);
  assert.match(ja, /医療行為、診断、治療、緊急対応を提供しません/);
});

test("states Moving Checklist local-data, advertising, and official-source boundaries", async () => {
  const [en, ja] = await Promise.all([
    page("en/privacy/moving-checklist/index.html"),
    page("ja/privacy/moving-checklist/index.html"),
  ]);

  assert.match(en, /Move name, planned date, household details, checklist items/);
  assert.match(en, /Google Mobile Ads SDK \(AdMob\)/);
  assert.match(en, /Confirm current requirements with the relevant authority or service provider/);
  assert.match(ja, /引越し名、予定日、世帯情報、チェック項目/);
  assert.match(ja, /Google Mobile Ads SDK（AdMob）/);
  assert.match(ja, /最新の要件を関係機関またはサービス提供者へ確認/);
});

test("states Zanurami local field-evidence, photo, export, and iOS-only purchase boundaries", async () => {
  const [en, ja] = await Promise.all([
    page("en/privacy/zanurami/index.html"),
    page("ja/privacy/zanurami/index.html"),
  ]);

  assert.match(en, /Farm, plot, and season names/);
  assert.match(en, /Evidence photos you take with the camera or choose from the photo library/);
  assert.match(en, /backups, CSV, JSON, and PDF files you create/);
  assert.match(en, /Apple&#x27;s App Store \(StoreKit\)/);
  assert.doesNotMatch(en, /Google/);
  assert.match(en, /support@dustline\.jp/);
  assert.match(ja, /農園名、区画名、シーズン名と期間/);
  assert.match(ja, /カメラで撮影または写真ライブラリから選択した証跡写真/);
  assert.match(ja, /AppleのApp Store（StoreKit）/);
  assert.doesNotMatch(ja, /Google/);
  assert.match(ja, /support@dustline\.jp/);
});

test("states Batch Cost local-data and calculation boundaries", async () => {
  const [en, ja] = await Promise.all([
    page("en/privacy/batch-cost/index.html"),
    page("ja/privacy/batch-cost/index.html"),
  ]);

  assert.match(en, /Ingredient names, package quantities, package prices/);
  assert.match(en, /does not provide tax, accounting, pricing, food-safety, or nutrition advice/);
  assert.match(en, /uninstall the app to remove all of its records/);
  assert.match(ja, /材料名、購入量、購入価格、単位/);
  assert.match(ja, /税務・会計・価格設定・食品衛生・栄養/);
  assert.match(ja, /本アプリをアンインストール/);
});

test("states Bee Logbook photo, deletion, and beekeeper-observation boundaries", async () => {
  const [en, ja] = await Promise.all([
    page("en/privacy/bee-logbook/index.html"),
    page("ja/privacy/bee-logbook/index.html"),
  ]);

  assert.match(en, /Inspection photos you take with the camera or choose from the photo library/);
  assert.match(en, /uninstall the app to remove all of its records/);
  assert.match(en, /does not diagnose disease/);
  assert.match(ja, /カメラで撮影または写真ライブラリから選択した点検写真/);
  assert.match(ja, /本アプリをアンインストール/);
  assert.match(ja, /病気の診断/);
});

test("states Bichiku Checker inventory, iOS ad, and first-aid boundaries", async () => {
  const [en, ja] = await Promise.all([
    page("en/privacy/bichiku-checker/index.html"),
    page("ja/privacy/bichiku-checker/index.html"),
  ]);

  assert.match(en, /Inventory records you enter/);
  assert.match(en, /iOS version does not show ads or initialize AdMob/);
  assert.match(en, /Preparedness and first-aid content is general reference information/);
  assert.match(ja, /備蓄品名、数量、購入日、期限/);
  assert.match(ja, /iOS版では広告を表示せず、AdMobを起動しません/);
  assert.match(ja, /防災・応急処置情報は一般的な参考情報/);
});

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

test("states FlockLedger local-data and animal-care boundaries", async () => {
  const [en, ja] = await Promise.all([
    page("en/privacy/flockledger/index.html"),
    page("ja/privacy/flockledger/index.html"),
  ]);

  assert.match(en, /Flock names and bird names or identifiers/);
  assert.match(en, /Egg counts, feed quantities, feed cost, other expenses, egg sales/);
  assert.match(en, /does not diagnose animals/);
  assert.match(ja, /鶏群名、個体名・識別ID、品種、状態/);
  assert.match(ja, /採卵数、飼料使用量、飼料費、その他費用、卵の売上/);
  assert.match(ja, /動物の診断/);
});

test("states ToolLife Pocket local-data, permission, export, billing, and deletion boundaries", async () => {
  const [en, ja, supportEn, supportJa] = await Promise.all([
    page("en/privacy/tool-life-pocket/index.html"),
    page("ja/privacy/tool-life-pocket/index.html"),
    page("en/support/index.html"),
    page("ja/support/index.html"),
  ]);

  assert.match(en, /Cutter names and types, local tool IDs/);
  assert.match(en, /August 25, 2026/);
  assert.match(en, /Cutter-use, inspection, and resharpening history/);
  assert.match(en, /system photo picker/);
  assert.match(en, /QR labels that identify only a local tool ID/);
  assert.match(en, /JSON backups you import or export, and CSV files you export/);
  assert.match(en, /No account is required/);
  assert.match(en, /does not use an advertising SDK, third-party analytics SDK, or developer-operated cloud service/);
  assert.match(en, /does not collect location, microphone audio, contacts, or background data/);
  assert.match(en, /Dustline does not collect, share, analyze, or sync/);
  assert.match(en, /requests camera permission only when a Premium user chooses to scan a local QR label/);
  assert.match(en, /Google Play Billing processes the optional lifetime Premium purchase/);
  assert.doesNotMatch(en, /Apple.*App Store|StoreKit/);
  assert.match(en, /do not include Google Play purchase tokens, order IDs, or Premium entitlement information/);
  assert.match(en, /delete cutter, machine, history, and inspection-photo records individually in the app/);

  assert.match(ja, /カッターの名称・種類、ローカル工具ID/);
  assert.match(ja, /2026年8月25日/);
  assert.match(ja, /カッターの使用、点検、再研磨の履歴/);
  assert.match(ja, /システムのフォトピッカー/);
  assert.match(ja, /ローカル工具IDだけを識別するQRラベル/);
  assert.match(ja, /JSONバックアップのインポート・エクスポートとCSVエクスポート/);
  assert.match(ja, /アカウント登録は不要/);
  assert.match(ja, /広告SDK、第三者分析SDK、開発者が運営するクラウドサービスを使用しません/);
  assert.match(ja, /位置情報、マイク音声、連絡先、バックグラウンドデータを収集しません/);
  assert.match(ja, /Dustlineは、カッター、機械、履歴、写真、QRの各記録を収集、共有、分析、同期しません/);
  assert.match(ja, /プレミアムユーザーがローカルQRラベルのスキャンを選択した場合にのみ要求/);
  assert.match(ja, /任意の買い切りプレミアム購入にはGoogle Play Billingを使用/);
  assert.doesNotMatch(ja, /Apple.*App Store|StoreKit/);
  assert.match(ja, /Google Playの購入トークン、注文ID、プレミアム権利情報を含めません/);
  assert.match(ja, /アプリ内の削除操作で個別に削除でき/);

  assert.match(supportEn, /ToolLife Pocket/);
  assert.match(supportJa, /ToolLife Pocket/);
});

test("states app-specific safety and business boundaries for the next three apps", async () => {
  const [trayEn, trayJa, boothEn, boothJa, roastEn, roastJa] = await Promise.all([
    page("en/privacy/trayvault/index.html"),
    page("ja/privacy/trayvault/index.html"),
    page("en/privacy/boothworth/index.html"),
    page("ja/privacy/boothworth/index.html"),
    page("en/privacy/roasttrace/index.html"),
    page("ja/privacy/roasttrace/index.html"),
  ]);

  assert.match(trayEn, /does not control an appliance or determine food safety/);
  assert.match(trayJa, /食品の安全性、乾燥完了/);
  assert.match(boothEn, /does not process payments or provide accounting/);
  assert.match(boothJa, /決済処理、会計・税務/);
  assert.match(roastEn, /Timers and notifications are not safety devices/);
  assert.match(roastJa, /タイマーや通知は安全装置ではありません/);
});

test("states Engine Note local-only service data, explicit sharing, and iOS StoreKit boundaries", async () => {
  const [en, ja] = await Promise.all([
    page("en/privacy/engine-note/index.html"),
    page("ja/privacy/engine-note/index.html"),
  ]);

  assert.match(en, /Equipment name, type, manufacturer, model, serial number, current hours/);
  assert.match(en, /CSV or PDF exports and JSON backups you explicitly create/);
  assert.match(en, /Apple&#x27;s App Store \(StoreKit\)/);
  assert.doesNotMatch(en, /Google Play Billing/);
  assert.match(en, /does not use an advertising SDK, third-party analytics SDK, or developer-operated cloud service/);
  assert.match(en, /does not collect or transmit information for advertising, analytics, or tracking/);
  assert.match(ja, /機器名、種類、メーカー、型式、製造番号、現在の稼働時間/);
  assert.match(ja, /CSV・PDF書き出しおよびJSONバックアップ/);
  assert.match(ja, /AppleのApp Store（StoreKit）/);
  assert.doesNotMatch(ja, /Google Play Billing/);
  assert.match(ja, /広告SDK、第三者分析SDK、開発者が運営するクラウドサービスを使用しません/);
  assert.match(ja, /広告、分析、トラッキングを目的として情報を収集または送信しません/);
});

test("states CalibrQR memory-only label handling, explicit PDF sharing, and iOS StoreKit boundaries", async () => {
  const [en, ja] = await Promise.all([
    page("en/privacy/calibrqr/index.html"),
    page("ja/privacy/calibrqr/index.html"),
  ]);

  assert.match(en, /Label text and static QR payloads/);
  assert.match(en, /processed only in working memory and are not saved as history/);
  assert.match(en, /does not save imported label text or QR payloads in history or templates/);
  assert.match(en, /Apple&#x27;s App Store \(StoreKit\)/);
  assert.doesNotMatch(en, /Google Play Billing/);
  assert.match(en, /Only when you start an export or share action/);
  assert.match(ja, /ラベル文字列と静的QR内容/);
  assert.match(ja, /作業中のメモリ上だけで処理し、履歴として保存しません/);
  assert.match(ja, /読み込んだラベル文字列とQR内容は履歴やテンプレートには保存しません/);
  assert.match(ja, /AppleのApp Store（StoreKit）/);
  assert.doesNotMatch(ja, /Google Play Billing/);
  assert.match(ja, /エクスポートまたは共有操作を実行した場合に限り/);
});

test("states CleanText Lab memory-only text handling, explicit sharing, and iOS StoreKit boundaries", async () => {
  const [en, ja] = await Promise.all([
    page("en/privacy/cleantext-lab/index.html"),
    page("ja/privacy/cleantext-lab/index.html"),
  ]);

  assert.match(en, /Text and filenames that you paste or import are processed only in working memory/);
  assert.match(en, /does not save document text or filenames as history/);
  assert.match(en, /one cleanup-rule preset/);
  assert.match(en, /Apple&#x27;s App Store \(StoreKit\)/);
  assert.doesNotMatch(en, /Google Play Billing/);
  assert.match(en, /Only when you start an export or share action/);
  assert.match(ja, /貼り付けまたは読み込んだ本文とファイル名は作業中のメモリ上だけで処理/);
  assert.match(ja, /本文とファイル名は文書履歴として保存しません/);
  assert.match(ja, /1件のルール設定/);
  assert.match(ja, /AppleのApp Store（StoreKit）/);
  assert.doesNotMatch(ja, /Google Play Billing/);
  assert.match(ja, /エクスポートまたは共有操作を実行した場合に限り/);
});

test("states Custom Bingo Sheet local projects, explicit PDF sharing, and iOS StoreKit boundaries", async () => {
  const [en, ja] = await Promise.all([
    page("en/privacy/custom-bingo-sheet/index.html"),
    page("ja/privacy/custom-bingo-sheet/index.html"),
  ]);

  assert.match(en, /Project name, phrases, header, and free-cell label/);
  assert.match(en, /processed only on your device and are not sent/);
  assert.match(en, /does not conduct drawings, choose winners, manage prizes or wagers/);
  assert.match(en, /Apple&#x27;s App Store \(StoreKit\)/);
  assert.doesNotMatch(en, /Google Play Billing/);
  assert.match(en, /Only when you start an export or share action/);
  assert.match(ja, /プロジェクト名、語句、見出し、フリーセルの表示/);
  assert.match(ja, /端末上だけで処理され/);
  assert.match(ja, /抽選、勝者選定、賞品・賭けの管理/);
  assert.match(ja, /AppleのApp Store（StoreKit）/);
  assert.doesNotMatch(ja, /Google Play Billing/);
  assert.match(ja, /エクスポートまたは共有操作を実行した場合に限り/);
});

test("states Photo Contact Sheet selected-item, temporary-data, sharing, and iOS StoreKit boundaries", async () => {
  const [en, ja] = await Promise.all([
    page("en/privacy/photo-contact-sheet/index.html"),
    page("ja/privacy/photo-contact-sheet/index.html"),
  ]);

  assert.match(en, /JPEG, PNG, or HEIC still images you explicitly select/);
  assert.match(en, /does not request full-library photo permission/);
  assert.match(en, /not sent to a server operated by the developer/);
  assert.match(en, /temporary metadata-free images/);
  assert.match(en, /one content-free layout preset/);
  assert.match(en, /Apple&#x27;s App Store \(StoreKit\)/);
  assert.doesNotMatch(en, /Google Play Billing/);
  assert.match(en, /Only when you start an export or share action/);
  assert.match(en, /does not guarantee physical print scale or colour reproduction/);

  assert.match(ja, /明示的に選択したJPEG、PNG、HEICの静止画/);
  assert.match(ja, /写真ライブラリ全体へのアクセス権限を要求せず/);
  assert.match(ja, /開発者が運営するサーバーへ送信されません/);
  assert.match(ja, /メタデータを除去した一時画像/);
  assert.match(ja, /写真・文字を含まない1件のレイアウト設定/);
  assert.match(ja, /AppleのApp Store（StoreKit）/);
  assert.doesNotMatch(ja, /Google Play Billing/);
  assert.match(ja, /エクスポートまたは共有操作を実行した場合に限り/);
  assert.match(ja, /物理的な印刷倍率や色再現は保証せず/);
});
