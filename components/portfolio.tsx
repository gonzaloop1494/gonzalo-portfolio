"use client";

import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  BookOpen,
  BriefcaseBusiness,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Code2,
  ExternalLink,
  FileText,
  Github,
  GitFork,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Maximize2,
  Menu,
  Network,
  Radio,
  Satellite,
  X,
  Youtube,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ProjectFilter } from "@/lib/portfolio-copy";
import { portfolioCopy } from "@/lib/portfolio-copy";
import { ContactForm } from "./contact-form";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage, useLocalizedDocument } from "./language-provider";
import { NetworkMotion } from "./network-motion";

const email = "gonzalo.pachecoagredano@gmail.com";
const github = "https://github.com/gonzaloop1494";
const linkedin = "https://www.linkedin.com/in/gonzalo-pacheco-agredano-5a9b482b7/";
const cvFile = "/cv-gonzalo-pacheco-agredano.pdf";

const navigationIds = ["perfil", "proyectos", "trayectoria", "certificaciones", "contacto"] as const;
const projectFilterIds: ProjectFilter[] = ["all", "telecom", "software", "data"];
const gameRankVideoIds = ["required", "optional"] as const;
type GameRankVideoId = (typeof gameRankVideoIds)[number];
type ProjectDefinition = {
  type: ProjectFilter;
  href: string;
  icon: LucideIcon;
  image: string;
  videos?: Record<GameRankVideoId, string>;
  poster?: string;
};

const projectDefinitions: ProjectDefinition[] = [
  {
    type: "telecom",
    href: "https://github.com/gonzaloop1494/tdma-network-simulation",
    icon: BarChart3,
    image: "/project-tdma-network.png",
  },
  {
    type: "software",
    href: "https://github.com/gonzaloop1494/gamerank-django",
    icon: Code2,
    image: "/project-gamerank.png",
    videos: {
      required: "https://www.youtube.com/watch?v=XPUFbTxNHzo",
      optional: "https://www.youtube.com/watch?v=2PUCQ10D3Gk",
    },
  },
  {
    type: "software",
    href: "https://github.com/gonzaloop1494/groupchat-rust",
    icon: Network,
    image: "/project-groupchat-tcp.png",
  },
  {
    type: "telecom",
    href: "https://github.com/gonzaloop1494/comunicaciones_satelitales_y_radionavegacion",
    icon: Radio,
    image: "/project-satcom-radionavigation.png",
  },
  {
    type: "data",
    href: "https://github.com/gonzaloop1494/facial-recognition-with-PCA",
    icon: BrainCircuit,
    image: "/project-pca-face-recognition.png",
  },
  {
    type: "telecom",
    href: "https://github.com/gonzaloop1494/energy-as-a-service-madrid",
    icon: BriefcaseBusiness,
    image: "/project-energy-as-a-service.png",
    poster: "/energy-as-a-service-poster.pdf",
  },
];

const skillDefinitions = [
  { icon: Radio, image: "/skills-telecom.png" },
  { icon: Code2, image: "/skills-software-data.png" },
  { icon: BarChart3, image: "/skills-analysis.png" },
] satisfies Array<{ icon: LucideIcon; image: string }>;

const interestIcons = [Radio, CircleCheck, Network, BarChart3, BrainCircuit, Satellite, Code2] as const;

const formationPhotoSources = [
  { src: "/formacion/xirio-cobertura.jpeg", orientation: "landscape" },
  { src: "/formacion/antena-laboratorio.jpeg", orientation: "portrait" },
  { src: "/formacion/analizador-vectorial.jpeg", orientation: "portrait" },
  { src: "/formacion/antena-banda-ancha.jpeg", orientation: "portrait" },
  { src: "/formacion/medicion-multimetro.jpeg", orientation: "portrait" },
  { src: "/formacion/osciloscopio.jpeg", orientation: "portrait" },
  { src: "/formacion/simulacion-satelital.jpeg", orientation: "landscape" },
  { src: "/formacion/montaje-laboratorio.jpeg", orientation: "landscape" },
  { src: "/formacion/esquema-django.jpeg", orientation: "landscape" },
  { src: "/formacion/enlace-radio.jpeg", orientation: "portrait" },
] as const;

