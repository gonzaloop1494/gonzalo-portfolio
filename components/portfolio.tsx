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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  ["Certificaciones", "certificaciones"],
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
    image: "/project-tdma-network.png",
    imageAlt: "Visualización de una red TDMA con estación base, nodos y franjas temporales de transmisión",
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
    image: "/project-gamerank.png",
    imageAlt: "Visualización de una plataforma web de ranking de videojuegos conectada con servicios de datos",
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
    image: "/project-groupchat-tcp.png",
    imageAlt: "Visualización de un servidor de mensajería TCP conectado con clientes y flujos concurrentes",
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
    image: "/project-satcom-radionavigation.png",
    imageAlt: "Visualización de satélites y una estación terrestre conectados mediante haces de comunicaciones",
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
    image: "/project-pca-face-recognition.png",
    imageAlt: "Visualización de un rostro sintético analizado mediante componentes principales y datos geométricos",
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
    image: "/project-energy-as-a-service.png",
    imageAlt: "Visualización de un edificio residencial conectado con sensores IoT, climatización y gestión energética",
  },
];

type SkillGroup = {
  label: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  items: Array<{ label: string; featured?: boolean }>;
};

const skillGroups: SkillGroup[] = [
  {
    label: "Telecomunicaciones",
    description: "Acceso radio, transporte y core",
    icon: Radio,
    image: "/skills-telecom.png",
    imageAlt: "Torre de telecomunicaciones conectada con una red de radio y satélite",
    items: [
      { label: "5G / 6G", featured: true },
      { label: "RAN / Core", featured: true },
      { label: "Network slicing", featured: true },
      { label: "Satcom GEO / LEO", featured: true },
      { label: "RF & microondas", featured: true },
      { label: "Fibra óptica", featured: true },
      { label: "RAN slicing" },
      { label: "Comunicaciones móviles" },
      { label: "Tecnología de fibra óptica" },
      { label: "Redes de fibra óptica" },
      { label: "VLAN" },
      { label: "BGP" },
      { label: "Open Shortest Path First (OSPF)" },
      { label: "Wireshark" },
      { label: "Núcleo de 5G" },
      { label: "LTE" },
      { label: "Red de acceso radioterrestre UMTS" },
      { label: "Sistema global para las comunicaciones móviles" },
      { label: "4G" },
      { label: "3GPP" },
      { label: "3G" },
      { label: "2G" },
      { label: "Satélite de comunicaciones" },
      { label: "Radiofrecuencia (RF)" },
      { label: "Antenas" },
      { label: "Microondas" },
      { label: "WiMAX" },
      { label: "WiFi" },
      { label: "Bluetooth" },
      { label: "IoT" },
    ],
  },
  {
    label: "Software y datos",
    description: "Código, herramientas y protocolos",
    icon: Code2,
    image: "/skills-software-data.png",
    imageAlt: "Entorno de software con terminal, datos y señales",
    items: [
      { label: "MATLAB", featured: true },
      { label: "Python", featured: true },
      { label: "Rust", featured: true },
      { label: "C", featured: true },
      { label: "Django", featured: true },
      { label: "APIs REST", featured: true },
      { label: "Simulink" },
      { label: "Lenguaje ensamblador" },
      { label: "Protocolo de transferencia de hipertexto (HTTP)" },
      { label: "Programación en C" },
      { label: "VHDL" },
      { label: "Programación orientada a objetos (POO)" },
      { label: "Pascal" },
      { label: "Microsoft Excel" },
      { label: "Xirio Online" },
      { label: "Linux" },
    ],
  },
  {
    label: "Análisis técnico de datos",
    description: "Modelado, medida y electrónica",
    icon: BarChart3,
    image: "/skills-analysis.png",
    imageAlt: "Instrumentación de laboratorio para analizar señales y electrónica",
    items: [
      { label: "PCA / LRC", featured: true },
      { label: "BER & throughput", featured: true },
      { label: "Modelado de canal", featured: true },
      { label: "PDF / CDF", featured: true },
      { label: "KPIs", featured: true },
      { label: "Git / GitHub", featured: true },
      { label: "Filtros analógicos" },
      { label: "Filtros digitales" },
      { label: "LTSpice" },
      { label: "Osciloscopio" },
      { label: "Electrónica digital" },
      { label: "Machine Learning" },
      { label: "SVM" },
    ],
  },
];

const profileInterests = [
  { label: "Redes móviles y 5G (RAN/Core)", icon: Radio },
  { label: "Sistemas de comunicaciones medibles y robustos", icon: CircleCheck },
  { label: "Network slicing y virtualización", icon: Network },
  { label: "Monitorización y optimización de red", icon: BarChart3 },
  { label: "Evolución hacia arquitecturas 6G", icon: BrainCircuit },
  { label: "Sistemas satelitales", icon: Satellite },
  { label: "Análisis de rendimiento basado en datos", icon: Code2 },
] as const;

