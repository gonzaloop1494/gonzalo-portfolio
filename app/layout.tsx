import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "Gonzalo Pacheco | Telecomunicaciones",
  description:
    "Portfolio de Gonzalo Pacheco Agredano: redes móviles, comunicaciones satelitales, análisis de rendimiento y software.",
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  openGraph: {
    title: "Gonzalo Pacheco | Telecomunicaciones",
    description:
      "Redes móviles, sistemas satelitales, análisis de rendimiento y desarrollo de software.",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f4f6f2",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