const specialtyRowIds = ["primary-one", "interlude-one", "primary-two", "interlude-two", "primary-three"];

function FormationCarousel() {
  const { locale } = useLanguage();
  const copy = portfolioCopy[locale].formation;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activePhoto = {
    ...formationPhotoSources[activeIndex],
    ...copy.photos[activeIndex],
  };

  const showPrevious = useCallback(() => {
    setActiveIndex((currentIndex) => (currentIndex + formationPhotoSources.length - 1) % formationPhotoSources.length);
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % formationPhotoSources.length);
  }, []);

  useEffect(() => {
    if (
      isPaused ||
      isLightboxOpen ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const intervalId = window.setInterval(showNext, 3000);
    return () => window.clearInterval(intervalId);
  }, [activeIndex, isLightboxOpen, isPaused, showNext]);

  useEffect(() => {
    if (!isLightboxOpen) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsLightboxOpen(false);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, showNext, showPrevious]);

  return (
    <>
      <div
        className="formation-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label={copy.galleryLabel}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <button
          className="formation-carousel-control formation-carousel-control-previous"
          type="button"
          onClick={showPrevious}
          aria-label={copy.previousPhoto}
          title={copy.previousTitle}
        >
          <ChevronLeft size={20} strokeWidth={2} aria-hidden="true" />
        </button>
        <button
          className="formation-carousel-image-button"
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          aria-label={copy.expandPhoto + " " + (activeIndex + 1) + " " + copy.of + " " + formationPhotoSources.length + ": " + activePhoto.label}
          title={copy.expandTitle}
        >
          <Image
            key={activePhoto.src}
            className="formation-carousel-image"
            src={activePhoto.src}
            alt={activePhoto.alt}
            fill
            sizes="(max-width: 880px) calc(100vw - 2.6rem), 30vw"
          />
          <span className="formation-carousel-zoom" aria-hidden="true"><Maximize2 size={17} strokeWidth={1.8} /></span>
        </button>
        <button
          className="formation-carousel-control formation-carousel-control-next"
          type="button"
          onClick={showNext}
          aria-label={copy.nextPhoto}
          title={copy.nextTitle}
        >
          <ChevronRight size={20} strokeWidth={2} aria-hidden="true" />
        </button>
        <div className="formation-carousel-caption" aria-hidden="true">
          <span>{activePhoto.label}</span>
          <span>{String(activeIndex + 1).padStart(2, "0")} / {String(formationPhotoSources.length).padStart(2, "0")}</span>
        </div>
      </div>

      {isLightboxOpen && (
        <div
          className="formation-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={copy.enlargedPhoto + ": " + activePhoto.label}
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="formation-lightbox-dialog" onClick={(event) => event.stopPropagation()}>
            <div className="formation-lightbox-toolbar">
              <span>{activePhoto.label}</span>
              <button
                ref={closeButtonRef}
                className="formation-lightbox-close"
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                aria-label={copy.closePhoto}
                title={copy.closeTitle}
              >
                <X size={20} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
            <div className="formation-lightbox-stage">
              <button
                className="formation-lightbox-control"
                type="button"
                onClick={showPrevious}
                aria-label={copy.previousPhoto}
                title={copy.previousTitle}
              >
                <ChevronLeft size={24} strokeWidth={2} aria-hidden="true" />
              </button>
              <div className={"formation-lightbox-media is-" + activePhoto.orientation}>
                <Image
                  key={"lightbox-" + activePhoto.src}
                  className="formation-lightbox-image"
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  fill
                  sizes="(max-width: 700px) calc(100vw - 7rem), 980px"
                />
              </div>
              <button
                className="formation-lightbox-control"
                type="button"
                onClick={showNext}
                aria-label={copy.nextPhoto}
                title={copy.nextTitle}
              >
                <ChevronRight size={24} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
            <p>{activeIndex + 1} {copy.of} {formationPhotoSources.length}</p>
          </div>
        </div>
      )}
    </>
  );
}

