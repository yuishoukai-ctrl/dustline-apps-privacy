import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apps, getApp, isLocale, updatedDate, updatedDateJa } from "../../../site-content";
import { PolicyFrame } from "../../../site-shell";

type PageProps = { params: Promise<{ locale: string; app: string }> };

export function generateStaticParams() {
  return ["en", "ja"].flatMap((locale) => apps.map((app) => ({ locale, app: app.slug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, app: slug } = await params;
  const app = getApp(slug);
  if (!app || !isLocale(locale)) return {};
  const name = app[locale].name;
  return {
    title: `${name} — ${locale === "ja" ? "プライバシーポリシー" : "Privacy Policy"}`,
    description: app[locale].summary,
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale: rawLocale, app: slug } = await params;
  const app = getApp(slug);
  if (!app || !isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const t = app[locale];
  const otherLocale = locale === "ja" ? "en" : "ja";

  if (locale === "ja") {
    return (
      <PolicyFrame locale={locale} title={t.name} summary={t.summary}>
        <div className="shell policyLayout">
          <aside className="policyAside">
            <p>施行日・最終更新日</p>
            <strong>{updatedDateJa}</strong>
            <Link href={`/${otherLocale}/privacy/${app.slug}`}>Read in English →</Link>
          </aside>
          <article className="policyBody">
            {(app.health || app.noticeJa) && (
              <p className="notice">
                {app.noticeJa ??
                  "本アプリは記録・情報整理を目的とし、獣医師による診断、治療、医療上の助言を提供するものではありません。健康上の懸念がある場合は、獣医師にご相談ください。"}
              </p>
            )}
            <section>
              <h2>1. 基本方針</h2>
              <p>
                Dustline Apps（以下「開発者」）は、{t.name}（以下「本アプリ」）で扱う情報を必要最小限とし、ユーザーが入力した記録を原則としてユーザーの端末内に保存します。本アプリの利用にアカウント登録は不要です。
              </p>
            </section>
            <section>
              <h2>2. 本アプリが扱う情報</h2>
              {app.slug === "noise-diary" && (
                <ul>
                  <li>マイクを使用して取得する周囲の音量レベル</li>
                  <li>ユーザーが入力する騒音記録、メモ、日時など</li>
                  <li>測定中の音声そのものは録音、保存、送信しません。</li>
                </ul>
              )}
              {app.slug === "garden-diary" && (
                <ul>
                  <li>作物、植え付け、生育、収穫、作業、メモなどの菜園記録</li>
                  <li>ユーザーが端末の写真選択機能から選んだ写真</li>
                </ul>
              )}
              {app.slug === "pet-health-care" && (
                <ul>
                  <li>ペットの基本情報、体重、健康状態、投薬、ワクチン、通院、ケア予定など</li>
                  <li>ユーザーが選択した写真、動画、書類</li>
                  <li>端末の生体認証・画面ロック機能を利用するアプリロック設定（認証情報そのものを本アプリが取得することはありません）</li>
                </ul>
              )}
              {app.slug === "aquarium-log" && (
                <ul>
                  <li>水槽情報、水質測定値、生体の観察、飼育・メンテナンス記録、メモ、リマインダー</li>
                  <li>ユーザーが選択した写真やPDF資料</li>
                </ul>
              )}
              {app.slug === "bee-logbook" && (
                <ul>
                  <li>養蜂場、巣箱、点検、タスク、メモ、リマインダー</li>
                  <li>ユーザーが選択した写真やPDF資料</li>
                </ul>
              )}
              {app.slug === "sewing-stash" && (
                <ul>
                  <li>布の在庫、制作物、買い物リスト、型紙、メモ</li>
                  <li>ユーザーが選択した写真やPDF資料</li>
                </ul>
              )}
              <p>これらの記録は端末内に保存され、開発者が運営するサーバーへ送信されません。</p>
            </section>
            <section>
              <h2>3. 第三者サービス</h2>
              {app.ads ? (
                <>
                  <p>
                    本アプリは、広告表示と同意管理のためGoogle Mobile Ads SDK（AdMob）およびGoogle User Messaging Platform（UMP）を使用します。これらのサービスは、広告・マーケティング、分析、不正防止、セキュリティ、法令遵守のため、IPアドレスから推定されるおおよその位置情報、アプリ操作、診断情報、端末IDその他の識別子を自動的に収集または共有する場合があります。通信中のデータは暗号化されます。
                  </p>
                  <p>
                    対象地域ではUMP画面から同意やプライバシー設定を選択できます。プレミアム購入後は広告を表示しません。
                  </p>
                </>
              ) : (
                <p>本アプリは広告SDK、第三者分析SDK、開発者が運営するクラウドサービスを使用しません。</p>
              )}
              <p>
                買い切りプレミアムの購入処理にはGoogle Play Billingを使用します。支払い情報はGoogleが処理し、本アプリや開発者は完全な決済情報を取得しません。
              </p>
            </section>
            <section>
              <h2>4. 共有・エクスポート</h2>
              <p>
                ユーザーがエクスポートまたは共有操作を実行した場合に限り、選択した情報がOSの共有機能を通じてユーザー指定先へ渡されます。保存先や共有先での取り扱いは、当該サービスの方針に従います。
              </p>
            </section>
            <section>
              <h2>5. 保存期間と削除</h2>
              <p>
                端末内データは、ユーザーが本アプリ内で削除するか、本アプリをアンインストールするまで保持されます。エクスポート済みのファイルや共有先の複製は、各保存先でユーザーが削除する必要があります。Googleが処理する広告・購入関連データにはGoogleの保存方針が適用されます。
              </p>
            </section>
            <section>
              <h2>6. 子どものプライバシー</h2>
              <p>本アプリは13歳未満の子どもを対象としておらず、開発者が13歳未満の個人情報を意図的に収集することはありません。</p>
            </section>
            <section>
              <h2>7. セキュリティ</h2>
              <p>
                本アプリは端末内保存を中心とし、第三者サービスとの通信には暗号化された接続を使用します。ただし、電子的な保存や通信の完全な安全性を保証することはできません。
              </p>
            </section>
            <section>
              <h2>8. ポリシーの変更</h2>
              <p>機能、法令、第三者サービスの変更に応じて本ポリシーを更新する場合があります。重要な変更は本ページの更新日を変更してお知らせします。</p>
            </section>
            <section>
              <h2>9. お問い合わせ</h2>
              <p>プライバシーまたは本アプリに関するお問い合わせは、<a href="mailto:support@dustline.jp">support@dustline.jp</a> へご連絡ください。</p>
            </section>
          </article>
        </div>
      </PolicyFrame>
    );
  }

  return (
    <PolicyFrame locale={locale} title={t.name} summary={t.summary}>
      <div className="shell policyLayout">
        <aside className="policyAside">
          <p>Effective and last updated</p>
          <strong>{updatedDate}</strong>
          <Link href={`/${otherLocale}/privacy/${app.slug}`}>日本語で読む →</Link>
        </aside>
        <article className="policyBody">
          {(app.health || app.noticeEn) && (
            <p className="notice">
              {app.noticeEn ??
                "This app is a record-keeping and organization tool. It does not provide veterinary diagnosis, treatment, or medical advice. Consult a licensed veterinarian about health concerns."}
            </p>
          )}
          <section>
            <h2>1. Our approach</h2>
            <p>
              Dustline Apps (“we,” “us,” or the “developer”) limits the information handled by {t.name} (“the app”) to what its features need. Records you enter are generally stored locally on your device. No account is required.
            </p>
          </section>
          <section>
            <h2>2. Information handled by the app</h2>
            {app.slug === "noise-diary" && (
              <ul>
                <li>Surrounding sound-level measurements obtained using the microphone</li>
                <li>Noise records, notes, dates, and other details you enter</li>
                <li>The app does not record, store, or transmit raw audio.</li>
              </ul>
            )}
            {app.slug === "garden-diary" && (
              <ul>
                <li>Planting, growth, harvest, task, and garden notes you enter</li>
                <li>Photos you select using your device&apos;s photo picker</li>
              </ul>
            )}
            {app.slug === "pet-health-care" && (
              <ul>
                <li>Pet profile, weight, health, medication, vaccine, veterinary visit, and care records you enter</li>
                <li>Photos, videos, and documents you choose</li>
                <li>App-lock settings that use device authentication; the app does not receive or store your biometric credentials</li>
              </ul>
            )}
            {app.slug === "aquarium-log" && (
              <ul>
                <li>Tank profiles, water readings, livestock observations, care and maintenance records, notes, and reminders</li>
                <li>Photos and PDF documents you choose</li>
              </ul>
            )}
            {app.slug === "bee-logbook" && (
              <ul>
                <li>Apiaries, hive profiles, inspections, tasks, notes, and reminders</li>
                <li>Photos and PDF documents you choose</li>
              </ul>
            )}
            {app.slug === "sewing-stash" && (
              <ul>
                <li>Fabric inventory, projects, shopping lists, patterns, and notes</li>
                <li>Photos and PDF documents you choose</li>
              </ul>
            )}
            <p>These records stay on your device and are not sent to a server operated by the developer.</p>
          </section>
          <section>
            <h2>3. Third-party services</h2>
            {app.ads ? (
              <>
                <p>
                  The app uses Google Mobile Ads SDK (AdMob) and Google User Messaging Platform (UMP) for advertising and consent management. These services may automatically collect or share approximate location inferred from IP address, app interactions, diagnostics, device identifiers, and other identifiers for advertising or marketing, analytics, fraud prevention, security, and compliance. Data is encrypted in transit.
                </p>
                <p>
                  Where required, UMP lets you make consent and privacy choices. Ads are not shown after the lifetime Premium upgrade is active.
                </p>
              </>
            ) : (
              <p>The app does not use an advertising SDK, third-party analytics SDK, or developer-operated cloud service.</p>
            )}
            <p>
              The optional lifetime Premium purchase is processed by Google Play Billing. Google processes payment information; the app and developer do not receive your complete payment details.
            </p>
          </section>
          <section>
            <h2>4. Sharing and export</h2>
            <p>
              Only when you start an export or share action does selected information pass through the operating system&apos;s share interface to a destination you choose. The destination&apos;s own policy governs its copy.
            </p>
          </section>
          <section>
            <h2>5. Retention and deletion</h2>
            <p>
              Local data remains until you delete it in the app or uninstall the app. You must separately delete exported files or copies held by a sharing destination. Google&apos;s retention policies apply to advertising and purchase data it processes.
            </p>
          </section>
          <section>
            <h2>6. Children&apos;s privacy</h2>
            <p>The app is not directed to children under 13, and the developer does not knowingly collect personal information from children under 13.</p>
          </section>
          <section>
            <h2>7. Security</h2>
            <p>
              The app is designed around local storage, and third-party service connections use encryption in transit. No electronic storage or transmission method can be guaranteed completely secure.
            </p>
          </section>
          <section>
            <h2>8. Changes to this policy</h2>
            <p>We may update this policy when features, law, or third-party services change. Material changes will be indicated by updating the date on this page.</p>
          </section>
          <section>
            <h2>9. Contact</h2>
            <p>For privacy or app questions, email <a href="mailto:support@dustline.jp">support@dustline.jp</a>.</p>
          </section>
        </article>
      </div>
    </PolicyFrame>
  );
}
