"use client";

import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  ChevronDown,
  CircleCheck,
  Code2,
  Download,
  ExternalLink,
  GitFork,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Radio,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ContactForm } from "./contact-form";
import { NetworkMotion } from "./network-motion";

const email = "gonzalo.pachecoagredano@gmail.com";
const github = "https://github.com/gonzaloop1494";
const linkedin = "https://www.linkedin.com/in/gonzalo-pacheco-agredano-5a9b482b7/";
const cvFile = "/cv-gonzalo-pacheco-agredano.pdf";

const navigation = [
  ["Perfil", "perfil"],
  ["Proyectos", "proyectos"],
  ["Trayectoria", "trayectoria"],
  ["Contacto", "contacto"],
] as const;

const heroSpecialtyRows = [
  {
    id: "primary-one",
    items: ["Redes", "Campos y radio", "Comunicaciones por satélite", "Radiocomunicaciones móviles"],
  },
  {
    id: "interlude-one",
    items: ["Simulaciones de comunicaciones", "Comunicaciones de banda ancha"],
  },
  {
    id: "primary-two",
    items: ["Señales", "Sistemas", "Electrónica", "Programación", "Radiación", "Antenas"],
  },
  {
    id: "interlude-two",
    items: ["Sistemas digitales", "Ensamblador", "Proyectos de telecomunicaciones"],
  },
  {
    id: "primary-three",
    items: ["Software de sistemas", "Linux", "Procesamiento de señales", "Microondas"],
  },
] as const;

const projects = [
  {
    title: "Simulación TDMA",
    kicker: "Redes móviles · MATLAB",
    description:
      "Simulación Monte Carlo de 10 usuarios sobre canal Rayleigh. Compara algoritmos de scheduling y mide BER, throughput y retardo con modulación adaptativa.",
    tags: ["TDMA", "Rayleigh", "KPIs", "MATLAB"],
    type: "Telecom",
    href: "https://github.com/gonzaloop1494/tdma-network-simulation",
    icon: BarChart3,
  },
  {
    title: "GameRank",
    kicker: "Aplicación web · Django",
    description:
      "Plataforma full-stack de seguimiento de videojuegos con APIs, perfiles, votaciones, herramientas sociales, pruebas E2E e internacionalización.",
    tags: ["Python", "Django", "APIs REST", "ORM"],
    type: "Software",
    href: "https://github.com/gonzaloop1494/gamerank-django",
    icon: Code2,
  },
  {
    title: "Groupchat TCP",
    kicker: "Sistemas · Rust",
    description:
      "Servicio de mensajería cliente-servidor concurrente con sockets TCP, autenticación, gestión de sesiones y sincronización en tiempo real.",
    tags: ["Rust", "TCP", "Concurrencia", "Sockets"],
    type: "Software",
    href: "https://github.com/gonzaloop1494/groupchat-rust",
    icon: Network,
  },
  {
    title: "Satcom & radionavegación",
    kicker: "Sistemas satelitales · MATLAB",
    description:
      "Modelado y evaluación de escenarios de comunicación con estaciones terrestres, satélites GEO/LEO, enlaces, cobertura y rendimiento.",
    tags: ["Satcom", "GEO / LEO", "MATLAB", "Radionavegación"],
    type: "Telecom",
    href: "https://github.com/gonzaloop1494/comunicaciones_satelitales_y_radionavegacion",
    icon: Radio,
  },
  {
    title: "Reconocimiento facial con PCA",
    kicker: "Visión artificial · MATLAB",
    description:
      "Sistema de reconocimiento facial basado en PCA y LRC, evaluado con validación Leave-One-Out sobre el conjunto ORL.",
    tags: ["PCA", "LRC", "Machine Learning", "MATLAB"],
    type: "Datos",
    href: "https://github.com/gonzaloop1494/facial-recognition-with-PCA",
    icon: BrainCircuit,
  },
  {
    title: "Energy as a Service",
    kicker: "IoT · Edge + Cloud",
    description:
      "Propuesta para viviendas en Madrid que combina sensórica, control HVAC y arquitectura híbrida para una gestión energética eficiente.",
    tags: ["IoT", "Edge", "Zigbee", "Wi-Fi"],
    type: "Telecom",
    href: "https://github.com/gonzaloop1494/energy-as-a-service-madrid",
    icon: BriefcaseBusiness,
  },
];

