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
];

export const updatedDate = "July 29, 2026";
export const updatedDateJa = "2026年7月29日";

export function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "ja";
}
