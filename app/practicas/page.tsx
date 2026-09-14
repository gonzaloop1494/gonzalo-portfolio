import type { Metadata } from "next";
import { PracticesPage } from "@/components/practices-page";

export const metadata: Metadata = {
  title: "Píldora de prácticas | Gonzalo Pacheco",
  description:
    "Píldora de las prácticas curriculares de Gonzalo Pacheco Agredano en NTT DATA Spain.",
};

export default function Page() {
  return <PracticesPage />;
}
