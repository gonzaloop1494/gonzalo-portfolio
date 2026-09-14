import type { Locale } from "./locales";

type FocusCopy = {
  title: string;
  description: string;
};

type TimelineCopy = {
  date: string;
  title: string;
  description: string;
};

type StageCopy = {
  label: string;
  detail: string;
};

type PracticesCopy = {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    skip: string;
    brand: string;
    label: string;
    overview: string;
    portfolio: string;
  };
  hero: {
    eyebrow: string;
    headingBefore: string;
    headingEmphasis: string;
    description: string;
    explore: string;
    returnToPortfolio: string;
    detailsLabel: string;
    logoAlt: string;
    periodLabel: string;
    periodValue: string;
    dedicationLabel: string;
    dedicationValue: string;
  };
  context: {
    marker: string;
    headingBefore: string;
    headingEmphasis: string;
    entry: string;
    title: string;
    paragraphs: string[];
    focusLabel: string;
    items: FocusCopy[];
  };
  timeline: {
    marker: string;
    headingBefore: string;
    headingEmphasis: string;
    items: TimelineCopy[];
  };
  period: {
    university: string;
    title: string;
    description: string;
    stagesLabel: string;
    stages: StageCopy[];
  };
  footer: {
    portfolio: string;
  };
};

export const practicesCopy: Record<Locale, PracticesCopy> = {
  es: {
    metadata: {
      title: "Píldora de prácticas | Gonzalo Pacheco",
      description:
        "Píldora de las prácticas curriculares de Gonzalo Pacheco Agredano en NTT DATA Spain.",
    },
    nav: {
      skip: "Ir a la píldora de prácticas",
      brand: "Volver al portfolio de Gonzalo Pacheco Agredano",
      label: "Navegación de prácticas",
      overview: "Píldora",
      portfolio: "Portfolio",
    },
    hero: {
      eyebrow: "Prácticas curriculares · 2026",
      headingBefore: "Una píldora de prácticas con foco en",
      headingEmphasis: "red y automatización.",
      description:
        "Este espacio recoge el contexto, los hitos y los aprendizajes que vaya desarrollando durante mis prácticas curriculares en NTT DATA Spain.",
      explore: "Explorar la píldora",
      returnToPortfolio: "Volver al portfolio",
      detailsLabel: "Datos principales de las prácticas",
      logoAlt: "NTT DATA",
      periodLabel: "Periodo formalizado",
      periodValue: "22 sep - 2 dic 2026",
      dedicationLabel: "Dedicación",
      dedicationValue: "350 horas · 35 h/semana",
    },
    context: {
      marker: "Contexto formativo",
      headingBefore: "El punto de partida del",
      headingEmphasis: "proyecto.",
      entry: "Entrada inicial",
      title: "Red fija, hiperautomatización y procesos end-to-end",
      paragraphs: [
        "El proyecto formativo está orientado a aplicar la base académica en la validación funcional y técnica de soluciones de red fija e hiperautomatización. El trabajo conecta pruebas, procesos, interfaces, integraciones y calidad de los datos.",
        "Esta píldora irá recogiendo los hitos del periodo, los aprendizajes técnicos y las conclusiones que puedan compartirse con contexto profesional.",
      ],
      focusLabel: "Áreas de trabajo",
      items: [
        {
          title: "Validación de red",
          description: "Pruebas funcionales y técnicas de soluciones, procesos, interfaces y componentes.",
        },
        {
          title: "Automatización",
          description: "Apoyo a procesos automatizados mediante scripts, APIs y herramientas de integración.",
        },
        {
          title: "Provisión y OSS",
          description: "Aprendizaje sobre inventario, provisión y gestión de recursos de red fija.",
        },
        {
          title: "Datos y documentación",
          description: "Coherencia de datos end-to-end y documentación funcional y técnica de resultados.",
        },
      ],
    },
    timeline: {
      marker: "Cronología",
      headingBefore: "Hitos del periodo",
      headingEmphasis: "formalizado.",
      items: [
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
      ],
    },
    period: {
      university: "Universidad Rey Juan Carlos",
      title: "Periodo de prácticas curriculares",
      description: "Un recorrido formativo centrado en red fija, automatización y calidad de los datos.",
      stagesLabel: "Fases del periodo de prácticas",
      stages: [
        { label: "Preparación", detail: "Septiembre" },
        { label: "Desarrollo", detail: "Octubre - noviembre" },
        { label: "Cierre", detail: "Diciembre" },
      ],
    },
    footer: { portfolio: "Portfolio principal" },
  },
  en: {
    metadata: {
      title: "Internship overview | Gonzalo Pacheco",
      description:
        "Overview of Gonzalo Pacheco Agredano's curricular internship at NTT DATA Spain.",
    },
    nav: {
      skip: "Skip to the internship overview",
      brand: "Return to Gonzalo Pacheco Agredano's portfolio",
      label: "Internship navigation",
      overview: "Overview",
      portfolio: "Portfolio",
    },
    hero: {
      eyebrow: "Curricular internship · 2026",
      headingBefore: "An internship overview focused on",
      headingEmphasis: "networks and automation.",
      description:
        "This space brings together the context, milestones, and lessons I develop during my curricular internship at NTT DATA Spain.",
      explore: "Explore the overview",
      returnToPortfolio: "Back to portfolio",
      detailsLabel: "Key internship details",
      logoAlt: "NTT DATA",
      periodLabel: "Confirmed period",
      periodValue: "22 Sep - 2 Dec 2026",
      dedicationLabel: "Commitment",
      dedicationValue: "350 hours · 35 h/week",
    },
    context: {
      marker: "Learning context",
      headingBefore: "The starting point of the",
      headingEmphasis: "project.",
      entry: "Initial entry",
      title: "Fixed networks, hyperautomation, and end-to-end processes",
      paragraphs: [
        "The learning project focuses on applying my academic background to the functional and technical validation of fixed-network and hyperautomation solutions. The work connects testing, processes, interfaces, integrations, and data quality.",
        "This overview will document milestones, technical learning, and conclusions that can be shared with professional context.",
      ],
      focusLabel: "Areas of work",
      items: [
        {
          title: "Network validation",
          description: "Functional and technical testing of solutions, processes, interfaces, and components.",
        },
        {
          title: "Automation",
          description: "Support for automated processes through scripts, APIs, and integration tools.",
        },
        {
          title: "Provisioning and OSS",
          description: "Learning about inventory, provisioning, and the management of fixed-network resources.",
        },
        {
          title: "Data and documentation",
          description: "End-to-end data consistency and functional and technical documentation of results.",
        },
      ],
    },
    timeline: {
      marker: "Timeline",
      headingBefore: "Milestones in the",
      headingEmphasis: "confirmed period.",
      items: [
        {
          date: "1 September 2026",
          title: "Agreement formalized",
          description: "The curricular internship period is formalized between Universidad Rey Juan Carlos and NTT DATA Spain.",
        },
        {
          date: "22 September 2026",
          title: "Start of the period",
          description: "The planned 350-hour period begins, with a commitment of 35 hours per week.",
        },
        {
          date: "October - November 2026",
          title: "Project development",
          description: "Stage focused on validation, automation, process analysis, and network-data traceability.",
        },
        {
          date: "2 December 2026",
          title: "Planned completion",
          description: "Completion of the learning period and collection of lessons, results, and next steps.",
        },
      ],
    },
    period: {
      university: "Universidad Rey Juan Carlos",
      title: "Curricular internship period",
      description: "A learning journey focused on fixed networks, automation, and data quality.",
      stagesLabel: "Internship stages",
      stages: [
        { label: "Preparation", detail: "September" },
        { label: "Development", detail: "October - November" },
        { label: "Completion", detail: "December" },
      ],
    },
    footer: { portfolio: "Main portfolio" },
  },
  fr: {
    metadata: {
      title: "Aperçu du stage | Gonzalo Pacheco",
      description:
        "Aperçu du stage universitaire de Gonzalo Pacheco Agredano chez NTT DATA Spain.",
    },
    nav: {
      skip: "Aller à l'aperçu du stage",
      brand: "Revenir au portfolio de Gonzalo Pacheco Agredano",
      label: "Navigation du stage",
      overview: "Aperçu",
      portfolio: "Portfolio",
    },
    hero: {
      eyebrow: "Stage universitaire · 2026",
      headingBefore: "Un aperçu du stage axé sur les",
      headingEmphasis: "réseaux et l'automatisation.",
      description:
        "Cet espace rassemble le contexte, les étapes et les apprentissages que je développerai pendant mon stage universitaire chez NTT DATA Spain.",
      explore: "Explorer l'aperçu",
      returnToPortfolio: "Retour au portfolio",
      detailsLabel: "Informations principales sur le stage",
      logoAlt: "NTT DATA",
      periodLabel: "Période confirmée",
      periodValue: "22 sept. - 2 déc. 2026",
      dedicationLabel: "Temps consacré",
      dedicationValue: "350 heures · 35 h/semaine",
    },
    context: {
      marker: "Contexte de formation",
      headingBefore: "Le point de départ du",
      headingEmphasis: "projet.",
      entry: "Entrée initiale",
      title: "Réseau fixe, hyperautomatisation et processus de bout en bout",
      paragraphs: [
        "Le projet de formation vise à appliquer ma base académique à la validation fonctionnelle et technique de solutions de réseau fixe et d'hyperautomatisation. Le travail relie les tests, les processus, les interfaces, les intégrations et la qualité des données.",
        "Cet aperçu documentera les étapes de la période, les apprentissages techniques et les conclusions qui peuvent être partagées dans un contexte professionnel.",
      ],
      focusLabel: "Domaines de travail",
      items: [
        {
          title: "Validation réseau",
          description: "Tests fonctionnels et techniques de solutions, processus, interfaces et composants.",
        },
        {
          title: "Automatisation",
          description: "Soutien aux processus automatisés au moyen de scripts, d'API et d'outils d'intégration.",
        },
        {
          title: "Provisioning et OSS",
          description: "Apprentissage de l'inventaire, du provisioning et de la gestion des ressources de réseau fixe.",
        },
        {
          title: "Données et documentation",
          description: "Cohérence des données de bout en bout et documentation fonctionnelle et technique des résultats.",
        },
      ],
    },
    timeline: {
      marker: "Chronologie",
      headingBefore: "Étapes de la période",
      headingEmphasis: "confirmée.",
      items: [
        {
          date: "1er septembre 2026",
          title: "Convention formalisée",
          description: "La période de stage universitaire est formalisée entre l'Universidad Rey Juan Carlos et NTT DATA Spain.",
        },
        {
          date: "22 septembre 2026",
          title: "Début de la période",
          description: "La période prévue de 350 heures commence, avec un engagement de 35 heures par semaine.",
        },
        {
          date: "Octobre - novembre 2026",
          title: "Développement du projet",
          description: "Phase axée sur la validation, l'automatisation, l'analyse des processus et la traçabilité des données réseau.",
        },
        {
          date: "2 décembre 2026",
          title: "Clôture prévue",
          description: "Clôture de la période de formation et recueil des apprentissages, des résultats et des prochaines étapes.",
        },
      ],
    },
    period: {
      university: "Universidad Rey Juan Carlos",
      title: "Période de stage universitaire",
      description: "Un parcours de formation axé sur le réseau fixe, l'automatisation et la qualité des données.",
      stagesLabel: "Étapes du stage",
      stages: [
        { label: "Préparation", detail: "Septembre" },
        { label: "Développement", detail: "Octobre - novembre" },
        { label: "Clôture", detail: "Décembre" },
      ],
    },
    footer: { portfolio: "Portfolio principal" },
  },
  de: {
    metadata: {
      title: "Praktikumsüberblick | Gonzalo Pacheco",
      description:
        "Überblick über das curricular integrierte Praktikum von Gonzalo Pacheco Agredano bei NTT DATA Spain.",
    },
    nav: {
      skip: "Zum Praktikumsüberblick springen",
      brand: "Zum Portfolio von Gonzalo Pacheco Agredano zurückkehren",
      label: "Praktikumsnavigation",
      overview: "Überblick",
      portfolio: "Portfolio",
    },
    hero: {
      eyebrow: "Pflichtpraktikum · 2026",
      headingBefore: "Ein Praktikumsüberblick mit Fokus auf",
      headingEmphasis: "Netze und Automatisierung.",
      description:
        "Dieser Bereich bündelt Kontext, Meilensteine und Erkenntnisse, die ich während meines Pflichtpraktikums bei NTT DATA Spain entwickle.",
      explore: "Überblick erkunden",
      returnToPortfolio: "Zurück zum Portfolio",
      detailsLabel: "Wichtige Praktikumsdaten",
      logoAlt: "NTT DATA",
      periodLabel: "Bestätigter Zeitraum",
      periodValue: "22. Sept. - 2. Dez. 2026",
      dedicationLabel: "Umfang",
      dedicationValue: "350 Stunden · 35 Std./Woche",
    },
    context: {
      marker: "Lernkontext",
      headingBefore: "Der Ausgangspunkt des",
      headingEmphasis: "Projekts.",
      entry: "Erster Eintrag",
      title: "Festnetze, Hyperautomatisierung und End-to-End-Prozesse",
      paragraphs: [
        "Das Lernprojekt konzentriert sich darauf, meine akademische Grundlage bei der funktionalen und technischen Validierung von Festnetz- und Hyperautomatisierungslösungen anzuwenden. Die Arbeit verbindet Tests, Prozesse, Schnittstellen, Integrationen und Datenqualität.",
        "Dieser Überblick dokumentiert die Meilensteine des Zeitraums, technische Erkenntnisse und Schlussfolgerungen, die mit professionellem Kontext geteilt werden können.",
      ],
      focusLabel: "Arbeitsbereiche",
      items: [
        {
          title: "Netzvalidierung",
          description: "Funktionale und technische Tests von Lösungen, Prozessen, Schnittstellen und Komponenten.",
        },
        {
          title: "Automatisierung",
          description: "Unterstützung automatisierter Prozesse durch Skripte, APIs und Integrationswerkzeuge.",
        },
        {
          title: "Provisionierung und OSS",
          description: "Lernen über Inventarisierung, Provisionierung und die Verwaltung von Festnetzressourcen.",
        },
        {
          title: "Daten und Dokumentation",
          description: "End-to-End-Datenkonsistenz sowie funktionale und technische Dokumentation der Ergebnisse.",
        },
      ],
    },
    timeline: {
      marker: "Zeitplan",
      headingBefore: "Meilensteine des",
      headingEmphasis: "bestätigten Zeitraums.",
      items: [
        {
          date: "1. September 2026",
          title: "Vereinbarung formalisiert",
          description: "Der Praktikumszeitraum zwischen der Universidad Rey Juan Carlos und NTT DATA Spain wird formalisiert.",
        },
        {
          date: "22. September 2026",
          title: "Beginn des Zeitraums",
          description: "Der geplante Zeitraum von 350 Stunden beginnt, mit einem Umfang von 35 Stunden pro Woche.",
        },
        {
          date: "Oktober - November 2026",
          title: "Projektentwicklung",
          description: "Phase mit Schwerpunkt auf Validierung, Automatisierung, Prozessanalyse und Nachverfolgbarkeit von Netzdaten.",
        },
        {
          date: "2. Dezember 2026",
          title: "Geplanter Abschluss",
          description: "Abschluss des Lernzeitraums und Zusammenstellung von Erkenntnissen, Ergebnissen und nächsten Schritten.",
        },
      ],
    },
    period: {
      university: "Universidad Rey Juan Carlos",
      title: "Praktikumszeitraum",
      description: "Ein Lernweg mit Schwerpunkt auf Festnetzen, Automatisierung und Datenqualität.",
      stagesLabel: "Praktikumsphasen",
      stages: [
        { label: "Vorbereitung", detail: "September" },
        { label: "Entwicklung", detail: "Oktober - November" },
        { label: "Abschluss", detail: "Dezember" },
      ],
    },
    footer: { portfolio: "Hauptportfolio" },
  },
};
