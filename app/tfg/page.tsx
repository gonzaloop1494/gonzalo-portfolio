import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Píldora del TFG | Gonzalo Pacheco",
  description:
    "Píldora del Trabajo Fin de Grado de Gonzalo Pacheco Agredano sobre escenarios Cell-Free asistidos por RIS.",
};

const researchFocus = [
  {
    icon: Network,
    title: "Escenarios Cell-Free",
    description:
      "Marco de trabajo para estudiar redes distribuidas con coordinación entre puntos de acceso y usuarios.",
  },
  {
    icon: Radio,
    title: "Superficies RIS",
    description:
      "Estudio de superficies inteligentes reconfigurables y de su papel en el control del canal radio.",
  },
  {
    icon: BrainCircuit,
    title: "Meta-átomos y usuarios",
    description:
      "Línea de exploración orientada a estudiar la relación entre cada elemento RIS y cada usuario del sistema.",
  },
];

const roadmap = [
  {
    date: "Septiembre de 2026",
    title: "Base teórica",
    description:
      "Primera lectura de los artículos y memorias de referencia para fijar vocabulario, hipótesis y modelo de sistema.",
  },
  {
    date: "Bloque de lecturas",
    title: "Cell-Free y RIS",
    description:
      "Profundización en arquitectura Cell-Free, selección RIS-MS, estimación de canal y métricas de eficiencia espectral.",
  },
  {
    date: "Código de partida",
    title: "Análisis de MATLAB",
    description:
      "Revisión detallada del código que reproduce figuras: entradas, modelos de canal, salidas, supuestos y variantes posibles.",
  },
  {
    date: "Diseño del escenario",
    title: "Modelo del TFG",
    description:
      "Definición progresiva, junto al tutor, del escenario de simulación y de la granularidad meta-átomo-usuario a estudiar.",
  },
  {
    date: "Simulación y resultados",
    title: "Comparativas de rendimiento",
    description:
      "Diseño de experimentos y evaluación de eficiencia espectral y otros indicadores de rendimiento relevantes.",
  },
];

const bibliography = [
  {
    type: "Paper de partida",
    title: "RIS-Assisted Cell-Free Massive MIMO: RIS-MS Selection in FR1 and FR3",
    authors: "Alejandro de la Fuente, Fernando Galindo, Uriel García-Bárbulo, Sandra-Noemy Arana-Alegre y Jan García-Morales.",
    description:
      "Primera toma de contacto con escenarios Cell-Free asistidos por RIS y con la selección RIS-MS en bandas FR1 y FR3.",
    status: "Lectura inicial",
    pdfHref: "/tfg/bibliografia/ris-assisted-cell-free-ris-ms-selection-fr1-fr3.pdf",
  },
  {
    type: "Memoria TFG",
    title: "Estudio de escenarios Cell-Free en distintas bandas de frecuencia: asistencia de RIS para mejora de prestaciones",
    authors: "Sandra Noemí Arana-Alegre.",
    description:
      "Primera memoria de referencia para consolidar una base sobre escenarios Cell-Free, bandas de frecuencia y asistencia RIS.",
    status: "Base de conocimiento",
    pdfHref: "/tfg/bibliografia/memoria-sandra-arana-cell-free-ris.pdf",
  },
  {
    type: "Memoria TFG",
    title: "Estudio en algoritmo de asignación de RIS en entornos 6G Cell-Free basado en radios de conectividad",
    authors: "Uriel García-Bárbulo.",
    description:
      "Referencia para comprender aproximaciones de asignación RIS en entornos 6G Cell-Free y contrastar decisiones de modelado.",
    status: "Referencia de algoritmo",
    pdfHref: "/tfg/bibliografia/memoria-uriel-garcia-asignacion-ris.pdf",
  },
  {
    type: "Memoria TFG",
    title: "Estimación de canal mediante agrupación de elementos RIS en sistemas Cell-Free",
    authors: "Fernando Galindo.",
    description:
      "Memoria centrada en estimación de canal y agrupación de elementos RIS, especialmente relevante para la granularidad del modelo.",
    status: "Referencia de canal",
    pdfHref: "/tfg/bibliografia/memoria-fernando-galindo-estimacion-canal.pdf",
  },
  {
    type: "Libro",
    title: "Foundations of User-Centric Cell-Free Massive MIMO",
    authors: "Lectura completa prevista.",
    description:
      "Fundamento teórico principal para el enfoque User-Centric Cell-Free Massive MIMO y para el lenguaje de los modelos y métricas.",
    status: "Lectura completa",
    pdfHref: "/tfg/bibliografia/foundations-user-centric-cell-free-massive-mimo.pdf",
    codeHref: "/tfg/codigo/user-centric-cell-free-massive-mimo-matlab.zip",
  },
  {
    type: "Libro",
    title: "Introduction to Multiple Antenna Communications and Reconfigurable Surfaces",
    authors: "Foco de lectura: capítulo 9, Reconfigurable Surfaces.",
    description:
      "Referencia sobre comunicaciones multiantena y superficies reconfigurables; el capítulo 9 concentra el estudio específico de RIS.",
    status: "Capítulo 9",
    pdfHref: "/tfg/bibliografia/introduction-multiple-antenna-ris.pdf",
    codeHref: "/tfg/codigo/multiple-antenna-ris-matlab.zip",
  },
  {
    type: "Paper IEEE",
    title: "Is Channel Estimation Necessary to Select Phase-Shifts for RIS-Assisted Massive MIMO?",
    authors: "Özlem Tuğfe Demir y Emil Björnson, IEEE Transactions on Wireless Communications, 2022.",
    description:
      "Artículo que inspira el estudio de control por elemento RIS, estimación de canal, configuraciones de corto y largo plazo y eficiencia espectral.",
    status: "Marco metodológico",
    pdfHref: "/tfg/bibliografia/channel-estimation-phase-shifts-ris-massive-mimo.pdf",
  },
];

