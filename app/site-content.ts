export type Locale = "en" | "ja";

type LocalizedApp = {
  name: string;
  summary: string;
};

export type AppInfo = {
  slug: string;
  icon: string;
  category: string;
  accent: "blue" | "green" | "rose";
  ads: boolean;
  adsAndroidOnly?: boolean;
  billing?: boolean;
  googlePlayOnlyBilling?: boolean;
  iosStoreKitOnly?: boolean;
  exporting?: boolean;
  health: boolean;
  childrenAge?: 13 | 18;
  noticeEn?: string;
  noticeJa?: string;
  updatedDateEn?: string;
  updatedDateJa?: string;
  en: LocalizedApp;
  ja: LocalizedApp;
};

export const apps: AppInfo[] = [
  {
    slug: "kyou-no-mikata",
    icon: "☀",
    category: "Wellbeing support",
    accent: "rose",
    ads: false,
    billing: false,
    exporting: false,
    health: false,
    childrenAge: 18,
    noticeEn:
      "This app offers general encouragement. It does not provide medical care, diagnosis, treatment, or emergency support. In an emergency, contact local emergency services or a qualified professional.",
    noticeJa:
      "本アプリは一般的な励ましを提供するもので、医療行為、診断、治療、緊急対応を提供しません。緊急時は地域の緊急窓口や専門家へ連絡してください。",
    en: {
      name: "Your Ally Today",
      summary:
        "Receive gentle encouragement without sending or saving what you enter.",
    },
    ja: {
      name: "今日のミカタ",
      summary:
        "入力内容を送信・保存せず、その場でやさしい励ましを受け取れるアプリです。",
    },
  },
  {
    slug: "moving-checklist",
    icon: "⌂",
    category: "Moving preparation",
    accent: "blue",
    ads: true,
    health: false,
    childrenAge: 13,
    noticeEn:
      "This app is an organizational checklist. Administrative procedures, required documents, fees, and deadlines vary by location and individual circumstances. Confirm current requirements with the relevant authority or service provider.",
    noticeJa:
      "本アプリは手続きの整理を補助するチェックリストです。必要な手続き、書類、費用、期限は地域や個別事情により異なるため、最新の要件を関係機関またはサービス提供者へ確認してください。",
    en: {
      name: "Moving Checklist",
      summary:
        "Organize moving tasks, deadlines, household details, and reminders on your device.",
    },
    ja: {
      name: "引越しチェックリスト",
      summary:
        "引越しの手続き、期限、世帯情報、リマインダーを端末内で整理するアプリです。",
    },
  },
  {
    slug: "zanurami",
    icon: "▦",
    category: "Field evidence",
    accent: "green",
    ads: false,
    health: false,
    childrenAge: 18,
    noticeEn:
      "This app organizes user-entered field records and evidence packets. It does not certify regulatory compliance or provide agronomic, pesticide, food-safety, legal, tax, or accounting advice.",
    noticeJa:
      "本アプリはユーザーが入力した圃場記録と証跡資料を整理するもので、法令適合を証明したり、栽培・農薬・食品安全・法務・税務・会計上の助言を提供したりするものではありません。",
    en: {
      name: "Zanurami",
      summary:
        "Keep farm, plot, season, field-event, revision, and photo evidence private on your device and export records you choose.",
    },
    ja: {
      name: "Zanurami 圃場証跡ノート",
      summary:
        "農園、区画、シーズン、作業、修正履歴、写真証跡を端末内で管理し、選んだ記録を書き出せます。",
    },
  },
  {
    slug: "noise-diary",
    icon: "◉",
    category: "Sound & wellbeing",
    accent: "blue",
    ads: true,
    health: false,
    childrenAge: 13,
    en: {
      name: "Noise Diary & dB Meter",
      summary: "Record surrounding sound levels and keep a private noise diary.",
    },
    ja: {
      name: "騒音日記・dBメーター",
      summary: "周囲の音量を測定し、端末内に騒音記録を残すアプリです。",
    },
  },
  {
    slug: "garden-diary",
    icon: "✦",
    category: "Garden records",
    accent: "green",
    ads: true,
    health: false,
    childrenAge: 13,
    en: {
      name: "Vegetable Garden Journal",
      summary: "Keep planting, growth, harvest, and garden photo records together.",
    },
    ja: {
      name: "家庭菜園手帳",
      summary: "植え付け、生育、収穫、写真を端末内でまとめる菜園記録アプリです。",
    },
  },
  {
    slug: "pet-health-care",
    icon: "♥",
    category: "Pet care records",
    accent: "rose",
    ads: false,
    health: true,
    childrenAge: 13,
    en: {
      name: "Pet Health & Care Binder",
      summary: "Organize pet health, medication, vaccine, visit, and document records.",
    },
    ja: {
      name: "ペット健康・ケア手帳",
      summary: "健康、投薬、ワクチン、通院、書類を端末内で整理する記録アプリです。",
    },
  },
  {
    slug: "aquarium-log",
    icon: "≈",
    category: "Aquarium records",
    accent: "blue",
    ads: false,
    health: false,
    noticeEn:
      "This app records observations entered by the user. It does not diagnose livestock, recommend treatment, or determine whether water is safe.",
    noticeJa:
      "本アプリは入力された観察記録を管理するもので、生体の診断、治療助言、水の安全判定を行いません。",
    en: {
      name: "Aquarium Log by DUSTLINE",
      summary:
        "Organize tank profiles, water readings, care notes, reminders, and attachments on your device.",
    },
    ja: {
      name: "Aquarium Log by DUSTLINE（水槽管理）",
      summary:
        "水槽情報、水質測定、飼育記録、リマインダー、添付資料を端末内で整理するアプリです。",
    },
  },
  {
    slug: "batch-cost",
    icon: "∑",
    category: "Recipe costing",
    accent: "rose",
    ads: false,
    health: false,
    childrenAge: 13,
    noticeEn:
      "This app performs arithmetic using values entered by the user. It does not provide tax, accounting, pricing, food-safety, or nutrition advice.",
    noticeJa:
      "本アプリはユーザーの入力値を用いた算術計算を行うもので、税務・会計・価格設定・食品衛生・栄養に関する助言を提供しません。",
    en: {
      name: "Batch Cost by DUSTLINE",
      summary:
        "Calculate ingredient, batch, and per-unit recipe costs while keeping prices and recipes on your device.",
    },
    ja: {
      name: "Batch Cost by DUSTLINE（レシピ原価計算）",
      summary:
        "材料単価、仕込み原価、1個あたりの原価を計算し、価格とレシピを端末内で管理します。",
    },
  },
  {
    slug: "bee-logbook",
    icon: "⬡",
    category: "Apiary records",
    accent: "green",
    ads: false,
    health: false,
    noticeEn:
      "This app records beekeeper observations. It does not diagnose disease, recommend treatment, or replace professional or local regulatory guidance.",
    noticeJa:
      "本アプリは養蜂家が入力した観察記録を管理するもので、病気の診断、治療助言、専門家や地域の規制案内の代替を行いません。",
    en: {
      name: "Bee Logbook",
      summary:
        "Keep apiaries, hive inspections, tasks, reminders, and attachments together on your device.",
    },
    ja: {
      name: "養蜂・巣箱点検手帳",
      summary:
        "養蜂場、巣箱、点検、タスク、リマインダー、添付資料を端末内で整理するアプリです。",
    },
  },
  {
    slug: "bichiku-checker",
    icon: "▣",
    category: "Emergency preparedness",
    accent: "green",
    ads: true,
    adsAndroidOnly: true,
    health: false,
    childrenAge: 13,
    noticeEn:
      "Preparedness and first-aid content is general reference information. It is not medical advice or a substitute for current instructions from governments, emergency services, or medical professionals.",
    noticeJa:
      "本アプリの防災・応急処置情報は一般的な参考情報です。医療上の助言や、行政・消防・医療機関などによる最新の指示の代替ではありません。",
    en: {
      name: "Emergency Stock Checker",
      summary:
        "Manage household emergency supplies, expiration dates, family targets, reminders, backups, and reports on your device.",
    },
    ja: {
      name: "備蓄チェッカー",
      summary:
        "家庭の防災備蓄、期限、家族構成に応じた必要量、通知、バックアップ、レポートを端末内で管理します。",
    },
  },
  {
    slug: "sewing-stash",
    icon: "✂",
    category: "Sewing inventory",
    accent: "rose",
    ads: false,
    health: false,
    en: {
      name: "Sewing Stash",
      summary:
        "Organize fabric inventory, projects, shopping lists, patterns, and attachments on your device.",
    },
    ja: {
      name: "布・型紙・裁縫在庫管理",
      summary:
        "布の在庫、制作物、買い物リスト、型紙、添付資料を端末内で整理するアプリです。",
    },
  },
  {
    slug: "leaselens",
    icon: "⌂",
    category: "Rental inspection records",
    accent: "blue",
    ads: false,
    health: false,
    noticeEn:
      "This app helps organize user-entered rental condition records. It does not provide legal advice or determine liability.",
    noticeJa:
      "本アプリはユーザーが入力した賃貸物件の状態記録を整理するもので、法的助言や責任の判定を行いません。",
    en: {
      name: "LeaseLens",
      summary:
        "Document move-in and move-out condition notes, photos, and reports privately on your device.",
    },
    ja: {
      name: "LeaseLens 賃貸物件チェック",
      summary:
        "入居時・退去時の状態、メモ、写真、比較レポートを端末内で管理するアプリです。",
    },
  },
  {
    slug: "rigkeeper",
    icon: "◆",
    category: "RV maintenance records",
    accent: "rose",
    ads: false,
    health: false,
    noticeEn:
      "This app organizes user-entered maintenance records and reminders. It does not replace manufacturer guidance or professional inspection.",
    noticeJa:
      "本アプリはユーザーが入力した整備記録とリマインダーを整理するもので、メーカーの案内や専門家による点検の代替ではありません。",
    en: {
      name: "RigKeeper",
      summary:
        "Track RV maintenance by date, mileage, and engine hours, with local reports and reminders.",
    },
    ja: {
      name: "RigKeeper RV整備記録",
      summary:
        "日付、走行距離、稼働時間によるRV整備記録、レポート、通知を端末内で管理します。",
    },
  },
  {
    slug: "engine-note",
    icon: "⚙",
    category: "Small-engine service records",
    accent: "green",
    ads: false,
    billing: false,
    iosStoreKitOnly: true,
    exporting: true,
    health: false,
    childrenAge: 13,
    noticeEn:
      "Engine Note organizes service records and owner-entered intervals. It does not monitor equipment automatically, determine safety or readiness, or replace manufacturer guidance or professional inspection.",
    noticeJa:
      "Engine Noteは、整備記録と所有者が入力した点検時期を整理するアプリです。機器を自動監視したり、安全性や使用可否を判定したり、メーカーの案内や専門家による点検の代替を行ったりするものではありません。",
    en: {
      name: "Engine Note",
      summary:
        "Keep small-engine equipment, completed service, owner-entered intervals, photos, and exports private on your device.",
    },
    ja: {
      name: "Engine Note",
      summary:
        "小型エンジン機器、整備履歴、入力した点検時期、写真、書き出しデータを端末内で管理するアプリです。",
    },
  },
  {
    slug: "calibrqr",
    icon: "⌗",
    category: "QR label printing",
    accent: "green",
    ads: false,
    billing: false,
    iosStoreKitOnly: true,
    exporting: true,
    health: false,
    childrenAge: 13,
    updatedDateEn: "August 25, 2026",
    updatedDateJa: "2026年8月25日",
    noticeEn:
      "CalibrQR creates static QR label sheets from text supplied by the user. It does not provide dynamic redirects, scan tracking, inventory management, or printer certification.",
    noticeJa:
      "CalibrQRは、ユーザーが入力した文字列から静的QRラベルシートを作成します。動的リダイレクト、読み取り追跡、在庫管理、プリンターの適合保証は提供しません。",
    en: {
      name: "CalibrQR",
      summary:
        "Turn pasted rows or CSV files into calibrated QR label-sheet PDFs without sending label contents to the developer.",
    },
    ja: {
      name: "CalibrQR",
      summary:
        "貼り付けた行やCSVから、ラベル内容を開発者へ送信せず、印刷位置を調整できるQRラベルPDFを作成します。",
    },
  },
  {
    slug: "homeschool-binder",
    icon: "▤",
    category: "Homeschool records",
    accent: "green",
    ads: false,
    health: false,
    en: {
      name: "Homeschool Binder",
      summary:
        "Keep parent-managed student, attendance, learning, and work-sample records private on your device.",
    },
    ja: {
      name: "Homeschool Binder 学習記録",
      summary:
        "保護者が管理する生徒、出席、学習、作品の記録を端末内に保存するアプリです。",
    },
  },
  {
    slug: "trayvault",
    icon: "❄",
    category: "Freeze-drying records",
    accent: "blue",
    ads: false,
    health: false,
    childrenAge: 13,
    noticeEn:
      "This app records user-entered freeze-drying activity. It does not control an appliance or determine food safety, dryness, shelf life, or safe storage.",
    noticeJa:
      "本アプリはユーザーが入力したフリーズドライ記録を管理するもので、機器の制御、食品の安全性、乾燥完了、保存期限、安全な保管方法の判定を行いません。",
    en: {
      name: "TrayVault: Freeze Dryer Log",
      summary:
        "Track freeze-dryer batches, trays, settings, dry checks, and pantry lots privately on your device.",
    },
    ja: {
      name: "TrayVault フリーズドライ記録",
      summary:
        "フリーズドライのバッチ、トレイ、設定、乾燥確認、保存ロットを端末内で管理します。",
    },
  },
  {
    slug: "boothworth",
    icon: "⌃",
    category: "Craft fair planning",
    accent: "rose",
    ads: false,
    health: false,
    childrenAge: 18,
    noticeEn:
      "This app provides estimates from values entered by the user. It does not process payments or provide accounting, tax, legal, investment, or sales advice.",
    noticeJa:
      "本アプリはユーザーの入力値から概算を表示するもので、決済処理、会計・税務・法務・投資・販売上の助言を行いません。",
    en: {
      name: "BoothWorth: Craft Fair Planner",
      summary:
        "Evaluate event profit, plan stock and load-in, and compare results privately on your device.",
    },
    ja: {
      name: "BoothWorth クラフトフェア計画",
      summary:
        "出店採算、商品数、搬入準備、販売結果を端末内で計画・比較します。",
    },
  },
  {
    slug: "roasttrace",
    icon: "◒",
    category: "Coffee roasting records",
    accent: "green",
    ads: false,
    health: false,
    childrenAge: 13,
    noticeEn:
      "This app records user-entered coffee roasting activity. It does not control roasting equipment, determine safe operation, or replace manufacturer instructions. Timers and notifications are not safety devices.",
    noticeJa:
      "本アプリはユーザーが入力したコーヒー焙煎記録を管理するもので、焙煎機の制御、安全な運転の判定、メーカー説明書の代替を行いません。タイマーや通知は安全装置ではありません。",
    en: {
      name: "RoastTrace: Coffee Roast Log",
      summary:
        "Record roast events, temperatures, weight loss, green beans, and cupping notes on your device.",
    },
    ja: {
      name: "RoastTrace コーヒー焙煎ログ",
      summary:
        "焙煎イベント、温度、重量変化、生豆在庫、試飲メモを端末内に保存します。",
    },
  },
  {
    slug: "flockledger",
    icon: "▥",
    category: "Backyard flock records",
    accent: "rose",
    ads: false,
    health: false,
    childrenAge: 13,
    noticeEn:
      "This app records user-entered flock activity. It does not diagnose animals, recommend medication or withdrawal periods, determine whether eggs are safe to eat, or provide accounting or tax advice.",
    noticeJa:
      "本アプリはユーザーが入力した鶏群の活動記録を管理するもので、動物の診断、投薬・休薬期間の助言、卵の食用可否、会計・税務上の判断を行いません。",
    en: {
      name: "FlockLedger: Chicken & Egg Log",
      summary:
        "Record backyard flock eggs, feed, costs, sales, birds, and care notes privately on your device.",
    },
    ja: {
      name: "FlockLedger 鶏・採卵・費用台帳",
      summary:
        "鶏群、採卵、飼料、費用、売上、個体、ケアメモを端末内で記録します。",
    },
  },
  {
    slug: "move-markr",
    icon: "⌂",
    category: "Rental evidence",
    accent: "blue",
    ads: false,
    health: false,
    childrenAge: 13,
    en: {
      name: "MoveMarkr",
      summary: "Document rental condition with photos, checklists, and exportable evidence.",
    },
    ja: {
      name: "MoveMarkr",
      summary: "賃貸物件の状態を写真、チェックリスト、書き出し可能な証跡として端末内に保存します。",
    },
  },
  {
    slug: "try-clock",
    icon: "◷",
    category: "Return reminders",
    accent: "rose",
    ads: false,
    health: false,
    childrenAge: 18,
    en: {
      name: "TryClock",
      summary: "Track return deadlines, purchase details, notes, and reminders on your device.",
    },
    ja: {
      name: "TryClock",
      summary: "返品期限、購入情報、メモ、リマインダーを端末内で管理します。",
    },
  },
  {
    slug: "tool-life-pocket",
    icon: "◇",
    category: "CNC tooling records",
    accent: "blue",
    ads: false,
    billing: true,
    googlePlayOnlyBilling: true,
    exporting: true,
    health: false,
    childrenAge: 18,
    noticeEn:
      "This app organizes cutter-use and inspection records entered by the user. It does not determine safe tool life, feeds or speeds, machine settings, or safe machine operation, and it does not control equipment. Follow manufacturer guidance and applicable workplace safety procedures.",
    noticeJa:
      "本アプリはユーザーが入力したカッターの使用・点検記録を整理するもので、安全な工具寿命、送り・回転数、機械設定、安全運転を判定せず、機器を制御しません。メーカーの指示および職場の安全手順に従ってください。",
    updatedDateEn: "August 25, 2026",
    updatedDateJa: "2026年8月25日",
    en: {
      name: "ToolLife Pocket",
      summary:
        "Keep CNC cutter, machine, use, inspection, resharpening, photo, and local QR records on your device.",
    },
    ja: {
      name: "ToolLife Pocket",
      summary:
        "CNCカッター、機械、使用・点検・再研磨、写真、ローカルQRの記録を端末内で管理します。",
    },
  },
];

export const updatedDate = "August 24, 2026";
export const updatedDateJa = "2026年8月24日";

export function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "ja";
}
