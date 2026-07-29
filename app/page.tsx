import Link from "next/link";
import { apps } from "./site-content";

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav className="nav shell" aria-label="Primary navigation">
          <Link className="brand" href="/">
            <span className="brandMark" aria-hidden="true">D</span>
            <span>Dustline Apps</span>
          </Link>
          <div className="navLinks">
            <Link href="/en/support">Support</Link>
            <Link href="/ja/support">日本語</Link>
          </div>
        </nav>

        <div className="shell heroContent">
          <p className="eyebrow">Privacy &amp; Support</p>
          <h1>Small tools. Clear privacy.</h1>
          <p className="lede">
            Official privacy policies and support information for independent
            apps published by Dustline Apps.
          </p>
          <div className="heroActions">
            <Link className="button primary" href="/en/support">Get support</Link>
            <Link className="button secondary" href="/ja/support">日本語で見る</Link>
          </div>
        </div>
      </header>

      <section className="section shell" aria-labelledby="apps-heading">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">Our apps</p>
            <h2 id="apps-heading">Choose an app</h2>
          </div>
          <p>Each policy explains what the app stores and what third-party services receive.</p>
        </div>

        <div className="appGrid">
          {apps.map((app) => (
            <article className={`appCard accent-${app.accent}`} key={app.slug}>
              <div className="appIcon" aria-hidden="true">{app.icon}</div>
              <p className="appType">{app.category}</p>
              <h3>{app.en.name}</h3>
              <p>{app.en.summary}</p>
              <div className="cardLinks">
                <Link href={`/en/privacy/${app.slug}`}>Privacy policy <span>→</span></Link>
                <Link href={`/ja/privacy/${app.slug}`}>日本語 <span>→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="shell footerInner">
          <div>
            <strong>Dustline Apps</strong>
            <p>Independent mobile apps designed with local-first data storage.</p>
          </div>
          <div className="footerLinks">
            <Link href="/en/support">Support</Link>
            <a href="mailto:support@dustline.jp">support@dustline.jp</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
