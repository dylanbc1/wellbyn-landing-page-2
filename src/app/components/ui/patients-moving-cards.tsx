"use client";

import React from "react";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";
import Image from "next/image";

export default function PatientsMovingCards() {
  return (
    <div className="w-full py-8 md:py-12 lg:py-16">
      <InfiniteMovingCards
        items={patientsFeatures}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const patientsFeatures = [
  {
    icon: <Image src="/icons/edit.svg" alt="edit" width={24} height={24} className="w-6 h-6" />,
    title: "Check-In Rápido",
    description: "Evita filas y papeleo. Realiza tu check-in desde el celular antes de llegar a la clínica. Rápido, seguro y sin estrés."
  },
  {
    icon: <Image src="/icons/calender.svg" alt="calendar" width={24} height={24} className="w-6 h-6" />,
    title: "Encuentra y agenda con facilidad",
    description: "Encuentra tu médico y agenda sin llamadas, en segundos desde la app."
  },
  {
    icon: <Image src="/icons/list.svg" alt="list" width={24} height={24} className="w-6 h-6" />,
    title: "Lista de Espera",
    description: "Apúntate a la lista y te notificamos tan pronto haya un huequito."
  },
  {
    icon: <Image src="/icons/filter.svg" alt="filter" width={24} height={24} className="w-6 h-6" />,
    title: "Medicamentos y Recetas",
    description: "Consulta tu lista de medicamentos recetados, recibe recordatorios y guarda tus recetas médicas en un solo lugar."
  },
  {
    icon: <Image src="/icons/folder.svg" alt="folder" width={24} height={24} className="w-6 h-6" />,
    title: "Historial Médico",
    description: "Accede a tus visitas pasadas, notas del médico, y cualquier documento clínico relevante desde tu app."
  },
  {
    icon: <Image src="/icons/balancer.svg" alt="balancer" width={24} height={24} className="w-6 h-6" />,
    title: "Perfiles para Cuidadores",
    description: "Ideal para padres, hijos o cuidadores que necesitan estar al tanto."
  }
];
