import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "./site-content";

export function SiteNav({ locale }: { locale: Locale }) {
  return (
    <nav className="nav shell" aria-label={locale === "ja" ? "メインナビゲーション" : "Primary navigation"}>
      <Link className="brand" href="/">
        <span className="brandMark" aria-hidden="true">D</span>
        <span>Dustline Apps</span>
      </Link>
      <div className="navLinks">
        <Link href={`/${locale}/support`}>{locale === "ja" ? "サポート" : "Support"}</Link>
        <Link href={locale === "ja" ? "/en/support" : "/ja/support"}>
          {locale === "ja" ? "English" : "日本語"}
        </Link>
      </div>
    </nav>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="footer">
      <div className="shell footerInner">
        <div>
          <strong>Dustline Apps</strong>
          <p>{locale === "ja" ? "端末内保存を中心に設計した個人開発アプリです。" : "Independent mobile apps designed with local-first data storage."}</p>
        </div>
        <div className="footerLinks">
          <Link href={`/${locale}/support`}>{locale === "ja" ? "サポート" : "Support"}</Link>
          <a href="mailto:support@dustline.jp">support@dustline.jp</a>
        </div>
      </div>
    </footer>
  );
}

export function PolicyFrame({
  locale,
  title,
  summary,
  children,
}: {
  locale: Locale;
  title: string;
  summary: string;
  children: ReactNode;
}) {
  return (
    <main>
      <header className="policyHeader">
        <SiteNav locale={locale} />
        <div className="shell policyIntro">
          <div className="breadcrumbs">
            <Link href="/">Dustline Apps</Link><span>/</span>
            <span>{locale === "ja" ? "プライバシーポリシー" : "Privacy policy"}</span>
          </div>
          <p className="eyebrow">{locale === "ja" ? "プライバシーポリシー" : "Privacy policy"}</p>
          <h1>{title}</h1>
          <p className="lede">{summary}</p>
        </div>
      </header>
      {children}
      <SiteFooter locale={locale} />
    </main>
  );
}
