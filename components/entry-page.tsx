import Link from 'next/link';

import type { EntryPageContent } from '../lib/site-content';

import styles from './entry-page.module.css';

type EntryPageProps = EntryPageContent;

export function EntryPage({
  title,
  eyebrow,
  description,
  highlights,
  sceneTitle,
  sceneCopy,
}: EntryPageProps) {
  return (
    <main className={styles.shell}>
      <div className={styles.backdrop} aria-hidden="true" />
      <section className={styles.hero}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <Link href="/" className={styles.primaryAction}>
            返回首页
          </Link>
          <Link href="#scene" className={styles.secondaryAction}>
            查看场景预告
          </Link>
        </div>
        <ul className={styles.tags} aria-label={`${title}能力标签`}>
          {highlights.map((highlight) => (
            <li key={highlight} className={styles.tag}>
              {highlight}
            </li>
          ))}
        </ul>
      </section>

      <section id="scene" className={styles.sceneCard}>
        <div>
          <p className={styles.sceneEyebrow}>Scene Preview</p>
          <h2 className={styles.sceneTitle}>{sceneTitle}</h2>
          <p className={styles.sceneCopy}>{sceneCopy}</p>
        </div>
        <div className={styles.sceneVisual} aria-hidden="true">
          <span className={styles.visualRing} />
          <span className={styles.visualRingAlt} />
          <span className={styles.visualCore} />
        </div>
      </section>
    </main>
  );
}
