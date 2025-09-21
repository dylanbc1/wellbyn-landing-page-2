'use client'
import UnifiedHeader from "@/app/components/UnifiedHeader";
import WellbynFooter from "@/app/components/WellbynFooter";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import FAQ from "@/app/components/ui/FAQ";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import ProviderWobbleCards from "@/app/components/ui/provider-wobble-cards";

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
    suffix?: string; 
    shouldStart: boolean;
    className?: string;
}> = ({ end, suffix = "", shouldStart, className = "" }) => {
    const count = useCounterAnimation(end, 2000, shouldStart);
    
    return (
        <span className={className}>
            {count}{suffix}
        </span>
    );
};

const FAQs = [
    {
        question: "¿Qué es Wellbyn y cómo puede ayudar a mi clínica?",
        answer: "Wellbyn es una plataforma médica todo-en-uno en la nube que te permite gestionar citas, pacientes, notas clínicas, facturación e historial, todo desde un solo sistema. Elimina el caos de múltiples apps y mejora tu operación con automatización inteligente."
    },
    {
        question: "¿Necesito instalar algo en mi clínica?",
        answer: "Nada. Wellbyn para pacientes es completamente gratis."
    },
    {
        question: "¿Puedo integrar Wellbyn con los sistemas que ya uso?",
        answer: "Nada. Wellbyn para pacientes es completamente gratis."
    },
    {
        question: "¿Qué funciones de automatización tiene?",
        answer: "Nada. Wellbyn para pacientes es completamente gratis."
    },
    {
        question: "¿Es compatible con todas las especialidades médicas?",
        answer: "Nada. Wellbyn para pacientes es completamente gratis."
    },
    {
        question: "¿Mi equipo necesita formación técnica para usar Wellbyn?",
        answer: "Nada. Wellbyn para pacientes es completamente gratis."
    },
    {
        question: "¿Cómo se manejan los historiales médicos?",
        answer: "Nada. Wellbyn para pacientes es completamente gratis."
    },
    {
        question: "¿Puedo controlar qué ve cada usuario del sistema?",
        answer: "Nada. Wellbyn para pacientes es completamente gratis."
    }
]
export default function ProviderPage(){
    const [shouldAnimateCounters, setShouldAnimateCounters] = useState(false);
    const counterSectionRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !shouldAnimateCounters) {
                    setShouldAnimateCounters(true);
                }
            },
            { threshold: 0.3 }
        );
        
        if (counterSectionRef.current) {
            observer.observe(counterSectionRef.current);
        }
        
        return () => observer.disconnect();
    }, [shouldAnimateCounters]);
    
    return (
        <div className="text-[#0C1523] overflow-x-hidden">
            <div className="bg-[#FFFFFF] w-full flex items-center justify-center">
                <div className="max-w-[1295px] px-6 md:px-8 lg:px-0">
                    <UnifiedHeader />
                    <div className="pt-20 sm:pt-[100px] md:pt-[120px] lg:pt-[140px] pb-20 md:pb-[120px] lg:pb-[150px]">
                        {/* Layout: texto izquierda, imagen derecha en desktop - COPIADO DE PACIENTES */}
                        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 xl:gap-16 items-center min-h-[500px]">
                            {/* Texto - izquierda en desktop */}
                            <div className="text-center lg:text-left order-2 lg:order-1">
                                <div style={{letterSpacing: '-1px'}} className="font-medium text-[#0C1523] text-[28px] sm:text-5xl md:text-6xl lg:text-[48px] xl:text-[56px] leading-tight md:leading-tight lg:leading-[100%]">
                                    Automatiza todo tu flujo clínico
                                </div>
                                <div className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg max-w-[535px] mx-auto lg:mx-0 font-medium text-[#3C4147] leading-relaxed">
                                    Optimiza tus agendas, notas médicas, y facturación desde un solo lugar. Plataforma simple, segura y lista para escalar contigo.
                                </div>

                                {/* Botones - Estilo minimalista del home */}
                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-6 md:mt-8">
                                    <Link href="/waitlist">
                                        <div className="w-fit flex items-center gap-2 border rounded-full py-2.5 px-6 text-[#5FA9DF] bg-white hover:bg-gray-50 transition-all duration-200 ease-in-out cursor-pointer font-medium text-sm">
                                            <span>Waitlist</span>
                                            <span>
                                                <Image src="/icons/arrow-right-blue.svg" alt="arrow" width={14} height={14}/>
                                            </span>
                                        </div>
                                    </Link>
                                    <Link href="/request">
                                        <div className="w-fit flex items-center gap-2 rounded-full py-2.5 px-6 text-white bg-[#5FA9DF] hover:bg-[#4A9BCE] transition-all duration-200 ease-in-out cursor-pointer font-medium text-sm">
                                            <span>Solicitar demo</span>
                                            <span>
                                                <Image src="/icons/arrow-right.svg" alt="arrow" width={14} height={14}/>
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            
                            {/* Imagen - derecha en desktop - MISMA DEL HOME */}
                            <div className="flex justify-center lg:justify-start items-center order-1 lg:order-2">
                                <div className="relative w-full max-w-[500px] lg:max-w-[800px]">
                                    <Image 
                                        src="/images/pc1-home.png" 
                                        alt="pc1-home" 
                                        width={1200} 
                                        height={1000} 
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
                {/* Commented out sections */}
                {/* 
                <div style={{letterSpacing: '-2px'}}
                     className="mt-16 md:mt-20 lg:mt-[124px] flex justify-center w-full mx-auto max-w-[753px] font-bold gradient-01 text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-center px-4 leading-tight md:leading-tight lg:leading-[1.1]">
                    ¿Te suenan familiares estos problemas?
                </div>

                <div className="mt-12 md:mt-16 lg:mt-[80px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-[200px]">
                    <Image className="mt-8 md:mt-[70px] w-full h-auto" src="/images/2-3card.png" alt="2-3card" width={744} height={500}/>
                    <div className="text-center md:text-left">
                        <div className="text-lg md:text-[24px] font-semibold leading-tight">
                            1. Pacientes sin preparación previa
                        </div>
                        <div className="mt-3 md:mt-4 text-base md:text-lg leading-relaxed text-[#3C4147]">
                            Llegan sin motivo claro o agendados con el especialista equivocado.
                        </div>
                        <div className="mt-6 md:mt-[35px] text-lg md:text-[24px] font-semibold leading-tight">
                            2. Tiempo perdido y agotamiento
                        </div>
                        <div className="mt-3 md:mt-4 text-base md:text-lg leading-relaxed text-[#3C4147]">
                            Tu equipo empieza el día tarde, estresado y repitiendo tareas innecesarias.
                        </div>
                        <div className="mt-6 md:mt-[35px] text-lg md:text-[24px] font-semibold leading-tight">
                            3. Software fragmentado
                        </div>
                        <div className="mt-3 md:mt-4 text-base md:text-lg leading-relaxed text-[#3C4147]">
                            Usas demasiadas herramientas que no se hablan entre sí.
                        </div>
                        <div className="mt-6 md:mt-[35px] text-lg md:text-[24px] font-semibold leading-tight">
                            4. Tareas manuales repetitivas
                        </div>
                        <div className="mt-3 md:mt-4 text-base md:text-lg leading-relaxed text-[#3C4147]">
                            Confirmaciones, formularios y seguimientos hechos a mano.
                        </div>
                        <div className="mt-6 md:mt-[35px] text-lg md:text-[24px] font-semibold leading-tight">
                            5. Agendas caóticas
                        </div>
                        <div className="mt-3 md:mt-4 text-base md:text-lg leading-relaxed text-[#3C4147]">
                            Mensajes regados entre apps y sin contexto del paciente.
                        </div>
                    </div>
                </div>
                 <div className="py-12 md:py-16 lg:py-[47px] mt-16 md:mt-20 lg:mt-[95px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-[80px] items-center">
                     <div className="text-center md:text-left order-1 md:order-1">
                        <div style={{letterSpacing: '-2px'}}
                             className="gradient-01 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-tight lg:leading-[110%]">
                            Una plataforma. Todas las clínicas.
                        </div>
                        <div className="mt-6 md:mt-8 lg:mt-[38px] text-[#3C4147] text-base md:text-lg px-4 md:px-0 leading-relaxed">
                            Desde consultorios pequeños hasta centros multiespecialidad, todos enfrentan los mismos
                            dolores: agendas caóticas, notas dispersas y procesos ineficientes.
                            <br className="hidden md:block"/> Wellbyn los resuelve con tecnología simple, personalizable y poderosa.
                        </div>

                        <div
                            className="mt-[47px] w-fit flex items-center gap-[10px] py-[19px] px-[20px] text-[#5FA9DF]">
                            <span>Ver funciones</span>
                            <span>
                                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                             </span>
                         </div>
                     </div>
                     <div className="flex justify-center md:justify-end order-2 md:order-2">
                         <Image className="rounded-md overflow-hidden w-full h-auto max-w-[500px] md:max-w-none" src="/images/pexels-jopwell.png"
                                alt="pexels-jopwell" width={559} height={596}/>
                     </div>
                </div>
                */}

                {/* New section: La plataforma que transforma la gestión clínica */}
                <ScrollAnimation>
                    <div className="mt-4 md:mt-6 lg:mt-8 flex flex-col items-center justify-center">
                        <div className="text-center max-w-[800px] px-4">
                            <ScrollAnimation direction="up" delay={0.2}>
                                <div style={{letterSpacing: '-2px'}}
                                     className="font-medium gradient-01 text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-tight lg:leading-[110%]">
                                    La plataforma que transforma la gestión clínica
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation direction="up" delay={0.4}>
                                <div className="mt-6 md:mt-8 lg:mt-[38px] text-[#3C4147] text-base md:text-lg lg:text-[20px] leading-relaxed">
                                    Wellbyn automatiza las tareas más pesadas de tu clínica — desde el agendamiento y check-in, hasta la codificación médica, seguros y facturación. Todo en un solo sistema inteligente, diseñado para reducir la carga administrativa y dejar que los médicos y su equipo se concentren en lo que realmente importa: el cuidado de los pacientes.
                                </div>
                            </ScrollAnimation>
                        </div>
                        <ScrollAnimation direction="up" delay={0.6}>
                            <div className="mt-8 md:mt-12 lg:mt-16 flex justify-center">
                                <Image 
                                    className="w-full h-auto max-w-[600px] lg:max-w-[800px]" 
                                    src="/images/what-is-wellbyn.png" 
                                    alt="What is Wellbyn" 
                                    width={800} 
                                    height={500}
                                />
                            </div>
                        </ScrollAnimation>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className="mt-16 md:mt-20 lg:mt-[80px] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-[112px] gap-y-[53px]">
                        <ScrollAnimation direction="up" delay={0.1}>
                            <div className="flex gap-[18px] items-start">
                                <Image className="mt-2 flex-shrink-0" src="/icons/desktop.svg" alt="desktop" width={18} height={18}/>
                                <div>
                                    <div className="text-[#0C1523] text-lg md:text-xl lg:text-[24px] font-semibold leading-tight">
                                        Reclamaciones a planes automatizadas
                                    </div>
                                    <div className="text-base md:text-lg text-[#3C4147] leading-relaxed">
                                        Reclamos a planes médicos listos desde cada nota clínica, sin pasos manuales.
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation direction="up" delay={0.2}>
                            <div className="flex gap-[18px] items-start">
                                <Image className="mt-2 flex-shrink-0" src="/icons/tick-circle.svg" alt="tick-circle" width={18} height={18}/>
                                <div>
                                    <div className="text-[#0C1523] text-lg md:text-xl lg:text-[24px] font-semibold leading-tight">
                                        Confirmaciones automatizadas
                                    </div>
                                    <div className="text-base md:text-lg text-[#3C4147] leading-relaxed">
                                        Reduce ausencias con mensajes automáticos por WhatsApp, SMS o correo.
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation direction="up" delay={0.3}>
                            <div className="flex gap-[18px] items-start">
                                <Image className="mt-2 flex-shrink-0" src="/icons/edit.svg" alt="edit" width={18} height={18}/>
                                <div>
                                    <div className="text-[#0C1523] text-lg md:text-xl lg:text-[24px] font-semibold leading-tight">
                                        Notas médicas rápidas y estructuradas
                                    </div>
                                    <div className="text-base md:text-lg text-[#3C4147] leading-relaxed">
                                        Documenta más rápido con plantillas clínicas que se adaptan a cada especialidad.
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation direction="up" delay={0.4}>
                            <div className="flex gap-[18px] items-start">
                                <Image className="mt-2 flex-shrink-0" src="/icons/command.svg" alt="command" width={18} height={18}/>
                                <div>
                                    <div className="text-[#0C1523] text-lg md:text-xl lg:text-[24px] font-semibold leading-tight">
                                        Codificación automática
                                    </div>
                                    <div className="text-base md:text-lg text-[#3C4147] leading-relaxed">
                                        Convierte notas médicas en códigos listos para facturar (ICD-10, CPT, etc.).
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation direction="up" delay={0.5}>
                            <div className="flex gap-[18px] items-start">
                                <Image className="mt-2 flex-shrink-0" src="/icons/stack.svg" alt="stack" width={18} height={18}/>
                                <div>
                                    <div className="text-[#0C1523] text-lg md:text-xl lg:text-[24px] font-semibold leading-tight">
                                        Historial clínico centralizado
                                    </div>
                                    <div className="text-base md:text-lg text-[#3C4147] leading-relaxed">
                                        Accede a todo el historial de tus pacientes desde cualquier dispositivo.
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation direction="up" delay={0.6}>
                            <div className="flex gap-[18px] items-start">
                                <Image className="mt-2 flex-shrink-0" src="/icons/balancer.svg" alt="balancer" width={18} height={18}/>
                                <div>
                                    <div className="text-[#0C1523] text-lg md:text-xl lg:text-[24px] font-semibold leading-tight">
                                        Prescreening digital
                                    </div>
                                    <div className="text-base md:text-lg text-[#3C4147] leading-relaxed">
                                        Tus pacientes llegan listos. Tú solo te enfocas en atender.
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation direction="up" delay={0.7}>
                            <div className="flex gap-[18px] items-start">
                                <Image className="mt-2 flex-shrink-0" src="/icons/calender.svg" alt="calender" width={18} height={18}/>
                                <div>
                                    <div className="text-[#0C1523] text-lg md:text-xl lg:text-[24px] font-semibold leading-tight">
                                        Agendamiento centralizado
                                    </div>
                                    <div className="mt-[25px] text-base md:text-lg text-[#3C4147] leading-relaxed">
                                        Gestiona múltiples agendas, doctores y sedes sin errores ni dobles reservas.
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation direction="up" delay={0.8}>
                            <div className="flex gap-[18px] items-start">
                                <Image className="mt-2 flex-shrink-0" src="/icons/chat.svg" alt="chat" width={18} height={18}/>
                                <div>
                                    <div className="text-[#0C1523] text-lg md:text-xl lg:text-[24px] font-semibold leading-tight">
                                        Centro de mensajes centralizado
                                    </div>
                                    <div className="text-base md:text-lg text-[#3C4147] leading-relaxed">
                                        Todos tus mensajes, recordatorios y notificaciones, en un solo panel.
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </ScrollAnimation>
            </div>

            <div className="w-full bg-white border-t-4 border-b-4 border-[#5FA9DF]/30 py-12 md:py-16 lg:py-[47px] mt-20 md:mt-24 lg:mt-32 relative overflow-hidden">
                {/* Degradado azul sutil de fondo */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5FA9DF]/5 via-transparent to-[#5FA9DF]/5"></div>
                <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-[#5FA9DF]/3 to-transparent"></div>
                
                <div className="max-w-[1295px] mx-auto px-6 md:px-8 lg:px-0 relative z-10">
                    <div className="flex justify-center w-full mx-auto max-w-[753px]">
                        <div style={{letterSpacing: '-1px'}}
                             className="font-semibold text-2xl md:text-3xl lg:text-4xl text-center px-4 leading-tight md:leading-tight lg:leading-[110%] gradient-01">
                            Optimiza tu clínica sin complicaciones
                        </div>
                    </div>
                </div>
            </div>

            {/* WobbleCards Section - PROFESIONAL Y MODERNO */}
            <div className="w-full px-6 md:px-8 lg:px-0 mt-20 md:mt-24 lg:mt-32">
                <ScrollAnimation>
                    <ProviderWobbleCards />
                </ScrollAnimation>
            </div>

            
            <ScrollAnimation>
                <div className="mt-24 md:mt-20 lg:mt-[85px] pt-16 md:pt-20 lg:pt-[128px] pb-16 md:pb-20 lg:pb-[69px] bg-[#F3F7FA] w-full">
                    <div className="max-w-[1295px] mx-auto w-full px-6 md:px-8 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[48px]">
                        <div ref={counterSectionRef}>
                            <ScrollAnimation direction="left" delay={0.2}>
                                <div style={{letterSpacing: '-1px'}}
                                     className="font-medium gradient-01 text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-tight lg:leading-[110%] w-full text-center">
                                    La diferencia está en los números
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation direction="left" delay={0.4}>
                                <div className="mt-6 md:mt-8 lg:mt-[36px] text-base md:text-lg leading-relaxed text-[#3C4147] font-medium">
                                    Ahorra tiempo, factura mejor y retén más pacientes.
                                    Optimiza cada consulta con automatización clínica de verdad.
                                </div>
                            </ScrollAnimation>
                            <div className="mt-8 md:mt-12 lg:mt-[59px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[48px]">
                                <ScrollAnimation direction="up" delay={0.5}>
                                    <div>
                                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-tight">
                                            <AnimatedCounter end={30} suffix="%" shouldStart={shouldAnimateCounters} />
                                        </div>
                                        <div className="mt-2 md:mt-[7px] text-base md:text-lg text-[#3C4147] font-medium leading-relaxed">Más ingresos por códigos
                                            correctos
                                        </div>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation direction="up" delay={0.6}>
                                    <div>
                                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-tight">
                                            <AnimatedCounter end={40} suffix="%" shouldStart={shouldAnimateCounters} />
                                        </div>
                                        <div className="mt-2 md:mt-[7px] text-base md:text-lg text-[#3C4147] font-medium leading-relaxed">más retención de pacientes</div>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation direction="up" delay={0.7}>
                                    <div>
                                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-tight">
                                            <AnimatedCounter end={50} suffix="%" shouldStart={shouldAnimateCounters} />
                                        </div>
                                        <div className="mt-2 md:mt-[7px] text-base md:text-lg text-[#3C4147] font-medium leading-relaxed">Menos tiempo administrativo</div>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation direction="up" delay={0.8}>
                                    <div>
                                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-tight">
                                            <AnimatedCounter end={25} suffix="%" shouldStart={shouldAnimateCounters} />
                                        </div>
                                        <div className="mt-2 md:mt-[7px] text-base md:text-lg text-[#3C4147] font-medium leading-relaxed">Menos ausencias</div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <ScrollAnimation direction="right" delay={0.3}>
                            <div>
                                <Image src="/images/chart-img.png" alt="chart-img" width={615} height={469} className="w-full h-auto"/>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </ScrollAnimation>
            

            {/* 
            <div className="max-w-[1295px] mx-auto w-full px-6 md:px-8 lg:px-0 relative">
                <div className="w-full flex items-center justify-center pt-16 md:pt-20 lg:pt-[235px]">
                    <Image src="/images/ipad-mockup-2.png" alt="ipad-mockup-2" width={864} height={602} className="w-full h-auto"/>
                </div>
                <Image className="absolute top-0 w-full h-auto" src="/images/group-cards.png" alt="group-cards" width={1295}
                       height={974}/>
            </div>
            */}

            {/* 
            <div className="mt-8 md:mt-12 lg:mt-[42px] py-12 md:py-16 lg:py-[84px] bg-[#F3F7FA] w-full">
                <div className="max-w-[1295px] mx-auto w-full px-6 md:px-8 lg:px-0 mt-16 md:mt-20 lg:mt-[157px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[106px]">
                    <div>
                        <div className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight w-full">
                            Siempre conectado, desde cualquier lugar
                        </div>
                        <div className="mt-4 md:mt-6 lg:mt-[23px] text-base md:text-lg leading-relaxed text-[#0C1523]">
                            Wellbyn es 100% en la nube — sin instalaciones, sin complicaciones. Accede a tu clínica
                            desde cualquier dispositivo y conecta con las herramientas que ya usas.
                        </div>
                        <div className="mt-8 md:mt-12 lg:mt-[44px]">
                            <div className="flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check-circle-blue.svg" alt="check-icon" width={34}
                                       height={34}/>
                                <span className="text-lg md:text-xl lg:text-[24px] font-semibold leading-tight">Acceso remoto seguro</span>
                            </div>
                            <div className="mt-6 md:mt-8 lg:mt-[37px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check-circle-blue.svg" alt="check-icon" width={34}
                                       height={34}/>
                                <span
                                    className="text-lg md:text-xl lg:text-[24px] font-semibold leading-tight">Actualizaciones automáticas</span>
                            </div>
                            <div className="mt-6 md:mt-8 lg:mt-[37px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check-circle-blue.svg" alt="check-icon" width={34}
                                       height={34}/>
                                <span className="text-lg md:text-xl lg:text-[24px] font-semibold leading-tight">Integraciones con WhatsApp, SMS, CRM, y más</span>
                            </div>
                        </div>

                    </div>
                    <div className="relative">
                        <Image className="absolute left-[223px] top-[253px]" src="/images/play-button.svg"
                               alt="play-button" width={80} height={80}/>
                        <Image className="rounded-md overflow-hidden w-full h-auto" src="/images/pexels-jopwell-2.png"
                               alt="pexels-jopwell-2" width={526} height={586}/>
                    </div>


                </div>
            </div>
            */}

            {/* 
            <div className="max-w-[1295px] mx-auto w-full px-6 md:px-8 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[71px] py-16 md:py-20 lg:py-[110px]">
                    <div>
                        <div style={{letterSpacing: '-2px', lineHeight: '1.1'}}
                             className="gradient-01 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">
                            ¿Tienes preguntas?
                        </div>
                        <div className="mt-4 md:mt-6 lg:mt-[23px] text-base md:text-lg text-[#3C4147] leading-relaxed">
                            Aquí respondemos lo más importante sobre Wellbyn para clínicas.
                        </div>
                    </div>
                    <div>
                        {FAQs.map((e, i) => <div key={i} className={`${i > 0 ? 'mt-8 md:mt-[36px]' : ''}`}>
                            <FAQ question={e.question} answer={e.answer}/>
                        </div>)}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[71px] pt-16 md:pt-20 lg:pt-[58px] pb-16 md:pb-20 lg:pb-[131px]">
                    <div>
                        <div style={{letterSpacing: '-2px', lineHeight: '1.1'}}
                             className="gradient-01 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">
                            ¿Tienes preguntas?
                        </div>
                        <div className="mt-4 md:mt-6 lg:mt-[23px] text-base md:text-lg text-[#3C4147] leading-relaxed">
                            Planes que se adaptan a tu clínica
                        </div>
                        <div className="flex items-center gap-[10px] mt-8 md:mt-12 lg:mt-[45px]">
                            <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width={20} height={20}/>
                            <span className="font-medium leading-relaxed">Agenda médica centralizada</span>
                        </div>
                        <div className="flex items-center gap-[10px] mt-4 md:mt-6 lg:mt-[13px]">
                            <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width={20} height={20}/>
                            <span
                                className="font-medium leading-relaxed">Historial médico y documentación clínica</span>
                        </div>
                        <div className="flex items-center gap-[10px] mt-4 md:mt-6 lg:mt-[13px]">
                            <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width={20} height={20}/>
                            <span
                                className="font-medium leading-relaxed">Generación de notas y códigos CPT/ICD10</span>
                        </div>
                        <div className="flex items-center gap-[10px] mt-4 md:mt-6 lg:mt-[13px]">
                            <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width={20} height={20}/>
                            <span className="font-medium leading-relaxed">Dashboard con métricas en tiempo real</span>
                        </div>
                        <div className="flex items-center gap-[10px] mt-4 md:mt-6 lg:mt-[13px]">
                            <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width={20} height={20}/>
                            <span className="font-medium leading-relaxed">Comunicación directa con pacientes</span>
                        </div>
                        <div className="flex items-center gap-[10px] mt-4 md:mt-6 lg:mt-[13px]">
                            <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width={20} height={20}/>
                            <span className="font-medium leading-relaxed">Cumplimiento con HIPAA</span>
                        </div>
                    </div>
                    <div>
                        <div
                            className="py-12 md:py-16 lg:py-[58px] px-6 md:px-[46px] rounded-[10px] custom-shadow-lg flex flex-col justify-center items-center">
                            <div className="text-lg md:text-xl lg:text-[24px] font-semibold leading-tight text-center w-full">
                                Sé el primero en conocer nuestros precios y recibe una demo personalizada.
                            </div>
                            <div className="mt-8 md:mt-12 lg:mt-[43px] w-fit flex items-center gap-2 rounded-full py-4 px-8 bg-[#5FA9DF] text-white hover:bg-[#4A9BCE] transition-all duration-300 ease-in-out  hover:shadow-lg cursor-pointer font-medium text-base">
                                <span>Contáctanos</span>
                                <span>
                                    <Image src="/icons/arrow-right-white.svg" alt="arrow" width={16} height={16}/>
                                </span>
                            </div>

                            <Link href="/request">
                                <div className="mt-4 md:mt-6 lg:mt-[19px] w-fit flex items-center gap-2 rounded-full py-4 px-8 text-[#5FA9DF] bg-white border border-[#5FA9DF] hover:bg-gray-50 hover:border-[#4A9BCE] transition-all duration-300 ease-in-out  hover:shadow-lg cursor-pointer font-bold text-base">
                                    <span>Solicitar demo</span>
                                    <span>
                                        <Image src="/icons/arrow-right-blue.svg" alt="arrow" width={16} height={16}/>
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            */}

            
            {/* CTA Section */}
            <div className="w-full bg-[#5FA9DF] pt-20 md:pt-[115px] pb-20 md:pb-[160px] flex flex-col items-center justify-center px-6 md:px-8 lg:px-6">
                <ScrollAnimation direction="up" delay={0.2}>
                    <div style={{letterSpacing: '-2px'}} className="text-center font-medium gradient-02 text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-tight lg:leading-[100%]">
                        ¿Listo para automatizar tu clínica?
                    </div>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={0.4}>
                    <div className="mt-8 md:mt-[42px] max-w-[806px] text-white text-center text-base md:text-lg leading-relaxed">
                        Wellbyn automatiza las tareas más pesadas de tu clínica — desde el agendamiento y check-in, hasta la codificación médica, seguros y facturación.
                    </div>
                </ScrollAnimation>
                <div className="mt-8 md:mt-[36px] gap-8 md:gap-[75px] flex flex-col sm:flex-row items-center justify-center">
                    <div>
                        <Link href="/waitlist">
                            <div className="w-fit flex items-center gap-2 border rounded-full py-4 px-8 text-[#5FA9DF] bg-white hover:bg-gray-50 transition-all duration-300 ease-in-out  hover:shadow-lg cursor-pointer font-bold text-base">
                                <span>Waitlist</span>
                                <span>
                                    <Image src="/icons/arrow-right-blue.svg" alt="arrow" width={16} height={16}/>
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href="/request">
                            <div className="w-fit flex items-center gap-2 rounded-full py-4 px-8 text-[#5FA9DF] bg-white hover:bg-gray-50 transition-all duration-300 ease-in-out  hover:shadow-lg cursor-pointer font-bold text-base">
                                <span>Solicitar demo</span>
                                <span>
                                    <Image src="/icons/arrow-right-blue.svg" alt="arrow" width={16} height={16}/>
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
