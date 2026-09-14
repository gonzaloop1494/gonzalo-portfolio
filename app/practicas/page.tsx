import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Prácticas en NTT DATA | Gonzalo Pacheco",
  description:
    "Bitácora de las prácticas curriculares de Gonzalo Pacheco Agredano en NTT DATA Spain.",
};

const focusAreas = [
  {
    icon: Network,
    title: "Validación de red",
    description: "Pruebas funcionales y técnicas de soluciones, procesos, interfaces y componentes.",
  },
  {
    icon: Workflow,
    title: "Automatización",
    description: "Apoyo a procesos automatizados mediante scripts, APIs y herramientas de integración.",
  },
  {
    icon: Route,
    title: "Provisión y OSS",
    description: "Aprendizaje sobre inventario, provisión y gestión de recursos de red fija.",
  },
  {
    icon: FileText,
    title: "Datos y documentación",
    description: "Coherencia de datos end-to-end y documentación funcional y técnica de resultados.",
  },
];

const timeline = [
  {
    date: "1 de septiembre de 2026",
    title: "Anexo formalizado",
    description: "Se formaliza el periodo de prácticas curriculares entre la Universidad Rey Juan Carlos y NTT DATA Spain.",
  },
  {
    date: "22 de septiembre de 2026",
    title: "Inicio del periodo",
    description: "Comienza el periodo previsto de 350 horas, con una dedicación de 35 horas semanales.",
  },
  {
    date: "Octubre - noviembre de 2026",
    title: "Desarrollo del proyecto",
    description: "Fase centrada en validación, automatización, análisis de procesos y trazabilidad de datos de red.",
  },
  {
    date: "2 de diciembre de 2026",
    title: "Cierre previsto",
    description: "Cierre del periodo formativo y recopilación de aprendizajes, resultados y próximos pasos.",
  },
];

const periodStages = [
  {
    icon: FileText,
    label: "Preparación",
    detail: "Septiembre",
  },
  {
    icon: Workflow,
    label: "Desarrollo",
    detail: "Octubre - noviembre",
  },
  {
    icon: CheckCircle2,
    label: "Cierre",
    detail: "Diciembre",
  },
];

export default function PracticesPage() {
  return (
    <main className="practice-page">
      <a className="skip-link" href="#bitacora">Ir a la bitácora de prácticas</a>

      <header className="practice-header">
        <div className="practice-header-inner">
          <Link className="brand-lockup" href="/" aria-label="Volver al portfolio de Gonzalo Pacheco Agredano">
            <span className="wordmark" aria-hidden="true">GP<span>.</span></span>
            <span className="header-signature" aria-hidden="true">GONZALO PACHECO AGREDANO</span>
          </Link>
          <nav className="practice-nav" aria-label="Navegación de prácticas">
            <a href="#bitacora">Bitácora</a>
            <Link className="practice-back-link" href="/#trayectoria">
              <ArrowLeft size={16} /> Portfolio
            </Link>
          </nav>
        </div>
      </header>

      <section className="practice-hero" aria-labelledby="practicas-title">
        <div className="practice-hero-copy">
          <p className="eyebrow"><span /> Prácticas curriculares · 2026</p>
          <h1 id="practicas-title">Una bitácora de prácticas con foco en <em>red y automatización.</em></h1>
          <p>
            Este espacio recoge el contexto, los hitos y los aprendizajes que vaya desarrollando
            durante mis prácticas curriculares en NTT DATA Spain.
          </p>
          <div className="practice-hero-actions">
            <a className="button button-primary" href="#bitacora">
              Explorar la bitácora <ArrowDownRight size={17} />
            </a>
            <Link className="button button-secondary" href="/#trayectoria">
              Volver al portfolio <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        <aside className="practice-hero-aside" aria-label="Datos principales de las prácticas">
          <div className="practice-logo-panel">
            <Image
              src="/ntt-data-practicas.png"
              alt="NTT DATA"
              width={617}
              height={324}
              priority
            />
          </div>
          <dl className="practice-stat-list">
            <div>
              <dt><CalendarDays size={18} /> Periodo formalizado</dt>
              <dd>22 sep - 2 dic 2026</dd>
            </div>
            <div>
              <dt><Clock3 size={18} /> Dedicación</dt>
              <dd>350 horas · 35 h/semana</dd>
            </div>
          </dl>
        </aside>
      </section>

      <div id="bitacora" className="practice-content">
        <section className="practice-section practice-summary" aria-labelledby="contexto-title">
          <div className="practice-section-heading">
            <p className="section-marker"><span>01</span> Contexto formativo</p>
            <h2 id="contexto-title">El punto de partida del <em>proyecto.</em></h2>
          </div>
          <div className="practice-summary-layout">
            <article className="practice-entry">
              <p className="practice-entry-label">Entrada inicial</p>
              <h3>Red fija, hiperautomatización y procesos end-to-end</h3>
              <p>
                El proyecto formativo está orientado a aplicar la base académica en la validación
                funcional y técnica de soluciones de red fija e hiperautomatización. El trabajo
                conecta pruebas, procesos, interfaces, integraciones y calidad de los datos.
              </p>
              <p>
                Esta bitácora irá recogiendo los hitos del periodo, los aprendizajes técnicos y
                las conclusiones que puedan compartirse con contexto profesional.
              </p>
            </article>
            <div className="practice-focus-list" aria-label="Áreas de trabajo">
              {focusAreas.map(({ icon: Icon, title, description }, index) => (
                <div key={title}>
                  <span className="practice-focus-index">0{index + 1}</span>
                  <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="practice-section practice-roadmap" aria-labelledby="timeline-title">
          <div className="practice-section-heading">
            <p className="section-marker"><span>02</span> Timeline</p>
            <h2 id="timeline-title">Hitos del periodo <em>formalizado.</em></h2>
          </div>
          <div className="practice-roadmap-layout">
            <ol className="practice-timeline">
              {timeline.map(({ date, title, description }, index) => (
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
              <p className="practice-entry-label">Universidad Rey Juan Carlos</p>
              <h3>Periodo de prácticas curriculares</h3>
              <p>
                Un recorrido formativo centrado en red fija, automatización y calidad de los datos.
              </p>
              <ol className="practice-period-stages" aria-label="Fases del periodo de prácticas">
                {periodStages.map(({ icon: Icon, label, detail }) => (
                  <li key={label}>
                    <Icon size={17} strokeWidth={1.6} aria-hidden="true" />
                    <div>
                      <strong>{label}</strong>
                      <span>{detail}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </aside>
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
