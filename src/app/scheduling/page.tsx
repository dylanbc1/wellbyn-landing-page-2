'use client'
import UnifiedHeader from "@/app/components/UnifiedHeader";
import WellbynFooter from "@/app/components/WellbynFooter";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import { CheckCircle, Clock, TrendingUp, Zap, Users, DollarSign, Play } from "lucide-react";

// Hook para animación de contador
const useCounterAnimation = (end: number, duration: number = 2000, shouldStart: boolean = false) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if (!shouldStart) return;
        
        let startTime: number;
        let animationFrame: number;
        
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Easing function para animación suave
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(end * easeOutQuart));
            
            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };
        
        animationFrame = requestAnimationFrame(animate);
        
        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration, shouldStart]);
    
    return count;
};

// Componente de contador animado
const AnimatedCounter: React.FC<{ 
    end: number; 
    prefix?: string; 
    suffix?: string; 
    shouldStart: boolean;
    className?: string;
}> = ({ end, prefix = "", suffix = "", shouldStart, className = "" }) => {
    const count = useCounterAnimation(end, 2000, shouldStart);
    
    return (
        <span className={className}>
            {prefix}{count}{suffix}
        </span>
    );
};

export default function SchedulingPage() {
    const [shouldAnimateCounters, setShouldAnimateCounters] = useState(false);
    const [shouldAnimateMetrics, setShouldAnimateMetrics] = useState(false);
    const counterSectionRef = useRef<HTMLDivElement>(null);
    const metricsSectionRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !shouldAnimateCounters) {
                    setShouldAnimateCounters(true);
                }
            },
            { threshold: 0.3 }
        );
        
        const metricsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !shouldAnimateMetrics) {
                    setShouldAnimateMetrics(true);
                }
            },
            { threshold: 0.3 }
        );
        
        if (counterSectionRef.current) {
            observer.observe(counterSectionRef.current);
        }
        
        if (metricsSectionRef.current) {
            metricsObserver.observe(metricsSectionRef.current);
        }
        
        return () => {
            observer.disconnect();
            metricsObserver.disconnect();
        };
    }, [shouldAnimateCounters, shouldAnimateMetrics]);

    // Control de velocidad del video
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.2;
        }
    }, []);
    
    return (
        <div className="text-[#0C1523] overflow-x-hidden">
            <div className="bg-[#FFFFFF] w-full flex items-center justify-center">
                <div className="max-w-[1295px] px-6 md:px-8 lg:px-0">
                    <UnifiedHeader />
                    <div className="pt-32 sm:pt-[140px] md:pt-[160px] lg:pt-[180px] pb-20 md:pb-[120px] lg:pb-[150px]">
                        {/* Hero Section */}
                        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 xl:gap-16 items-center min-h-[500px]">
                            {/* Texto - izquierda en desktop */}
                            <div className="text-center lg:text-left order-2 lg:order-1">
                                <div style={{letterSpacing: '-1px'}} className="font-medium text-[#0C1523] text-[28px] sm:text-5xl md:text-6xl lg:text-[48px] xl:text-[56px] leading-tight md:leading-tight lg:leading-[100%]">
                                    Optimiza tu agenda con <span className="bg-[#5FA9DF] text-white px-1 py-0.5 sm:px-2 sm:py-1 rounded-md text-[20px] sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[44px]">IA</span>
                                </div>
                                <div className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg max-w-[535px] mx-auto lg:mx-0 font-medium text-[#3C4147] leading-relaxed">
                                    Maximiza tus ingresos, reduce tiempos muertos y mejora la experiencia de tus pacientes con nuestro sistema de scheduling inteligente.
                                </div>

                                {/* Botones */}
                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-6 md:mt-8">
                                    <Link href="/request">
                                        <div className="w-fit flex items-center gap-2 rounded-full py-2.5 px-6 text-white bg-[#5FA9DF] hover:bg-[#4A9BCE] transition-all duration-200 ease-in-out cursor-pointer font-medium text-sm">
                                            <span>Solicitar demo</span>
                                            <span>
                                                <Image src="/icons/arrow-right.svg" alt="arrow" width={14} height={14}/>
                                            </span>
                                        </div>
                                    </Link>
                                    <Link href="/waitlist">
                                        <div className="w-fit flex items-center gap-2 border rounded-full py-2.5 px-6 text-[#5FA9DF] bg-white hover:bg-gray-50 transition-all duration-200 ease-in-out cursor-pointer font-medium text-sm">
                                            <span>Waitlist</span>
                                            <span>
                                                <Image src="/icons/arrow-right-blue.svg" alt="arrow" width={14} height={14}/>
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            
                            {/* Imagen - derecha en desktop */}
                            <div className="flex justify-center lg:justify-start items-center order-1 lg:order-2">
                                <div className="relative w-full max-w-[500px] lg:max-w-[700px]">
                                    <Image 
                                        src="/images/what-is-wellbyn.png" 
                                        alt="scheduling-dashboard" 
                                        width={1200} 
                                        height={800} 
                                        className="w-full h-auto drop-shadow-lg" 
                                        priority={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1295px] mx-auto w-full px-6 md:px-8 lg:px-0">
                {/* Beneficios principales */}
                <ScrollAnimation>
                    <div className="mt-4 md:mt-6 lg:mt-8 flex flex-col items-center justify-center">
                        <div className="text-center max-w-[800px] px-4">
                            <ScrollAnimation direction="up" delay={0.2}>
                                <div style={{letterSpacing: '-1px'}}
                                     className="font-medium gradient-01 text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-tight lg:leading-[110%]">
                                    Scheduling inteligente que maximiza tu potencial
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation direction="up" delay={0.4}>
                                <div className="mt-6 md:mt-8 lg:mt-[38px] text-[#3C4147] text-base md:text-lg lg:text-[20px] leading-relaxed">
                                    Nuestro algoritmo de IA analiza patrones de citas, tiempos de consulta y rentabilidad para optimizar automáticamente tu agenda y maximizar tanto tus ingresos como tu bienestar profesional.
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* Métricas de impacto */}
                <ScrollAnimation>
                    <div className="mt-16 md:mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16" ref={metricsSectionRef}>
                        <ScrollAnimation direction="up" delay={0.1}>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#E8F4FD] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="w-8 h-8 text-[#5FA9DF]" />
                                </div>
                                <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0C1523] mb-2">
                                    +<AnimatedCounter end={35} suffix="%" shouldStart={shouldAnimateMetrics} />
                                </div>
                                <div className="text-lg md:text-xl font-medium text-[#0C1523] mb-2">Incremento en ingresos</div>
                                <div className="text-base md:text-lg text-[#3C4147] leading-relaxed">
                                    Optimización automática de citas de alto valor
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation direction="up" delay={0.2}>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#E8F4FD] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Clock className="w-8 h-8 text-[#5FA9DF]" />
                                </div>
                                <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0C1523] mb-2">
                                    -<AnimatedCounter end={50} suffix="%" shouldStart={shouldAnimateMetrics} />
                                </div>
                                <div className="text-lg md:text-xl font-medium text-[#0C1523] mb-2">Menos tiempos muertos</div>
                                <div className="text-base md:text-lg text-[#3C4147] leading-relaxed">
                                    IA elimina espacios ineficientes automáticamente
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation direction="up" delay={0.3}>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#E8F4FD] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-[#5FA9DF]" />
                                </div>
                                <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0C1523] mb-2">
                                    +<AnimatedCounter end={40} suffix="%" shouldStart={shouldAnimateMetrics} />
                                </div>
                                <div className="text-lg md:text-xl font-medium text-[#0C1523] mb-2">Más pacientes atendidos</div>
                                <div className="text-base md:text-lg text-[#3C4147] leading-relaxed">
                                    Mejor distribución y aprovechamiento del tiempo
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </ScrollAnimation>

                {/* Video Section - INNOVADORA Y PROFESIONAL */}
                <div className="w-full bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] py-20 md:py-24 lg:py-32 mt-24 md:mt-32 lg:mt-40 relative overflow-hidden">
                    {/* Efectos de fondo elegantes */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#5FA9DF]/4 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-1/4 h-full bg-gradient-to-r from-[#5FA9DF]/3 to-transparent"></div>
                    <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#5FA9DF]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-[#5FA9DF]/4 rounded-full blur-2xl"></div>
                    
                    <div className="max-w-[1295px] mx-auto px-6 md:px-8 lg:px-0 relative z-10">
                        <ScrollAnimation>
                            <div className="text-center mb-12 md:mb-16 lg:mb-20">
                                <ScrollAnimation direction="up" delay={0.2}>
                                    <div style={{letterSpacing: '-1px'}} className="gradient-01 text-2xl md:text-3xl lg:text-5xl font-medium leading-tight md:leading-tight lg:leading-[110%] mb-6 md:mb-8">
                                        Ve el optimizador en acción
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation direction="up" delay={0.4}>
                                    <div className="text-base md:text-lg lg:text-xl text-[#3C4147] leading-relaxed max-w-[700px] mx-auto">
                                        Descubre en 2 minutos cómo la IA transforma una agenda caótica en un sistema optimizado que maximiza ingresos y mejora tu calidad de vida.
                                    </div>
                                </ScrollAnimation>
                            </div>
                            
                            {/* Video Container con diseño premium */}
                            <ScrollAnimation direction="up" delay={0.6}>
                                <div className="relative max-w-[900px] mx-auto">
                                    {/* Video wrapper con efectos premium */}
                                    <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/50">
                                        {/* Video real */}
                                        <div className="relative aspect-video bg-gradient-to-br from-[#0C1523] to-[#2A3441] rounded-xl overflow-hidden">
                                            <video 
                                                ref={videoRef}
                                                className="w-full h-full object-cover rounded-xl"
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                preload="auto"
                                            >
                                                <source src="/images/scheduling-demo.mp4" type="video/mp4" />
                                                Tu navegador no soporta el elemento de video.
                                            </video>
                                            
                                            {/* Overlay sutil para mejor integración */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                                        </div>
                                        
                                        {/* Video description below */}
                                        <div className="mt-4 sm:mt-6 md:mt-8 text-center">
                                            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6">
                                                <div className="flex items-center gap-1.5 sm:gap-2 bg-[#5FA9DF]/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#5FA9DF] rounded-full"></div>
                                                    <span className="text-xs sm:text-sm font-medium text-[#0C1523]">Demo en vivo</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 sm:gap-2 bg-[#5FA9DF]/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#5FA9DF] rounded-full"></div>
                                                    <span className="text-xs sm:text-sm font-medium text-[#0C1523]">Casos reales</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 sm:gap-2 bg-[#5FA9DF]/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#5FA9DF] rounded-full"></div>
                                                    <span className="text-xs sm:text-sm font-medium text-[#0C1523]">Resultados medibles</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Decorative elements */}
                                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#5FA9DF]/20 rounded-full blur-sm"></div>
                                    <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-[#5FA9DF]/15 rounded-full blur-md"></div>
                                </div>
                            </ScrollAnimation>
                        </ScrollAnimation>
                    </div>
                </div>

                {/* Cómo funciona */}
                <ScrollAnimation>
                    <div className="mt-24 md:mt-32 lg:mt-40">
                        <ScrollAnimation direction="up" delay={0.2}>
                            <div style={{letterSpacing: '-1px'}} className="text-center gradient-01 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-tight lg:leading-[110%] mb-6 md:mb-8">
                                Cómo funciona el optimizador
                            </div>
                        </ScrollAnimation>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-12 md:mt-16 lg:mt-20">
                            <ScrollAnimation direction="left" delay={0.3}>
                                <div className="hidden md:flex justify-center">
                                    <Image 
                                        src="/images/chart-img.png" 
                                        alt="scheduling-optimization" 
                                        width={600} 
                                        height={400} 
                                        className="w-full h-auto max-w-[500px]"
                                    />
                                </div>
                            </ScrollAnimation>
                            
                            <ScrollAnimation direction="right" delay={0.4}>
                                <div className="space-y-6 md:space-y-8">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-8 h-8 bg-[#5FA9DF] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">1</div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-medium text-[#0C1523] mb-2">Análisis inteligente</h3>
                                            <p className="text-base md:text-lg text-[#3C4147] leading-relaxed">
                                                La IA analiza tu historial de citas, tipos de consulta y patrones de rentabilidad.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-4 items-start">
                                        <div className="w-8 h-8 bg-[#5FA9DF] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">2</div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-medium text-[#0C1523] mb-2">Optimización automática</h3>
                                            <p className="text-base md:text-lg text-[#3C4147] leading-relaxed">
                                                Reorganiza citas para maximizar ingresos, minimizar tiempos muertos y mejorar flujo de trabajo.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-4 items-start">
                                        <div className="w-8 h-8 bg-[#5FA9DF] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">3</div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-medium text-[#0C1523] mb-2">Resultados medibles</h3>
                                            <p className="text-base md:text-lg text-[#3C4147] leading-relaxed">
                                                Monitoreo en tiempo real de métricas clave: ingresos, eficiencia y satisfacción.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* Características principales */}
                <ScrollAnimation>
                    <div className="mt-24 md:mt-32 lg:mt-40">
                        <ScrollAnimation direction="up" delay={0.2}>
                            <div style={{letterSpacing: '-1px'}} className="text-center gradient-01 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-tight lg:leading-[110%] mb-12 md:mb-16 lg:mb-20">
                                Características que marcan la diferencia
                            </div>
                        </ScrollAnimation>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                            <ScrollAnimation direction="up" delay={0.1}>
                                <div className="flex gap-4 items-start">
                                    <Zap className="w-6 h-6 md:w-7 md:h-7 text-[#5FA9DF] flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg md:text-xl font-medium text-[#0C1523] mb-2">
                                            Optimización en tiempo real
                                        </h3>
                                        <p className="text-base md:text-lg text-[#3C4147] leading-relaxed">
                                            Ajustes automáticos basados en cancelaciones, emergencias y disponibilidad.
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                            
                            <ScrollAnimation direction="up" delay={0.2}>
                                <div className="flex gap-4 items-start">
                                    <DollarSign className="w-6 h-6 md:w-7 md:h-7 text-[#5FA9DF] flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg md:text-xl font-medium text-[#0C1523] mb-2">
                                            Maximización de ingresos
                                        </h3>
                                        <p className="text-base md:text-lg text-[#3C4147] leading-relaxed">
                                            Prioriza citas de mayor valor y optimiza la distribución de procedimientos.
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                            
                            <ScrollAnimation direction="up" delay={0.3}>
                                <div className="flex gap-4 items-start">
                                    <Clock className="w-6 h-6 md:w-7 md:h-7 text-[#5FA9DF] flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg md:text-xl font-medium text-[#0C1523] mb-2">
                                            Gestión inteligente del tiempo
                                        </h3>
                                        <p className="text-base md:text-lg text-[#3C4147] leading-relaxed">
                                            Buffers automáticos, tiempos de preparación y transiciones optimizadas.
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                            
                            <ScrollAnimation direction="up" delay={0.4}>
                                <div className="flex gap-4 items-start">
                                    <Users className="w-6 h-6 md:w-7 md:h-7 text-[#5FA9DF] flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg md:text-xl font-medium text-[#0C1523] mb-2">
                                            Experiencia del paciente mejorada
                                        </h3>
                                        <p className="text-base md:text-lg text-[#3C4147] leading-relaxed">
                                            Menos esperas, mejores horarios y comunicación proactiva.
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                            
                            <ScrollAnimation direction="up" delay={0.5}>
                                <div className="flex gap-4 items-start">
                                    <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-[#5FA9DF] flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg md:text-xl font-medium text-[#0C1523] mb-2">
                                            Analytics predictivos
                                        </h3>
                                        <p className="text-base md:text-lg text-[#3C4147] leading-relaxed">
                                            Predicciones de demanda, patrones estacionales y recomendaciones estratégicas.
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                            
                            <ScrollAnimation direction="up" delay={0.6}>
                                <div className="flex gap-4 items-start">
                                    <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-[#5FA9DF] flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg md:text-xl font-medium text-[#0C1523] mb-2">
                                            Integración completa
                                        </h3>
                                        <p className="text-base md:text-lg text-[#3C4147] leading-relaxed">
                                            Se conecta con tu EHR existente y sistemas de facturación sin complicaciones.
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* Ejemplo de optimización */}
                <ScrollAnimation>
                    <div className="mt-24 md:mt-32 lg:mt-40" ref={counterSectionRef}>
                        <ScrollAnimation direction="up" delay={0.2}>
                            <div style={{letterSpacing: '-1px'}} className="text-center gradient-01 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-tight lg:leading-[110%] mb-6 md:mb-8">
                                Ejemplo real: Dr. Martínez
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation direction="up" delay={0.4}>
                            <div className="text-center text-base md:text-lg text-[#3C4147] leading-relaxed mb-12 md:mb-16 max-w-[600px] mx-auto">
                                Vea cómo nuestro sistema optimizó la agenda semanal del Dr. Martínez, aumentando sus ingresos de 
                                <AnimatedCounter end={1770} prefix="$" suffix="" shouldStart={shouldAnimateCounters} className="font-semibold text-red-600" /> a 
                                <AnimatedCounter end={2385} prefix="$" suffix="" shouldStart={shouldAnimateCounters} className="font-semibold text-green-600" /> en una semana.
                            </div>
                        </ScrollAnimation>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                            {/* Antes */}
                            <ScrollAnimation direction="left" delay={0.5}>
                                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 md:p-8">
                                    <div className="text-center mb-6">
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#0C1523] mb-2">Antes - Agenda Manual</h3>
                                        <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-600">
                                            <AnimatedCounter end={1770} prefix="$" suffix="/semana" shouldStart={shouldAnimateCounters} />
                                        </div>
                                    </div>
                                    <div className="space-y-2 sm:space-y-3">
                                        <div className="flex justify-between items-center p-2 sm:p-3 bg-white rounded-lg">
                                            <span className="text-xs sm:text-sm font-medium">Espacios vacíos</span>
                                            <span className="text-red-600 font-semibold text-sm sm:text-base">
                                                <AnimatedCounter end={35} suffix="%" shouldStart={shouldAnimateCounters} />
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center p-2 sm:p-3 bg-white rounded-lg">
                                            <span className="text-xs sm:text-sm font-medium">Eficiencia</span>
                                            <span className="text-red-600 font-semibold text-sm sm:text-base">
                                                <AnimatedCounter end={65} suffix="%" shouldStart={shouldAnimateCounters} />
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center p-2 sm:p-3 bg-white rounded-lg">
                                            <span className="text-xs sm:text-sm font-medium">Tiempo perdido</span>
                                            <span className="text-red-600 font-semibold text-sm sm:text-base">
                                                <AnimatedCounter end={12} suffix=" horas" shouldStart={shouldAnimateCounters} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                            
                            {/* Después */}
                            <ScrollAnimation direction="right" delay={0.6}>
                                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 md:p-8">
                                    <div className="text-center mb-6">
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#0C1523] mb-2">Después - IA Optimizada</h3>
                                        <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-600">
                                            <AnimatedCounter end={2385} prefix="$" suffix="/semana" shouldStart={shouldAnimateCounters} />
                                        </div>
                                    </div>
                                    <div className="space-y-2 sm:space-y-3">
                                        <div className="flex justify-between items-center p-2 sm:p-3 bg-white rounded-lg">
                                            <span className="text-xs sm:text-sm font-medium">Espacios vacíos</span>
                                            <span className="text-green-600 font-semibold text-sm sm:text-base">
                                                <AnimatedCounter end={8} suffix="%" shouldStart={shouldAnimateCounters} />
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center p-2 sm:p-3 bg-white rounded-lg">
                                            <span className="text-xs sm:text-sm font-medium">Eficiencia</span>
                                            <span className="text-green-600 font-semibold text-sm sm:text-base">
                                                <AnimatedCounter end={92} suffix="%" shouldStart={shouldAnimateCounters} />
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center p-2 sm:p-3 bg-white rounded-lg">
                                            <span className="text-xs sm:text-sm font-medium">Tiempo perdido</span>
                                            <span className="text-green-600 font-semibold text-sm sm:text-base">
                                                <AnimatedCounter end={3} suffix=" horas" shouldStart={shouldAnimateCounters} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>

            {/* CTA Section */}
            <div className="w-full bg-[#5FA9DF] pt-20 md:pt-[115px] pb-20 md:pb-[160px] flex flex-col items-center justify-center px-6 md:px-8 lg:px-6 mt-24 md:mt-32 lg:mt-40">
                <ScrollAnimation direction="up" delay={0.2}>
                    <div style={{letterSpacing: '-2px'}} className="text-center font-medium gradient-02 text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-tight lg:leading-[100%]">
                        ¿Listo para optimizar tu agenda?
                    </div>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={0.4}>
                    <div className="mt-8 md:mt-[42px] max-w-[806px] text-white text-center text-base md:text-lg leading-relaxed">
                        Únete a cientos de médicos que ya están maximizando sus ingresos y mejorando su calidad de vida con scheduling inteligente.
                    </div>
                </ScrollAnimation>
                <div className="mt-6 sm:mt-8 md:mt-[36px] gap-4 sm:gap-6 md:gap-8 lg:gap-[75px] flex flex-col sm:flex-row items-center justify-center">
                    <div>
                        <Link href="/request">
                            <div className="w-fit flex items-center gap-2 border rounded-full py-3 sm:py-4 px-6 sm:px-8 text-[#5FA9DF] bg-white hover:bg-gray-50 transition-all duration-300 ease-in-out hover:shadow-lg cursor-pointer font-bold text-sm sm:text-base">
                                <span>Solicitar demo</span>
                                <span>
                                    <Image src="/icons/arrow-right-blue.svg" alt="arrow" width={14} height={14} className="sm:w-4 sm:h-4"/>
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href="/waitlist">
                            <div className="w-fit flex items-center gap-2 rounded-full py-3 sm:py-4 px-6 sm:px-8 text-[#5FA9DF] bg-white hover:bg-gray-50 transition-all duration-300 ease-in-out hover:shadow-lg cursor-pointer font-bold text-sm sm:text-base">
                                <span>Waitlist</span>
                                <span>
                                    <Image src="/icons/arrow-right-blue.svg" alt="arrow" width={14} height={14} className="sm:w-4 sm:h-4"/>
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <WellbynFooter />
        </div>
    )
}
