import Link from 'next/link';

import {
  friendshipFlow,
  groupMessages,
  heroMetrics,
  plazaResidents,
  routeCards,
} from '../lib/site-content';

import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.shell}>
      <section className={`${styles.section} ${styles.heroSection}`}>
        <div className={styles.heroGrid}>
          <div className={styles.copyBlock}>
            <p className={styles.eyebrow}>Bookman / Social Reading Reimagined</p>
            <h1 className={styles.title}>把书，加成你的好友。</h1>
            <p className={styles.subtitle}>
              搜索它们，认识它们，与它们组成群组，开始一场前所未有的阅读社交。
            </p>
            <div className={styles.actions}>
              <Link href="#waitlist" className={styles.primaryAction}>
                立即预约
              </Link>
              <Link href="/plaza" className={styles.secondaryAction}>
                进入人格广场
              </Link>
            </div>
            <ul className={styles.metrics} aria-label="平台核心指标">
              {heroMetrics.map((metric) => (
                <li key={metric.label} className={styles.metricCard}>
                  <span className={styles.metricValue}>{metric.value}</span>
                  <span className={styles.metricLabel}>{metric.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.stage} aria-hidden="true">
            <div className={styles.stageHalo} />
            <div className={styles.stageGrid} />
            {plazaResidents.slice(0, 3).map((resident, index) => (
              <article
                key={resident.title}
                className={`${styles.floatingCard} ${styles[`floatingCard${index + 1}`]}`}
              >
                <span className={styles.cardType}>{resident.archetype}</span>
                <strong className={styles.cardTitle}>{resident.title}</strong>
                <p className={styles.cardLine}>{resident.line}</p>
                <span className={styles.cardPulse}>{resident.pulse}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.featureSection}`}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionEyebrow}>Discover</p>
            <h2 className={styles.sectionTitle}>人格广场</h2>
          </div>
          <div className={styles.sectionLead}>
            <p>
              像在夜色城市里漫游一样逛书。你看到的不是封面列表，而是一群持续发光、彼此连接、
              具有情绪张力的书籍人格。
            </p>
            <Link href="/plaza" className={styles.inlineLink}>
              查看广场入口
            </Link>
          </div>
        </div>

        <div className={styles.residentGrid}>
          {plazaResidents.map((resident) => (
            <article key={resident.title} className={styles.residentCard}>
              <div className={styles.residentMeta}>
                <span>{resident.archetype}</span>
                <span>{resident.mood}</span>
              </div>
              <h3 className={styles.residentTitle}>{resident.title}</h3>
              <p className={styles.residentLine}>{resident.line}</p>
              <div className={styles.residentFooter}>
                <span>{resident.pulse}</span>
                <span className={styles.signalDot} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.featureSection}`}>
        <div className={styles.splitLayout}>
          <div className={styles.sectionHeaderCompact}>
            <p className={styles.sectionEyebrow}>Connect</p>
            <h2 className={styles.sectionTitle}>添加书友</h2>
            <p className={styles.sectionBody}>
              搜索、查看档案、发起连接，把书从收藏对象变成可再次靠近的关系对象。
            </p>
            <Link href="/friends" className={styles.inlineLink}>
              打开书友列表
            </Link>
          </div>

          <div className={styles.flowPanel}>
            <div className={styles.searchPanel}>
              <span className={styles.searchLabel}>人格搜索</span>
              <span className={styles.searchValue}>查找: 温柔 / 孤独 / 哲学夜谈</span>
            </div>
            <div className={styles.flowSteps}>
              {friendshipFlow.map((item) => (
                <article key={item.step} className={styles.flowCard}>
                  <span className={styles.flowStep}>{item.step}</span>
                  <h3 className={styles.flowTitle}>{item.title}</h3>
                  <p className={styles.flowDescription}>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.featureSection}`}>
        <div className={styles.splitLayout}>
          <div className={styles.sectionHeaderCompact}>
            <p className={styles.sectionEyebrow}>Debate</p>
            <h2 className={styles.sectionTitle}>群组夜谈</h2>
            <p className={styles.sectionBody}>
              多本书围绕同一主题进入群聊，不同人格用不同语气发言，让阅读第一次拥有社交现场。
            </p>
            <Link href="/groups" className={styles.inlineLink}>
              进入群组大厅
            </Link>
          </div>

          <div className={styles.chatPanel}>
            <div className={styles.chatHeader}>
              <span>今晚热议: 失序与命运</span>
              <span>3 本书在线</span>
            </div>
            <div className={styles.chatList}>
              {groupMessages.map((message, index) => (
                <article
                  key={message.speaker}
                  className={`${styles.chatBubble} ${index % 2 === 1 ? styles.chatBubbleAlt : ''}`}
                >
                  <div className={styles.chatMeta}>
                    <strong>{message.speaker}</strong>
                    <span>{message.tone}</span>
                  </div>
                  <p>{message.message}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.portalSection}`}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionEyebrow}>Entry Points</p>
            <h2 className={styles.sectionTitle}>未来产品入口</h2>
          </div>
          <p className={styles.sectionLead}>
            官网首页作为产品前门，后续可以直接从这里进入广场、书友列表与群组大厅。
          </p>
        </div>

        <div className={styles.portalGrid}>
          {routeCards.map((route) => (
            <Link key={route.href} href={route.href} className={styles.portalCard}>
              <span className={styles.portalLabel}>{route.href.replace('/', '').toUpperCase()}</span>
              <strong className={styles.portalTitle}>{route.title}</strong>
              <p className={styles.portalDescription}>{route.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="waitlist" className={`${styles.section} ${styles.waitlistSection}`}>
        <div className={styles.waitlistCard}>
          <p className={styles.sectionEyebrow}>Waitlist</p>
          <h2 className={styles.waitlistTitle}>阅读第一次从单向翻阅，变成双向关系。</h2>
          <p className={styles.waitlistCopy}>
            现在加入预约名单，抢先进入 Bookman 的人格广场，率先添加你的第一批书友。
          </p>
          <div className={styles.waitlistActions}>
            <a href="mailto:hello@bookman.social" className={styles.primaryAction}>
              提交预约意向
            </a>
            <Link href="/groups" className={styles.secondaryAction}>
              先看看夜谈群组
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
