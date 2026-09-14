"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Network,
  Route,
  Workflow,
} from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage, useLocalizedDocument } from "@/components/language-provider";
import { practicesCopy } from "@/lib/practices-copy";

const focusIcons = [Network, Workflow, Route, FileText] as const;
const stageIcons = [FileText, Workflow, CheckCircle2] as const;

export function PracticesPage() {
  const { locale } = useLanguage();
  const copy = practicesCopy[locale];
  useLocalizedDocument(copy.metadata.title, copy.metadata.description);

  return (
    <main className="practice-page">
      <a className="skip-link" href="#pildora">{copy.nav.skip}</a>

      <header className="practice-header">
        <div className="practice-header-inner">
          <Link className="brand-lockup" href="/" aria-label={copy.nav.brand}>
            <span className="wordmark" aria-hidden="true">GP<span>.</span></span>
            <span className="header-signature" aria-hidden="true">GONZALO PACHECO AGREDANO</span>
          </Link>
          <nav className="practice-nav" aria-label={copy.nav.label}>
            <a href="#pildora">{copy.nav.overview}</a>
            <LanguageSwitcher />
            <Link className="practice-back-link" href="/#trayectoria">
              <ArrowLeft size={16} /> {copy.nav.portfolio}
            </Link>
          </nav>
        </div>
      </header>

      <section className="practice-hero" aria-labelledby="practicas-title">
        <div className="practice-hero-copy">
          <p className="eyebrow"><span /> {copy.hero.eyebrow}</p>
          <h1 id="practicas-title">{copy.hero.headingBefore} <em>{copy.hero.headingEmphasis}</em></h1>
          <p>{copy.hero.description}</p>
          <div className="practice-hero-actions">
            <a className="button button-primary" href="#pildora">
              {copy.hero.explore} <ArrowDownRight size={17} />
            </a>
            <Link className="button button-secondary" href="/#trayectoria">
              {copy.hero.returnToPortfolio} <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        <aside className="practice-hero-aside" aria-label={copy.hero.detailsLabel}>
          <div className="practice-logo-panel">
            <Image
              src="/ntt-data-practicas.png"
              alt={copy.hero.logoAlt}
              width={617}
              height={324}
              priority
            />
          </div>
          <dl className="practice-stat-list">
            <div>
              <dt><CalendarDays size={18} /> {copy.hero.periodLabel}</dt>
              <dd>{copy.hero.periodValue}</dd>
            </div>
            <div>
              <dt><Clock3 size={18} /> {copy.hero.dedicationLabel}</dt>
              <dd>{copy.hero.dedicationValue}</dd>
            </div>
          </dl>
        </aside>
      </section>

      <div id="pildora" className="practice-content">
        <section className="practice-section practice-summary" aria-labelledby="contexto-title">
          <div className="practice-section-heading">
            <p className="section-marker"><span>01</span> {copy.context.marker}</p>
            <h2 id="contexto-title">{copy.context.headingBefore} <em>{copy.context.headingEmphasis}</em></h2>
          </div>
          <div className="practice-summary-layout">
            <article className="practice-entry">
              <p className="practice-entry-label">{copy.context.entry}</p>
              <h3>{copy.context.title}</h3>
              {copy.context.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </article>
            <div className="practice-focus-list" aria-label={copy.context.focusLabel}>
              {copy.context.items.map(({ title, description }, index) => {
                const Icon = focusIcons[index] ?? Network;
                return (
                  <div key={title}>
                    <span className="practice-focus-index">0{index + 1}</span>
                    <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="practice-section practice-roadmap" aria-labelledby="timeline-title">
          <div className="practice-section-heading">
            <p className="section-marker"><span>02</span> {copy.timeline.marker}</p>
            <h2 id="timeline-title">{copy.timeline.headingBefore} <em>{copy.timeline.headingEmphasis}</em></h2>
          </div>
          <div className="practice-roadmap-layout">
            <ol className="practice-timeline">
              {copy.timeline.items.map(({ date, title, description }, index) => (
                <li key={title}>
                  <span className="practice-timeline-index">0{index + 1}</span>
                  <div>
                    <time>{date}</time>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <aside className="practice-university-card practice-period-card">
              <CalendarDays size={25} strokeWidth={1.5} aria-hidden="true" />
              <p className="practice-entry-label">{copy.period.university}</p>
              <h3>{copy.period.title}</h3>
              <p>{copy.period.description}</p>
              <ol className="practice-period-stages" aria-label={copy.period.stagesLabel}>
                {copy.period.stages.map(({ label, detail }, index) => {
                  const Icon = stageIcons[index] ?? FileText;
                  return (
                    <li key={label}>
                      <Icon size={17} strokeWidth={1.6} aria-hidden="true" />
                      <div>
                        <strong>{label}</strong>
                        <span>{detail}</span>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </aside>
          </div>
        </section>
      </div>

      <footer className="practice-footer">
        <p>© 2026 Gonzalo Pacheco Agredano</p>
        <Link href="/">{copy.footer.portfolio} <ArrowUpRight size={15} /></Link>
      </footer>
    </main>
  );
}
