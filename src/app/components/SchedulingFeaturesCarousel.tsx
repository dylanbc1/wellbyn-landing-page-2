'use client';

import React from 'react';
import { InfiniteMovingCards } from '@/app/components/ui/infinite-moving-cards';
import { 
  Zap, 
  DollarSign, 
  Clock, 
  Users, 
  TrendingUp, 
  CheckCircle 
} from 'lucide-react';

const schedulingFeatures = [
  {
    icon: <Zap className="w-6 h-6 text-[#5FA9DF]" />,
    title: "Optimización en tiempo real",
    description: "Ajustes automáticos basados en cancelaciones, emergencias y disponibilidad."
  },
  {
    icon: <DollarSign className="w-6 h-6 text-[#5FA9DF]" />,
    title: "Maximización de ingresos",
    description: "Prioriza citas de mayor valor y optimiza la distribución de procedimientos."
  },
  {
    icon: <Clock className="w-6 h-6 text-[#5FA9DF]" />,
    title: "Gestión inteligente del tiempo",
    description: "Buffers automáticos, tiempos de preparación y transiciones optimizadas."
  },
  {
    icon: <Users className="w-6 h-6 text-[#5FA9DF]" />,
    title: "Experiencia del paciente mejorada",
    description: "Menos esperas, mejores horarios y comunicación proactiva."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-[#5FA9DF]" />,
    title: "Analytics predictivos",
    description: "Predicciones de demanda, patrones estacionales y recomendaciones estratégicas."
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-[#5FA9DF]" />,
    title: "Integración completa",
    description: "Se conecta con tu EHR existente y sistemas de facturación sin complicaciones."
  }
];

export default function SchedulingFeaturesCarousel() {
  return (
    <div className="w-full py-8">
      <InfiniteMovingCards
        items={schedulingFeatures}
        direction="right"
        speed="slow"
        pauseOnHover={true}
        className="w-full"
      />
    </div>
  );
}
