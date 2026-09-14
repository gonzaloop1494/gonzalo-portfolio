import type { Locale } from "./locales";

type FocusCopy = {
  title: string;
  description: string;
};

type RoadmapCopy = {
  date: string;
  title: string;
  description: string;
};

type ReferenceCopy = {
  type: string;
  title: string;
  authors: string;
  description: string;
  status: string;
  pdfHref: string;
  codeHref?: string;
};

type TfgCopy = {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    skip: string;
    brand: string;
    label: string;
    overview: string;
    bibliography: string;
    portfolio: string;
  };
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleEmphasis: string;
    description: string;
    explore: string;
    viewBibliography: string;
    detailsLabel: string;
    imageAlt: string;
    tutor: string;
    researchLine: string;
    status: string;
    researchLineValue: string;
    statusValue: string;
  };
  introduction: {
    marker: string;
    headingBefore: string;
    headingEmphasis: string;
    entry: string;
    title: string;
    paragraphs: string[];
    hypothesis: string;
    hypothesisTitle: string;
    hypothesisText: string;
    source: string;
  };
  focus: {
    marker: string;
    headingBefore: string;
    headingEmphasis: string;
    label: string;
    items: FocusCopy[];
  };
  roadmap: {
    marker: string;
    headingBefore: string;
    headingEmphasis: string;
    items: RoadmapCopy[];
    material: string;
    materialTitle: string;
    materialText: string;
  };
  bibliography: {
    marker: string;
    headingBefore: string;
    headingEmphasis: string;
    intro: string;
    openPdf: string;
    downloadCode: string;
    references: ReferenceCopy[];
  };
  footer: {
    portfolio: string;
  };
};

