"use client";

import {
  ArrowDownRight,
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
  Mail,
  MapPin,
  Menu,
  Network,
  Radio,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { ContactForm } from "./contact-form";

const email = "gonzalo.pachecoagredano@gmail.com";
const github = "https://github.com/gonzaloop1494";
const cvFile = "/cv-gonzalo-pacheco-agredano.pdf";

const navigation = [
  ["Perfil", "perfil"],
  ["Proyectos", "proyectos"],
  ["Trayectoria", "trayectoria"],
  ["Contacto", "contacto"],
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 },
    );

    document.querySelectorAll<HTMLElement>(".reveal").forEach((element) => observer.observe(element));
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
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
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursor.classList.add("is-visible");
    };
    const hideCursor = () => cursor.classList.remove("is-visible");

    window.addEventListener("pointermove", moveCursor, { passive: true });
    document.documentElement.addEventListener("pointerleave", hideCursor);

    return () => {
      document.body.classList.remove("cursor-light-active");
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
      <div ref={cursorRef} className="cursor-light" aria-hidden="true" />

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
        <div className="hero-grid">
          <div className="hero-copy reveal is-visible">
            <h1 className="visually-hidden">Gonzalo Pacheco Agredano</h1>
            <p className="hero-intro">
              Estudiante de último curso de Ingeniería en Sistemas de Telecomunicación y
              actualmente en prácticas curriculares en NTT DATA. Me interesan las redes móviles,
              los sistemas satelitales y el análisis de rendimiento basado en datos.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#proyectos">
                Ver proyectos <ArrowDownRight size={18} />
              </a>
              <a className="button button-secondary" href={cvFile} target="_blank" rel="noreferrer">
                Abrir CV <ExternalLink size={17} />
              </a>
            </div>
          </div>
          <div className="hero-aside reveal is-visible">
            <div className="hero-portrait-wrap">
              <div className="hero-line" />
              <Image
                className="hero-portrait"
                src="/gonzalo-pacheco.png"
                alt="Gonzalo Pacheco Agredano"
                width={855}
                height={1287}
                sizes="(max-width: 880px) 68vw, 280px"
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
        </div>
        <a className="scroll-cue" href="#perfil">
          <span>Desplazar</span> <ChevronDown size={18} />
        </a>
      </section>

      <div id="contenido">
        <section className="section intro-section" id="perfil">
          <div className="section-marker reveal"><span>01</span> Perfil</div>
          <div className="profile-layout">
            <div className="profile-statement reveal">
              <p className="display-copy">
                Un perfil que combina el rigor de las <em>telecomunicaciones</em> con la
                curiosidad de construir software útil.
              </p>
            </div>
            <div className="profile-detail reveal">
              <p>
                Combino modelado de canal radio, evaluación de KPIs y automatización con Python
                y MATLAB. Busco aplicar esa base a redes RAN/Core, 5G/6G, virtualización y
                sistemas de comunicaciones medibles y robustos.
              </p>
              <a className="text-link" href={cvFile} target="_blank" rel="noreferrer">
                Consultar CV detallado <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="section data-section">
          <div className="section-marker reveal"><span>02</span> Datos</div>
          <div className="data-grid">
            <article className="data-item reveal">
              <MapPin size={25} strokeWidth={1.6} />
              <p className="data-label">Ubicación</p>
              <h2>Leganés, Madrid</h2>
              <p>Con disponibilidad para desplazarme.</p>
            </article>
            <article className="data-item reveal">
              <Network size={25} strokeWidth={1.6} />
              <p className="data-label">Perfil</p>
              <h2>Redes + datos</h2>
              <p>RAN/Core, rendimiento, automatización y machine learning aplicado.</p>
            </article>
            <article className="data-item reveal">
              <Radio size={25} strokeWidth={1.6} />
              <p className="data-label">Intereses</p>
              <h2>5G, satélite y espacio</h2>
              <p>Network slicing, GEO/LEO, CubeSats, edge computing y calidad de servicio.</p>
            </article>
          </div>
        </section>

        <section className="section projects-section" id="proyectos">
          <div className="section-heading reveal">
            <div className="section-marker"><span>03</span> Proyectos</div>
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
              <div className="section-marker"><span>04</span> Habilidades</div>
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
            <div className="section-marker"><span>05</span> Trayectoria</div>
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
            <article className="timeline-card reveal">
              <div className="timeline-heading"><BrainCircuit size={25} strokeWidth={1.5} /><span>TFG</span></div>
              <p className="timeline-date">En fase de definición</p>
              <h3>Trabajo Fin de Grado</h3>
              <p>El espacio recogerá el problema, la metodología y las conclusiones del proyecto final cuando el tema quede asignado.</p>
              <p className="timeline-note">Una sección preparada para mostrar el desarrollo con contexto técnico.</p>
            </article>
            <article className="timeline-card reveal">
              <div className="timeline-heading"><BriefcaseBusiness size={25} strokeWidth={1.5} /><span>Candidatura</span></div>
              <p className="timeline-date">Prácticas curriculares</p>
              <h3>NTT DATA Pathfinder</h3>
              <p>Interés en incorporarme a un entorno de aprendizaje y proyectos reales de redes, software, datos, virtualización y optimización.</p>
              <p className="timeline-note">Disponibilidad para prácticas en Madrid con modelo híbrido, según compatibilidad académica.</p>
            </article>
          </div>
        </section>

        <section className="section credentials-section">
          <div className="credentials-intro reveal">
            <div className="section-marker"><span>06</span> Certificaciones</div>
            <h2>Las credenciales también cuentan una historia de trabajo.</h2>
          </div>
          <div className="credentials-list">
            <article className="credential reveal">
              <Languages size={23} strokeWidth={1.5} />
              <div>
                <p>Idiomas</p>
                <div className="credential-items">
                  <div className="credential-item">
                    <h3>Inglés C1</h3>
                    <a className="certificate-link" href="/english-c1-certificate.pdf" target="_blank" rel="noreferrer" aria-label="Ver título de inglés C1">
                      Ver título <ExternalLink size={14} />
                    </a>
                  </div>
                  <div className="credential-item"><h3>Francés básico profesional</h3></div>
                  <div className="credential-item"><h3>Español nativo</h3></div>
                </div>
              </div>
            </article>
            <article className="credential reveal">
              <Code2 size={23} strokeWidth={1.5} />
              <div>
                <p>MATLAB Academy</p>
                <h3>MATLAB Onramp</h3>
                <span>Formación completada al 100%.</span>
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
            <article className="credential reveal">
              <CircleCheck size={23} strokeWidth={1.5} />
              <div><p>Certificaciones técnicas</p><h3>En proceso</h3></div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-layout">
            <div className="contact-copy reveal">
              <p className="eyebrow"><span /> Contacto</p>
              <h2>¿Hablamos de lo que podemos <em>construir?</em></h2>
              <p>
                Estoy abierto a conversar sobre prácticas curriculares, proyectos de
                telecomunicaciones y retos de software con impacto real.
              </p>
              <div className="social-links">
                <a href={`mailto:${email}`}><Mail size={18} /> {email}</a>
                <a href={github} target="_blank" rel="noreferrer"><GitFork size={18} /> GitHub</a>
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
