# Dustline Apps Privacy

Dustline Apps の公式プライバシーポリシーを1つの GitHub Pages サイトで管理します。

- 公開トップ: https://yuishoukai-ctrl.github.io/dustline-apps-privacy/
- 日本語: `https://yuishoukai-ctrl.github.io/dustline-apps-privacy/ja/privacy/<app-slug>/`
- English: `https://yuishoukai-ctrl.github.io/dustline-apps-privacy/en/privacy/<app-slug>/`
- 問い合わせ: `support@dustline.jp`

## 運用ルール

1. 新しいアプリごとに別の Pages リポジトリや `chatgpt.site` を作らない。
2. `app/app-registry.ts` を、bundle ID、slug、公開URL、問い合わせ先、公開可否、リリース停止理由の唯一の台帳として更新する。公開前またはローカル専用のアプリは、必ず明示的な blocker を持たせる。
3. `app/site-content.ts` に日英の名称、概要、SDK・課金・共有などの実態を追加する。登録済みアプリのslug・名称は台帳と一致しなければなりません。
4. `app/[locale]/privacy/[app]/page.tsx` にアプリ固有の取扱情報と削除方法を追加する。
5. `tests/rendered-html.test.mjs` と `tests/registry-contract.test.mjs` で、公開済みの日英ページ、問い合わせ先、URL、blocker を検証する。
6. ローカルでは export とテストだけを実施する。デプロイ、公開、またはストアURLの更新はこの手順に含めない。
7. 公開を別途承認した後に限り、公開URLが HTTPS で取得できることを確認してからストア情報を更新する。

## ローカル検証

```powershell
npm ci
npm test
```

`npm test` は静的export済みページと registry contract の両方を検証します。公開操作は行いません。

## 現在の追加例

- 今日のミカタ: `/ja/privacy/kyou-no-mikata/`, `/en/privacy/kyou-no-mikata/`
- Moving Checklist: `/ja/privacy/moving-checklist/`, `/en/privacy/moving-checklist/`

アプリの実装、Google Play の Data safety、ストア掲載文、ここに記載する内容は一致させます。