export const tfgCopy: Record<Locale, TfgCopy> = {
  es: {
    metadata: {
      title: "Píldora del TFG | Gonzalo Pacheco Agredano",
      description:
        "Píldora del Trabajo Fin de Grado de Gonzalo Pacheco Agredano sobre escenarios Cell-Free asistidos por RIS.",
    },
    nav: {
      skip: "Ir a la píldora del TFG",
      brand: "Volver al portfolio de Gonzalo Pacheco Agredano",
      label: "Navegación del Trabajo Fin de Grado",
      overview: "Píldora",
      bibliography: "Bibliografía",
      portfolio: "Portfolio",
    },
    hero: {
      eyebrow: "Trabajo Fin de Grado · 2026-2027",
      titleBefore: "Cell-Free con superficies",
      titleEmphasis: "RIS.",
      description:
        "Píldora de un Trabajo Fin de Grado cuyo título definitivo está aún en definición. La línea de investigación parte de escenarios Cell-Free asistidos por RIS como propuesta para comunicaciones 6G.",
      explore: "Explorar la píldora",
      viewBibliography: "Ver bibliografía",
      detailsLabel: "Datos principales del TFG",
      imageAlt: "Ilustración conceptual de una red 6G Cell-Free asistida por superficies RIS",
      tutor: "Tutor",
      researchLine: "Línea",
      status: "Estado",
      researchLineValue: "Cell-Free asistido por RIS",
      statusValue: "Base teórica en desarrollo",
    },
    introduction: {
      marker: "Píldora",
      headingBefore: "Antes de simular, hay que",
      headingEmphasis: "entender.",
      entry: "Entrada inicial",
      title: "Un modelo Cell-Free asistido por RIS",
      paragraphs: [
        "Durante el curso 2026-2027 desarrollaré este Trabajo Fin de Grado en el Grado en Ingeniería en Sistemas de Telecomunicación de la Universidad Rey Juan Carlos, bajo la tutela de Alejandro de la Fuente Iglesias.",
        "El proyecto se construirá sobre escenarios Cell-Free asistidos por superficies inteligentes reconfigurables. La primera fase está dedicada a fijar una base teórica sólida antes de concretar el título y el escenario definitivo.",
      ],
      hypothesis: "Hipótesis de exploración",
      hypothesisTitle: "Del RIS-usuario al meta-átomo-usuario",
      hypothesisText:
        "La línea propuesta explora un modelo que no se limite a la asignación RIS-usuario, sino que estudie la relación entre cada meta-átomo de la RIS y cada usuario del sistema. Esta granularidad abre una vía para plantear nuevas variantes de simulación.",
      source:
        "Punto de partida: selección de phase-shifts y estimación de canal en RIS-assisted Massive MIMO.",
    },
    focus: {
      marker: "Línea de trabajo",
      headingBefore: "El sistema, desglosado en",
      headingEmphasis: "capas.",
      label: "Focos técnicos del TFG",
      items: [
        {
          title: "Escenarios Cell-Free",
          description:
            "Marco de trabajo para estudiar redes distribuidas con coordinación entre puntos de acceso y usuarios.",
        },
        {
          title: "Superficies RIS",
          description:
            "Estudio de superficies inteligentes reconfigurables y de su papel en el control del canal radio.",
        },
        {
          title: "Meta-átomos y usuarios",
          description:
            "Línea de exploración orientada a estudiar la relación entre cada elemento RIS y cada usuario del sistema.",
        },
      ],
    },
    roadmap: {
      marker: "Hoja de ruta",
      headingBefore: "De la lectura al",
      headingEmphasis: "modelo.",
      items: [
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
      ],
      material: "Material de simulación",
      materialTitle: "MATLAB como entorno de trabajo",
      materialText:
        "El material de partida incluye código para reproducir figuras de las referencias. El objetivo inicial es comprender su estructura, sus supuestos y sus resultados antes de proponer variantes adaptadas al TFG.",
    },
    bibliography: {
      marker: "Bibliografía",
      headingBefore: "Lecturas para construir una",
      headingEmphasis: "base sólida.",
      intro:
        "Referencias seleccionadas para la primera fase de investigación. La píldora irá registrando las ideas, supuestos y conexiones que surjan de cada lectura.",
      openPdf: "Abrir PDF",
      downloadCode: "Código MATLAB",
      references: [
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
      ],
    },
    footer: {
      portfolio: "Portfolio principal",
    },
  },
  en: {
    metadata: {
      title: "Bachelor's Thesis Overview | Gonzalo Pacheco Agredano",
      description:
        "Bachelor's Thesis overview by Gonzalo Pacheco Agredano on RIS-assisted Cell-Free scenarios.",
    },
    nav: {
      skip: "Skip to the Bachelor's Thesis overview",
      brand: "Return to Gonzalo Pacheco Agredano's portfolio",
      label: "Bachelor's Thesis navigation",
      overview: "Overview",
      bibliography: "Bibliography",
      portfolio: "Portfolio",
    },
    hero: {
      eyebrow: "Bachelor's Thesis · 2026-2027",
      titleBefore: "Cell-Free with",
      titleEmphasis: "RIS surfaces.",
      description:
        "Overview of a Bachelor's Thesis whose final title is still being defined. The research line starts from RIS-assisted Cell-Free scenarios as a proposal for 6G communications.",
      explore: "Explore the overview",
      viewBibliography: "View bibliography",
      detailsLabel: "Bachelor's Thesis details",
      imageAlt: "Conceptual illustration of a 6G Cell-Free network assisted by RIS surfaces",
      tutor: "Supervisor",
      researchLine: "Research line",
      status: "Status",
      researchLineValue: "RIS-assisted Cell-Free",
      statusValue: "Theoretical foundation in progress",
    },
    introduction: {
      marker: "Overview",
      headingBefore: "Before simulating, you need to",
      headingEmphasis: "understand.",
      entry: "Initial entry",
      title: "An RIS-assisted Cell-Free model",
      paragraphs: [
        "During the 2026-2027 academic year, I will develop this Bachelor's Thesis within the Bachelor's Degree in Telecommunications Systems Engineering at Universidad Rey Juan Carlos, under the supervision of Alejandro de la Fuente Iglesias.",
        "The project will build on Cell-Free scenarios assisted by reconfigurable intelligent surfaces. The first phase is devoted to establishing a solid theoretical basis before defining the final title and scenario.",
      ],
      hypothesis: "Exploration hypothesis",
      hypothesisTitle: "From RIS-user to meta-atom-user",
      hypothesisText:
        "The proposed line explores a model that is not limited to RIS-user assignment, but examines the relationship between each RIS meta-atom and each system user. This granularity opens a path to new simulation variants.",
      source:
        "Starting point: phase-shift selection and channel estimation in RIS-assisted Massive MIMO.",
    },
    focus: {
      marker: "Research focus",
      headingBefore: "The system, broken down into",
      headingEmphasis: "layers.",
      label: "Bachelor's Thesis technical focus areas",
      items: [
        {
          title: "Cell-Free scenarios",
          description:
            "Framework for studying distributed networks with coordination between access points and users.",
        },
        {
          title: "RIS surfaces",
          description:
            "Study of reconfigurable intelligent surfaces and their role in radio-channel control.",
        },
        {
          title: "Meta-atoms and users",
          description:
            "Research line focused on studying the relationship between each RIS element and each system user.",
        },
      ],
    },
    roadmap: {
      marker: "Roadmap",
      headingBefore: "From reading to",
      headingEmphasis: "model.",
      items: [
        {
          date: "September 2026",
          title: "Theoretical foundation",
          description:
            "Initial reading of the reference papers and theses to establish vocabulary, hypotheses and the system model.",
        },
        {
          date: "Reading block",
          title: "Cell-Free and RIS",
          description:
            "In-depth study of Cell-Free architecture, RIS-MS selection, channel estimation and spectral-efficiency metrics.",
        },
        {
          date: "Starting code",
          title: "MATLAB analysis",
          description:
            "Detailed review of the code used to reproduce figures: inputs, channel models, outputs, assumptions and possible variants.",
        },
        {
          date: "Scenario design",
          title: "Thesis model",
          description:
            "Progressive definition, together with the supervisor, of the simulation scenario and the meta-atom-to-user granularity to study.",
        },
        {
          date: "Simulation and results",
          title: "Performance comparisons",
          description:
            "Experimental design and evaluation of spectral efficiency and other relevant performance indicators.",
        },
      ],
      material: "Simulation material",
      materialTitle: "MATLAB as the working environment",
      materialText:
        "The starting material includes code to reproduce figures from the references. The initial goal is to understand its structure, assumptions and results before proposing variants tailored to the thesis.",
    },
    bibliography: {
      marker: "Bibliography",
      headingBefore: "Readings for building a",
      headingEmphasis: "solid foundation.",
      intro:
        "Selected references for the first research phase. The overview will document the ideas, assumptions and connections that emerge from each reading.",
      openPdf: "Open PDF",
      downloadCode: "MATLAB code",
      references: [
        {
          type: "Starting paper",
          title: "RIS-Assisted Cell-Free Massive MIMO: RIS-MS Selection in FR1 and FR3",
          authors: "Alejandro de la Fuente, Fernando Galindo, Uriel García-Bárbulo, Sandra-Noemy Arana-Alegre and Jan García-Morales.",
          description:
            "First contact with RIS-assisted Cell-Free scenarios and RIS-MS selection in the FR1 and FR3 bands.",
          status: "Initial reading",
          pdfHref: "/tfg/bibliografia/ris-assisted-cell-free-ris-ms-selection-fr1-fr3.pdf",
        },
        {
          type: "Bachelor's thesis",
          title: "Estudio de escenarios Cell-Free en distintas bandas de frecuencia: asistencia de RIS para mejora de prestaciones",
          authors: "Sandra Noemí Arana-Alegre.",
          description:
            "First reference thesis for consolidating a foundation on Cell-Free scenarios, frequency bands and RIS assistance.",
          status: "Knowledge base",
          pdfHref: "/tfg/bibliografia/memoria-sandra-arana-cell-free-ris.pdf",
        },
        {
          type: "Bachelor's thesis",
          title: "Estudio en algoritmo de asignación de RIS en entornos 6G Cell-Free basado en radios de conectividad",
          authors: "Uriel García-Bárbulo.",
          description:
            "Reference for understanding RIS-assignment approaches in 6G Cell-Free environments and contrasting modelling decisions.",
          status: "Algorithm reference",
          pdfHref: "/tfg/bibliografia/memoria-uriel-garcia-asignacion-ris.pdf",
        },
        {
          type: "Bachelor's thesis",
          title: "Estimación de canal mediante agrupación de elementos RIS en sistemas Cell-Free",
          authors: "Fernando Galindo.",
          description:
            "Thesis focused on channel estimation and grouping RIS elements, especially relevant to the model's level of granularity.",
          status: "Channel reference",
          pdfHref: "/tfg/bibliografia/memoria-fernando-galindo-estimacion-canal.pdf",
        },
        {
          type: "Book",
          title: "Foundations of User-Centric Cell-Free Massive MIMO",
          authors: "Full reading planned.",
          description:
            "Main theoretical foundation for the User-Centric Cell-Free Massive MIMO approach and for the language used to describe models and metrics.",
          status: "Full reading",
          pdfHref: "/tfg/bibliografia/foundations-user-centric-cell-free-massive-mimo.pdf",
          codeHref: "/tfg/codigo/user-centric-cell-free-massive-mimo-matlab.zip",
        },
        {
          type: "Book",
          title: "Introduction to Multiple Antenna Communications and Reconfigurable Surfaces",
          authors: "Reading focus: chapter 9, Reconfigurable Surfaces.",
          description:
            "Reference on multiple-antenna communications and reconfigurable surfaces; chapter 9 concentrates on the specific study of RIS.",
          status: "Chapter 9",
          pdfHref: "/tfg/bibliografia/introduction-multiple-antenna-ris.pdf",
          codeHref: "/tfg/codigo/multiple-antenna-ris-matlab.zip",
        },
        {
          type: "IEEE paper",
          title: "Is Channel Estimation Necessary to Select Phase-Shifts for RIS-Assisted Massive MIMO?",
          authors: "Özlem Tuğfe Demir and Emil Björnson, IEEE Transactions on Wireless Communications, 2022.",
          description:
            "Paper that inspires the study of per-RIS-element control, channel estimation, short- and long-term configurations, and spectral efficiency.",
          status: "Methodological framework",
          pdfHref: "/tfg/bibliografia/channel-estimation-phase-shifts-ris-massive-mimo.pdf",
        },
      ],
    },
    footer: {
      portfolio: "Main portfolio",
    },
  },
  fr: {
    metadata: {
      title: "Aperçu du projet de fin d'études | Gonzalo Pacheco Agredano",
      description:
        "Aperçu du projet de fin d'études de Gonzalo Pacheco Agredano sur des scénarios Cell-Free assistés par RIS.",
    },
    nav: {
      skip: "Aller à l'aperçu du projet de fin d'études",
      brand: "Revenir au portfolio de Gonzalo Pacheco Agredano",
      label: "Navigation du projet de fin d'études",
      overview: "Aperçu",
      bibliography: "Bibliographie",
      portfolio: "Portfolio",
    },
    hero: {
      eyebrow: "Projet de fin d'études · 2026-2027",
      titleBefore: "Cell-Free avec surfaces",
      titleEmphasis: "RIS.",
      description:
        "Aperçu d'un projet de fin d'études dont le titre définitif est encore en cours de définition. L'axe de recherche part de scénarios Cell-Free assistés par RIS comme proposition pour les communications 6G.",
      explore: "Explorer l'aperçu",
      viewBibliography: "Voir la bibliographie",
      detailsLabel: "Informations sur le projet de fin d'études",
      imageAlt: "Illustration conceptuelle d'un réseau 6G Cell-Free assisté par des surfaces RIS",
      tutor: "Encadrant",
      researchLine: "Axe de recherche",
      status: "Statut",
      researchLineValue: "Cell-Free assisté par RIS",
      statusValue: "Base théorique en cours d'élaboration",
    },
    introduction: {
      marker: "Aperçu",
      headingBefore: "Avant de simuler, il faut",
      headingEmphasis: "comprendre.",
      entry: "Entrée initiale",
      title: "Un modèle Cell-Free assisté par RIS",
      paragraphs: [
        "Au cours de l'année universitaire 2026-2027, je réaliserai ce projet de fin d'études dans le cadre de la licence d'ingénierie des systèmes de télécommunication de l'Universidad Rey Juan Carlos, sous la direction d'Alejandro de la Fuente Iglesias.",
        "Le projet s'appuiera sur des scénarios Cell-Free assistés par des surfaces intelligentes reconfigurables. La première phase vise à établir une base théorique solide avant de définir le titre et le scénario définitifs.",
      ],
      hypothesis: "Hypothèse d'exploration",
      hypothesisTitle: "De RIS-utilisateur à méta-atome-utilisateur",
      hypothesisText:
        "L'axe proposé explore un modèle qui ne se limite pas à l'affectation RIS-utilisateur, mais étudie la relation entre chaque méta-atome de la RIS et chaque utilisateur du système. Cette granularité ouvre une voie à de nouvelles variantes de simulation.",
      source:
        "Point de départ : sélection des déphasages et estimation de canal en RIS-assisted Massive MIMO.",
    },
    focus: {
      marker: "Axe de travail",
      headingBefore: "Le système, décomposé en",
      headingEmphasis: "couches.",
      label: "Axes techniques du projet de fin d'études",
      items: [
        {
          title: "Scénarios Cell-Free",
          description:
            "Cadre de travail pour étudier des réseaux distribués avec coordination entre points d'accès et utilisateurs.",
        },
        {
          title: "Surfaces RIS",
          description:
            "Étude des surfaces intelligentes reconfigurables et de leur rôle dans le contrôle du canal radio.",
        },
        {
          title: "Méta-atomes et utilisateurs",
          description:
            "Axe d'exploration consacré à l'étude de la relation entre chaque élément RIS et chaque utilisateur du système.",
        },
      ],
    },
    roadmap: {
      marker: "Feuille de route",
      headingBefore: "De la lecture au",
      headingEmphasis: "modèle.",
      items: [
        {
          date: "Septembre 2026",
          title: "Base théorique",
          description:
            "Première lecture des articles et mémoires de référence afin de fixer le vocabulaire, les hypothèses et le modèle de système.",
        },
        {
          date: "Bloc de lectures",
          title: "Cell-Free et RIS",
          description:
            "Approfondissement de l'architecture Cell-Free, de la sélection RIS-MS, de l'estimation de canal et des métriques d'efficacité spectrale.",
        },
        {
          date: "Code de départ",
          title: "Analyse MATLAB",
          description:
            "Revue détaillée du code qui reproduit les figures : entrées, modèles de canal, sorties, hypothèses et variantes possibles.",
        },
        {
          date: "Conception du scénario",
          title: "Modèle du projet",
          description:
            "Définition progressive, avec l'encadrant, du scénario de simulation et de la granularité méta-atome-utilisateur à étudier.",
        },
        {
          date: "Simulation et résultats",
          title: "Comparaisons de performances",
          description:
            "Conception d'expériences et évaluation de l'efficacité spectrale ainsi que d'autres indicateurs de performance pertinents.",
        },
      ],
      material: "Matériel de simulation",
      materialTitle: "MATLAB comme environnement de travail",
      materialText:
        "Le matériel de départ comprend du code permettant de reproduire des figures des références. L'objectif initial est d'en comprendre la structure, les hypothèses et les résultats avant de proposer des variantes adaptées au projet.",
    },
    bibliography: {
      marker: "Bibliographie",
      headingBefore: "Des lectures pour construire une",
      headingEmphasis: "base solide.",
      intro:
        "Références sélectionnées pour la première phase de recherche. L'aperçu consignera les idées, hypothèses et liens qui émergeront de chaque lecture.",
      openPdf: "Ouvrir le PDF",
      downloadCode: "Code MATLAB",
      references: [
        {
          type: "Article de départ",
          title: "RIS-Assisted Cell-Free Massive MIMO: RIS-MS Selection in FR1 and FR3",
          authors: "Alejandro de la Fuente, Fernando Galindo, Uriel García-Bárbulo, Sandra-Noemy Arana-Alegre et Jan García-Morales.",
          description:
            "Première approche des scénarios Cell-Free assistés par RIS et de la sélection RIS-MS dans les bandes FR1 et FR3.",
          status: "Lecture initiale",
          pdfHref: "/tfg/bibliografia/ris-assisted-cell-free-ris-ms-selection-fr1-fr3.pdf",
        },
        {
          type: "Projet de fin d'études",
          title: "Estudio de escenarios Cell-Free en distintas bandas de frecuencia: asistencia de RIS para mejora de prestaciones",
          authors: "Sandra Noemí Arana-Alegre.",
          description:
            "Premier mémoire de référence pour consolider une base sur les scénarios Cell-Free, les bandes de fréquence et l'assistance RIS.",
          status: "Base de connaissances",
          pdfHref: "/tfg/bibliografia/memoria-sandra-arana-cell-free-ris.pdf",
        },
        {
          type: "Projet de fin d'études",
          title: "Estudio en algoritmo de asignación de RIS en entornos 6G Cell-Free basado en radios de conectividad",
          authors: "Uriel García-Bárbulo.",
          description:
            "Référence pour comprendre les approches d'affectation RIS dans des environnements 6G Cell-Free et confronter les décisions de modélisation.",
          status: "Référence d'algorithme",
          pdfHref: "/tfg/bibliografia/memoria-uriel-garcia-asignacion-ris.pdf",
        },
        {
          type: "Projet de fin d'études",
          title: "Estimación de canal mediante agrupación de elementos RIS en sistemas Cell-Free",
          authors: "Fernando Galindo.",
          description:
            "Mémoire consacré à l'estimation de canal et au regroupement des éléments RIS, particulièrement pertinent pour la granularité du modèle.",
          status: "Référence de canal",
          pdfHref: "/tfg/bibliografia/memoria-fernando-galindo-estimacion-canal.pdf",
        },
        {
          type: "Livre",
          title: "Foundations of User-Centric Cell-Free Massive MIMO",
          authors: "Lecture complète prévue.",
          description:
            "Fondement théorique principal pour l'approche User-Centric Cell-Free Massive MIMO et pour le langage des modèles et des métriques.",
          status: "Lecture complète",
          pdfHref: "/tfg/bibliografia/foundations-user-centric-cell-free-massive-mimo.pdf",
          codeHref: "/tfg/codigo/user-centric-cell-free-massive-mimo-matlab.zip",
        },
        {
          type: "Livre",
          title: "Introduction to Multiple Antenna Communications and Reconfigurable Surfaces",
          authors: "Lecture ciblée : chapitre 9, Reconfigurable Surfaces.",
          description:
            "Référence sur les communications multiantennes et les surfaces reconfigurables ; le chapitre 9 concentre l'étude spécifique des RIS.",
          status: "Chapitre 9",
          pdfHref: "/tfg/bibliografia/introduction-multiple-antenna-ris.pdf",
          codeHref: "/tfg/codigo/multiple-antenna-ris-matlab.zip",
        },
        {
          type: "Article IEEE",
          title: "Is Channel Estimation Necessary to Select Phase-Shifts for RIS-Assisted Massive MIMO?",
          authors: "Özlem Tuğfe Demir et Emil Björnson, IEEE Transactions on Wireless Communications, 2022.",
          description:
            "Article qui inspire l'étude du contrôle par élément RIS, de l'estimation de canal, des configurations à court et long terme et de l'efficacité spectrale.",
          status: "Cadre méthodologique",
          pdfHref: "/tfg/bibliografia/channel-estimation-phase-shifts-ris-massive-mimo.pdf",
        },
      ],
    },
    footer: {
      portfolio: "Portfolio principal",
    },
  },
  de: {
    metadata: {
      title: "Überblick zur Bachelorarbeit | Gonzalo Pacheco Agredano",
      description:
        "Überblick zur Bachelorarbeit von Gonzalo Pacheco Agredano über RIS-gestützte Cell-Free-Szenarien.",
    },
    nav: {
      skip: "Zum Überblick der Bachelorarbeit springen",
      brand: "Zum Portfolio von Gonzalo Pacheco Agredano zurückkehren",
      label: "Navigation der Bachelorarbeit",
      overview: "Überblick",
      bibliography: "Bibliografie",
      portfolio: "Portfolio",
    },
    hero: {
      eyebrow: "Bachelorarbeit · 2026-2027",
      titleBefore: "Cell-Free mit",
      titleEmphasis: "RIS-Oberflächen.",
      description:
        "Kurzüberblick über eine Bachelorarbeit, deren endgültiger Titel noch festgelegt wird. Die Forschungslinie geht von RIS-gestützten Cell-Free-Szenarien als Ansatz für 6G-Kommunikation aus.",
      explore: "Überblick erkunden",
      viewBibliography: "Bibliografie ansehen",
      detailsLabel: "Daten zur Bachelorarbeit",
      imageAlt: "Konzeptillustration eines 6G-Cell-Free-Netzwerks mit RIS-Oberflächen",
      tutor: "Betreuer",
      researchLine: "Forschungslinie",
      status: "Status",
      researchLineValue: "RIS-gestütztes Cell-Free",
      statusValue: "Theoretische Grundlage in Ausarbeitung",
    },
    introduction: {
      marker: "Überblick",
      headingBefore: "Vor der Simulation muss man",
      headingEmphasis: "verstehen.",
      entry: "Erster Eintrag",
      title: "Ein RIS-gestütztes Cell-Free-Modell",
      paragraphs: [
        "Im Studienjahr 2026-2027 werde ich diese Bachelorarbeit im Bachelorstudium Telekommunikationssystemtechnik an der Universidad Rey Juan Carlos unter der Betreuung von Alejandro de la Fuente Iglesias entwickeln.",
        "Das Projekt baut auf Cell-Free-Szenarien auf, die von rekonfigurierbaren intelligenten Oberflächen unterstützt werden. Die erste Phase dient dazu, eine solide theoretische Grundlage zu schaffen, bevor der endgültige Titel und das Szenario festgelegt werden.",
      ],
      hypothesis: "Explorationshypothese",
      hypothesisTitle: "Von RIS-Nutzer zu Meta-Atom-Nutzer",
      hypothesisText:
        "Die vorgeschlagene Forschungslinie untersucht ein Modell, das nicht auf die RIS-Nutzer-Zuordnung beschränkt ist, sondern die Beziehung zwischen jedem Meta-Atom der RIS und jedem Nutzer des Systems betrachtet. Diese Granularität eröffnet einen Weg zu neuen Simulationsvarianten.",
      source:
        "Ausgangspunkt: Phasenverschiebungsauswahl und Kanalschätzung in RIS-assisted Massive MIMO.",
    },
    focus: {
      marker: "Forschungsfokus",
      headingBefore: "Das System, aufgeteilt in",
      headingEmphasis: "Schichten.",
      label: "Technische Schwerpunkte der Bachelorarbeit",
      items: [
        {
          title: "Cell-Free-Szenarien",
          description:
            "Rahmen zur Untersuchung verteilter Netze mit Koordination zwischen Zugangspunkten und Nutzern.",
        },
        {
          title: "RIS-Oberflächen",
          description:
            "Untersuchung rekonfigurierbarer intelligenter Oberflächen und ihrer Rolle bei der Steuerung des Funkkanals.",
        },
        {
          title: "Meta-Atome und Nutzer",
          description:
            "Forschungslinie zur Untersuchung der Beziehung zwischen jedem RIS-Element und jedem Nutzer des Systems.",
        },
      ],
    },
    roadmap: {
      marker: "Roadmap",
      headingBefore: "Von der Lektüre zum",
      headingEmphasis: "Modell.",
      items: [
        {
          date: "September 2026",
          title: "Theoretische Grundlage",
          description:
            "Erste Lektüre der Referenzartikel und Abschlussarbeiten, um Vokabular, Hypothesen und Systemmodell festzulegen.",
        },
        {
          date: "Leseblock",
          title: "Cell-Free und RIS",
          description:
            "Vertiefung der Cell-Free-Architektur, RIS-MS-Auswahl, Kanalschätzung und Metriken der spektralen Effizienz.",
        },
        {
          date: "Ausgangscode",
          title: "MATLAB-Analyse",
          description:
            "Detaillierte Überprüfung des Codes, der Abbildungen reproduziert: Eingaben, Kanalmodelle, Ausgaben, Annahmen und mögliche Varianten.",
        },
        {
          date: "Szenariodesign",
          title: "Modell der Bachelorarbeit",
          description:
            "Schrittweise Definition des Simulationsszenarios und der zu untersuchenden Meta-Atom-Nutzer-Granularität gemeinsam mit dem Betreuer.",
        },
        {
          date: "Simulation und Ergebnisse",
          title: "Leistungsvergleiche",
          description:
            "Versuchsplanung und Auswertung der spektralen Effizienz sowie weiterer relevanter Leistungskennzahlen.",
        },
      ],
      material: "Simulationsmaterial",
      materialTitle: "MATLAB als Arbeitsumgebung",
      materialText:
        "Das Ausgangsmaterial enthält Code zur Reproduktion von Abbildungen aus den Referenzen. Das erste Ziel ist, Struktur, Annahmen und Ergebnisse zu verstehen, bevor Varianten für die Bachelorarbeit entwickelt werden.",
    },
    bibliography: {
      marker: "Bibliografie",
      headingBefore: "Literatur für ein",
      headingEmphasis: "solides Fundament.",
      intro:
        "Ausgewählte Referenzen für die erste Forschungsphase. Der Überblick dokumentiert die Ideen, Annahmen und Zusammenhänge, die aus jeder Lektüre entstehen.",
      openPdf: "PDF öffnen",
      downloadCode: "MATLAB-Code",
      references: [
        {
          type: "Ausgangsartikel",
          title: "RIS-Assisted Cell-Free Massive MIMO: RIS-MS Selection in FR1 and FR3",
          authors: "Alejandro de la Fuente, Fernando Galindo, Uriel García-Bárbulo, Sandra-Noemy Arana-Alegre und Jan García-Morales.",
          description:
            "Erste Auseinandersetzung mit RIS-gestützten Cell-Free-Szenarien und der RIS-MS-Auswahl in den FR1- und FR3-Bändern.",
          status: "Erstlektüre",
          pdfHref: "/tfg/bibliografia/ris-assisted-cell-free-ris-ms-selection-fr1-fr3.pdf",
        },
        {
          type: "Bachelorarbeit",
          title: "Estudio de escenarios Cell-Free en distintas bandas de frecuencia: asistencia de RIS para mejora de prestaciones",
          authors: "Sandra Noemí Arana-Alegre.",
          description:
            "Erste Referenzarbeit zur Konsolidierung einer Grundlage über Cell-Free-Szenarien, Frequenzbänder und RIS-Unterstützung.",
          status: "Wissensbasis",
          pdfHref: "/tfg/bibliografia/memoria-sandra-arana-cell-free-ris.pdf",
        },
        {
          type: "Bachelorarbeit",
          title: "Estudio en algoritmo de asignación de RIS en entornos 6G Cell-Free basado en radios de conectividad",
          authors: "Uriel García-Bárbulo.",
          description:
            "Referenz zum Verständnis von RIS-Zuordnungsansätzen in 6G-Cell-Free-Umgebungen und zum Abgleich von Modellierungsentscheidungen.",
          status: "Algorithmusreferenz",
          pdfHref: "/tfg/bibliografia/memoria-uriel-garcia-asignacion-ris.pdf",
        },
        {
          type: "Bachelorarbeit",
          title: "Estimación de canal mediante agrupación de elementos RIS en sistemas Cell-Free",
          authors: "Fernando Galindo.",
          description:
            "Abschlussarbeit zur Kanalschätzung und Gruppierung von RIS-Elementen, besonders relevant für die Granularität des Modells.",
          status: "Kanalreferenz",
          pdfHref: "/tfg/bibliografia/memoria-fernando-galindo-estimacion-canal.pdf",
        },
        {
          type: "Buch",
          title: "Foundations of User-Centric Cell-Free Massive MIMO",
          authors: "Vollständige Lektüre geplant.",
          description:
            "Zentrale theoretische Grundlage für den User-Centric-Cell-Free-Massive-MIMO-Ansatz sowie für die Sprache der Modelle und Metriken.",
          status: "Vollständige Lektüre",
          pdfHref: "/tfg/bibliografia/foundations-user-centric-cell-free-massive-mimo.pdf",
          codeHref: "/tfg/codigo/user-centric-cell-free-massive-mimo-matlab.zip",
        },
        {
          type: "Buch",
          title: "Introduction to Multiple Antenna Communications and Reconfigurable Surfaces",
          authors: "Lesefokus: Kapitel 9, Reconfigurable Surfaces.",
          description:
            "Referenz zu Mehrantennenkommunikation und rekonfigurierbaren Oberflächen; Kapitel 9 konzentriert sich auf die spezifische Untersuchung von RIS.",
          status: "Kapitel 9",
          pdfHref: "/tfg/bibliografia/introduction-multiple-antenna-ris.pdf",
          codeHref: "/tfg/codigo/multiple-antenna-ris-matlab.zip",
        },
        {
          type: "IEEE-Artikel",
          title: "Is Channel Estimation Necessary to Select Phase-Shifts for RIS-Assisted Massive MIMO?",
          authors: "Özlem Tuğfe Demir und Emil Björnson, IEEE Transactions on Wireless Communications, 2022.",
          description:
            "Artikel, der die Untersuchung der Steuerung pro RIS-Element, der Kanalschätzung, kurz- und langfristiger Konfigurationen sowie der spektralen Effizienz inspiriert.",
          status: "Methodischer Rahmen",
          pdfHref: "/tfg/bibliografia/channel-estimation-phase-shifts-ris-massive-mimo.pdf",
        },
      ],
    },
    footer: {
      portfolio: "Hauptportfolio",
    },
  },
};
