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
            <strong>{app.updatedDateJa ?? updatedDateJa}</strong>
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
                Dustline Apps（以下「開発者」）は、{t.name}（以下「本アプリ」）で扱う情報を必要最小限とします。{app.slug === "kyou-no-mikata" ? "ユーザーが入力した内容や生成された回答は保存せず、選択した言語設定だけを端末内に保存します。" : "ユーザーが入力した記録は原則としてユーザーの端末内に保存します。"}本アプリの利用にアカウント登録は不要です。
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
              {app.slug === "kyou-no-mikata" && (
                <ul>
                  <li>回答を端末内で生成するため、その場で入力する気持ちや言葉</li>
                  <li>端末内に保存する日本語・英語の言語設定</li>
                  <li>端末の音声合成サービスを使う読み上げ設定（録音やマイクへのアクセスは行いません）</li>
                </ul>
              )}
              {app.slug === "moving-checklist" && (
                <ul>
                  <li>引越し名、予定日、世帯情報、チェック項目、完了状況、メモ</li>
                  <li>ユーザーが明示的に有効化したリマインダーと通知設定</li>
                  <li>言語、広告同意、端末内のプレミアム利用状態などの設定</li>
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
                  <li>ユーザーがカメラで撮影または写真ライブラリから選択した写真</li>
                </ul>
              )}
              {app.slug === "batch-cost" && (
                <ul>
                  <li>材料名、購入量、購入価格、単位などの材料情報</li>
                  <li>レシピ名、出来上がり数、使用量、諸経費、ロス率シナリオなどの原価計算情報</li>
                  <li>言語、通貨、プレミアム利用状態などの設定</li>
                  <li>ユーザーが作成したJSONバックアップおよびCSVファイル</li>
                </ul>
              )}
              {app.slug === "bee-logbook" && (
                <ul>
                  <li>養蜂場、巣箱、点検、タスク、メモ、リマインダー</li>
                  <li>ユーザーがカメラで撮影または写真ライブラリから選択した点検写真</li>
                </ul>
              )}
              {app.slug === "bichiku-checker" && (
                <ul>
                  <li>備蓄品名、数量、購入日、期限、保管場所、メモなどの在庫記録</li>
                  <li>家族構成、必要量、カスタムカテゴリ、言語、端末内のプレミアム利用状態</li>
                  <li>ユーザーが明示的に有効化した期限通知、作成したJSONバックアップおよびPDFレポート</li>
                </ul>
              )}
              {app.slug === "sewing-stash" && (
                <ul>
                  <li>布の在庫、制作物、買い物リスト、型紙、メモ</li>
                  <li>ユーザーが選択した写真やPDF資料</li>
                </ul>
              )}
              {app.slug === "leaselens" && (
                <ul>
                  <li>物件名・住所、部屋、入居時・退去時の状態、メモ、日付などの点検記録</li>
                  <li>ユーザーがカメラまたは写真選択機能から追加した写真</li>
                  <li>ユーザーが作成したPDFレポートおよびJSONバックアップ</li>
                </ul>
              )}
              {app.slug === "rigkeeper" && (
                <ul>
                  <li>RVの名称、走行距離、稼働時間、部品、整備内容、費用、日付などの記録</li>
                  <li>ユーザーが設定した整備期限と、明示的に有効化した端末通知</li>
                  <li>ユーザーが作成したPDF・CSVレポートおよびJSONバックアップ</li>
                </ul>
              )}
              {app.slug === "homeschool-binder" && (
                <ul>
                  <li>保護者が入力する生徒の名前、出席、科目、学習内容、時間、メモなどの教育記録</li>
                  <li>保護者がカメラまたは写真選択機能から追加した作品写真</li>
                  <li>任意のアプリPINを保護するため端末の安全な保存領域に保持するソルト付きハッシュ（PINそのものは保存しません）</li>
                  <li>ユーザーが作成したPDF・CSVレポートおよびJSONバックアップ</li>
                </ul>
              )}
              {app.slug === "trayvault" && (
                <ul>
                  <li>乾燥機、バッチ、トレイ内容、前処理、設定、開始・終了時刻、乾燥確認、重量、評価、メモ</li>
                  <li>保存ロットの数量、包装日、保存場所、使用・廃棄の記録</li>
                  <li>ユーザーが追加した写真、明示的に有効化した通知、作成したJSONバックアップ、PDF・CSVレポート</li>
                </ul>
              )}
              {app.slug === "boothworth" && (
                <ul>
                  <li>商品名、価格、原価、製作時間、商品数、写真などの商品計画</li>
                  <li>イベント名、会場、日付、出店判断、費用、売上、搬入チェック、結果、メモ</li>
                  <li>ユーザーが追加したレシート写真、明示的に有効化した通知、作成したJSONバックアップ、PDF・CSVレポート</li>
                </ul>
              )}
              {app.slug === "roasttrace" && (
                <ul>
                  <li>焙煎機、生豆ロット、在庫、購入情報、焙煎セッション、経過時間、温度、焙煎イベント、重量</li>
                  <li>香り、酸味、甘味、苦味、ボディ、評価、試飲メモ</li>
                  <li>ユーザーが追加した写真、明示的に有効化した通知、作成したJSONバックアップ、PDF・CSVレポート</li>
                </ul>
              )}
              {app.slug === "flockledger" && (
                <ul>
                  <li>鶏群名、個体名・識別ID、品種、状態などの鶏群・個体記録</li>
                  <li>採卵数、飼料使用量、飼料費、その他費用、卵の売上、日付、メモ</li>
                  <li>ユーザーが入力したケア観察記録、明示的に有効化した端末通知、作成したJSONバックアップ</li>
                </ul>
              )}
              {app.slug === "move-markr" && (
                <ul>
                  <li>物件名、部屋名、チェック項目、所見などの検査記録</li>
                  <li>ユーザーが選択した元写真、レポート履歴、書き出し情報</li>
                  <li>書き出した証跡の整合性確認に使うSHA-256ハッシュ</li>
                </ul>
              )}
              {app.slug === "try-clock" && (
                <ul>
                  <li>品名、販売店、価格、購入日、返品期限、状態、メモ</li>
                  <li>ユーザーが選択した写真または書類への参照</li>
                  <li>通知、言語、プレミアム利用状態などの設定</li>
                </ul>
              )}
              {app.slug === "zanurami" && (
                <ul>
                  <li>農園名、区画名、シーズン名と期間</li>
                  <li>作業種別、日時、タイトル、メモ、数量、単位、および修正理由と修正履歴</li>
                  <li>ユーザーがカメラで撮影または写真ライブラリから選択した証跡写真</li>
                  <li>言語、端末内のプレミアム利用状態、ユーザーが作成したバックアップ、CSV、JSON、PDF</li>
                </ul>
              )}
              {app.slug === "tool-life-pocket" && (
                <ul>
                  <li>カッターの名称・種類、ローカル工具ID、任意の機械・作業参照、費用、メモ</li>
                  <li>カッターの使用、点検、再研磨の履歴およびユーザーが入力した観察内容</li>
                  <li>システムのフォトピッカーでユーザーが選択し、点検記録としてアプリ専用ストレージへコピーされる任意の写真</li>
                  <li>ローカル工具IDだけを識別するQRラベル（費用、作業参照、メモその他の記録内容は含みません）</li>
                  <li>言語、表示単位、端末内のプレミアム利用状態、インポートまたはエクスポートするJSONバックアップ、エクスポートするCSVファイル</li>
                </ul>
              )}
              {app.slug === "kyou-no-mikata" ? (
                <p>入力内容と回答は履歴として保存されず、開発者が運営するサーバーへ送信されません。言語設定だけが端末内に保存されます。</p>
              ) : (
                <p>これらの記録は端末内に保存され、開発者が運営するサーバーへ送信されません。</p>
              )}
              {app.slug === "tool-life-pocket" && (
                <>
                  <p>本アプリの主要な記録機能はオフラインで動作します。Dustlineは、カッター、機械、履歴、写真、QRの各記録を収集、共有、分析、同期しません。本アプリは、位置情報、マイク音声、連絡先、バックグラウンドデータを収集しません。</p>
                  <p>カメラ権限は、プレミアムユーザーがローカルQRラベルのスキャンを選択した場合にのみ要求します。点検写真は、ユーザーがシステムのフォトピッカーで明示的に選択したものだけを扱います。</p>
                </>
              )}
              {app.slug === "try-clock" && (
                <p>Androidのバックアップを有効にしている場合、端末設定に従ってアプリのローカルデータがGoogleアカウントへバックアップされる場合があります。</p>
              )}
            </section>
            <section>
              <h2>3. 第三者サービス</h2>
              {app.ads ? (
                <>
                  <p>
                    {app.adsAndroidOnly ? "Android版は、" : "本アプリは、"}広告表示と同意管理のためGoogle Mobile Ads SDK（AdMob）およびGoogle User Messaging Platform（UMP）を使用します。これらのサービスは、広告・マーケティング、分析、不正防止、セキュリティ、法令遵守のため、IPアドレスから推定されるおおよその位置情報、アプリ操作、診断情報、端末IDその他の識別子を自動的に収集または共有する場合があります。通信中のデータは暗号化されます。
                  </p>
                  <p>
                    対象地域ではUMP画面から同意やプライバシー設定を選択できます。{app.adsAndroidOnly ? "iOS版では広告を表示せず、AdMobを起動しません。" : "プレミアム購入後は広告を表示しません。"}
                  </p>
                </>
              ) : (
                <p>本アプリは広告SDK、第三者分析SDK、開発者が運営するクラウドサービスを使用しません。</p>
              )}
              {app.slug === "kyou-no-mikata" && (
                <p>読み上げには端末の音声合成サービスを使用します。その処理は端末設定とサービス提供元の方針に従います。</p>
              )}
              {app.billing !== false && (
                app.slug === "zanurami" ? (
                  <p>
                    任意の買い切りPro購入はAppleのApp Store（StoreKit）が処理します。支払い情報はAppleが処理し、本アプリや開発者は完全な決済情報を取得しません。
                  </p>
                ) : app.googlePlayOnlyBilling ? (
                  <p>
                    任意の買い切りプレミアム購入にはGoogle Play Billingを使用します。本アプリは商品の利用可否、購入状態、ストアが返すローカライズ済み価格をGoogle Playへ問い合わせます。購入と支払い情報はGoogle Playが処理し、本アプリや開発者は完全な決済情報を取得しません。
                  </p>
                ) : (
                  <p>
                    買い切りプレミアムの購入処理には、iOSではAppleのApp Store（StoreKit）、AndroidではGoogle Play Billingを使用します。支払い情報は各ストアが処理し、本アプリや開発者は完全な決済情報を取得しません。
                  </p>
                )
              )}
            </section>
            <section>
              <h2>4. 共有・エクスポート</h2>
              {app.exporting === false ? (
                <p>本アプリには、入力内容や回答を開発者または第三者へエクスポート・共有する機能はありません。</p>
              ) : (
                <p>
                  ユーザーがエクスポートまたは共有操作を実行した場合に限り、選択した情報がOSの共有機能を通じてユーザー指定先へ渡されます。保存先や共有先での取り扱いは、当該サービスの方針に従います。
                </p>
              )}
              {app.slug === "tool-life-pocket" && (
                <p>JSONバックアップのインポート・エクスポートとCSVエクスポートは、ユーザーが操作した場合にのみ実行されます。JSON・CSVのエクスポートには、Google Playの購入トークン、注文ID、プレミアム権利情報を含めません。</p>
              )}
            </section>
            <section>
              <h2>5. 保存期間と削除</h2>
              {app.slug === "kyou-no-mikata" ? (
                <p>入力内容と回答は保存されません。端末内の言語設定は、本アプリをアンインストールするか、Androidの設定からアプリデータを消去すると削除されます。Androidのバックアップ設定が有効な場合は、端末設定に従って言語設定がバックアップされることがあります。</p>
              ) : (
                <p>
                  端末内データは、ユーザーが本アプリ内で削除するか、本アプリをアンインストールするまで保持されます。{(app.slug === "batch-cost" || app.slug === "bee-logbook") && "現在のバージョンでは、アプリ内の記録を一括削除する機能は提供していないため、すべての記録を削除するには本アプリをアンインストールしてください。"}エクスポート済みのファイルや共有先の複製は、各保存先でユーザーが削除する必要があります。{app.slug === "zanurami" ? "Appleが処理する購入関連データには、App Storeの保存方針が適用されます。" : `AppleまたはGoogleが処理する${app.ads ? "広告・購入関連データ" : "購入関連データ"}には、利用したストアの保存方針が適用されます。`}
                </p>
              )}
              {app.slug === "garden-diary" && (
                <p>
                  本アプリの設定画面で「すべての記録を削除」を選択すると、菜園、植物、タスク、記録、収穫、保存写真を端末から削除できます。この操作は元に戻せません。広告・購入関連データはGoogleが処理するため、Googleの保存・削除方針が適用されます。
                </p>
              )}
              {app.slug === "tool-life-pocket" && (
                <p>カッター、機械、履歴、点検写真はアプリ内の削除操作で個別に削除でき、本アプリをアンインストールすると残りのローカルデータが削除されます。アプリ外へ保存したJSON・CSVファイルやQRラベルは、各保存先で別途削除してください。</p>
              )}
            </section>
            <section>
              <h2>6. 子どものプライバシー</h2>
              {app.slug === "homeschool-binder" ? (
                <p>
                  本アプリは保護者または成人の教育者が学習記録を管理するためのもので、子どもが単独で利用することを想定していません。保護者が入力した生徒情報は端末内に保存され、開発者のサーバーへ送信されません。保護者はアプリ内で記録を削除できます。
                </p>
              ) : (
                <p>本アプリは{app.childrenAge ?? 13}歳未満の子どもを対象としておらず、開発者が{app.childrenAge ?? 13}歳未満の個人情報を意図的に収集することはありません。</p>
              )}
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
          <strong>{app.updatedDateEn ?? updatedDate}</strong>
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
              Dustline Apps (“we,” “us,” or the “developer”) limits the information handled by {t.name} (“the app”) to what its features need. {app.slug === "kyou-no-mikata" ? "The app does not save what you enter or the response it generates; only your selected language preference is stored locally on your device." : "Records you enter are generally stored locally on your device."} No account is required.
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
            {app.slug === "kyou-no-mikata" && (
              <ul>
                <li>Feelings or words you enter to generate an on-device response for the current session</li>
                <li>Your Japanese or English language preference, stored locally on your device</li>
                <li>Read-aloud using your device&apos;s text-to-speech service; the app does not record audio or access the microphone</li>
              </ul>
            )}
            {app.slug === "moving-checklist" && (
              <ul>
                <li>Move name, planned date, household details, checklist items, completion status, and notes</li>
                <li>Reminders and notification settings you explicitly enable</li>
                <li>Language, advertising consent, and local Premium entitlement settings</li>
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
                <li>Photos you take with the camera or choose from the photo library</li>
              </ul>
            )}
            {app.slug === "batch-cost" && (
              <ul>
                <li>Ingredient names, package quantities, package prices, units, and related ingredient details</li>
                <li>Recipe names, yields, quantities used, overhead, waste scenarios, and related costing details</li>
                <li>Language, currency, and local Premium entitlement settings</li>
                <li>JSON backups and CSV files you create</li>
              </ul>
            )}
            {app.slug === "bee-logbook" && (
              <ul>
                <li>Apiaries, hive profiles, inspections, tasks, notes, and reminders</li>
                <li>Inspection photos you take with the camera or choose from the photo library</li>
              </ul>
            )}
            {app.slug === "bichiku-checker" && (
              <ul>
                <li>Inventory records you enter, including item name, quantity, purchase date, expiration date, storage location, and notes</li>
                <li>Household profile, calculated targets, custom categories, language, and local Premium entitlement settings</li>
                <li>Expiration notifications you explicitly enable and JSON backups or PDF reports you create</li>
              </ul>
            )}
            {app.slug === "sewing-stash" && (
              <ul>
                <li>Fabric inventory, projects, shopping lists, patterns, and notes</li>
                <li>Photos and PDF documents you choose</li>
              </ul>
            )}
            {app.slug === "leaselens" && (
              <ul>
                <li>Property name or address, rooms, move-in and move-out condition, notes, dates, and other inspection records you enter</li>
                <li>Photos you add using the camera or device photo picker</li>
                <li>PDF reports and JSON backups you create</li>
              </ul>
            )}
            {app.slug === "rigkeeper" && (
              <ul>
                <li>RV name, mileage, engine hours, components, maintenance work, cost, date, and related records you enter</li>
                <li>Maintenance targets and device notifications you explicitly enable</li>
                <li>PDF and CSV reports and JSON backups you create</li>
              </ul>
            )}
            {app.slug === "homeschool-binder" && (
              <ul>
                <li>Student name, attendance, subject, learning activity, duration, notes, and other education records entered by a parent or adult educator</li>
                <li>Work-sample photos added using the camera or device photo picker</li>
                <li>A salted hash kept in secure device storage for an optional app PIN; the PIN itself is not stored</li>
                <li>PDF and CSV reports and JSON backups you create</li>
              </ul>
            )}
            {app.slug === "trayvault" && (
              <ul>
                <li>Dryer, batch, tray contents, preparation, settings, start and end times, dry checks, weights, ratings, and notes you enter</li>
                <li>Pantry-lot quantity, packaging date, storage location, use, and discard records</li>
                <li>Photos you add, notifications you explicitly enable, and JSON backups, PDF reports, or CSV files you create</li>
              </ul>
            )}
            {app.slug === "boothworth" && (
              <ul>
                <li>Product name, price, cost, labor time, quantity, photo, and other product-planning details you enter</li>
                <li>Event name, venue, date, attendance decision, expenses, sales, load-in checklist, results, and notes</li>
                <li>Receipt photos you add, notifications you explicitly enable, and JSON backups, PDF reports, or CSV files you create</li>
              </ul>
            )}
            {app.slug === "roasttrace" && (
              <ul>
                <li>Roaster, green-bean lot, inventory, purchase, roast-session, elapsed-time, temperature, roast-event, and weight records you enter</li>
                <li>Aroma, acidity, sweetness, bitterness, body, rating, and cupping notes you enter</li>
                <li>Photos you add, notifications you explicitly enable, and JSON backups, PDF reports, or CSV files you create</li>
              </ul>
            )}
            {app.slug === "flockledger" && (
              <ul>
                <li>Flock names and bird names or identifiers, breeds, statuses, and related flock and bird records you enter</li>
                <li>Egg counts, feed quantities, feed cost, other expenses, egg sales, dates, and notes you enter</li>
                <li>Care observations you enter, device notifications you explicitly enable, and JSON backups you create</li>
              </ul>
            )}
            {app.slug === "move-markr" && (
              <ul>
                <li>Property and room labels, checklist results, and observations you enter</li>
                <li>Original photos you select, report history, and exported-report metadata</li>
                <li>SHA-256 integrity hashes used to verify exported evidence</li>
              </ul>
            )}
            {app.slug === "try-clock" && (
              <ul>
                <li>Item names, retailers, prices, purchase dates, return deadlines, statuses, and notes</li>
                <li>References to photos or documents you select</li>
                <li>Notification, language, and local Premium entitlement settings</li>
              </ul>
            )}
            {app.slug === "zanurami" && (
              <ul>
                <li>Farm, plot, and season names and season dates</li>
                <li>Field-operation type, date, title, notes, quantity, unit, amendment reason, and revision history</li>
                <li>Evidence photos you take with the camera or choose from the photo library</li>
                <li>Language and local Pro-entitlement settings, plus backups, CSV, JSON, and PDF files you create</li>
              </ul>
            )}
            {app.slug === "tool-life-pocket" && (
              <ul>
                <li>Cutter names and types, local tool IDs, optional machine and job references, costs, and notes</li>
                <li>Cutter-use, inspection, and resharpening history, including observations you enter</li>
                <li>Optional photos you select with the system photo picker and that the app copies into app-private storage for an inspection record</li>
                <li>QR labels that identify only a local tool ID and do not contain costs, job references, notes, or other record contents</li>
                <li>Language, display units, local Premium entitlement settings, JSON backups you import or export, and CSV files you export</li>
              </ul>
            )}
            {app.slug === "kyou-no-mikata" ? (
              <p>Your entries and responses are not saved as history or sent to a server operated by the developer. Only the language preference stays on your device.</p>
            ) : (
              <p>These records stay on your device and are not sent to a server operated by the developer.</p>
            )}
            {app.slug === "tool-life-pocket" && (
              <>
                <p>The app&apos;s core record-keeping features work offline. Dustline does not collect, share, analyze, or sync cutter, machine, history, photo, or QR records. The app does not collect location, microphone audio, contacts, or background data.</p>
                <p>The app requests camera permission only when a Premium user chooses to scan a local QR label. It handles an inspection photo only when you explicitly select it with the system photo picker.</p>
              </>
            )}
            {app.slug === "try-clock" && (
              <p>If Android device backup is enabled, Android may back up the local app database under your Google account settings.</p>
            )}
          </section>
          <section>
            <h2>3. Third-party services</h2>
            {app.ads ? (
              <>
                <p>
                  {app.adsAndroidOnly ? "The Android version uses" : "The app uses"} Google Mobile Ads SDK (AdMob) and Google User Messaging Platform (UMP) for advertising and consent management. These services may automatically collect or share approximate location inferred from IP address, app interactions, diagnostics, device identifiers, and other identifiers for advertising or marketing, analytics, fraud prevention, security, and compliance. Data is encrypted in transit.
                </p>
                <p>
                  Where required, UMP lets you make consent and privacy choices. {app.adsAndroidOnly ? "The iOS version does not show ads or initialize AdMob." : "Ads are not shown after the lifetime Premium upgrade is active."}
                </p>
              </>
            ) : (
              <p>The app does not use an advertising SDK, third-party analytics SDK, or developer-operated cloud service.</p>
            )}
            {app.slug === "kyou-no-mikata" && (
              <p>Read-aloud uses your device&apos;s text-to-speech service. Its processing follows your device settings and the service provider&apos;s policy.</p>
            )}
            {app.billing !== false && (
              app.slug === "zanurami" ? (
                <p>
                  The optional lifetime Pro purchase is processed by Apple&apos;s App Store (StoreKit). Apple processes payment information; the app and developer do not receive your complete payment details.
                </p>
              ) : app.googlePlayOnlyBilling ? (
                <p>
                  Google Play Billing processes the optional lifetime Premium purchase. The app asks Google Play for product availability, purchase state, and the store-supplied localized price. Google Play processes the purchase and payment information; the app and developer do not receive your complete payment details.
                </p>
              ) : (
                <p>
                  The optional lifetime Premium purchase is processed by Apple&apos;s App Store (StoreKit) on iOS or Google Play Billing on Android. The applicable store processes payment information; the app and developer do not receive your complete payment details.
                </p>
              )
            )}
          </section>
          <section>
            <h2>4. Sharing and export</h2>
            {app.exporting === false ? (
              <p>The app has no feature that exports or shares your entries or responses with the developer or another party.</p>
            ) : (
              <p>
                Only when you start an export or share action does selected information pass through the operating system&apos;s share interface to a destination you choose. The destination&apos;s own policy governs its copy.
              </p>
            )}
            {app.slug === "tool-life-pocket" && (
              <p>JSON backup import and export and CSV export occur only when you initiate them. JSON and CSV exports do not include Google Play purchase tokens, order IDs, or Premium entitlement information.</p>
            )}
          </section>
          <section>
            <h2>5. Retention and deletion</h2>
            {app.slug === "kyou-no-mikata" ? (
              <p>Entries and responses are not retained. Uninstall the app or clear its app data in Android settings to delete the local language preference. Android may back up that preference when device backup is enabled.</p>
            ) : (
              <p>
                Local data remains until you delete it in the app or uninstall the app. {(app.slug === "batch-cost" || app.slug === "bee-logbook") && "The current version does not include an in-app bulk-delete function, so uninstall the app to remove all of its records."} You must separately delete exported files or copies held by a sharing destination. {app.slug === "zanurami" ? "Apple's App Store retention policy applies to purchase data processed by Apple." : `Apple's or Google's retention policies apply to ${app.ads ? "advertising and purchase data" : "purchase data"} processed by the store you use.`}
              </p>
            )}
            {app.slug === "garden-diary" && (
              <p>
                In the app, open Settings and choose Delete all records to remove gardens, plants, tasks, logs, harvests, and saved photos from your device. This cannot be undone. Google processes advertising and purchase data, so Google&apos;s retention and deletion policies apply to that data.
              </p>
            )}
            {app.slug === "tool-life-pocket" && (
              <p>You can delete cutter, machine, history, and inspection-photo records individually in the app. Uninstalling the app deletes remaining local app data. Delete JSON or CSV files and QR labels saved outside the app separately at their destinations.</p>
            )}
          </section>
          <section>
            <h2>6. Children&apos;s privacy</h2>
            {app.slug === "homeschool-binder" ? (
              <p>
                The app is intended for a parent, guardian, or adult educator to manage learning records, not for a child to use independently. Student information entered by the adult stays on the device and is not sent to a developer-operated server. The adult can delete records in the app.
              </p>
            ) : (
              <p>The app is not directed to children under {app.childrenAge ?? 13}, and the developer does not knowingly collect personal information from children under {app.childrenAge ?? 13}.</p>
            )}
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
