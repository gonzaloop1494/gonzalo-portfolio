import type { Metadata } from "next";
import { PracticesPage } from "@/components/practices-page";

export const metadata: Metadata = {
  title: "Píldora de prácticas",
  description:
    "Píldora de las prácticas curriculares de Gonzalo Pacheco Agredano en NTT DATA Spain.",
  alternates: {
    canonical: "/practicas",
  },
  openGraph: {
    title: "Píldora de prácticas | Gonzalo Pacheco Agredano",
    description:
      "Prácticas curriculares de Gonzalo Pacheco Agredano en NTT DATA Spain.",
    url: "/practicas",
  },
};

export default function Page() {
  return <PracticesPage />;
}
