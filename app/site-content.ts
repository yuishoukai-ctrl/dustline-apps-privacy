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
];

export const updatedDate = "July 30, 2026";
export const updatedDateJa = "2026年7月30日";

export function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "ja";
}
