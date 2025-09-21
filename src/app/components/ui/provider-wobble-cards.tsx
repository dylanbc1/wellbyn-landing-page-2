"use client";

import React from "react";
import { WobbleCard } from "@/app/components/ui/wobble-card";
import Image from "next/image";

export default function ProviderWobbleCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-[1295px] mx-auto w-full">
      {/* Agenda inteligente */}
      <WobbleCard
        containerClassName="col-span-1 bg-[#5FA9DF] min-h-[400px] lg:min-h-[350px]"
        className=""
      >
        <div className="max-w-sm">
          <h2 className="text-left text-balance text-xl md:text-2xl lg:text-3xl font-medium tracking-[-0.5px] text-white leading-tight">
            Agenda inteligente
          </h2>
          <p className="mt-4 text-left text-base md:text-lg text-white/90 leading-relaxed">
            El paciente agenda desde su celular, según especialidad, plan médico u horario. Tú recibes la cita confirmada sin llamadas ni doble entrada.
          </p>
        </div>
        <Image
          src="/images/provider-alternate-1.png"
          width={400}
          height={300}
          alt="agenda inteligente"
          className="absolute -right-4 lg:-right-[20%] -bottom-10 object-contain rounded-xl opacity-90"
        />
      </WobbleCard>

      {/* Consulta fluida */}
      <WobbleCard 
        containerClassName="col-span-1 bg-white border-2 border-[#5FA9DF]/20 min-h-[400px] lg:min-h-[350px]"
        className=""
      >
        <div className="max-w-sm">
          <h2 className="text-left text-balance text-xl md:text-2xl lg:text-3xl font-medium tracking-[-0.5px] text-[#0C1523] leading-tight">
            Consulta fluida
          </h2>
          <p className="mt-4 text-left text-base md:text-lg text-[#3C4147] leading-relaxed">
            Accede al historial, motivo de visita y pre-screening desde el dashboard. Toda la información lista antes de que el paciente entre.
          </p>
        </div>
        <Image
          src="/images/provider-alternate-2.png"
          width={400}
          height={300}
          alt="consulta fluida"
          className="absolute -right-4 lg:-right-[20%] -bottom-10 object-contain rounded-xl"
        />
      </WobbleCard>

      {/* Nota con códigos automáticos */}
      <WobbleCard 
        containerClassName="col-span-1 bg-white border-2 border-[#5FA9DF]/20 min-h-[400px] lg:min-h-[350px]"
        className=""
      >
        <div className="max-w-sm">
          <h2 className="text-left text-balance text-xl md:text-2xl lg:text-3xl font-medium tracking-[-0.5px] text-[#0C1523] leading-tight">
            Nota con códigos automáticos
          </h2>
          <p className="mt-4 text-left text-base md:text-lg text-[#3C4147] leading-relaxed">
            Documenta más rápido con plantillas clínicas estructuradas. Wellbyn sugiere los códigos correctos (ICD-10, CPT) automáticamente.
          </p>
        </div>
        <Image
          src="/images/provider-alternate-3.png"
          width={400}
          height={300}
          alt="códigos automáticos"
          className="absolute -right-4 lg:-right-[20%] -bottom-10 object-contain rounded-xl"
        />
      </WobbleCard>

      {/* Factura y seguimiento */}
      <WobbleCard 
        containerClassName="col-span-1 bg-gradient-to-br from-[#5FA9DF] to-[#4A9BCE] min-h-[400px] lg:min-h-[350px]"
        className=""
      >
        <div className="max-w-sm">
          <h2 className="text-left text-balance text-xl md:text-2xl lg:text-3xl font-medium tracking-[-0.5px] text-white leading-tight">
            Factura y seguimiento
          </h2>
          <p className="mt-4 text-left text-base md:text-lg text-white/90 leading-relaxed">
            El sistema genera el claim en segundos. Tú haces seguimiento, el paciente recibe recordatorios — todo desde un solo lugar.
          </p>
        </div>
        <Image
          src="/images/provider-alternate-4.png"
          width={400}
          height={300}
          alt="factura y seguimiento"
          className="absolute -right-4 lg:-right-[20%] -bottom-10 object-contain rounded-xl opacity-90"
        />
      </WobbleCard>
    </div>
  );
}