const filters = ["Todos", "Telecom", "Software", "Datos"] as const;
type Filter = (typeof filters)[number];

const formationPhotos = [
  {
    src: "/formacion/xirio-cobertura.jpeg",
    alt: "Simulación de cobertura radioeléctrica en Xirio Online",
    label: "Simulación de cobertura con Xirio Online",
    orientation: "landscape",
  },
  {
    src: "/formacion/antena-laboratorio.jpeg",
    alt: "Antena en un laboratorio de telecomunicaciones",
    label: "Medida de antenas en laboratorio",
    orientation: "portrait",
  },
  {
    src: "/formacion/analizador-vectorial.jpeg",
    alt: "Analizador vectorial de redes mostrando una medida de parámetros S",
    label: "Análisis de parámetros S",
    orientation: "portrait",
  },
  {
    src: "/formacion/antena-banda-ancha.jpeg",
    alt: "Antena de banda ancha conectada a instrumentación de laboratorio",
    label: "Caracterización de antenas",
    orientation: "portrait",
  },
  {
    src: "/formacion/medicion-multimetro.jpeg",
    alt: "Multímetro midiendo un componente en una práctica de laboratorio",
    label: "Mediciones electrónicas",
    orientation: "portrait",
  },
  {
    src: "/formacion/osciloscopio.jpeg",
    alt: "Osciloscopio mostrando dos señales periódicas",
    label: "Observación de señales",
    orientation: "portrait",
  },
  {
    src: "/formacion/simulacion-satelital.jpeg",
    alt: "Simulación de órbitas y enlaces entre satélites GEO y LEO",
    label: "Escenario de comunicaciones satelitales",
    orientation: "landscape",
  },
  {
    src: "/formacion/montaje-laboratorio.jpeg",
    alt: "Montaje de laboratorio de radiocomunicaciones con instrumentación y antenas",
    label: "Montaje de radiocomunicaciones",
    orientation: "landscape",
  },
  {
    src: "/formacion/esquema-django.jpeg",
    alt: "Esquema de arquitectura de una aplicación Django",
    label: "Arquitectura de aplicaciones web",
    orientation: "landscape",
  },
  {
    src: "/formacion/enlace-radio.jpeg",
    alt: "Equipo Rocket M5 de Ubiquiti Networks para un enlace radio",
    label: "Equipamiento para enlaces inalámbricos",
    orientation: "portrait",
  },
] as const;

function FormationCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activePhoto = formationPhotos[activeIndex];

  const showPrevious = useCallback(() => {
    setActiveIndex((currentIndex) => (currentIndex + formationPhotos.length - 1) % formationPhotos.length);
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % formationPhotos.length);
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
        aria-roledescription="carrusel"
        aria-label="Galería de formación universitaria"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <button
          className="formation-carousel-control formation-carousel-control-previous"
          type="button"
          onClick={showPrevious}
          aria-label="Ver foto anterior"
          title="Foto anterior"
        >
          <ChevronLeft size={20} strokeWidth={2} aria-hidden="true" />
        </button>
        <button
          className="formation-carousel-image-button"
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          aria-label={`Ampliar foto ${activeIndex + 1} de ${formationPhotos.length}: ${activePhoto.label}`}
          title="Ampliar fotografía"
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
          aria-label="Ver foto siguiente"
          title="Foto siguiente"
        >
          <ChevronRight size={20} strokeWidth={2} aria-hidden="true" />
        </button>
        <div className="formation-carousel-caption" aria-hidden="true">
          <span>{activePhoto.label}</span>
          <span>{String(activeIndex + 1).padStart(2, "0")} / {String(formationPhotos.length).padStart(2, "0")}</span>
        </div>
      </div>

      {isLightboxOpen && (
        <div className="formation-lightbox" role="dialog" aria-modal="true" aria-label={`Foto ampliada: ${activePhoto.label}`} onClick={() => setIsLightboxOpen(false)}>
          <div className="formation-lightbox-dialog" onClick={(event) => event.stopPropagation()}>
            <div className="formation-lightbox-toolbar">
              <span>{activePhoto.label}</span>
              <button
                ref={closeButtonRef}
                className="formation-lightbox-close"
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Cerrar foto ampliada"
                title="Cerrar"
              >
                <X size={20} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
            <div className="formation-lightbox-stage">
              <button
                className="formation-lightbox-control"
                type="button"
                onClick={showPrevious}
                aria-label="Ver foto anterior"
                title="Foto anterior"
              >
                <ChevronLeft size={24} strokeWidth={2} aria-hidden="true" />
              </button>
              <div className={`formation-lightbox-media is-${activePhoto.orientation}`}>
                <Image
                  key={`lightbox-${activePhoto.src}`}
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
                aria-label="Ver foto siguiente"
                title="Foto siguiente"
              >
                <ChevronRight size={24} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
            <p>{activeIndex + 1} de {formationPhotos.length}</p>
          </div>
        </div>
      )}
    </>
  );
}

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
          <a
            className="nav-cv-preview"
            href={cvFile}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir currículum de Gonzalo Pacheco Agredano"
            data-tooltip="Ver CV"
            onClick={closeMenu}
          >
            <Image src="/cv-navigation-preview.png" alt="" width={34} height={40} sizes="34px" />
          </a>
          {navigation.map(([label, id]) => (
            <a href={`#${id}`} key={id} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <div className="nav-contact-icons" role="group" aria-label="Enlaces de contacto">
            <a
              className="nav-contact-icon"
              href={`mailto:${email}`}
              aria-label="Enviar correo a Gonzalo Pacheco Agredano"
              data-tooltip="Correo"
              onClick={closeMenu}
            >
              <Mail size={17} strokeWidth={1.8} />
            </a>
            <a
              className="nav-contact-icon"
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir GitHub de Gonzalo Pacheco Agredano"
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
              aria-label="Abrir LinkedIn de Gonzalo Pacheco Agredano"
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
              <p className="hero-university">
                <BookOpen size={16} />
                <span>Universidad Rey Juan Carlos</span>
                <Image className="urjc-logo" src="/urjc-eif-logo.png" alt="Logotipo de la Universidad Rey Juan Carlos" width={2560} height={642} />
              </p>
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
                Soy un estudiante de último curso del grado en Ingeniería en Sistemas de
                Telecomunicación, en la Universidad Rey Juan Carlos, Escuela de Ingeniería de
                Fuenlabrada.
              </p>
              <p>
                Durante la carrera he orientado mis proyectos y formación hacia sistemas de
                comunicaciones y comportamiento de red, intentando entender cómo influyen las
                decisiones de diseño en el rendimiento, la eficiencia y la calidad de servicio. Para
                ello, he trabajado con simulación, tratamiento de datos y desarrollo técnico utilizando,
                entre otros, Python, Rust, C y, sobre todo, MATLAB. En estos últimos cursos también he
                podido profundizar en el modelado de canal radio y la evaluación de KPIs.
              </p>
              <p className="profile-interest-intro">
                Entre mis intereses, y a lo que me gustaría aplicar mi base técnica adquirida, se
                encuentran:
              </p>
              <ul className="profile-interest-list" aria-label="Intereses técnicos">
                {profileInterests.map(({ label, icon: Icon }) => (
                  <li key={label}>
                    <Icon size={18} strokeWidth={1.65} aria-hidden="true" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
              <a className="text-link" href={cvFile} target="_blank" rel="noreferrer">
                Consultar CV detallado <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="profile-sidebar reveal">
              <aside className="profile-data-card" aria-label="Datos de perfil">
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
                    <GraduationCap size={20} strokeWidth={1.6} />
                    <div>
                      <dt>Formación</dt>
                      <dd>URJC · Ingeniería de Telecomunicación</dd>
                    </div>
                  </div>
                  <div>
                    <Network size={20} strokeWidth={1.6} />
                    <div>
                      <dt>Perfil</dt>
                      <dd>Radiocomunicaciones móviles, antenas, simulaciones, KPIs y programación</dd>
                    </div>
                  </div>
                  <div>
                    <Radio size={20} strokeWidth={1.6} />
                    <div>
                      <dt>Intereses</dt>
                      <dd>5G/6G, satélite, red y datos</dd>
                    </div>
                  </div>
                </dl>
              </aside>
              <section className="profile-personal-card" aria-labelledby="personal-profile-heading">
                <h3 className="profile-data-heading" id="personal-profile-heading">Sobre mí como persona</h3>
                <p>
                  Soy una persona muy responsable, metódico y autoexigente. Me desenvuelvo bien
                  trabajando con otras personas, me gusta tomar la iniciativa, siempre intentando
                  aprender escuchando, observando y preguntando por aquello que no sepa o entienda.
                </p>
                <p>
                  Me apasionan las innovaciones tecnológicas, sobre todo poder aportar en el avance
                  de las telecomunicaciones. Hoy en día vivimos en una sociedad que demanda una alta
                  tasa de datos, baja latencia y una alta fiabilidad. He aprendido durante estos años
                  en el grado a desarrollar un pensamiento estructurado, aprendiendo y entendiendo
                  cada paso que hago. Me tomo muy en serio todo lo que hago y tengo mucha ilusión por
                  seguir aprendiendo cada día. Quiero aplicar en un entorno real la base académica
                  adquirida.
                </p>
              </section>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="proyectos">
          <div className="section-heading reveal">
            <div className="section-marker" data-section-marker><span>02</span> Proyectos</div>
            <h2 className="projects-heading">Algunos proyectos que he realizado en la Universidad y que ahora puedo mostrar:</h2>
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
                <article className="project-card reveal" key={project.title} style={{ animationDelay: `${index * 45}ms` }}>
                  <div className="project-media">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 580px) 100vw, (max-width: 880px) 50vw, 33vw"
                    />
                  </div>
                  <div className="project-card-body">
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
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section skills-section" id="habilidades" aria-labelledby="skills-title">
          <div className="skills-intro">
            <div className="skills-intro-inner reveal">
              <div className="section-marker" data-section-marker><span>03</span> Habilidades</div>
              <h2 id="skills-title">Habilidades</h2>
              <p>Aptitudes que he ido adquiriendo y tecnologías/herramientas con las que he trabajado.</p>
            </div>
          </div>
          <div className="skills-grid" aria-label="Aptitudes técnicas">
            {skillGroups.map((group, groupIndex) => {
              const Icon = group.icon;
              const featuredItems = group.items.filter((item) => item.featured);
              const additionalItems = group.items.filter((item) => !item.featured);

              return (
                <article
                  className="skill-card reveal"
                  key={group.label}
                  style={{ animationDelay: `${groupIndex * 80}ms` }}
                >
                  <div className="skill-card-media">
                    <Image
                      src={group.image}
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
                    <ul className="skill-card-featured" aria-label={`Habilidades principales de ${group.label}`}>
                      {featuredItems.map((item) => <li key={item.label}>{item.label}</li>)}
                    </ul>
                    <details className="skill-card-more">
                      <summary>
                        <span>Ver {additionalItems.length} aptitudes</span>
                        <ChevronDown size={17} strokeWidth={1.8} aria-hidden="true" />
                      </summary>
                      <ul className="skill-list" aria-label={`Más aptitudes de ${group.label}`}>
                        {additionalItems.map((item) => <li key={item.label}>{item.label}</li>)}
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
            <div className="section-marker" data-section-marker><span>04</span> Trayectoria</div>
            <h2 className="trajectory-heading">Formación, con la vista puesta en <em>siguientes desafíos.</em></h2>
          </div>
          <div className="trajectory-grid">
            <article className="timeline-card timeline-card-education reveal">
              <FormationCarousel />
              <div className="education-card-content">
                <div className="timeline-heading"><GraduationCap size={25} strokeWidth={1.5} /><span>Formación</span></div>
                <p className="timeline-date">2022 - actualidad</p>
                <h3>Grado en Ingeniería en Sistemas de Telecomunicación</h3>
                <p>Universidad Rey Juan Carlos, Fuenlabrada. Finalización prevista: junio de 2027.</p>
                <p className="timeline-note">Redes, radiocomunicaciones móviles, satélite, señales y software de sistemas.</p>
                <div className="timeline-links">
                  <a
                    className="timeline-link"
                    href="https://wuolah.com/profile/gonzalo_pacheco"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Ver apuntes de Gonzalo Pacheco en Wuolah"
                  >
                    Ver apuntes en Wuolah <ExternalLink size={15} />
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
                      aria-label="Abrir el itinerario formativo del grado en la Universidad Rey Juan Carlos"
                    >
                      Itinerario del Grado <ExternalLink size={15} />
                    </button>
                  </form>
                </div>
              </div>
            </article>
            <Link
              className="timeline-card timeline-card-tfg reveal"
              href="/tfg"
              aria-label="Abrir la píldora del Trabajo Fin de Grado"
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
                <p className="timeline-note">Una píldora para documentar el desarrollo con contexto técnico.</p>
                <span className="timeline-card-cta">Abrir píldora del TFG <ArrowUpRight size={15} /></span>
              </div>
            </Link>
            <Link
              className="timeline-card timeline-card-ntt reveal"
              href="/practicas"
              aria-label="Abrir la píldora de prácticas curriculares en NTT DATA"
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
                <span className="timeline-card-cta">Ver píldora de prácticas <ArrowUpRight size={15} /></span>
              </div>
            </Link>
          </div>
        </section>

        <section className="section credentials-section" id="certificaciones">
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
              <h2>¿Te apetece hablar conmigo sobre algún proyecto o idea?</h2>
              <p>
                Estoy abierto a conversar acerca de cualquier proyecto que se me proponga a participar o colaborar relacionado con mis temas de interés mencionados previamente. También estoy disponible para hablar de cualquier oportunidad de trabajo o proyecto del que pueda formar parte, así como cualquier duda o pregunta acerca de mí o de mi trabajo a la que pueda aportar personalmente algún valor.
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
