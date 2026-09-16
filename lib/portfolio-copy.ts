import type { Locale } from "./locales";

export type ProjectFilter = "all" | "telecom" | "software" | "data";

type ProjectCopy = {
  title: string;
  kicker: string;
  description: string;
  imageAlt: string;
  type: ProjectFilter;
  tags: string[];
};

type SkillGroupCopy = {
  label: string;
  description: string;
  imageAlt: string;
  featuredItems: string[];
  additionalItems: string[];
};

type FormationPhotoCopy = {
  alt: string;
  label: string;
};

type PortfolioCopy = {
  metadata: {
    title: string;
    description: string;
  };
  navigation: string[];
  nav: {
    skip: string;
    brandLabel: string;
    openMenu: string;
    closeMenu: string;
    primaryNavigation: string;
    cvLabel: string;
    viewCv: string;
    contactLinks: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  hero: {
    role: string;
    practicesAt: string;
    universityLogo: string;
    specialtiesLabel: string;
    specialties: string[][];
    scroll: string;
  };
  profile: {
    marker: string;
    intro: string;
    summary: string;
    interestIntro: string;
    interestsLabel: string;
    interests: string[];
    detailedCv: string;
    dataLabel: string;
    locationLabel: string;
    educationLabel: string;
    profileLabel: string;
    interestsDataLabel: string;
    educationValue: string;
    profileValue: string;
    interestsValue: string;
    personalTitle: string;
    personalParagraphs: string[];
  };
  projects: {
    marker: string;
    heading: string;
    filterLabel: string;
    filters: Record<ProjectFilter, string>;
    fullGithub: string;
    technologiesPrefix: string;
    repository: string;
    videos: {
      required: string;
      optional: string;
    };
    poster: string;
    cards: ProjectCopy[];
  };
  skills: {
    marker: string;
    heading: string;
    intro: string;
    label: string;
    featuredPrefix: string;
    morePrefix: string;
    viewCountPrefix: string;
    viewCountSuffix: string;
    groups: SkillGroupCopy[];
  };
  formation: {
    galleryLabel: string;
    previousPhoto: string;
    nextPhoto: string;
    previousTitle: string;
    nextTitle: string;
    expandPhoto: string;
    expandTitle: string;
    enlargedPhoto: string;
    closePhoto: string;
    closeTitle: string;
    of: string;
    photos: FormationPhotoCopy[];
  };
  trajectory: {
    marker: string;
    headingBefore: string;
    headingEmphasis: string;
    educationLabel: string;
    educationDate: string;
    degree: string;
    universityDetail: string;
    educationNote: string;
    wuolahLabel: string;
    wuolahAriaLabel: string;
    itineraryLabel: string;
    itineraryAriaLabel: string;
    tfgAriaLabel: string;
    tfgDate: string;
    tfgTitle: string;
    tfgDescription: string;
    tfgNote: string;
    tfgCta: string;
    tfgImageAlt: string;
    practicesAriaLabel: string;
    practicesLabel: string;
    practicesDate: string;
    practicesDescription: string;
    practicesCta: string;
  };
  credentials: {
    marker: string;
    languages: string;
    englishC1: string;
    englishCertificate: string;
    englishCertificateAria: string;
    englishSummary: string;
    french: string;
    frenchLevel: string;
    spanish: string;
    spanishLevel: string;
    englishImageAlt: string;
    matlabLogoAlt: string;
    matlabSummary: string;
    matlabProgressLabel: string;
    matlabCertificate: string;
    matlabCertificateAria: string;
    matlabProgress: string;
    matlabProgressAria: string;
    technical: string;
    inProgress: string;
    technicalSummary: string;
    nextUpdate: string;
  };
  contact: {
    marker: string;
    heading: string;
    description: string;
    formTitle: string;
  };
  footer: {
    backToTop: string;
  };
};

export const portfolioCopy: Record<Locale, PortfolioCopy> = {
  es: {
    metadata: {
      title: "Gonzalo Pacheco Agredano | Telecomunicaciones",
      description:
        "Portfolio de Gonzalo Pacheco Agredano: redes móviles, comunicaciones satelitales, análisis de rendimiento y software.",
    },
    navigation: ["Perfil", "Proyectos", "Trayectoria", "Certificaciones", "Contacto"],
    nav: {
      skip: "Ir al contenido",
      brandLabel: "Ir al inicio de Gonzalo Pacheco Agredano",
      openMenu: "Abrir navegación",
      closeMenu: "Cerrar navegación",
      primaryNavigation: "Navegación principal",
      cvLabel: "Abrir currículum de Gonzalo Pacheco Agredano",
      viewCv: "Ver CV",
      contactLinks: "Enlaces de contacto",
      emailLabel: "Enviar correo a Gonzalo Pacheco Agredano",
      githubLabel: "Abrir GitHub de Gonzalo Pacheco Agredano",
      linkedinLabel: "Abrir LinkedIn de Gonzalo Pacheco Agredano",
    },
    hero: {
      role: "Ingeniero en Sistemas de Telecomunicación",
      practicesAt: "Prácticas curriculares en",
      universityLogo: "Logotipo de la Universidad Rey Juan Carlos",
      specialtiesLabel: "Áreas de especialización",
      specialties: [
        ["Redes", "Campos y radio", "Comunicaciones por satélite", "Radiocomunicaciones móviles"],
        ["Simulaciones de comunicaciones", "Comunicaciones de banda ancha"],
        ["Señales", "Sistemas", "Electrónica", "Programación", "Radiación", "Antenas"],
        ["Sistemas digitales", "Ensamblador", "Proyectos de telecomunicaciones"],
        ["Software de sistemas", "Linux", "Procesamiento de señales", "Microondas"],
      ],
      scroll: "Desplazar",
    },
    profile: {
      marker: "Perfil",
      intro:
        "Soy un estudiante de último curso del grado en Ingeniería en Sistemas de Telecomunicación, en la Universidad Rey Juan Carlos, Escuela de Ingeniería de Fuenlabrada.",
      summary:
        "Durante la carrera he orientado mis proyectos y formación hacia sistemas de comunicaciones y comportamiento de red, intentando entender cómo influyen las decisiones de diseño en el rendimiento, la eficiencia y la calidad de servicio. Para ello, he trabajado con simulación, tratamiento de datos y desarrollo técnico utilizando, entre otros, Python, Rust, C y, sobre todo, MATLAB. En estos últimos cursos también he podido profundizar en el modelado de canal radio y la evaluación de KPIs.",
      interestIntro:
        "Entre mis intereses, y a lo que me gustaría aplicar mi base técnica adquirida, se encuentran:",
      interestsLabel: "Intereses técnicos",
      interests: [
        "Redes móviles y 5G (RAN/Core)",
        "Sistemas de comunicaciones medibles y robustos",
        "Network slicing y virtualización",
        "Monitorización y optimización de red",
        "Evolución hacia arquitecturas 6G",
        "Sistemas satelitales",
        "Análisis de rendimiento basado en datos",
      ],
      detailedCv: "Consultar CV detallado",
      dataLabel: "Datos",
      locationLabel: "Ubicación",
      educationLabel: "Formación",
      profileLabel: "Perfil",
      interestsDataLabel: "Intereses",
      educationValue: "URJC · Ingeniería de Telecomunicación",
      profileValue: "Radiocomunicaciones móviles, antenas, simulaciones, KPIs y programación",
      interestsValue: "5G/6G, satélite, red y datos",
      personalTitle: "Sobre mí como persona",
      personalParagraphs: [
        "Soy una persona muy responsable, metódico y autoexigente. Me desenvuelvo bien trabajando con otras personas, me gusta tomar la iniciativa, siempre intentando aprender escuchando, observando y preguntando por aquello que no sepa o entienda.",
        "Me apasionan las innovaciones tecnológicas, sobre todo poder aportar en el avance de las telecomunicaciones. Hoy en día vivimos en una sociedad que demanda una alta tasa de datos, baja latencia y una alta fiabilidad. He aprendido durante estos años en el grado a desarrollar un pensamiento estructurado, aprendiendo y entendiendo cada paso que hago. Me tomo muy en serio todo lo que hago y tengo mucha ilusión por seguir aprendiendo cada día. Quiero aplicar en un entorno real la base académica adquirida.",
      ],
    },
    projects: {
      marker: "Proyectos",
      heading: "Algunos proyectos que he realizado en la Universidad y que ahora puedo mostrar:",
      filterLabel: "Filtrar proyectos",
      filters: { all: "Todos", telecom: "Telecom", software: "Software", data: "Datos" },
      fullGithub: "GitHub completo",
      technologiesPrefix: "Tecnologías de",
      repository: "Ver repositorio",
      videos: {
        required: "Ver vídeo: parte obligatoria",
        optional: "Ver vídeo: parte voluntaria",
      },
      poster: "Ver póster del proyecto",
      cards: [
        {
          title: "Simulación TDMA",
          kicker: "Redes móviles · MATLAB",
          description:
            "Simulación Monte Carlo de 10 usuarios sobre canal Rayleigh. Compara algoritmos de scheduling y mide BER, throughput y retardo con modulación adaptativa.",
          imageAlt: "Visualización de una red TDMA con estación base, nodos y franjas temporales de transmisión",
          type: "telecom",
          tags: ["TDMA", "Rayleigh", "KPIs", "MATLAB"],
        },
        {
          title: "GameRank",
          kicker: "Aplicación web · Django",
          description:
            "Plataforma full-stack de seguimiento de videojuegos con APIs, perfiles, votaciones, herramientas sociales, pruebas E2E e internacionalización.",
          imageAlt: "Visualización de una plataforma web de ranking de videojuegos conectada con servicios de datos",
          type: "software",
          tags: ["Python", "Django", "APIs REST", "ORM"],
        },
        {
          title: "Groupchat TCP",
          kicker: "Sistemas · Rust",
          description:
            "Servicio de mensajería cliente-servidor concurrente con sockets TCP, autenticación, gestión de sesiones y sincronización en tiempo real.",
          imageAlt: "Visualización de un servidor de mensajería TCP conectado con clientes y flujos concurrentes",
          type: "software",
          tags: ["Rust", "TCP", "Concurrencia", "Sockets"],
        },
        {
          title: "Satcom y radionavegación",
          kicker: "Sistemas satelitales · MATLAB",
          description:
            "Modelado y evaluación de escenarios de comunicación con estaciones terrestres, satélites GEO/LEO, enlaces, cobertura y rendimiento.",
          imageAlt: "Visualización de satélites y una estación terrestre conectados mediante haces de comunicaciones",
          type: "telecom",
          tags: ["Satcom", "GEO / LEO", "MATLAB", "Radionavegación"],
        },
        {
          title: "Reconocimiento facial con PCA",
          kicker: "Visión artificial · MATLAB",
          description:
            "Sistema de reconocimiento facial basado en PCA y LRC, evaluado con validación Leave-One-Out sobre el conjunto ORL.",
          imageAlt: "Visualización de un rostro sintético analizado mediante componentes principales y datos geométricos",
          type: "data",
          tags: ["PCA", "LRC", "Machine Learning", "MATLAB"],
        },
        {
          title: "Energy as a Service",
          kicker: "IoT · Edge + Cloud",
          description:
            "Propuesta para viviendas en Madrid que combina sensórica, control HVAC y arquitectura híbrida para una gestión energética eficiente.",
          imageAlt: "Visualización de un edificio residencial conectado con sensores IoT, climatización y gestión energética",
          type: "telecom",
          tags: ["IoT", "Edge", "Zigbee", "Wi-Fi"],
        },
      ],
    },
    skills: {
      marker: "Habilidades",
      heading: "Habilidades",
      intro: "Aptitudes que he ido adquiriendo y tecnologías/herramientas con las que he trabajado.",
      label: "Aptitudes técnicas",
      featuredPrefix: "Habilidades principales de",
      morePrefix: "Más aptitudes de",
      viewCountPrefix: "Ver",
      viewCountSuffix: "aptitudes",
      groups: [
        {
          label: "Telecomunicaciones",
          description: "Acceso radio, transporte y core",
          imageAlt: "Torre de telecomunicaciones conectada con una red de radio y satélite",
          featuredItems: ["5G / 6G", "RAN / Core", "Network slicing", "Satcom GEO / LEO", "RF y microondas", "Fibra óptica"],
          additionalItems: [
            "RAN slicing",
            "Comunicaciones móviles",
            "Tecnología de fibra óptica",
            "Redes de fibra óptica",
            "VLAN",
            "BGP",
            "Open Shortest Path First (OSPF)",
            "Wireshark",
            "Núcleo de 5G",
            "LTE",
            "Red de acceso radioterrestre UMTS",
            "Sistema global para las comunicaciones móviles",
            "4G",
            "3GPP",
            "3G",
            "2G",
            "Satélite de comunicaciones",
            "Radiofrecuencia (RF)",
            "Antenas",
            "Microondas",
            "WiMAX",
            "WiFi",
            "Bluetooth",
            "IoT",
          ],
        },
        {
          label: "Software y datos",
          description: "Código, herramientas y protocolos",
          imageAlt: "Entorno de software con terminal, datos y señales",
          featuredItems: ["MATLAB", "Python", "Rust", "C", "Django", "APIs REST"],
          additionalItems: [
            "Simulink",
            "Lenguaje ensamblador",
            "Protocolo de transferencia de hipertexto (HTTP)",
            "Programación en C",
            "VHDL",
            "Programación orientada a objetos (POO)",
            "Pascal",
            "Microsoft Excel",
            "Xirio Online",
            "Linux",
          ],
        },
        {
          label: "Análisis técnico de datos",
          description: "Modelado, medida y electrónica",
          imageAlt: "Instrumentación de laboratorio para analizar señales y electrónica",
          featuredItems: ["PCA / LRC", "BER y throughput", "Modelado de canal", "PDF / CDF", "KPIs", "Git / GitHub"],
          additionalItems: ["Filtros analógicos", "Filtros digitales", "LTSpice", "Osciloscopio", "Electrónica digital", "Machine Learning", "SVM"],
        },
      ],
    },
    formation: {
      galleryLabel: "Galería de formación universitaria",
      previousPhoto: "Ver foto anterior",
      nextPhoto: "Ver foto siguiente",
      previousTitle: "Foto anterior",
      nextTitle: "Foto siguiente",
      expandPhoto: "Ampliar foto",
      expandTitle: "Ampliar fotografía",
      enlargedPhoto: "Foto ampliada",
      closePhoto: "Cerrar foto ampliada",
      closeTitle: "Cerrar",
      of: "de",
      photos: [
        { alt: "Simulación de cobertura radioeléctrica en Xirio Online", label: "Simulación de cobertura con Xirio Online" },
        { alt: "Antena en un laboratorio de telecomunicaciones", label: "Medida de antenas en laboratorio" },
        { alt: "Analizador vectorial de redes mostrando una medida de parámetros S", label: "Análisis de parámetros S" },
        { alt: "Antena de banda ancha conectada a instrumentación de laboratorio", label: "Caracterización de antenas" },
        { alt: "Multímetro midiendo un componente en una práctica de laboratorio", label: "Mediciones electrónicas" },
        { alt: "Osciloscopio mostrando dos señales periódicas", label: "Observación de señales" },
        { alt: "Simulación de órbitas y enlaces entre satélites GEO y LEO", label: "Escenario de comunicaciones satelitales" },
        { alt: "Montaje de laboratorio de radiocomunicaciones con instrumentación y antenas", label: "Montaje de radiocomunicaciones" },
        { alt: "Esquema de arquitectura de una aplicación Django", label: "Arquitectura de aplicaciones web" },
        { alt: "Equipo Rocket M5 de Ubiquiti Networks para un enlace radio", label: "Equipamiento para enlaces inalámbricos" },
      ],
    },
    trajectory: {
      marker: "Trayectoria",
      headingBefore: "Formación, con la vista puesta en",
      headingEmphasis: "siguientes desafíos.",
      educationLabel: "Formación",
      educationDate: "2022 - actualidad",
      degree: "Grado en Ingeniería en Sistemas de Telecomunicación",
      universityDetail: "Universidad Rey Juan Carlos, Fuenlabrada. Finalización prevista: junio de 2027.",
      educationNote: "Redes, radiocomunicaciones móviles, satélite, señales y software de sistemas.",
      wuolahLabel: "Ver apuntes en Wuolah",
      wuolahAriaLabel: "Ver apuntes de Gonzalo Pacheco en Wuolah",
      itineraryLabel: "Itinerario del Grado",
      itineraryAriaLabel: "Abrir el itinerario formativo del grado en la Universidad Rey Juan Carlos",
      tfgAriaLabel: "Abrir la píldora del Trabajo Fin de Grado",
      tfgDate: "En fase de definición",
      tfgTitle: "Trabajo Fin de Grado",
      tfgDescription: "Explora la línea de investigación, las lecturas de partida y la hoja de ruta del proyecto.",
      tfgNote: "Una píldora para documentar el desarrollo con contexto técnico.",
      tfgCta: "Abrir píldora del TFG",
      tfgImageAlt: "Ilustración conceptual de una red 6G con superficies inteligentes reconfigurables",
      practicesAriaLabel: "Abrir la píldora de prácticas curriculares en NTT DATA",
      practicesLabel: "Prácticas",
      practicesDate: "Prácticas curriculares",
      practicesDescription: "Validación de soluciones de red fija e hiperautomatización, con atención a procesos, integraciones y datos de provisión.",
      practicesCta: "Ver píldora de prácticas",
    },
    credentials: {
      marker: "Certificaciones",
      languages: "Idiomas",
      englishC1: "Inglés C1",
      englishCertificate: "Ver título de inglés",
      englishCertificateAria: "Ver título de inglés C1",
      englishSummary: "Uso fluido y profesional.",
      french: "Francés",
      frenchLevel: "Básico profesional",
      spanish: "Español",
      spanishLevel: "Nativo",
      englishImageAlt: "Fragmento del certificado Cambridge English C1 de Gonzalo Pacheco Agredano",
      matlabLogoAlt: "Logotipo de MATLAB",
      matlabSummary: "Formación completada al 100%.",
      matlabProgressLabel: "MATLAB Onramp completado al 100%",
      matlabCertificate: "Ver título",
      matlabCertificateAria: "Ver título de MATLAB Onramp",
      matlabProgress: "Ver progreso",
      matlabProgressAria: "Ver progreso de MATLAB Onramp",
      technical: "Certificaciones técnicas",
      inProgress: "En proceso",
      technicalSummary: "Preparando nuevas acreditaciones técnicas para incorporarlas a este apartado.",
      nextUpdate: "Próxima actualización",
    },
    contact: {
      marker: "Contacto",
      heading: "¿Te apetece hablar conmigo sobre algún proyecto o idea?",
      description:
        "Estoy abierto a conversar acerca de cualquier proyecto que se me proponga a participar o colaborar relacionado con mis temas de interés mencionados previamente. También estoy disponible para hablar de cualquier oportunidad de trabajo o proyecto del que pueda formar parte, así como cualquier duda o pregunta acerca de mí o de mi trabajo a la que pueda aportar personalmente algún valor.",
      formTitle: "Enviar un mensaje",
    },
    footer: {
      backToTop: "Volver arriba",
    },
  },
  en: {
    metadata: {
      title: "Gonzalo Pacheco Agredano | Telecommunications",
      description:
        "Portfolio of Gonzalo Pacheco Agredano: mobile networks, satellite communications, performance analysis and software.",
    },
    navigation: ["Profile", "Projects", "Journey", "Certifications", "Contact"],
    nav: {
      skip: "Skip to content",
      brandLabel: "Go to Gonzalo Pacheco Agredano's home page",
      openMenu: "Open navigation",
      closeMenu: "Close navigation",
      primaryNavigation: "Main navigation",
      cvLabel: "Open Gonzalo Pacheco Agredano's CV",
      viewCv: "View CV",
      contactLinks: "Contact links",
      emailLabel: "Send an email to Gonzalo Pacheco Agredano",
      githubLabel: "Open Gonzalo Pacheco Agredano's GitHub",
      linkedinLabel: "Open Gonzalo Pacheco Agredano's LinkedIn",
    },
    hero: {
      role: "Telecommunications Systems Engineer",
      practicesAt: "Curricular internship at",
      universityLogo: "Universidad Rey Juan Carlos logo",
      specialtiesLabel: "Areas of expertise",
      specialties: [
        ["Networks", "Fields and radio", "Satellite communications", "Mobile radio communications"],
        ["Communication simulations", "Broadband communications"],
        ["Signals", "Systems", "Electronics", "Programming", "Radio propagation", "Antennas"],
        ["Digital systems", "Assembly language", "Telecommunications projects"],
        ["Systems software", "Linux", "Signal processing", "Microwave engineering"],
      ],
      scroll: "Scroll",
    },
    profile: {
      marker: "Profile",
      intro:
        "I am in the final year of the Bachelor's Degree in Telecommunications Systems Engineering at the Fuenlabrada School of Engineering of Universidad Rey Juan Carlos.",
      summary:
        "Throughout my degree, I have focused my projects and training on communication systems and network behaviour, seeking to understand how design decisions affect performance, efficiency and quality of service. To that end, I have worked with simulation, data processing and technical development using, among other tools, Python, Rust, C and, above all, MATLAB. In recent years, I have also deepened my knowledge of radio-channel modelling and KPI evaluation.",
      interestIntro:
        "Among the areas that interest me, and in which I would like to apply my technical background, are:",
      interestsLabel: "Technical interests",
      interests: [
        "Mobile networks and 5G (RAN/Core)",
        "Measurable, robust communication systems",
        "Network slicing and virtualisation",
        "Network monitoring and optimisation",
        "Towards 6G architectures",
        "Satellite systems",
        "Data-driven performance analysis",
      ],
      detailedCv: "View detailed CV",
      dataLabel: "Details",
      locationLabel: "Location",
      educationLabel: "Education",
      profileLabel: "Profile",
      interestsDataLabel: "Interests",
      educationValue: "URJC · Telecommunications Systems Engineering",
      profileValue: "Mobile radio communications, antennas, simulations, KPIs and programming",
      interestsValue: "5G/6G, satellite, networks and data",
      personalTitle: "About me",
      personalParagraphs: [
        "I am a very responsible, methodical and self-demanding person. I work well with others, enjoy taking initiative, and always try to learn by listening, observing and asking about anything I do not know or understand.",
        "I am passionate about technological innovation, particularly about contributing to advances in telecommunications. We live in a society that demands high data rates, low latency and high reliability. Throughout my degree, I have developed a structured way of thinking by learning and understanding every step I take. I take everything I do seriously and am highly motivated to keep learning every day. I want to apply the academic foundation I have gained in a real-world environment.",
      ],
    },
    projects: {
      marker: "Projects",
      heading: "Some projects I completed at university that I can now share:",
      filterLabel: "Filter projects",
      filters: { all: "All", telecom: "Telecommunications", software: "Software", data: "Data" },
      fullGithub: "Full GitHub profile",
      technologiesPrefix: "Technologies used in",
      repository: "View repository",
      videos: {
        required: "Watch the required-part video",
        optional: "Watch the optional-part video",
      },
      poster: "View project poster",
      cards: [
        {
          title: "TDMA Simulation",
          kicker: "Mobile networks · MATLAB",
          description:
            "Monte Carlo simulation of 10 users over a Rayleigh channel. It compares scheduling algorithms and measures BER, throughput and delay with adaptive modulation.",
          imageAlt: "Visualisation of a TDMA network with a base station, nodes and transmission time slots",
          type: "telecom",
          tags: ["TDMA", "Rayleigh", "KPIs", "MATLAB"],
        },
        {
          title: "GameRank",
          kicker: "Web application · Django",
          description:
            "Full-stack platform for tracking video games, with APIs, profiles, voting, social tools, end-to-end tests and internationalisation.",
          imageAlt: "Visualisation of a video-game ranking platform connected to data services",
          type: "software",
          tags: ["Python", "Django", "REST APIs", "ORM"],
        },
        {
          title: "Groupchat TCP",
          kicker: "Systems · Rust",
          description:
            "Concurrent client-server messaging service using TCP sockets, authentication, session management and real-time synchronisation.",
          imageAlt: "Visualisation of a TCP messaging server connected to clients and concurrent flows",
          type: "software",
          tags: ["Rust", "TCP", "Concurrency", "Sockets"],
        },
        {
          title: "Satcom and radionavigation",
          kicker: "Satellite systems · MATLAB",
          description:
            "Modelling and evaluation of communication scenarios with ground stations, GEO/LEO satellites, links, coverage and performance.",
          imageAlt: "Visualisation of satellites and a ground station connected by communication beams",
          type: "telecom",
          tags: ["Satcom", "GEO / LEO", "MATLAB", "Radionavigation"],
        },
        {
          title: "Facial recognition with PCA",
          kicker: "Computer vision · MATLAB",
          description:
            "Facial recognition system based on PCA and LRC, evaluated with Leave-One-Out validation on the ORL dataset.",
          imageAlt: "Visualisation of a synthetic face analysed through principal components and geometric data",
          type: "data",
          tags: ["PCA", "LRC", "Machine Learning", "MATLAB"],
        },
        {
          title: "Energy as a Service",
          kicker: "IoT · Edge + Cloud",
          description:
            "Proposal for homes in Madrid that combines sensing, HVAC control and a hybrid architecture for efficient energy management.",
          imageAlt: "Visualisation of a residential building connected to IoT sensors, climate control and energy management",
          type: "telecom",
          tags: ["IoT", "Edge", "Zigbee", "Wi-Fi"],
        },
      ],
    },
    skills: {
      marker: "Skills",
      heading: "Skills",
      intro: "Capabilities I have developed and technologies and tools I have worked with.",
      label: "Technical skills",
      featuredPrefix: "Core skills in",
      morePrefix: "More skills in",
      viewCountPrefix: "View",
      viewCountSuffix: "skills",
      groups: [
        {
          label: "Telecommunications",
          description: "Radio access, transport and core",
          imageAlt: "Telecommunications tower connected to a radio and satellite network",
          featuredItems: ["5G / 6G", "RAN / Core", "Network slicing", "Satcom GEO / LEO", "RF and microwaves", "Optical fibre"],
          additionalItems: [
            "RAN slicing",
            "Mobile communications",
            "Optical fibre technology",
            "Optical fibre networks",
            "VLAN",
            "BGP",
            "Open Shortest Path First (OSPF)",
            "Wireshark",
            "5G Core",
            "LTE",
            "UMTS terrestrial radio access network",
            "Global System for Mobile Communications",
            "4G",
            "3GPP",
            "3G",
            "2G",
            "Communications satellite",
            "Radio frequency (RF)",
            "Antennas",
            "Microwaves",
            "WiMAX",
            "Wi-Fi",
            "Bluetooth",
            "IoT",
          ],
        },
        {
          label: "Software and data",
          description: "Code, tools and protocols",
          imageAlt: "Software environment with a terminal, data and signals",
          featuredItems: ["MATLAB", "Python", "Rust", "C", "Django", "REST APIs"],
          additionalItems: [
            "Simulink",
            "Assembly language",
            "Hypertext Transfer Protocol (HTTP)",
            "C programming",
            "VHDL",
            "Object-oriented programming (OOP)",
            "Pascal",
            "Microsoft Excel",
            "Xirio Online",
            "Linux",
          ],
        },
        {
          label: "Technical data analysis",
          description: "Modelling, measurement and electronics",
          imageAlt: "Laboratory instrumentation for analysing signals and electronics",
          featuredItems: ["PCA / LRC", "BER and throughput", "Channel modelling", "PDF / CDF", "KPIs", "Git / GitHub"],
          additionalItems: ["Analogue filters", "Digital filters", "LTSpice", "Oscilloscope", "Digital electronics", "Machine Learning", "SVM"],
        },
      ],
    },
    formation: {
      galleryLabel: "University training gallery",
      previousPhoto: "Show previous photo",
      nextPhoto: "Show next photo",
      previousTitle: "Previous photo",
      nextTitle: "Next photo",
      expandPhoto: "Expand photo",
      expandTitle: "Expand photograph",
      enlargedPhoto: "Enlarged photo",
      closePhoto: "Close enlarged photo",
      closeTitle: "Close",
      of: "of",
      photos: [
        { alt: "Radio coverage simulation in Xirio Online", label: "Coverage simulation with Xirio Online" },
        { alt: "Antenna in a telecommunications laboratory", label: "Antenna measurement in the laboratory" },
        { alt: "Vector network analyser showing an S-parameter measurement", label: "S-parameter analysis" },
        { alt: "Broadband antenna connected to laboratory instrumentation", label: "Antenna characterisation" },
        { alt: "Multimeter measuring a component in a laboratory session", label: "Electronic measurements" },
        { alt: "Oscilloscope showing two periodic signals", label: "Signal observation" },
        { alt: "Simulation of orbits and links between GEO and LEO satellites", label: "Satellite communication scenario" },
        { alt: "Radio communications laboratory setup with instrumentation and antennas", label: "Radio communications setup" },
        { alt: "Architecture diagram of a Django application", label: "Web application architecture" },
        { alt: "Ubiquiti Networks Rocket M5 equipment for a radio link", label: "Equipment for wireless links" },
      ],
    },
    trajectory: {
      marker: "Journey",
      headingBefore: "Education, with an eye on",
      headingEmphasis: "the challenges ahead.",
      educationLabel: "Education",
      educationDate: "2022 - present",
      degree: "Bachelor's Degree in Telecommunications Systems Engineering",
      universityDetail: "Universidad Rey Juan Carlos, Fuenlabrada. Expected graduation: June 2027.",
      educationNote: "Networks, mobile radio communications, satellite systems, signals and systems software.",
      wuolahLabel: "View notes on Wuolah",
      wuolahAriaLabel: "View Gonzalo Pacheco's notes on Wuolah",
      itineraryLabel: "Degree curriculum",
      itineraryAriaLabel: "Open the degree curriculum at Universidad Rey Juan Carlos",
      tfgAriaLabel: "Open the Bachelor's Thesis overview",
      tfgDate: "In definition",
      tfgTitle: "Bachelor's Thesis",
      tfgDescription: "Explore the research line, initial readings and the project's roadmap.",
      tfgNote: "A concise overview to document the work with technical context.",
      tfgCta: "Open thesis overview",
      tfgImageAlt: "Conceptual illustration of a 6G network with reconfigurable intelligent surfaces",
      practicesAriaLabel: "Open the curricular internship overview at NTT DATA",
      practicesLabel: "Internship",
      practicesDate: "Curricular internship",
      practicesDescription: "Validation of fixed-network and hyperautomation solutions, with attention to processes, integrations and provisioning data.",
      practicesCta: "View internship overview",
    },
    credentials: {
      marker: "Certifications",
      languages: "Languages",
      englishC1: "English C1",
      englishCertificate: "View English certificate",
      englishCertificateAria: "View English C1 certificate",
      englishSummary: "Fluent professional proficiency.",
      french: "French",
      frenchLevel: "Basic professional proficiency",
      spanish: "Spanish",
      spanishLevel: "Native",
      englishImageAlt: "Excerpt from Gonzalo Pacheco Agredano's Cambridge English C1 certificate",
      matlabLogoAlt: "MATLAB logo",
      matlabSummary: "Training completed at 100%.",
      matlabProgressLabel: "MATLAB Onramp completed at 100%",
      matlabCertificate: "View certificate",
      matlabCertificateAria: "View MATLAB Onramp certificate",
      matlabProgress: "View progress",
      matlabProgressAria: "View MATLAB Onramp progress",
      technical: "Technical certifications",
      inProgress: "In progress",
      technicalSummary: "Preparing new technical credentials to add to this section.",
      nextUpdate: "Next update",
    },
    contact: {
      marker: "Contact",
      heading: "Would you like to talk about a project or idea?",
      description:
        "I am open to discussing any project related to the interests mentioned above in which I could participate or collaborate. I am also available to talk about job opportunities or projects I can join, as well as any questions about me or my work to which I can personally contribute value.",
      formTitle: "Send a message",
    },
    footer: {
      backToTop: "Back to top",
    },
  },
  fr: {
    metadata: {
      title: "Gonzalo Pacheco Agredano | Télécommunications",
      description:
        "Portfolio de Gonzalo Pacheco Agredano : réseaux mobiles, communications par satellite, analyse des performances et logiciels.",
    },
    navigation: ["Profil", "Projets", "Parcours", "Certifications", "Contact"],
    nav: {
      skip: "Aller au contenu",
      brandLabel: "Aller à l'accueil de Gonzalo Pacheco Agredano",
      openMenu: "Ouvrir la navigation",
      closeMenu: "Fermer la navigation",
      primaryNavigation: "Navigation principale",
      cvLabel: "Ouvrir le CV de Gonzalo Pacheco Agredano",
      viewCv: "Voir le CV",
      contactLinks: "Liens de contact",
      emailLabel: "Envoyer un e-mail à Gonzalo Pacheco Agredano",
      githubLabel: "Ouvrir le GitHub de Gonzalo Pacheco Agredano",
      linkedinLabel: "Ouvrir le LinkedIn de Gonzalo Pacheco Agredano",
    },
    hero: {
      role: "Ingénieur en systèmes de télécommunication",
      practicesAt: "Stage universitaire chez",
      universityLogo: "Logo de l'Universidad Rey Juan Carlos",
      specialtiesLabel: "Domaines de spécialisation",
      specialties: [
        ["Réseaux", "Champs et radio", "Communications par satellite", "Radiocommunications mobiles"],
        ["Simulations de communications", "Communications à large bande"],
        ["Signaux", "Systèmes", "Électronique", "Programmation", "Rayonnement", "Antennes"],
        ["Systèmes numériques", "Assembleur", "Projets de télécommunications"],
        ["Logiciels systèmes", "Linux", "Traitement du signal", "Micro-ondes"],
      ],
      scroll: "Défiler",
    },
    profile: {
      marker: "Profil",
      intro:
        "Je suis étudiant en dernière année de licence d'ingénierie des systèmes de télécommunication à l'Universidad Rey Juan Carlos, à l'École d'ingénierie de Fuenlabrada.",
      summary:
        "Au cours de ma formation, j'ai orienté mes projets et mes apprentissages vers les systèmes de communication et le comportement des réseaux, en cherchant à comprendre l'influence des décisions de conception sur les performances, l'efficacité et la qualité de service. J'ai ainsi travaillé sur la simulation, le traitement de données et le développement technique avec, entre autres, Python, Rust, C et surtout MATLAB. Ces dernières années, j'ai également approfondi la modélisation du canal radio et l'évaluation des indicateurs de performance.",
      interestIntro:
        "Parmi les domaines qui m'intéressent et auxquels j'aimerais appliquer mes acquis techniques figurent :",
      interestsLabel: "Centres d'intérêt techniques",
      interests: [
        "Réseaux mobiles et 5G (RAN/Core)",
        "Systèmes de communication mesurables et robustes",
        "Network slicing et virtualisation",
        "Supervision et optimisation des réseaux",
        "Vers les architectures 6G",
        "Systèmes satellitaires",
        "Analyse des performances fondée sur les données",
      ],
      detailedCv: "Consulter le CV détaillé",
      dataLabel: "Informations",
      locationLabel: "Localisation",
      educationLabel: "Formation",
      profileLabel: "Profil",
      interestsDataLabel: "Centres d'intérêt",
      educationValue: "URJC · Ingénierie des systèmes de télécommunication",
      profileValue: "Radiocommunications mobiles, antennes, simulations, indicateurs de performance et programmation",
      interestsValue: "5G/6G, satellite, réseaux et données",
      personalTitle: "À propos de moi",
      personalParagraphs: [
        "Je suis une personne très responsable, méthodique et exigeante envers moi-même. Je travaille bien avec les autres, j'aime prendre des initiatives et j'essaie toujours d'apprendre en écoutant, en observant et en posant des questions sur ce que je ne connais pas ou ne comprends pas.",
        "Les innovations technologiques me passionnent, en particulier la possibilité de contribuer aux avancées des télécommunications. Nous vivons aujourd'hui dans une société qui exige des débits élevés, une faible latence et une grande fiabilité. Au cours de ma formation, j'ai développé une pensée structurée en apprenant et en comprenant chaque étape de mon travail. Je prends très au sérieux tout ce que je fais et je suis très motivé à continuer d'apprendre chaque jour. Je souhaite mettre à profit, dans un environnement réel, les bases académiques que j'ai acquises.",
      ],
    },
    projects: {
      marker: "Projets",
      heading: "Quelques projets que j'ai réalisés à l'université et que je peux désormais présenter :",
      filterLabel: "Filtrer les projets",
      filters: { all: "Tous", telecom: "Télécoms", software: "Logiciels", data: "Données" },
      fullGithub: "Profil GitHub complet",
      technologiesPrefix: "Technologies de",
      repository: "Voir le dépôt",
      videos: {
        required: "Voir la vidéo de la partie obligatoire",
        optional: "Voir la vidéo de la partie facultative",
      },
      poster: "Voir le poster du projet",
      cards: [
        {
          title: "Simulation TDMA",
          kicker: "Réseaux mobiles · MATLAB",
          description:
            "Simulation Monte Carlo de 10 utilisateurs sur un canal de Rayleigh. Elle compare des algorithmes d'ordonnancement et mesure le BER, le débit et le retard avec modulation adaptative.",
          imageAlt: "Visualisation d'un réseau TDMA avec une station de base, des nœuds et des créneaux de transmission",
          type: "telecom",
          tags: ["TDMA", "Rayleigh", "Indicateurs", "MATLAB"],
        },
        {
          title: "GameRank",
          kicker: "Application web · Django",
          description:
            "Plateforme full-stack de suivi de jeux vidéo avec API, profils, votes, outils sociaux, tests de bout en bout et internationalisation.",
          imageAlt: "Visualisation d'une plateforme de classement de jeux vidéo connectée à des services de données",
          type: "software",
          tags: ["Python", "Django", "API REST", "ORM"],
        },
        {
          title: "Groupchat TCP",
          kicker: "Systèmes · Rust",
          description:
            "Service de messagerie client-serveur concurrent reposant sur des sockets TCP, l'authentification, la gestion des sessions et la synchronisation en temps réel.",
          imageAlt: "Visualisation d'un serveur de messagerie TCP relié à des clients et à des flux concurrents",
          type: "software",
          tags: ["Rust", "TCP", "Concurrence", "Sockets"],
        },
        {
          title: "Satcom et radionavigation",
          kicker: "Systèmes satellitaires · MATLAB",
          description:
            "Modélisation et évaluation de scénarios de communication avec stations au sol, satellites GEO/LEO, liaisons, couverture et performances.",
          imageAlt: "Visualisation de satellites et d'une station au sol reliés par des faisceaux de communication",
          type: "telecom",
          tags: ["Satcom", "GEO / LEO", "MATLAB", "Radionavigation"],
        },
        {
          title: "Reconnaissance faciale par ACP",
          kicker: "Vision par ordinateur · MATLAB",
          description:
            "Système de reconnaissance faciale basé sur l'ACP et LRC, évalué avec une validation Leave-One-Out sur le jeu de données ORL.",
          imageAlt: "Visualisation d'un visage synthétique analysé par composantes principales et données géométriques",
          type: "data",
          tags: ["ACP", "LRC", "Apprentissage automatique", "MATLAB"],
        },
        {
          title: "Energy as a Service",
          kicker: "IoT · Edge + Cloud",
          description:
            "Proposition pour des logements à Madrid combinant capteurs, contrôle HVAC et architecture hybride pour une gestion énergétique efficace.",
          imageAlt: "Visualisation d'un bâtiment résidentiel relié à des capteurs IoT, au contrôle climatique et à la gestion énergétique",
          type: "telecom",
          tags: ["IoT", "Edge", "Zigbee", "Wi-Fi"],
        },
      ],
    },
    skills: {
      marker: "Compétences",
      heading: "Compétences",
      intro: "Aptitudes développées et technologies ou outils avec lesquels j'ai travaillé.",
      label: "Compétences techniques",
      featuredPrefix: "Compétences clés en",
      morePrefix: "Autres compétences en",
      viewCountPrefix: "Voir",
      viewCountSuffix: "compétences",
      groups: [
        {
          label: "Télécommunications",
          description: "Accès radio, transport et cœur de réseau",
          imageAlt: "Tour de télécommunications reliée à un réseau radio et satellite",
          featuredItems: ["5G / 6G", "RAN / Core", "Network slicing", "Satcom GEO / LEO", "RF et micro-ondes", "Fibre optique"],
          additionalItems: [
            "RAN slicing",
            "Communications mobiles",
            "Technologie de fibre optique",
            "Réseaux de fibre optique",
            "VLAN",
            "BGP",
            "Open Shortest Path First (OSPF)",
            "Wireshark",
            "Cœur 5G",
            "LTE",
            "Réseau d'accès radio terrestre UMTS",
            "Système mondial de communications mobiles",
            "4G",
            "3GPP",
            "3G",
            "2G",
            "Satellite de communications",
            "Radiofréquence (RF)",
            "Antennes",
            "Micro-ondes",
            "WiMAX",
            "Wi-Fi",
            "Bluetooth",
            "IoT",
          ],
        },
        {
          label: "Logiciels et données",
          description: "Code, outils et protocoles",
          imageAlt: "Environnement logiciel avec terminal, données et signaux",
          featuredItems: ["MATLAB", "Python", "Rust", "C", "Django", "API REST"],
          additionalItems: [
            "Simulink",
            "Langage assembleur",
            "Protocole de transfert hypertexte (HTTP)",
            "Programmation en C",
            "VHDL",
            "Programmation orientée objet (POO)",
            "Pascal",
            "Microsoft Excel",
            "Xirio Online",
            "Linux",
          ],
        },
        {
          label: "Analyse technique de données",
          description: "Modélisation, mesure et électronique",
          imageAlt: "Instrumentation de laboratoire pour l'analyse de signaux et d'électronique",
          featuredItems: ["ACP / LRC", "BER et débit", "Modélisation de canal", "PDF / CDF", "Indicateurs", "Git / GitHub"],
          additionalItems: ["Filtres analogiques", "Filtres numériques", "LTSpice", "Oscilloscope", "Électronique numérique", "Apprentissage automatique", "SVM"],
        },
      ],
    },
    formation: {
      galleryLabel: "Galerie de formation universitaire",
      previousPhoto: "Voir la photo précédente",
      nextPhoto: "Voir la photo suivante",
      previousTitle: "Photo précédente",
      nextTitle: "Photo suivante",
      expandPhoto: "Agrandir la photo",
      expandTitle: "Agrandir la photographie",
      enlargedPhoto: "Photo agrandie",
      closePhoto: "Fermer la photo agrandie",
      closeTitle: "Fermer",
      of: "sur",
      photos: [
        { alt: "Simulation de couverture radioélectrique dans Xirio Online", label: "Simulation de couverture avec Xirio Online" },
        { alt: "Antenne dans un laboratoire de télécommunications", label: "Mesure d'antennes en laboratoire" },
        { alt: "Analyseur de réseaux vectoriel affichant une mesure de paramètres S", label: "Analyse des paramètres S" },
        { alt: "Antenne à large bande connectée à une instrumentation de laboratoire", label: "Caractérisation d'antennes" },
        { alt: "Multimètre mesurant un composant lors d'une séance de laboratoire", label: "Mesures électroniques" },
        { alt: "Oscilloscope affichant deux signaux périodiques", label: "Observation de signaux" },
        { alt: "Simulation d'orbites et de liaisons entre satellites GEO et LEO", label: "Scénario de communications par satellite" },
        { alt: "Montage de laboratoire de radiocommunications avec instrumentation et antennes", label: "Montage de radiocommunications" },
        { alt: "Schéma d'architecture d'une application Django", label: "Architecture d'applications web" },
        { alt: "Équipement Rocket M5 d'Ubiquiti Networks pour une liaison radio", label: "Équipement pour liaisons sans fil" },
      ],
    },
    trajectory: {
      marker: "Parcours",
      headingBefore: "Une formation tournée vers",
      headingEmphasis: "les défis à venir.",
      educationLabel: "Formation",
      educationDate: "2022 - aujourd'hui",
      degree: "Licence en ingénierie des systèmes de télécommunication",
      universityDetail: "Universidad Rey Juan Carlos, Fuenlabrada. Fin prévue : juin 2027.",
      educationNote: "Réseaux, radiocommunications mobiles, satellite, signaux et logiciels systèmes.",
      wuolahLabel: "Voir les notes sur Wuolah",
      wuolahAriaLabel: "Voir les notes de Gonzalo Pacheco sur Wuolah",
      itineraryLabel: "Programme du diplôme",
      itineraryAriaLabel: "Ouvrir le programme du diplôme à l'Universidad Rey Juan Carlos",
      tfgAriaLabel: "Ouvrir l'aperçu du projet de fin d'études",
      tfgDate: "En cours de définition",
      tfgTitle: "Projet de fin d'études",
      tfgDescription: "Découvrir l'axe de recherche, les premières lectures et la feuille de route du projet.",
      tfgNote: "Un aperçu concis pour documenter le développement dans son contexte technique.",
      tfgCta: "Ouvrir l'aperçu du projet",
      tfgImageAlt: "Illustration conceptuelle d'un réseau 6G avec surfaces intelligentes reconfigurables",
      practicesAriaLabel: "Ouvrir l'aperçu du stage universitaire chez NTT DATA",
      practicesLabel: "Stage",
      practicesDate: "Stage universitaire",
      practicesDescription: "Validation de solutions de réseau fixe et d'hyperautomatisation, avec attention portée aux processus, aux intégrations et aux données de provisionnement.",
      practicesCta: "Voir l'aperçu du stage",
    },
    credentials: {
      marker: "Certifications",
      languages: "Langues",
      englishC1: "Anglais C1",
      englishCertificate: "Voir le diplôme d'anglais",
      englishCertificateAria: "Voir le diplôme d'anglais C1",
      englishSummary: "Utilisation fluide et professionnelle.",
      french: "Français",
      frenchLevel: "Niveau professionnel élémentaire",
      spanish: "Espagnol",
      spanishLevel: "Langue maternelle",
      englishImageAlt: "Extrait du certificat Cambridge English C1 de Gonzalo Pacheco Agredano",
      matlabLogoAlt: "Logo MATLAB",
      matlabSummary: "Formation terminée à 100 %.",
      matlabProgressLabel: "MATLAB Onramp terminé à 100 %",
      matlabCertificate: "Voir le diplôme",
      matlabCertificateAria: "Voir le diplôme MATLAB Onramp",
      matlabProgress: "Voir la progression",
      matlabProgressAria: "Voir la progression MATLAB Onramp",
      technical: "Certifications techniques",
      inProgress: "En cours",
      technicalSummary: "Préparation de nouvelles certifications techniques à ajouter à cette section.",
      nextUpdate: "Prochaine mise à jour",
    },
    contact: {
      marker: "Contact",
      heading: "Souhaitez-vous échanger avec moi au sujet d'un projet ou d'une idée ?",
      description:
        "Je suis ouvert à échanger au sujet de tout projet, lié aux domaines qui m'intéressent et mentionnés plus haut, auquel je pourrais participer ou collaborer. Je suis également disponible pour discuter de toute opportunité professionnelle ou de tout projet auquel je pourrais prendre part, ainsi que de toute question à mon sujet ou concernant mon travail à laquelle je pourrais apporter une contribution utile.",
      formTitle: "Envoyer un message",
    },
    footer: {
      backToTop: "Retour en haut",
    },
  },
  de: {
    metadata: {
      title: "Gonzalo Pacheco Agredano | Telekommunikation",
      description:
        "Portfolio von Gonzalo Pacheco Agredano: Mobilfunknetze, Satellitenkommunikation, Leistungsanalyse und Software.",
    },
    navigation: ["Profil", "Projekte", "Werdegang", "Zertifikate", "Kontakt"],
    nav: {
      skip: "Zum Inhalt springen",
      brandLabel: "Zur Startseite von Gonzalo Pacheco Agredano",
      openMenu: "Navigation öffnen",
      closeMenu: "Navigation schließen",
      primaryNavigation: "Hauptnavigation",
      cvLabel: "Lebenslauf von Gonzalo Pacheco Agredano öffnen",
      viewCv: "Lebenslauf ansehen",
      contactLinks: "Kontaktlinks",
      emailLabel: "Gonzalo Pacheco Agredano eine E-Mail senden",
      githubLabel: "GitHub von Gonzalo Pacheco Agredano öffnen",
      linkedinLabel: "LinkedIn von Gonzalo Pacheco Agredano öffnen",
    },
    hero: {
      role: "Ingenieur für Telekommunikationssysteme",
      practicesAt: "Pflichtpraktikum bei",
      universityLogo: "Logo der Universidad Rey Juan Carlos",
      specialtiesLabel: "Spezialisierungsbereiche",
      specialties: [
        ["Netzwerke", "Felder und Funk", "Satellitenkommunikation", "Mobilfunkkommunikation"],
        ["Kommunikationssimulationen", "Breitbandkommunikation"],
        ["Signale", "Systeme", "Elektronik", "Programmierung", "Funkausbreitung", "Antennen"],
        ["Digitale Systeme", "Assembler", "Telekommunikationsprojekte"],
        ["Systemsoftware", "Linux", "Signalverarbeitung", "Mikrowellentechnik"],
      ],
      scroll: "Scrollen",
    },
    profile: {
      marker: "Profil",
      intro:
        "Ich studiere im letzten Jahr Telekommunikationssystemtechnik an der Universidad Rey Juan Carlos, an der Ingenieurfakultät in Fuenlabrada.",
      summary:
        "Während meines Studiums habe ich meine Projekte und meine Ausbildung auf Kommunikationssysteme und Netzwerkverhalten ausgerichtet. Dabei möchte ich verstehen, wie Entwurfsentscheidungen Leistung, Effizienz und Dienstgüte beeinflussen. Dafür habe ich mit Simulation, Datenverarbeitung und technischer Entwicklung gearbeitet, unter anderem mit Python, Rust, C und vor allem MATLAB. In den letzten Studienjahren konnte ich außerdem meine Kenntnisse in der Modellierung von Funkkanälen und der Auswertung von KPIs vertiefen.",
      interestIntro:
        "Zu den Bereichen, die mich interessieren und in denen ich meine technische Grundlage einsetzen möchte, gehören:",
      interestsLabel: "Technische Interessen",
      interests: [
        "Mobilfunknetze und 5G (RAN/Core)",
        "Messbare und robuste Kommunikationssysteme",
        "Network Slicing und Virtualisierung",
        "Netzüberwachung und -optimierung",
        "Entwicklung hin zu 6G-Architekturen",
        "Satellitensysteme",
        "Datenbasierte Leistungsanalyse",
      ],
      detailedCv: "Detaillierten Lebenslauf ansehen",
      dataLabel: "Informationen",
      locationLabel: "Standort",
      educationLabel: "Ausbildung",
      profileLabel: "Profil",
      interestsDataLabel: "Interessen",
      educationValue: "URJC · Telekommunikationssystemtechnik",
      profileValue: "Mobilfunkkommunikation, Antennen, Simulationen, KPIs und Programmierung",
      interestsValue: "5G/6G, Satellit, Netzwerke und Daten",
      personalTitle: "Über mich",
      personalParagraphs: [
        "Ich bin ein sehr verantwortungsbewusster, methodischer und anspruchsvoller Mensch. Ich arbeite gut mit anderen zusammen, übernehme gerne Initiative und versuche stets, durch Zuhören, Beobachten und Nachfragen zu lernen, wenn ich etwas nicht weiß oder nicht verstehe.",
        "Technologische Innovationen begeistern mich, besonders die Möglichkeit, zum Fortschritt in der Telekommunikation beizutragen. Wir leben heute in einer Gesellschaft, die hohe Datenraten, geringe Latenzen und hohe Zuverlässigkeit verlangt. Während meines Studiums habe ich eine strukturierte Denkweise entwickelt, indem ich jeden Schritt meiner Arbeit lerne und verstehe. Ich nehme alles, was ich tue, sehr ernst und bin hoch motiviert, jeden Tag weiterzulernen. Ich möchte mein erworbenes akademisches Fundament in einem realen Arbeitsumfeld anwenden.",
      ],
    },
    projects: {
      marker: "Projekte",
      heading: "Einige Projekte, die ich an der Universität umgesetzt habe und nun zeigen kann:",
      filterLabel: "Projekte filtern",
      filters: { all: "Alle", telecom: "Telekommunikation", software: "Software", data: "Daten" },
      fullGithub: "Gesamtes GitHub-Profil",
      technologiesPrefix: "Technologien für",
      repository: "Repository ansehen",
      videos: {
        required: "Video zum Pflichtteil ansehen",
        optional: "Video zum freiwilligen Teil ansehen",
      },
      poster: "Projektposter ansehen",
      cards: [
        {
          title: "TDMA-Simulation",
          kicker: "Mobilfunknetze · MATLAB",
          description:
            "Monte-Carlo-Simulation mit zehn Nutzern über einen Rayleigh-Kanal. Sie vergleicht Scheduling-Algorithmen und misst BER, Durchsatz und Verzögerung mit adaptiver Modulation.",
          imageAlt: "Visualisierung eines TDMA-Netzwerks mit Basisstation, Knoten und Übertragungszeitschlitzen",
          type: "telecom",
          tags: ["TDMA", "Rayleigh", "KPIs", "MATLAB"],
        },
        {
          title: "GameRank",
          kicker: "Webanwendung · Django",
          description:
            "Full-Stack-Plattform zur Verwaltung von Videospielen mit APIs, Profilen, Abstimmungen, sozialen Funktionen, End-to-End-Tests und Internationalisierung.",
          imageAlt: "Visualisierung einer Videospiel-Ranking-Plattform, die mit Datendiensten verbunden ist",
          type: "software",
          tags: ["Python", "Django", "REST-APIs", "ORM"],
        },
        {
          title: "Groupchat TCP",
          kicker: "Systeme · Rust",
          description:
            "Nebenläufiger Client-Server-Messagingdienst mit TCP-Sockets, Authentifizierung, Sitzungsverwaltung und Echtzeitsynchronisierung.",
          imageAlt: "Visualisierung eines TCP-Messagingservers, der mit Clients und parallelen Datenströmen verbunden ist",
          type: "software",
          tags: ["Rust", "TCP", "Nebenläufigkeit", "Sockets"],
        },
        {
          title: "Satcom und Funknavigation",
          kicker: "Satellitensysteme · MATLAB",
          description:
            "Modellierung und Bewertung von Kommunikationsszenarien mit Bodenstationen, GEO/LEO-Satelliten, Verbindungen, Abdeckung und Leistung.",
          imageAlt: "Visualisierung von Satelliten und einer Bodenstation, die durch Kommunikationsstrahlen verbunden sind",
          type: "telecom",
          tags: ["Satcom", "GEO / LEO", "MATLAB", "Funknavigation"],
        },
        {
          title: "Gesichtserkennung mit PCA",
          kicker: "Bildverarbeitung · MATLAB",
          description:
            "Gesichtserkennungssystem auf Basis von PCA und LRC, bewertet mit Leave-One-Out-Validierung auf dem ORL-Datensatz.",
          imageAlt: "Visualisierung eines synthetischen Gesichts, das mit Hauptkomponenten und geometrischen Daten analysiert wird",
          type: "data",
          tags: ["PCA", "LRC", "Maschinelles Lernen", "MATLAB"],
        },
        {
          title: "Energy as a Service",
          kicker: "IoT · Edge + Cloud",
          description:
            "Vorschlag für Wohnungen in Madrid, der Sensorik, HVAC-Steuerung und eine hybride Architektur für effizientes Energiemanagement kombiniert.",
          imageAlt: "Visualisierung eines Wohngebäudes mit IoT-Sensorik, Klimasteuerung und Energiemanagement",
          type: "telecom",
          tags: ["IoT", "Edge", "Zigbee", "Wi-Fi"],
        },
      ],
    },
    skills: {
      marker: "Fähigkeiten",
      heading: "Fähigkeiten",
      intro: "Fähigkeiten, die ich entwickelt habe, sowie Technologien und Werkzeuge, mit denen ich gearbeitet habe.",
      label: "Technische Fähigkeiten",
      featuredPrefix: "Kernkompetenzen in",
      morePrefix: "Weitere Kompetenzen in",
      viewCountPrefix: "Weitere",
      viewCountSuffix: "Kompetenzen",
      groups: [
        {
          label: "Telekommunikation",
          description: "Funkzugang, Transport und Kernnetz",
          imageAlt: "Telekommunikationsturm, der mit einem Funk- und Satellitennetz verbunden ist",
          featuredItems: ["5G / 6G", "RAN / Core", "Network Slicing", "Satcom GEO / LEO", "RF und Mikrowellen", "Glasfaser"],
          additionalItems: [
            "RAN Slicing",
            "Mobilkommunikation",
            "Glasfasertechnologie",
            "Glasfasernetze",
            "VLAN",
            "BGP",
            "Open Shortest Path First (OSPF)",
            "Wireshark",
            "5G-Kernnetz",
            "LTE",
            "UMTS-Funkzugangsnetz",
            "Global System for Mobile Communications",
            "4G",
            "3GPP",
            "3G",
            "2G",
            "Kommunikationssatellit",
            "Funkfrequenz (RF)",
            "Antennen",
            "Mikrowellen",
            "WiMAX",
            "Wi-Fi",
            "Bluetooth",
            "IoT",
          ],
        },
        {
          label: "Software und Daten",
          description: "Code, Werkzeuge und Protokolle",
          imageAlt: "Softwareumgebung mit Terminal, Daten und Signalen",
          featuredItems: ["MATLAB", "Python", "Rust", "C", "Django", "REST-APIs"],
          additionalItems: [
            "Simulink",
            "Assemblersprache",
            "Hypertext Transfer Protocol (HTTP)",
            "C-Programmierung",
            "VHDL",
            "Objektorientierte Programmierung (OOP)",
            "Pascal",
            "Microsoft Excel",
            "Xirio Online",
            "Linux",
          ],
        },
        {
          label: "Technische Datenanalyse",
          description: "Modellierung, Messung und Elektronik",
          imageAlt: "Laborinstrumentierung zur Analyse von Signalen und Elektronik",
          featuredItems: ["PCA / LRC", "BER und Durchsatz", "Kanalmodellierung", "PDF / CDF", "KPIs", "Git / GitHub"],
          additionalItems: ["Analoge Filter", "Digitale Filter", "LTSpice", "Oszilloskop", "Digitalelektronik", "Maschinelles Lernen", "SVM"],
        },
      ],
    },
    formation: {
      galleryLabel: "Galerie der Hochschulausbildung",
      previousPhoto: "Vorheriges Foto anzeigen",
      nextPhoto: "Nächstes Foto anzeigen",
      previousTitle: "Vorheriges Foto",
      nextTitle: "Nächstes Foto",
      expandPhoto: "Foto vergrößern",
      expandTitle: "Fotografie vergrößern",
      enlargedPhoto: "Vergrößertes Foto",
      closePhoto: "Vergrößertes Foto schließen",
      closeTitle: "Schließen",
      of: "von",
      photos: [
        { alt: "Simulation der Funkabdeckung in Xirio Online", label: "Abdeckungssimulation mit Xirio Online" },
        { alt: "Antenne in einem Telekommunikationslabor", label: "Antennenmessung im Labor" },
        { alt: "Vektornetzwerkanalysator mit einer S-Parameter-Messung", label: "S-Parameter-Analyse" },
        { alt: "Breitbandantenne, die mit Laborinstrumentierung verbunden ist", label: "Antennencharakterisierung" },
        { alt: "Multimeter misst ein Bauteil in einer Laborübung", label: "Elektronische Messungen" },
        { alt: "Oszilloskop mit zwei periodischen Signalen", label: "Signalbeobachtung" },
        { alt: "Simulation von Umlaufbahnen und Verbindungen zwischen GEO- und LEO-Satelliten", label: "Szenario für Satellitenkommunikation" },
        { alt: "Laboraufbau für Funkkommunikation mit Instrumentierung und Antennen", label: "Funkkommunikationsaufbau" },
        { alt: "Architekturdiagramm einer Django-Anwendung", label: "Architektur von Webanwendungen" },
        { alt: "Rocket-M5-Gerät von Ubiquiti Networks für eine Funkverbindung", label: "Ausrüstung für drahtlose Verbindungen" },
      ],
    },
    trajectory: {
      marker: "Werdegang",
      headingBefore: "Ausbildung mit Blick auf",
      headingEmphasis: "die nächsten Herausforderungen.",
      educationLabel: "Ausbildung",
      educationDate: "2022 - heute",
      degree: "Bachelorstudium Telekommunikationssystemtechnik",
      universityDetail: "Universidad Rey Juan Carlos, Fuenlabrada. Voraussichtlicher Abschluss: Juni 2027.",
      educationNote: "Netzwerke, Mobilfunkkommunikation, Satellit, Signale und Systemsoftware.",
      wuolahLabel: "Unterlagen auf Wuolah ansehen",
      wuolahAriaLabel: "Unterlagen von Gonzalo Pacheco auf Wuolah ansehen",
      itineraryLabel: "Studienverlaufsplan",
      itineraryAriaLabel: "Studienverlaufsplan der Universidad Rey Juan Carlos öffnen",
      tfgAriaLabel: "Kurzüberblick zur Bachelorarbeit öffnen",
      tfgDate: "In Ausarbeitung",
      tfgTitle: "Bachelorarbeit",
      tfgDescription: "Die Forschungslinie, die ersten Literaturquellen und die Roadmap des Projekts erkunden.",
      tfgNote: "Ein kurzer Überblick, der die Entwicklung im technischen Kontext dokumentiert.",
      tfgCta: "Thesenüberblick öffnen",
      tfgImageAlt: "Konzeptillustration eines 6G-Netzwerks mit rekonfigurierbaren intelligenten Oberflächen",
      practicesAriaLabel: "Überblick zum Pflichtpraktikum bei NTT DATA öffnen",
      practicesLabel: "Praktikum",
      practicesDate: "Pflichtpraktikum",
      practicesDescription: "Validierung von Festnetz- und Hyperautomatisierungslösungen mit Augenmerk auf Prozesse, Integrationen und Bereitstellungsdaten.",
      practicesCta: "Praktikumsüberblick ansehen",
    },
    credentials: {
      marker: "Zertifikate",
      languages: "Sprachen",
      englishC1: "Englisch C1",
      englishCertificate: "Englischzertifikat ansehen",
      englishCertificateAria: "Englisch-C1-Zertifikat ansehen",
      englishSummary: "Fließende, professionelle Sprachverwendung.",
      french: "Französisch",
      frenchLevel: "Grundlegende berufliche Kenntnisse",
      spanish: "Spanisch",
      spanishLevel: "Muttersprache",
      englishImageAlt: "Ausschnitt aus dem Cambridge-English-C1-Zertifikat von Gonzalo Pacheco Agredano",
      matlabLogoAlt: "MATLAB-Logo",
      matlabSummary: "Ausbildung zu 100 % abgeschlossen.",
      matlabProgressLabel: "MATLAB Onramp zu 100 % abgeschlossen",
      matlabCertificate: "Zertifikat ansehen",
      matlabCertificateAria: "MATLAB-Onramp-Zertifikat ansehen",
      matlabProgress: "Fortschritt ansehen",
      matlabProgressAria: "MATLAB-Onramp-Fortschritt ansehen",
      technical: "Technische Zertifikate",
      inProgress: "In Vorbereitung",
      technicalSummary: "Neue technische Zertifikate werden vorbereitet, um sie diesem Bereich hinzuzufügen.",
      nextUpdate: "Nächstes Update",
    },
    contact: {
      marker: "Kontakt",
      heading: "Möchten Sie mit mir über ein Projekt oder eine Idee sprechen?",
      description:
        "Ich bin offen für Gespräche über jedes Projekt in den oben genannten Interessengebieten, an dem ich teilnehmen oder mitwirken könnte. Ebenso stehe ich für Gespräche über berufliche Chancen oder Projekte zur Verfügung, an denen ich mitwirken kann, sowie für Fragen zu mir oder meiner Arbeit, zu denen ich persönlich einen Beitrag leisten kann.",
      formTitle: "Nachricht senden",
    },
    footer: {
      backToTop: "Nach oben",
    },
  },
};