const skillGroups = [
  {
    label: "Telecomunicaciones",
    items: ["5G / 6G", "RAN / Core", "Network slicing", "Satcom GEO / LEO", "RF & microondas", "Fibra óptica"],
  },
  {
    label: "Software & datos",
    items: ["MATLAB", "Python", "Rust", "C", "Django", "APIs REST"],
  },
  {
    label: "Análisis técnico",
    items: ["PCA / LRC", "BER & throughput", "Modelado de canal", "PDF / CDF", "KPIs", "Git / GitHub"],
  },
];

const filters = ["Todos", "Telecom", "Software", "Datos"] as const;
type Filter = (typeof filters)[number];

export function Portfolio() {
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<Filter>("Todos");
  const cursorRef = useRef<HTMLDivElement>(null);

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
    if (!markers.length) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      markers.forEach((marker) => marker.classList.add("is-visible"));
      return;
    }

    markers.forEach((marker) => marker.classList.add("is-observed"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    markers.forEach((marker) => observer.observe(marker));

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
      cursor.style.transform = `translate3d(${event.clientX - 2}px, ${event.clientY - 2}px, 0)`;
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

  const visibleProjects = useMemo(
    () => projects.filter((project) => filter === "Todos" || project.type === filter),
    [filter],
  );

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main>
      <a className="skip-link" href="#contenido">
        Ir al contenido
      </a>
      <div className="progress" aria-hidden="true" style={{ transform: `scaleX(${progress / 100})` }} />
      <div ref={cursorRef} className="cursor-light" aria-hidden="true">
        <svg viewBox="0 0 28 34" focusable="false">
          <path d="M2.5 2.5v24.7l6.6-5.7 4.9 10.3 5.1-2.4-4.8-10.3h10.8L2.5 2.5Z" />
        </svg>
      </div>

      <header className="site-header">
        <a className="brand-lockup" href="#inicio" onClick={closeMenu} aria-label="Ir al inicio de Gonzalo Pacheco Agredano">
          <span className="wordmark" aria-hidden="true">GP<span>.</span></span>
          <span className="header-signature" aria-hidden="true">GONZALO PACHECO AGREDANO</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Cerrar navegación" : "Abrir navegación"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Navegación principal">
          {navigation.map(([label, id]) => (
            <a href={`#${id}`} key={id} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-contact" href={`mailto:${email}`} onClick={closeMenu}>
            Escribirme <ArrowUpRight size={15} />
          </a>
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
            <p className="hero-role">Ingeniero en Sistemas de Telecomunicación</p>
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
              <p className="hero-ntt">
                <CircleCheck size={16} />
                <span>Prácticas curriculares en</span>
                <Image className="ntt-logo" src="/ntt-data-logo.svg" alt="NTT DATA" width={510} height={83} />
              </p>
            </div>
          </div>
          <div className="hero-specialties" aria-label="Áreas de especialización">
            {heroSpecialtyRows.map(({ id, items }) => (
              <div className={`hero-specialty-row hero-specialty-row-${id}`} key={id}>
                {items.map((specialty) => <span key={specialty}>{specialty}</span>)}
              </div>
            ))}
          </div>
        </div>
        <a className="scroll-cue" href="#perfil">
          <span>Desplazar</span> <ChevronDown size={18} />
        </a>
      </section>

      <div id="contenido">
        <section className="section intro-section" id="perfil">
          <div className="section-marker" data-section-marker><span>01</span> Perfil</div>
          <div className="profile-layout">
            <div className="profile-detail reveal">
              <p className="profile-intro">
                Estudiante de último curso de Ingeniería en Sistemas de Telecomunicación y
                actualmente en prácticas curriculares en NTT DATA. Me interesan las redes móviles,
                los sistemas satelitales y el análisis de rendimiento basado en datos.
              </p>
              <p>
                Combino modelado de canal radio, evaluación de KPIs y automatización con Python
                y MATLAB. Busco aplicar esa base a redes RAN/Core, 5G/6G, virtualización y
                sistemas de comunicaciones medibles y robustos.
              </p>
              <a className="text-link" href={cvFile} target="_blank" rel="noreferrer">
                Consultar CV detallado <ArrowUpRight size={17} />
              </a>
            </div>
            <aside className="profile-data-card reveal" aria-label="Datos de perfil">
              <p className="profile-data-heading">Datos</p>
              <dl className="profile-data-list">
                <div>
                  <MapPin size={20} strokeWidth={1.6} />
                  <div>
                    <dt>Ubicación</dt>
                    <dd>Leganés, Madrid</dd>
                  </div>
                </div>
                <div>
                  <Network size={20} strokeWidth={1.6} />
                  <div>
                    <dt>Perfil</dt>
                    <dd>Redes + datos</dd>
                  </div>
                </div>
                <div>
                  <Radio size={20} strokeWidth={1.6} />
                  <div>
                    <dt>Intereses</dt>
                    <dd>5G, satélite y espacio</dd>
                  </div>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="section projects-section" id="proyectos">
          <div className="section-heading reveal">
            <div className="section-marker" data-section-marker><span>02</span> Proyectos</div>
            <h2>Lo técnico tiene mejor historia cuando se puede <em>mostrar.</em></h2>
          </div>
          <div className="filter-bar reveal" aria-label="Filtrar proyectos">
            {filters.map((item) => (
              <button
                type="button"
                key={item}
                className={filter === item ? "is-active" : ""}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
            <a href={github} target="_blank" rel="noreferrer">
              GitHub completo <GitFork size={16} />
            </a>
          </div>
          <div className="project-grid">
            {visibleProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <article className="project-card reveal" key={project.title} style={{ transitionDelay: `${index * 45}ms` }}>
                  <div className="project-topline">
                    <Icon size={23} strokeWidth={1.5} />
                    <span>{project.type}</span>
                  </div>
                  <p className="project-kicker">{project.kicker}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="tag-list" aria-label={`Tecnologías de ${project.title}`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                    Ver repositorio <ArrowUpRight size={18} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section skills-section">
          <div className="skills-layout">
            <div className="skills-heading reveal">
              <div className="section-marker" data-section-marker><span>03</span> Habilidades</div>
              <h2>Herramientas para <em>analizar, medir y construir.</em></h2>
            </div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <article className="skill-group reveal" key={group.label}>
                  <h3>{group.label}</h3>
                  <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section cv-section" id="cv">
          <div className="cv-panel reveal">
            <div>
              <p className="eyebrow"><span /> Currículum</p>
              <h2>Todo el recorrido, en una página.</h2>
              <p>
                Formación, proyectos, experiencia de laboratorio e idiomas en un CV general
                preparado para compartir con empresas.
              </p>
            </div>
            <div className="cv-actions">
              <a className="button button-light" href={cvFile} target="_blank" rel="noreferrer">
                Ver CV <ExternalLink size={17} />
              </a>
              <a className="icon-button" href={cvFile} download aria-label="Descargar CV">
                <Download size={20} />
              </a>
            </div>
          </div>
        </section>

        <section className="section trajectory-section" id="trayectoria">
          <div className="section-heading reveal">
            <div className="section-marker" data-section-marker><span>04</span> Trayectoria</div>
            <h2>Formación aplicada, con la vista puesta en el <em>siguiente desafío.</em></h2>
          </div>
          <div className="trajectory-grid">
            <article className="timeline-card reveal">
              <div className="timeline-heading"><GraduationCap size={25} strokeWidth={1.5} /><span>Formación</span></div>
              <p className="timeline-date">2022 - actualidad</p>
              <h3>Grado en Ingeniería en Sistemas de Telecomunicación</h3>
              <p>Universidad Rey Juan Carlos, Fuenlabrada. Finalización prevista: junio de 2027.</p>
              <p className="timeline-note">Redes, radiocomunicaciones móviles, satélite, señales y software de sistemas.</p>
              <a
                className="timeline-link"
                href="https://wuolah.com/profile/gonzalo_pacheco"
                target="_blank"
                rel="noreferrer"
                aria-label="Ver apuntes de Gonzalo Pacheco en Wuolah"
              >
                Ver apuntes en Wuolah <ExternalLink size={15} />
              </a>
            </article>
            <Link
              className="timeline-card timeline-card-tfg reveal"
              href="/tfg"
              aria-label="Abrir la bitácora del Trabajo Fin de Grado"
            >
              <div className="tfg-image-frame">
                <Image
                  className="tfg-image"
                  src="/tfg-6g-ris.png"
                  alt="Ilustración conceptual de una red 6G con superficies inteligentes reconfigurables"
                  fill
                  sizes="(max-width: 880px) 88vw, 30vw"
                />
              </div>
              <div className="tfg-card-content">
                <div className="timeline-heading"><BrainCircuit size={25} strokeWidth={1.5} /><span>TFG</span></div>
                <p className="timeline-date">En fase de definición</p>
                <h3>Trabajo Fin de Grado</h3>
                <p>Explora la línea de investigación, las lecturas de partida y la hoja de ruta del proyecto.</p>
                <p className="timeline-note">Una bitácora para documentar el desarrollo con contexto técnico.</p>
                <span className="timeline-card-cta">Abrir bitácora del TFG <ArrowUpRight size={15} /></span>
              </div>
            </Link>
            <Link
              className="timeline-card timeline-card-ntt reveal"
              href="/practicas"
              aria-label="Abrir la bitácora de prácticas curriculares en NTT DATA"
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
                <div className="timeline-heading"><BriefcaseBusiness size={25} strokeWidth={1.5} /><span>Prácticas</span></div>
                <p className="timeline-date">Prácticas curriculares</p>
                <h3>NTT DATA Spain</h3>
                <p>Validación de soluciones de red fija e hiperautomatización, con atención a procesos, integraciones y datos de provisión.</p>
                <span className="timeline-card-cta">Ver bitácora de prácticas <ArrowUpRight size={15} /></span>
              </div>
            </Link>
          </div>
        </section>

        <section className="section credentials-section">
          <div className="section-marker" data-section-marker><span>05</span> Certificaciones</div>
          <div className="credentials-grid">
            <article className="credential-card credential-card-english reveal">
              <div className="credential-media-frame credential-media-frame-english">
                <Image
                  className="credential-media-image"
                  src="/english-cambridge-c1.png"
                  alt="Fragmento del certificado Cambridge English C1 de Gonzalo Pacheco Agredano"
                  fill
                  sizes="(max-width: 880px) 88vw, 30vw"
                />
              </div>
              <div className="credential-card-content">
                <div className="credential-card-heading">
                  <Languages size={25} strokeWidth={1.5} />
                  <p>Idiomas</p>
                </div>
                <div className="credential-title-row">
                  <h3>Inglés C1</h3>
                  <a className="certificate-link" href="/english-c1-certificate.pdf" target="_blank" rel="noreferrer" aria-label="Ver título de inglés C1">
                    Ver título de inglés <ExternalLink size={14} />
                  </a>
                </div>
                <p className="credential-summary">Uso fluido y profesional.</p>
                <div className="language-list">
                  <div><span>Francés</span><strong>Básico profesional</strong></div>
                  <div><span>Español</span><strong>Nativo</strong></div>
                </div>
              </div>
            </article>
            <article className="credential-card credential-card-matlab reveal">
              <div className="credential-media-frame">
                <Image
                  className="credential-media-image"
                  src="/matlab-academy.png"
                  alt="Logotipo de MATLAB"
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
                <p className="credential-summary">Formación completada al 100%.</p>
                <div className="credential-progress" aria-label="MATLAB Onramp completado al 100%"><span /></div>
                <div className="certificate-actions">
                  <a className="certificate-link" href="/matlab-onramp-certificate.pdf" target="_blank" rel="noreferrer" aria-label="Ver título de MATLAB Onramp">
                    Ver título <ExternalLink size={14} />
                  </a>
                  <a className="certificate-link" href="/matlab-onramp-progress.pdf" target="_blank" rel="noreferrer" aria-label="Ver progreso de MATLAB Onramp">
                    Ver progreso <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </article>
            <article className="credential-card reveal">
              <div className="credential-card-heading">
                <CircleCheck size={25} strokeWidth={1.5} />
                <p>Certificaciones técnicas</p>
              </div>
              <h3>En proceso</h3>
              <p className="credential-summary">Preparando nuevas acreditaciones técnicas para incorporarlas a este apartado.</p>
              <div className="credential-status"><span aria-hidden="true" /> Próxima actualización</div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-layout">
            <div className="contact-copy reveal">
              <p className="eyebrow section-marker" data-section-marker><span /> Contacto</p>
              <h2>¿Hablamos de lo que podemos <em>construir?</em></h2>
              <p>
                Estoy abierto a conversar sobre prácticas curriculares, proyectos de
                telecomunicaciones y retos de software con impacto real.
              </p>
              <div className="social-links">
                <a href={`mailto:${email}`}><Mail size={18} /> {email}</a>
                <a href={github} target="_blank" rel="noreferrer"><GitFork size={18} /> GitHub</a>
                <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} strokeWidth={1.8} /> LinkedIn</a>
              </div>
            </div>
            <div className="contact-card reveal">
              <h3>Enviar un mensaje</h3>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Gonzalo Pacheco Agredano</p>
        <a href="#inicio">Volver arriba <ArrowUpRight size={15} /></a>
      </footer>
    </main>
  );
}
