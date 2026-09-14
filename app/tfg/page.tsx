import type { Metadata } from "next";
import { TfgPage } from "@/components/tfg-page";

export const metadata: Metadata = {
  title: "Píldora del TFG | Gonzalo Pacheco",
  description:
    "Píldora del Trabajo Fin de Grado de Gonzalo Pacheco Agredano sobre escenarios Cell-Free asistidos por RIS.",
};

export default function Page() {
  return <TfgPage />;
}
