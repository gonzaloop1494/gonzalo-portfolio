"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  BookOpenText,
  BrainCircuit,
  Code2,
  Download,
  FileText,
  GraduationCap,
  Network,
  Radio,
} from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage, useLocalizedDocument } from "@/components/language-provider";
import { tfgCopy } from "@/lib/tfg-copy";

const focusIcons = [Network, Radio, BrainCircuit] as const;

export function TfgPage() {
  const { locale } = useLanguage();
  const copy = tfgCopy[locale];
  useLocalizedDocument(copy.metadata.title, copy.metadata.description);

  return (
    <main className="tfg-page">
      <a className="skip-link" href="#pildora">{copy.nav.skip}</a>

      <header className="practice-header">
        <div className="practice-header-inner">
          <Link className="brand-lockup" href="/" aria-label={copy.nav.brand}>
            <span className="wordmark" aria-hidden="true">GP<span>.</span></span>
            <span className="header-signature" aria-hidden="true">GONZALO PACHECO AGREDANO</span>
          </Link>
          <nav className="practice-nav" aria-label={copy.nav.label}>
            <a href="#pildora">{copy.nav.overview}</a>
            <a href="#bibliografia">{copy.nav.bibliography}</a>
            <LanguageSwitcher />
            <Link className="practice-back-link" href="/#trayectoria">
              <ArrowLeft size={16} /> {copy.nav.portfolio}
            </Link>
          </nav>
        </div>
      </header>

      <section className="tfg-hero" aria-labelledby="tfg-title">
        <div className="tfg-hero-copy">
          <p className="eyebrow"><span /> {copy.hero.eyebrow}</p>
          <h1 id="tfg-title">{copy.hero.titleBefore} <em>{copy.hero.titleEmphasis}</em></h1>
          <p>{copy.hero.description}</p>
          <div className="practice-hero-actions">
            <a className="button button-primary" href="#pildora">
              {copy.hero.explore} <ArrowDownRight size={17} />
            </a>
            <a className="button button-secondary" href="#bibliografia">
              {copy.hero.viewBibliography} <BookOpenText size={17} />
            </a>
          </div>
        </div>

        <aside className="tfg-hero-aside" aria-label={copy.hero.detailsLabel}>
          <div className="tfg-hero-image-frame">
            <Image
              className="tfg-hero-image"
              src="/tfg-6g-ris.png"
              alt={copy.hero.imageAlt}
              fill
              priority
              sizes="(max-width: 880px) 88vw, 33vw"
            />
          </div>
          <dl className="tfg-stat-list">
            <div>
              <dt><GraduationCap size={18} /> {copy.hero.tutor}</dt>
              <dd>Alejandro de la Fuente Iglesias</dd>
            </div>
            <div>
              <dt><Network size={18} /> {copy.hero.researchLine}</dt>
              <dd>{copy.hero.researchLineValue}</dd>
            </div>
            <div>
              <dt><BrainCircuit size={18} /> {copy.hero.status}</dt>
              <dd>{copy.hero.statusValue}</dd>
            </div>
          </dl>
        </aside>
      </section>

      <div id="pildora" className="tfg-content">
        <section className="tfg-section" aria-labelledby="contexto-title">
          <div className="practice-section-heading">
            <p className="section-marker"><span>01</span> {copy.introduction.marker}</p>
            <h2 id="contexto-title">{copy.introduction.headingBefore} <em>{copy.introduction.headingEmphasis}</em></h2>
          </div>
          <div className="tfg-intro-layout">
            <article className="practice-entry">
              <p className="practice-entry-label">{copy.introduction.entry}</p>
              <h3>{copy.introduction.title}</h3>
              {copy.introduction.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </article>
            <aside className="tfg-research-note">
              <BrainCircuit size={27} strokeWidth={1.5} aria-hidden="true" />
              <p className="practice-entry-label">{copy.introduction.hypothesis}</p>
              <h3>{copy.introduction.hypothesisTitle}</h3>
              <p>{copy.introduction.hypothesisText}</p>
              <p className="tfg-source-line"><FileText size={16} /> {copy.introduction.source}</p>
            </aside>
          </div>
        </section>

        <section className="tfg-section tfg-focus-section" aria-labelledby="focus-title">
          <div className="practice-section-heading">
            <p className="section-marker"><span>02</span> {copy.focus.marker}</p>
            <h2 id="focus-title">{copy.focus.headingBefore} <em>{copy.focus.headingEmphasis}</em></h2>
          </div>
          <div className="tfg-focus-grid" aria-label={copy.focus.label}>
            {copy.focus.items.map(({ title, description }, index) => {
              const Icon = focusIcons[index] ?? Network;
              return (
                <article className="tfg-focus-card" key={title}>
                  <div className="tfg-focus-card-top">
                    <span>0{index + 1}</span>
                    <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="tfg-section" aria-labelledby="roadmap-title">
          <div className="practice-section-heading">
            <p className="section-marker"><span>03</span> {copy.roadmap.marker}</p>
            <h2 id="roadmap-title">{copy.roadmap.headingBefore} <em>{copy.roadmap.headingEmphasis}</em></h2>
          </div>
          <div className="tfg-roadmap-layout">
            <ol className="practice-timeline">
              {copy.roadmap.items.map(({ date, title, description }, index) => (
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
            <aside className="tfg-matlab-card">
              <Code2 size={25} strokeWidth={1.5} aria-hidden="true" />
              <p className="practice-entry-label">{copy.roadmap.material}</p>
              <h3>{copy.roadmap.materialTitle}</h3>
              <p>{copy.roadmap.materialText}</p>
            </aside>
          </div>
        </section>

        <section id="bibliografia" className="tfg-section tfg-bibliography-section" aria-labelledby="bibliography-title">
          <div className="practice-section-heading">
            <p className="section-marker"><span>04</span> {copy.bibliography.marker}</p>
            <h2 id="bibliography-title">{copy.bibliography.headingBefore} <em>{copy.bibliography.headingEmphasis}</em></h2>
          </div>
          <p className="tfg-bibliography-intro">{copy.bibliography.intro}</p>
          <div className="tfg-bibliography-grid">
            {copy.bibliography.references.map(({ type, title, authors, description, status, pdfHref, codeHref }, index) => (
              <article className="tfg-reference-card" key={title}>
                <div className="tfg-reference-meta">
                  <span>0{index + 1}</span>
                  <p>{type}</p>
                </div>
                <h3>{title}</h3>
                <p className="tfg-reference-authors">{authors}</p>
                <p>{description}</p>
                <div className="tfg-reference-footer">
                  <div className="tfg-reference-actions">
                    <a
                      className="tfg-reference-action"
                      href={pdfHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={copy.bibliography.openPdf + ": " + title}
                    >
                      {copy.bibliography.openPdf} <FileText size={14} aria-hidden="true" />
                    </a>
                    {codeHref ? (
                      <a
                        className="tfg-reference-action"
                        href={codeHref}
                        download
                        aria-label={copy.bibliography.downloadCode + ": " + title}
                      >
                        {copy.bibliography.downloadCode} <Download size={14} aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                  <span className="tfg-reference-status">{status}</span>
                </div>
              </article>
            ))}
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
