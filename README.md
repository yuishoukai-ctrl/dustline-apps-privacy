# Dustline Apps Privacy

Dustline Apps の公式プライバシーポリシーを1つの GitHub Pages サイトで管理します。

- 公開トップ: https://yuishoukai-ctrl.github.io/dustline-apps-privacy/
- 日本語: `https://yuishoukai-ctrl.github.io/dustline-apps-privacy/ja/privacy/<app-slug>/`
- English: `https://yuishoukai-ctrl.github.io/dustline-apps-privacy/en/privacy/<app-slug>/`
- 問い合わせ: `support@dustline.jp`

## 運用ルール

1. 新しいアプリごとに別の Pages リポジトリや `chatgpt.site` を作らない。
2. `app/site-content.ts` に日英の名称、概要、SDK・課金・共有などの実態を追加する。
3. `app/[locale]/privacy/[app]/page.tsx` にアプリ固有の取扱情報と削除方法を追加する。
4. `tests/rendered-html.test.mjs` で日英ページ、SDK、課金、保存、削除、免責事項を検証する。
5. `npm test` を通して `main` へ push する。GitHub Actions が GitHub Pages を更新する。
6. 公開URLが HTTPS で取得できることを確認してから、Google Play Console と App Company に同じURLを登録する。

## ローカル検証

```powershell
npm ci
npm test
```

## 現在の追加例

- 今日のミカタ: `/ja/privacy/kyou-no-mikata/`, `/en/privacy/kyou-no-mikata/`
- Moving Checklist: `/ja/privacy/moving-checklist/`, `/en/privacy/moving-checklist/`

アプリの実装、Google Play の Data safety、ストア掲載文、ここに記載する内容は一致させます。
