import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apps, isLocale } from "../../site-content";
import { SiteFooter, SiteNav } from "../../site-shell";

type PageProps = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ja" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "ja" ? "サポート" : "Support" };
}

export default async function SupportPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;

  return (
    <main>
      <header className="policyHeader">
        <SiteNav locale={locale} />
        <div className="shell policyIntro">
          <p className="eyebrow">{locale === "ja" ? "サポート" : "Support"}</p>
          <h1>{locale === "ja" ? "お困りですか？" : "How can we help?"}</h1>
          <p className="lede">
            {locale === "ja"
              ? "不具合、購入、データ、プライバシーに関するお問い合わせを受け付けています。"
              : "Get help with bugs, purchases, local data, and privacy."}
          </p>
        </div>
      </header>

      <div className="shell section">
        <div className="supportGrid">
          <section className="supportCard">
            <p className="eyebrow">Email</p>
            <h2>{locale === "ja" ? "メールで問い合わせる" : "Contact by email"}</h2>
            <p>
              {locale === "ja"
                ? "アプリ名、端末機種、Androidのバージョン、問題が発生した手順をお知らせください。機密情報や健康情報そのものは送らないでください。"
                : "Include the app name, device model, Android version, and steps that led to the problem. Do not email sensitive data or the health-record contents themselves."}
            </p>
            <a href="mailto:dustlineadv@gmail.com">dustlineadv@gmail.com</a>
          </section>
          <section className="supportCard">
            <p className="eyebrow">{locale === "ja" ? "プライバシー" : "Privacy"}</p>
            <h2>{locale === "ja" ? "アプリ別ポリシー" : "App policies"}</h2>
            <div className="cardLinks">
              {apps.map((app) => (
                <Link href={`/${locale}/privacy/${app.slug}`} key={app.slug}>
                  {app[locale].name} <span>→</span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <section className="faq">
          <p className="eyebrow">FAQ</p>
          <h2>{locale === "ja" ? "よくある質問" : "Frequently asked questions"}</h2>
          <details>
            <summary>{locale === "ja" ? "記録はどこに保存されますか？" : "Where are my records stored?"}</summary>
            <p>{locale === "ja" ? "記録は原則として端末内に保存されます。機種変更前に、アプリにエクスポート機能がある場合は必要な記録を書き出してください。" : "Records are generally stored on your device. Before changing devices, export any records you need when the app provides an export feature."}</p>
          </details>
          <details>
            <summary>{locale === "ja" ? "プレミアム購入を復元できますか？" : "Can I restore my Premium purchase?"}</summary>
            <p>{locale === "ja" ? "購入時と同じGoogle Playアカウントでアプリを開き、プレミアム画面の復元操作をお試しください。" : "Use the same Google Play account used for the purchase, then use the restore action on the Premium screen."}</p>
          </details>
          <details>
            <summary>{locale === "ja" ? "アプリを削除すると記録はどうなりますか？" : "What happens if I uninstall the app?"}</summary>
            <p>{locale === "ja" ? "端末内のアプリデータは削除されます。事前に必要なデータをエクスポートしてください。" : "Local app data is deleted. Export anything you need before uninstalling."}</p>
          </details>
          <details>
            <summary>{locale === "ja" ? "返金はどこで申請しますか？" : "Where do I request a refund?"}</summary>
            <p>{locale === "ja" ? "購入はGoogle Playが処理します。返金申請はGoogle Playの購入履歴またはサポートから行ってください。" : "Google Play processes purchases. Request a refund through your Google Play purchase history or Google Play support."}</p>
          </details>
        </section>
      </div>
      <SiteFooter locale={locale} />
    </main>
  );
}