export function Portfolio() {
  const { locale } = useLanguage();
  const copy = portfolioCopy[locale];
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const cursorRef = useRef<HTMLDivElement>(null);

  useLocalizedDocument(copy.metadata.title, copy.metadata.description);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  useEffect(() => {
    const markers = Array.from(document.querySelectorAll<HTMLElement>("[data-section-marker]"));
    const contentBlocks = Array.from(document.querySelectorAll<HTMLElement>(".reveal")).filter(
      (block) => !block.classList.contains("is-visible"),
    );
    const scrollItems = [...markers, ...contentBlocks];
    if (!scrollItems.length) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      scrollItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    scrollItems.forEach((item) => item.classList.add("is-observed"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    scrollItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    document.body.classList.add("cursor-light-active");

    const moveCursor = (event: PointerEvent) => {
      const textTarget = event.target instanceof Element && Boolean(
        event.target.closest("input, textarea, [contenteditable='true']"),
      );

      document.body.classList.toggle("cursor-text-active", textTarget);
      cursor.style.transform = "translate3d(" + (event.clientX - 2) + "px, " + (event.clientY - 2) + "px, 0)";
      cursor.classList.add("is-visible");
    };
    const hideCursor = () => {
      cursor.classList.remove("is-visible");
      document.body.classList.remove("cursor-text-active");
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    document.documentElement.addEventListener("pointerleave", hideCursor);

    return () => {
      document.body.classList.remove("cursor-light-active");
      document.body.classList.remove("cursor-text-active");
      window.removeEventListener("pointermove", moveCursor);
      document.documentElement.removeEventListener("pointerleave", hideCursor);
    };
  }, []);

  const visibleProjectIndexes = useMemo(
    () =>
      projectDefinitions.flatMap((project, index) => (
        filter === "all" || project.type === filter ? [index] : []
      )),
    [filter],
  );

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main>
      <a className="skip-link" href="#contenido">
        {copy.nav.skip}
      </a>
      <div className="progress" aria-hidden="true" style={{ transform: "scaleX(" + (progress / 100) + ")" }} />
      <div ref={cursorRef} className="cursor-light" aria-hidden="true">
        <svg viewBox="0 0 28 34" focusable="false">
          <path d="M2.5 2.5v24.7l6.6-5.7 4.9 10.3 5.1-2.4-4.8-10.3h10.8L2.5 2.5Z" />
        </svg>
      </div>

      <header className="site-header">
        <a className="brand-lockup" href="#inicio" onClick={closeMenu} aria-label={copy.nav.brandLabel}>
          <span className="wordmark" aria-hidden="true">GP<span>.</span></span>
          <span className="header-signature" aria-hidden="true">GONZALO PACHECO AGREDANO</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? copy.nav.closeMenu : copy.nav.openMenu}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label={copy.nav.primaryNavigation}>
          <a
            className="nav-cv-preview"
            href={cvFile}
            target="_blank"
            rel="noreferrer"
            aria-label={copy.nav.cvLabel}
            data-tooltip={copy.nav.viewCv}
            onClick={closeMenu}
          >
            <Image src="/cv-navigation-preview.png" alt="" width={34} height={40} sizes="34px" />
          </a>
          {navigationIds.map((id, index) => (
            <a href={"#" + id} key={id} onClick={closeMenu}>
              {copy.navigation[index]}
            </a>
          ))}
          <LanguageSwitcher onLanguageChange={closeMenu} />
          <div className="nav-contact-icons" role="group" aria-label={copy.nav.contactLinks}>
            <a
              className="nav-contact-icon"
              href={"mailto:" + email}
              aria-label={copy.nav.emailLabel}
              data-tooltip="Email"
              onClick={closeMenu}
            >
              <Mail size={17} strokeWidth={1.8} />
            </a>
            <a
              className="nav-contact-icon"
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label={copy.nav.githubLabel}
              data-tooltip="GitHub"
              onClick={closeMenu}
            >
              <Github size={17} strokeWidth={1.8} />
            </a>
            <a
              className="nav-contact-icon"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={copy.nav.linkedinLabel}
              data-tooltip="LinkedIn"
              onClick={closeMenu}
            >
              <Linkedin size={17} strokeWidth={1.8} />
            </a>
          </div>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-background" aria-hidden="true">
          <Image
            className="hero-background-image"
            src="/telecom-network-tower.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-background-shade" />
          <NetworkMotion />
        </div>
        <div className="hero-grid">
          <div className="hero-copy reveal is-visible">
            <p className="hero-role">{copy.hero.role}</p>
          </div>
          <h1 className="hero-name">Gonzalo Pacheco Agredano</h1>
          <div className="hero-aside reveal is-visible">
            <div className="hero-portrait-wrap">
              <div className="hero-line" />
              <Image
                className="hero-portrait"
                src="/gonzalo-pacheco.png"
                alt="Gonzalo Pacheco Agredano"
                width={855}
                height={1287}
                sizes="(max-width: 1100px) 68vw, 280px"
                priority
              />
            </div>
            <div className="hero-meta">
              <p><MapPin size={16} /> Leganés, Madrid</p>
              <p className="hero-university">
                <BookOpen size={16} />
                <span>Universidad Rey Juan Carlos</span>
                <Image className="urjc-logo" src="/urjc-eif-logo.png" alt={copy.hero.universityLogo} width={2560} height={642} />
              </p>
              <p className="hero-ntt">
                <CircleCheck size={16} />
                <span>{copy.hero.practicesAt}</span>
                <Image className="ntt-logo" src="/ntt-data-logo.svg" alt="NTT DATA" width={510} height={83} />
              </p>
            </div>
          </div>
          <div className="hero-specialties" aria-label={copy.hero.specialtiesLabel}>
            {copy.hero.specialties.map((items, rowIndex) => (
              <div className={"hero-specialty-row hero-specialty-row-" + specialtyRowIds[rowIndex]} key={specialtyRowIds[rowIndex]}>
                {items.map((specialty) => <span key={specialty}>{specialty}</span>)}
              </div>
            ))}
          </div>
        </div>
        <a className="scroll-cue" href="#perfil">
          <span>{copy.hero.scroll}</span> <ChevronDown size={18} />
        </a>
      </section>

      <div id="contenido">
        <section className="section intro-section" id="perfil">
          <div className="section-marker" data-section-marker><span>01</span> {copy.profile.marker}</div>
          <div className="profile-layout">
            <div className="profile-detail reveal">
              <p className="profile-intro">{copy.profile.intro}</p>
              <p>{copy.profile.summary}</p>
              <p className="profile-interest-intro">{copy.profile.interestIntro}</p>
              <ul className="profile-interest-list" aria-label={copy.profile.interestsLabel}>
                {copy.profile.interests.map((label, index) => {
                  const Icon = interestIcons[index];
                  return (
                    <li key={label}>
                      <Icon size={18} strokeWidth={1.65} aria-hidden="true" />
                      <span>{label}</span>
                    </li>
                  );
                })}
              </ul>
              <a className="text-link" href={cvFile} target="_blank" rel="noreferrer">
                {copy.profile.detailedCv} <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="profile-sidebar reveal">
              <aside className="profile-data-card" aria-label={copy.profile.dataLabel}>
                <p className="profile-data-heading">{copy.profile.dataLabel}</p>
                <dl className="profile-data-list">
                  <div>
                    <MapPin size={20} strokeWidth={1.6} />
                    <div>
                      <dt>{copy.profile.locationLabel}</dt>
                      <dd>Leganés, Madrid</dd>
                    </div>
                  </div>
                  <div>
                    <GraduationCap size={20} strokeWidth={1.6} />
                    <div>
                      <dt>{copy.profile.educationLabel}</dt>
                      <dd>{copy.profile.educationValue}</dd>
                    </div>
                  </div>
                  <div>
                    <Network size={20} strokeWidth={1.6} />
                    <div>
                      <dt>{copy.profile.profileLabel}</dt>
                      <dd>{copy.profile.profileValue}</dd>
                    </div>
                  </div>
                  <div>
                    <Radio size={20} strokeWidth={1.6} />
                    <div>
                      <dt>{copy.profile.interestsDataLabel}</dt>
                      <dd>{copy.profile.interestsValue}</dd>
                    </div>
                  </div>
                </dl>
              </aside>
              <section className="profile-personal-card" aria-labelledby="personal-profile-heading">
                <h3 className="profile-data-heading" id="personal-profile-heading">{copy.profile.personalTitle}</h3>
                {copy.profile.personalParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="proyectos">
          <div className="section-heading reveal">
            <div className="section-marker" data-section-marker><span>02</span> {copy.projects.marker}</div>
            <h2 className="projects-heading">{copy.projects.heading}</h2>
          </div>
          <div className="filter-bar reveal" aria-label={copy.projects.filterLabel}>
            {projectFilterIds.map((filterId) => (
              <button
                type="button"
                key={filterId}
                className={filter === filterId ? "is-active" : ""}
                onClick={() => setFilter(filterId)}
              >
                {copy.projects.filters[filterId]}
              </button>
            ))}
            <a href={github} target="_blank" rel="noreferrer">
              {copy.projects.fullGithub} <GitFork size={16} />
            </a>
          </div>
          <div className="project-grid">
            {visibleProjectIndexes.map((projectIndex, visibleIndex) => {
              const project = projectDefinitions[projectIndex];
              const projectCopy = copy.projects.cards[projectIndex];
              const Icon = project.icon;
              const videos = project.videos;
              return (
                <article className="project-card reveal" key={project.href} style={{ animationDelay: visibleIndex * 45 + "ms" }}>
                  <div className="project-media">
                    <Image
                      src={project.image}
                      alt={projectCopy.imageAlt}
                      fill
                      sizes="(max-width: 580px) 100vw, (max-width: 880px) 50vw, 33vw"
                    />
                  </div>
                  <div className="project-card-body">
                    <div className="project-topline">
                      <Icon size={23} strokeWidth={1.5} />
                      <span>{copy.projects.filters[project.type]}</span>
                    </div>
                    <p className="project-kicker">{projectCopy.kicker}</p>
                    <h3>{projectCopy.title}</h3>
                    <p className="project-description">{projectCopy.description}</p>
                    <ul className="tag-list" aria-label={copy.projects.technologiesPrefix + " " + projectCopy.title}>
                      {projectCopy.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                    <div className="project-actions">
                      <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                        {copy.projects.repository} <ArrowUpRight size={18} aria-hidden="true" />
                      </a>
                      {videos && (
                        <div className="project-resource-links">
                          {gameRankVideoIds.map((videoId) => (
                            <a
                              className="project-resource-button"
                              href={videos[videoId]}
                              key={videoId}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Youtube size={16} aria-hidden="true" />
                              <span>{copy.projects.videos[videoId]}</span>
                              <ArrowUpRight size={15} aria-hidden="true" />
                            </a>
                          ))}
                        </div>
                      )}
                      {project.poster && (
                        <a className="project-resource-button" href={project.poster} target="_blank" rel="noreferrer">
                          <FileText size={16} aria-hidden="true" />
                          <span>{copy.projects.poster}</span>
                          <ArrowUpRight size={15} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section skills-section" id="habilidades" aria-labelledby="skills-title">
          <div className="skills-intro">
            <div className="skills-intro-inner reveal">
              <div className="section-marker" data-section-marker><span>03</span> {copy.skills.marker}</div>
              <h2 id="skills-title">{copy.skills.heading}</h2>
              <p>{copy.skills.intro}</p>
            </div>
          </div>
          <div className="skills-grid" aria-label={copy.skills.label}>
            {copy.skills.groups.map((group, groupIndex) => {
              const definition = skillDefinitions[groupIndex];
              const Icon = definition.icon;
              const action = copy.skills.viewCountPrefix;
              return (
                <article
                  className="skill-card reveal"
                  key={group.label}
                  style={{ animationDelay: groupIndex * 80 + "ms" }}
                >
                  <div className="skill-card-media">
                    <Image
                      src={definition.image}
                      alt={group.imageAlt}
                      fill
                      sizes="(max-width: 700px) calc(100vw - 2.6rem), (max-width: 1100px) calc(50vw - 2.5rem), 30vw"
                    />
                  </div>
                  <div className="skill-card-body">
                    <div className="skill-card-topline">
                      <span className="skill-card-index" aria-hidden="true">0{groupIndex + 1}</span>
                      <span className="skill-card-icon" aria-hidden="true"><Icon size={18} strokeWidth={1.6} /></span>
                    </div>
                    <h3>{group.label}</h3>
                    <p>{group.description}</p>
                    <ul className="skill-card-featured" aria-label={copy.skills.featuredPrefix + " " + group.label}>
                      {group.featuredItems.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <details className="skill-card-more">
                      <summary>
                        <span>{action} {group.additionalItems.length} {copy.skills.viewCountSuffix}</span>
                        <ChevronDown size={17} strokeWidth={1.8} aria-hidden="true" />
                      </summary>
                      <ul className="skill-list" aria-label={copy.skills.morePrefix + " " + group.label}>
                        {group.additionalItems.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </details>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section trajectory-section" id="trayectoria">
          <div className="section-heading reveal">
            <div className="section-marker" data-section-marker><span>04</span> {copy.trajectory.marker}</div>
            <h2 className="trajectory-heading">{copy.trajectory.headingBefore} <em>{copy.trajectory.headingEmphasis}</em></h2>
          </div>
          <div className="trajectory-grid">
            <article className="timeline-card timeline-card-education reveal">
              <FormationCarousel />
              <div className="education-card-content">
                <div className="timeline-heading"><GraduationCap size={25} strokeWidth={1.5} /><span>{copy.trajectory.educationLabel}</span></div>
                <p className="timeline-date">{copy.trajectory.educationDate}</p>
                <h3>{copy.trajectory.degree}</h3>
                <p>{copy.trajectory.universityDetail}</p>
                <p className="timeline-note">{copy.trajectory.educationNote}</p>
                <div className="timeline-links">
                  <a
                    className="timeline-link"
                    href="https://wuolah.com/profile/gonzalo_pacheco"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={copy.trajectory.wuolahAriaLabel}
                  >
                    {copy.trajectory.wuolahLabel} <ExternalLink size={15} />
                  </a>
                  <form
                    className="timeline-link-form"
                    action="https://servicios.urjc.es/listadoprofesorado/itinerario-formativo"
                    method="post"
                    target="_blank"
                  >
                    <input type="hidden" name="opcionescarrera" value="2501181#PRESENCIAL#2040" />
                    <button
                      className="timeline-link"
                      type="submit"
                      aria-label={copy.trajectory.itineraryAriaLabel}
                    >
                      {copy.trajectory.itineraryLabel} <ExternalLink size={15} />
                    </button>
                  </form>
                </div>
              </div>
            </article>
            <Link
              className="timeline-card timeline-card-tfg reveal"
              href="/tfg"
              aria-label={copy.trajectory.tfgAriaLabel}
            >
              <div className="tfg-image-frame">
                <Image
                  className="tfg-image"
                  src="/tfg-6g-ris.png"
                  alt={copy.trajectory.tfgImageAlt}
                  fill
                  sizes="(max-width: 880px) 88vw, 30vw"
                />
              </div>
              <div className="tfg-card-content">
                <div className="timeline-heading"><BrainCircuit size={25} strokeWidth={1.5} /><span>TFG</span></div>
                <p className="timeline-date">{copy.trajectory.tfgDate}</p>
                <h3>{copy.trajectory.tfgTitle}</h3>
                <p>{copy.trajectory.tfgDescription}</p>
                <p className="timeline-note">{copy.trajectory.tfgNote}</p>
                <span className="timeline-card-cta">{copy.trajectory.tfgCta} <ArrowUpRight size={15} /></span>
              </div>
            </Link>
            <Link
              className="timeline-card timeline-card-ntt reveal"
              href="/practicas"
              aria-label={copy.trajectory.practicesAriaLabel}
            >
              <div className="ntt-card-image-frame">
                <Image
                  className="ntt-card-logo"
                  src="/ntt-data-practicas.png"
                  alt="NTT DATA"
                  fill
                  sizes="(max-width: 880px) 88vw, 30vw"
                />
              </div>
              <div className="ntt-card-content">
                <div className="timeline-heading"><BriefcaseBusiness size={25} strokeWidth={1.5} /><span>{copy.trajectory.practicesLabel}</span></div>
                <p className="timeline-date">{copy.trajectory.practicesDate}</p>
                <h3>NTT DATA Spain</h3>
                <p>{copy.trajectory.practicesDescription}</p>
                <span className="timeline-card-cta">{copy.trajectory.practicesCta} <ArrowUpRight size={15} /></span>
              </div>
            </Link>
          </div>
        </section>

        <section className="section credentials-section" id="certificaciones">
          <div className="section-marker" data-section-marker><span>05</span> {copy.credentials.marker}</div>
          <div className="credentials-grid">
            <article className="credential-card credential-card-english reveal">
              <div className="credential-media-frame credential-media-frame-english">
                <Image
                  className="credential-media-image"
                  src="/english-cambridge-c1.png"
                  alt={copy.credentials.englishImageAlt}
                  fill
                  sizes="(max-width: 880px) 88vw, 30vw"
                />
              </div>
              <div className="credential-card-content">
                <div className="credential-card-heading">
                  <Languages size={25} strokeWidth={1.5} />
                  <p>{copy.credentials.languages}</p>
                </div>
                <div className="credential-title-row">
                  <h3>{copy.credentials.englishC1}</h3>
                  <a className="certificate-link" href="/english-c1-certificate.pdf" target="_blank" rel="noreferrer" aria-label={copy.credentials.englishCertificateAria}>
                    {copy.credentials.englishCertificate} <ExternalLink size={14} />
                  </a>
                </div>
                <p className="credential-summary">{copy.credentials.englishSummary}</p>
                <div className="language-list">
                  <div><span>{copy.credentials.french}</span><strong>{copy.credentials.frenchLevel}</strong></div>
                  <div><span>{copy.credentials.spanish}</span><strong>{copy.credentials.spanishLevel}</strong></div>
                </div>
              </div>
            </article>
            <article className="credential-card credential-card-matlab reveal">
              <div className="credential-media-frame">
                <Image
                  className="credential-media-image"
                  src="/matlab-academy.png"
                  alt={copy.credentials.matlabLogoAlt}
                  fill
                  sizes="(max-width: 880px) 88vw, 30vw"
                />
              </div>
              <div className="credential-card-content">
                <div className="credential-card-heading">
                  <Code2 size={25} strokeWidth={1.5} />
                  <p>MATLAB Academy</p>
                </div>
                <h3>MATLAB Onramp</h3>
                <p className="credential-summary">{copy.credentials.matlabSummary}</p>
                <div className="credential-progress" aria-label={copy.credentials.matlabProgressLabel}><span /></div>
                <div className="certificate-actions">
                  <a className="certificate-link" href="/matlab-onramp-certificate.pdf" target="_blank" rel="noreferrer" aria-label={copy.credentials.matlabCertificateAria}>
                    {copy.credentials.matlabCertificate} <ExternalLink size={14} />
                  </a>
                  <a className="certificate-link" href="/matlab-onramp-progress.pdf" target="_blank" rel="noreferrer" aria-label={copy.credentials.matlabProgressAria}>
                    {copy.credentials.matlabProgress} <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </article>
            <article className="credential-card reveal">
              <div className="credential-card-heading">
                <CircleCheck size={25} strokeWidth={1.5} />
                <p>{copy.credentials.technical}</p>
              </div>
              <h3>{copy.credentials.inProgress}</h3>
              <p className="credential-summary">{copy.credentials.technicalSummary}</p>
              <div className="credential-status"><span aria-hidden="true" /> {copy.credentials.nextUpdate}</div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-layout">
            <div className="contact-copy reveal">
              <p className="eyebrow section-marker" data-section-marker><span /> {copy.contact.marker}</p>
              <h2>{copy.contact.heading}</h2>
              <p>{copy.contact.description}</p>
              <div className="social-links">
                <a href={"mailto:" + email}><Mail size={18} /> {email}</a>
                <a href={github} target="_blank" rel="noreferrer"><GitFork size={18} /> GitHub</a>
                <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} strokeWidth={1.8} /> LinkedIn</a>
              </div>
            </div>
            <div className="contact-card reveal">
              <h3>{copy.contact.formTitle}</h3>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Gonzalo Pacheco Agredano</p>
        <a href="#inicio">{copy.footer.backToTop} <ArrowUpRight size={15} /></a>
      </footer>
    </main>
  );
}
