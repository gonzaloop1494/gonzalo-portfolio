import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "@/components/language-provider";
import { absoluteUrl, siteUrl } from "@/lib/site";
import "./globals.css";

const verification = {
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : {}),
  ...(process.env.BING_SITE_VERIFICATION
    ? { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } }
    : {}),
};

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: "Portfolio de Gonzalo Pacheco Agredano",
      url: absoluteUrl("/"),
      inLanguage: "es",
    },
    {
      "@type": "Person",
      "@id": absoluteUrl("/#gonzalo-pacheco-agredano"),
      name: "Gonzalo Pacheco Agredano",
      url: absoluteUrl("/"),
      image: absoluteUrl("/gonzalo-pacheco.png"),
      jobTitle: "Estudiante de Ingeniería de Telecomunicación",
      description:
        "Estudiante de Ingeniería de Telecomunicación especializado en redes móviles, comunicaciones satelitales, análisis de rendimiento y software.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Leganés",
        addressRegion: "Madrid",
        addressCountry: "ES",
      },
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "Universidad Rey Juan Carlos",
      },
      knowsAbout: [
        "Telecomunicaciones",
        "Redes móviles",
        "5G",
        "6G",
        "Comunicaciones satelitales",
        "MATLAB",
        "Análisis de rendimiento",
      ],
      sameAs: [
        "https://github.com/gonzaloop1494",
        "https://www.linkedin.com/in/gonzalo-pacheco-agredano-5a9b482b7/",
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Gonzalo Pacheco Agredano | Telecomunicaciones",
    template: "%s | Gonzalo Pacheco Agredano",
  },
  description:
    "Portfolio de Gonzalo Pacheco Agredano: redes móviles, comunicaciones satelitales, análisis de rendimiento y software.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  applicationName: "Portfolio de Gonzalo Pacheco Agredano",
  authors: [{ name: "Gonzalo Pacheco Agredano", url: siteUrl }],
  creator: "Gonzalo Pacheco Agredano",
  publisher: "Gonzalo Pacheco Agredano",
  robots: {
    index: true,
    follow: true,
  },
  verification,
  openGraph: {
    title: "Gonzalo Pacheco Agredano | Telecomunicaciones",
    description:
      "Portfolio de telecomunicaciones: redes móviles, sistemas satelitales, análisis de rendimiento y desarrollo de software.",
    type: "website",
    url: "/",
    siteName: "Portfolio de Gonzalo Pacheco Agredano",
    locale: "es_ES",
    images: [
      {
        url: "/gonzalo-pacheco.png",
        width: 855,
        height: 1287,
        alt: "Gonzalo Pacheco Agredano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonzalo Pacheco Agredano | Telecomunicaciones",
    description:
      "Portfolio de telecomunicaciones: redes móviles, sistemas satelitales, análisis de rendimiento y software.",
    images: ["/gonzalo-pacheco.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f4f6f2",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
