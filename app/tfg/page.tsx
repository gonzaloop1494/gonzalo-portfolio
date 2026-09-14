import type { Metadata } from "next";
import { TfgPage } from "@/components/tfg-page";

export const metadata: Metadata = {
  title: "Píldora del TFG",
  description:
    "Píldora del Trabajo Fin de Grado de Gonzalo Pacheco Agredano sobre escenarios Cell-Free asistidos por RIS.",
  alternates: {
    canonical: "/tfg",
  },
  openGraph: {
    title: "Píldora del TFG | Gonzalo Pacheco Agredano",
    description:
      "Trabajo Fin de Grado de Gonzalo Pacheco Agredano sobre escenarios Cell-Free asistidos por RIS.",
    url: "/tfg",
  },
};

export default function Page() {
  return <TfgPage />;
}
