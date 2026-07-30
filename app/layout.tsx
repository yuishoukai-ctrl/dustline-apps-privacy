import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Dustline Apps — Privacy & Support",
    template: "%s | Dustline Apps",
  },
  description:
    "Official privacy policies and support for mobile apps published by Dustline Apps.",
  metadataBase: new URL("https://yuishoukai-ctrl.github.io/dustline-apps-privacy/"),
  openGraph: {
    title: "Dustline Apps — Privacy & Support",
    description: "Small tools. Clear privacy.",
    type: "website",
    images: ["https://yuishoukai-ctrl.github.io/dustline-apps-privacy/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