export default function TfgPage() {
  return (
    <main className="tfg-page">
      <a className="skip-link" href="#pildora">Ir a la píldora del TFG</a>

      <header className="practice-header">
        <div className="practice-header-inner">
          <Link className="brand-lockup" href="/" aria-label="Volver al portfolio de Gonzalo Pacheco Agredano">
            <span className="wordmark" aria-hidden="true">GP<span>.</span></span>
            <span className="header-signature" aria-hidden="true">GONZALO PACHECO AGREDANO</span>
          </Link>
          <nav className="practice-nav" aria-label="Navegación del Trabajo Fin de Grado">
            <a href="#pildora">Píldora</a>
            <a href="#bibliografia">Bibliografía</a>
            <Link className="practice-back-link" href="/#trayectoria">
              <ArrowLeft size={16} /> Portfolio
            </Link>
          </nav>
        </div>
      </header>

      <section className="tfg-hero" aria-labelledby="tfg-title">
        <div className="tfg-hero-copy">
          <p className="eyebrow"><span /> Trabajo Fin de Grado · 2026-2027</p>
          <h1 id="tfg-title">Cell-Free con superficies <em>RIS.</em></h1>
          <p>
            Píldora de un Trabajo Fin de Grado cuyo título definitivo está aún en definición.
            La línea de investigación parte de escenarios Cell-Free asistidos por RIS como propuesta
            para comunicaciones 6G.
          </p>
          <div className="practice-hero-actions">
            <a className="button button-primary" href="#pildora">
              Explorar la píldora <ArrowDownRight size={17} />
            </a>
            <a className="button button-secondary" href="#bibliografia">
              Ver bibliografía <BookOpenText size={17} />
            </a>
          </div>
        </div>

        <aside className="tfg-hero-aside" aria-label="Datos principales del TFG">
          <div className="tfg-hero-image-frame">
            <Image
              className="tfg-hero-image"
              src="/tfg-6g-ris.png"
              alt="Ilustración conceptual de una red 6G Cell-Free asistida por superficies RIS"
              fill
              priority
              sizes="(max-width: 880px) 88vw, 33vw"
            />
          </div>
          <dl className="tfg-stat-list">
            <div>
              <dt><GraduationCap size={18} /> Tutor</dt>
              <dd>Alejandro de la Fuente Iglesias</dd>
            </div>
            <div>
              <dt><Network size={18} /> Línea</dt>
              <dd>Cell-Free asistido por RIS</dd>
            </div>
            <div>
              <dt><BrainCircuit size={18} /> Estado</dt>
              <dd>Base teórica en desarrollo</dd>
            </div>
          </dl>
        </aside>
      </section>

      <div id="pildora" className="tfg-content">
        <section className="tfg-section" aria-labelledby="contexto-title">
          <div className="practice-section-heading">
            <p className="section-marker"><span>01</span> Píldora</p>
            <h2 id="contexto-title">Antes de simular, hay que <em>entender.</em></h2>
          </div>
          <div className="tfg-intro-layout">
            <article className="practice-entry">
              <p className="practice-entry-label">Entrada inicial</p>
              <h3>Un modelo Cell-Free asistido por RIS</h3>
              <p>
                Durante el curso 2026-2027 desarrollaré este Trabajo Fin de Grado en el Grado en
                Ingeniería en Sistemas de Telecomunicación de la Universidad Rey Juan Carlos, bajo
                la tutela de Alejandro de la Fuente Iglesias.
              </p>
              <p>
                El proyecto se construirá sobre escenarios Cell-Free asistidos por superficies
                inteligentes reconfigurables. La primera fase está dedicada a fijar una base
                teórica sólida antes de concretar el título y el escenario definitivo.
              </p>
            </article>
            <aside className="tfg-research-note">
              <BrainCircuit size={27} strokeWidth={1.5} aria-hidden="true" />
              <p className="practice-entry-label">Hipótesis de exploración</p>
              <h3>Del RIS-usuario al meta-átomo-usuario</h3>
              <p>
                La línea propuesta explora un modelo que no se limite a la asignación RIS-usuario,
                sino que estudie la relación entre cada meta-átomo de la RIS y cada usuario del
                sistema. Esta granularidad abre una vía para plantear nuevas variantes de simulación.
              </p>
              <p className="tfg-source-line"><FileText size={16} /> Punto de partida: selección de phase-shifts y estimación de canal en RIS-assisted Massive MIMO.</p>
            </aside>
          </div>
        </section>

        <section className="tfg-section tfg-focus-section" aria-labelledby="focus-title">
          <div className="practice-section-heading">
            <p className="section-marker"><span>02</span> Línea de trabajo</p>
            <h2 id="focus-title">El sistema, desglosado en <em>capas.</em></h2>
          </div>
          <div className="tfg-focus-grid" aria-label="Focos técnicos del TFG">
            {researchFocus.map(({ icon: Icon, title, description }, index) => (
              <article className="tfg-focus-card" key={title}>
                <div className="tfg-focus-card-top">
                  <span>0{index + 1}</span>
                  <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="tfg-section" aria-labelledby="roadmap-title">
          <div className="practice-section-heading">
            <p className="section-marker"><span>03</span> Hoja de ruta</p>
            <h2 id="roadmap-title">De la lectura al <em>modelo.</em></h2>
          </div>
          <div className="tfg-roadmap-layout">
            <ol className="practice-timeline">
              {roadmap.map(({ date, title, description }, index) => (
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
              <p className="practice-entry-label">Material de simulación</p>
              <h3>MATLAB como entorno de trabajo</h3>
              <p>
                El material de partida incluye código para reproducir figuras de las referencias.
                El objetivo inicial es comprender su estructura, sus supuestos y sus resultados antes
                de proponer variantes adaptadas al TFG.
              </p>
            </aside>
          </div>
        </section>

        <section id="bibliografia" className="tfg-section tfg-bibliography-section" aria-labelledby="bibliography-title">
          <div className="practice-section-heading">
            <p className="section-marker"><span>04</span> Bibliografía</p>
            <h2 id="bibliography-title">Lecturas para construir una <em>base sólida.</em></h2>
          </div>
          <p className="tfg-bibliography-intro">
            Referencias seleccionadas para la primera fase de investigación. La píldora irá
            registrando las ideas, supuestos y conexiones que surjan de cada lectura.
          </p>
          <div className="tfg-bibliography-grid">
            {bibliography.map(({ type, title, authors, description, status, pdfHref, codeHref }, index) => (
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
                      aria-label={`Abrir el PDF de ${title}`}
                    >
                      Abrir PDF <FileText size={14} aria-hidden="true" />
                    </a>
                    {codeHref ? (
                      <a
                        className="tfg-reference-action"
                        href={codeHref}
                        download
                        aria-label={`Descargar el código MATLAB de ${title}`}
                      >
                        Código MATLAB <Download size={14} aria-hidden="true" />
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
        <Link href="/">Portfolio principal <ArrowUpRight size={15} /></Link>
      </footer>
    </main>
  );
}
