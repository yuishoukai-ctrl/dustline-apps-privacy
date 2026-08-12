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
  health: boolean;
  childrenAge?: 13 | 18;
  noticeEn?: string;
  noticeJa?: string;
  en: LocalizedApp;
  ja: LocalizedApp;
};

export const apps: AppInfo[] = [
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
      name: "Aquarium Log",
      summary:
        "Organize tank profiles, water readings, care notes, reminders, and attachments on your device.",
    },
    ja: {
      name: "水槽管理・アクアリウムログ",
      summary:
        "水槽情報、水質測定、飼育記録、リマインダー、添付資料を端末内で整理するアプリです。",
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
];

export const updatedDate = "August 12, 2026";
export const updatedDateJa = "2026年8月12日";

export function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "ja";
}
