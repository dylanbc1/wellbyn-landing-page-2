import UnifiedHeader from "@/app/components/UnifiedHeader";
import WellbynFooter from "@/app/components/WellbynFooter";
import Image from "next/image";
import React from "react";
import FAQ from "@/app/components/ui/FAQ";
import Link from "next/link";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import { CheckCircle } from "lucide-react";
import { responsiveHeroClasses, responsiveH2Classes, responsiveBodyClasses, responsiveH1Classes } from "@/lib/typography";

const FAQs = [
    {
        question: "¿Qué beneficios obtiene mi clínica al usar Wellbyn?",
        answer: "Wellbyn centraliza agenda, historial y comunicación en un solo sistema. Con IA integrada, <strong>automatiza notas clínicas, codificación y facturación</strong>, reduciendo carga administrativa y errores."
    },
    {
        question: "¿Necesito reemplazar todo mi sistema actual?",
        answer: "No. <strong>Wellbyn se adapta a tu flujo de trabajo existente</strong> y nuestro equipo te ayuda en la transición sin interrumpir la operación diaria."
    },
    {
        question: "¿Es seguro para manejar información médica?",
        answer: "Sí. <strong>Cumplimos con HIPAA y estándares internacionales de seguridad</strong>. Todos los datos están encriptados y respaldados en la nube."
    },
    {
        question: "¿Cuánto cuesta implementar Wellbyn en mi clínica?",
        answer: "El costo depende del tamaño y necesidades de tu clínica. <strong>Ofrecemos planes escalables y personalizados</strong> para que pagues solo por lo que realmente usas."
    },
    {
        question: "¿Cuánto tiempo tarda en implementarse?",
        answer: "En la mayoría de los casos, tu clínica puede comenzar a usar Wellbyn en <strong>menos de 2 semanas</strong>, con entrenamiento incluido para tu equipo."
    },
    {
        question: "¿Qué soporte ofrecen?",
        answer: "Brindamos <strong>soporte 24/7 y acompañamiento en la adopción</strong>, asegurando que tu equipo se sienta cómodo y productivo desde el primer día."
    },
    {
        question: "¿Qué pasa si mi clínica crece?",
        answer: "Wellbyn está diseñado para <strong>escalar contigo</strong>, desde prácticas pequeñas hasta grupos médicos y clínicas con múltiples especialidades."
    },
    {
        question: "¿Cómo impacta en la experiencia de mis pacientes?",
        answer: "Tus pacientes tendrán <strong>acceso a citas, historial y resultados en una sola app</strong>, con recordatorios automáticos y comunicación más ágil con tu clínica."
    }
];

export default function Home() {
    return (
        <div className="text-[#0C1523] overflow-x-hidden">
            {/* Hero Section */}
            <div className="bg-[#FFFFFF] w-full flex items-center justify-center">
                <div className="max-w-[1295px] px-6 md:px-8 lg:px-0">
                    <UnifiedHeader />
                    <div className="flex flex-col items-center justify-center pt-32 sm:pt-[140px] md:pt-[160px] lg:pt-[180px] pb-20 md:pb-[120px] lg:pb-[150px]">
                        {/* Título centrado arriba */}
                        <div className="text-center relative z-10 mb-6 md:mb-8 lg:mb-10 max-w-[800px] mx-auto px-4">
                            <div className={`${responsiveHeroClasses.full} relative z-10`}>
                                Transformando la<br/>
                                <span className="bg-[#5FA9DF] text-white px-2 py-0.5 rounded-md text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]">experiencia</span> médica
                            </div>
                            <div className={`mt-3 md:mt-4 ${responsiveBodyClasses.full} max-w-[750px] mx-auto`}>
                                Wellbyn es la plataforma médica que conecta pacientes y clínicas en un solo lugar — citas, historial, documentación y comunicación automatizada con IA.
                            </div>
                        </div>

                        {/* Botones centrados */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 md:mb-12 lg:mb-16">
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
                        
                        {/* Fotos centradas abajo */}
                        <div className="relative flex justify-center z-20">
                            <div className="relative w-full max-w-[600px] lg:max-w-[800px]">
                                {/* Mobile/Tablet Layout */}
                                <div className="lg:hidden">
                                    <div className="relative">
                                        {/* Main card centered */}
                                        <div className="relative z-30 flex justify-center mb-6">
                                            <Image src="/images/hero-home-uno.png" alt="hero-home-uno" width={320} height={240} className="w-full h-auto max-w-[300px] mx-auto drop-shadow-lg" />
                                        </div>
                                        
                                        {/* Secondary cards positioned below */}
                                        <div className="flex justify-center items-center gap-4">
                                            <div className="relative z-30">
                                                <Image src="/images/hero-home-dos.png" alt="hero-home-dos" width={200} height={130} className="w-48 h-auto drop-shadow-md" />
                                            </div>
                                            <div className="relative z-30">
                                                <Image src="/images/hero-home-tres.png" alt="hero-home-tres" width={200} height={130} className="w-48 h-auto drop-shadow-md" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Desktop Layout - All images centered */}
                                <div className="hidden lg:block">
                                    <div className="flex flex-col items-center">
                                        {/* Main card centered */}
                                        <div className="relative z-30 mb-8">
                                            <Image src="/images/hero-home-uno.png" alt="hero-home-uno" width={400} height={300} className="w-auto h-auto drop-shadow-lg" />
                                        </div>
                                        
                                        {/* Secondary cards below main card */}
                                        <div className="flex justify-center items-center gap-8">
                                            <div className="relative z-30">
                                                <Image src="/images/hero-home-dos.png" alt="hero-home-dos" width={300} height={200} className="w-auto h-auto drop-shadow-md" />
                                            </div>
                                            <div className="relative z-30">
                                                <Image src="/images/hero-home-tres.png" alt="hero-home-tres" width={300} height={200} className="w-auto h-auto drop-shadow-md" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <svg className="lg:block absolute top-[-50px] left-1/2 transform -translate-x-1/2 z-0" xmlns="http://www.w3.org/2000/svg" width="503" height="592" viewBox="0 0 503 592" fill="none">
                                <path d="M28.5992 375.381L28.587 375.358C4.21652 325.63 -2.34444 281.322 3.37314 242.024C9.0916 202.719 27.1049 168.343 52.0154 138.506C101.861 78.8031 179.235 37.3769 240.52 11.1842C271.005 -1.84479 292.787 -0.739757 309.378 10.17C326.061 21.1406 337.75 42.1749 347.625 69.6309C357.493 97.0631 365.471 130.66 374.885 166.572C384.291 202.454 395.12 240.596 410.674 276.989C426.21 313.341 443.5 347.13 458.752 378.132C474.016 409.159 487.229 437.374 494.678 462.665C502.127 487.958 503.766 510.179 496.058 529.288C488.36 548.371 471.251 564.56 440.735 577.602C379.805 603.643 292.301 589.419 212.139 550.398C132.006 511.39 59.5304 447.753 28.6092 375.404L28.5992 375.381Z" stroke="url(#paint0_linear_4737_2718)" strokeWidth="2"/>
                                <defs>
                                    <linearGradient id="paint0_linear_4737_2718" x1="119.469" y1="61.833" x2="355.873" y2="614.959" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#5FA9DF"/>
                                        <stop offset="1" stopColor="#5FA9DF" stopOpacity="0.3"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-[1295px] px-6 md:px-8 lg:px-0">
                    {/* Universities Section */}
                    <ScrollAnimation>
                        <div className="flex flex-col items-center justify-center my-12 md:my-16 lg:my-20 mb-16 md:mb-20 lg:mb-24">
                            <ScrollAnimation direction="up" delay={0.2}>
                                <div className={`text-center gradient-01 ${responsiveH1Classes.full} px-4`}>
                                    Una solución confiable, respaldada por formación global y validación local
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation direction="up" delay={0.4}>
                                <div className="mt-4 md:mt-6 lg:mt-4 flex flex-col sm:flex-row items-center gap-6 md:gap-8 lg:gap-12 px-4">
                                    <Image src="/images/mc2.png" alt="mc-logo-2" width={309} height={114} className="w-16 h-auto md:w-20 lg:w-24"/>
                                    <Image src="/images/University_of_Puerto_Rico_Logo.png" alt="uni-logo-1" width={96} height={96} className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"/>
                                    <Image src="/images/nova-uni-logo.png" alt="uni-logo-2" width={309} height={114} className="w-36 h-auto md:w-48 lg:w-56"/>
                                    <Image src="/images/stanford-logo.png" alt="uni-logo-3" width={197} height={69} className="w-24 h-auto md:w-32 lg:w-40"/>
                                    <Image src="/images/fase-1-red-yellow-blue.png" alt="uni-logo-4" width={94} height={94} className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"/>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </ScrollAnimation>

                    {/* What is Wellbyn Section */}
                    <ScrollAnimation>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-[72px] py-16 md:py-20 lg:py-[70px]">
                            <ScrollAnimation direction="left" delay={0.2}>
                                <div className="max-h-[600px] flex justify-center items-start order-2 md:order-1">
                                    <Image src="/images/what-is-wellbyn.png" alt="tab-mob" width={800} height={560} className="w-full max-w-[600px] h-auto md:max-w-none"/>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation direction="right" delay={0.4}>
                                <div className="order-1 md:order-2 text-center md:text-left lg:pt-[50px]">
                                    <div className={`text-center gradient-01 ${responsiveH1Classes.full}`}>
                                        ¿Que es Wellbyn?
                                    </div>
                                    <div className={`text-center ${responsiveBodyClasses.full} mt-6 md:mt-8 px-4 md:px-0`}>
                                         Wellbyn conecta clínicas y pacientes en una sola plataforma, centralizando agenda, historial y comunicación con inteligencia artificial para hacer la salud más simple y eficiente.
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </ScrollAnimation>

                    {/* Features Section */}
                    <ScrollAnimation>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-[40px] pb-16 md:pb-20 lg:pb-[96px] pt-16 md:pt-20 lg:pt-[56px]">
                            <ScrollAnimation direction="up" delay={0.1}>
                                <div className="flex align-center text-left items-center gap-4 md:gap-5">
                                    <CheckCircle className="mt-2 flex-shrink-0 w-8 h-8 md:w-[34px] md:h-[34px] text-[#0C1523]" />
                                        <div className="text-h3-sm md:text-h3 font-semibold text-text-primary leading-tight">Plataforma unificada</div>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation direction="up" delay={0.2}>
                                <div className="flex align-center text-left items-center gap-4 md:gap-5">
                                    <CheckCircle className="mt-2 flex-shrink-0 w-8 h-8 md:w-[34px] md:h-[34px] text-[#0C1523]" />
                                        <div className="text-h3-sm md:text-h3 font-semibold text-text-primary leading-tight">Inteligencia Artificial que ahorra tiempo</div>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation direction="up" delay={0.3}>
                                <div className="flex align-center text-left items-center gap-4 md:gap-5 md:col-span-2 lg:col-span-1">
                                    <CheckCircle className="mt-2 flex-shrink-0 w-8 h-8 md:w-[34px] md:h-[34px] text-[#0C1523]" />
                                    <div className="text-h3-sm md:text-h3 font-semibold text-text-primary leading-tight">Experiencia móvil y moderna</div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </ScrollAnimation>
                </div>

                {/* Unified Platform & Health Control Section */}
                <div className="w-full bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] py-16 md:py-20 lg:py-24 relative overflow-hidden">
                    {/* Subtle blue accent - smooth fade */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#5FA9DF]/3 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#5FA9DF]/2 to-transparent"></div>
                    <div className="absolute top-1/2 right-1/3 w-1/4 h-1/2 bg-gradient-to-l from-[#5FA9DF]/2 to-transparent"></div>
                    
                    <div className="max-w-[1295px] mx-auto px-6 md:px-8 lg:px-0">
                        {/* First subsection - Automatiza todo tu flujo clínico */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-0 mb-16 md:mb-20 lg:mb-24">
                            {/* Desktop: Imagen a la izquierda */}
                            <div className="hidden md:block">
                                <div className="flex justify-start">
                                    <Image 
                                        src="/images/pc1-home.png" 
                                        alt="cards" 
                                        width={574} 
                                        height={509} 
                                        className="w-full max-w-[550px] lg:max-w-[550px]"
                                        priority={false}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            
                            {/* Texto - siempre visible */}
                            <div className="md:ml-[15px] lg:ml-[15px] text-center md:text-left lg:pt-[80px] relative z-10">
                                <div className={`text-text-primary ${responsiveH1Classes.full}`}>
                                    Automatiza todo tu flujo clínico.
                                </div>
                                <div className={`mt-6 md:mt-8 lg:mt-[38px] text-text-secondary ${responsiveBodyClasses.full} lg:text-xl px-4 md:px-0`}>
                                    Wellbyn automatiza agendas, notas y facturación en una sola plataforma HIPAA-compliant, liberando a tu equipo del papeleo para enfocarse en lo que importa.
                                </div>
                            </div>
                            
                            {/* Mobile: Imagen debajo del texto */}
                            <div className="md:hidden mt-8">
                                <div className="flex justify-center">
                                    <Image 
                                        src="/images/pc1-home.png" 
                                        alt="cards" 
                                        width={574} 
                                        height={509} 
                                        className="w-full max-w-[350px] h-auto"
                                        priority={false}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Second subsection - Toma el control de tu salud */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-[42px]">
                            <div className="lg:ml-[30px] pt-8 md:pt-12 order-2 md:order-1 text-center md:text-left lg:pt-[100px] relative z-10">
                                <div className={`text-text-primary ${responsiveH1Classes.full}`}>
                                    Toma el control de tu salud
                                </div>
                                <div className={`mt-6 md:mt-8 lg:mt-[38px] text-text-secondary max-w-[526px] mx-auto md:mx-0 ${responsiveBodyClasses.full} lg:text-xl px-4 md:px-0`}>
                                    Wellbyn te da acceso a tu historial, citas y documentos médicos en un solo lugar, para que tengas verdadero control sobre tu salud.
                                </div>
                            </div>
                            <div className="flex justify-center md:justify-start order-2 md:order-2 lg:ml-[40px]">                            
                                {/* Two new images - stacked on mobile, side by side on larger screens */}
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-6 lg:gap-6 justify-center">
                                    <div className="flex-shrink-0">
                                        <Image 
                                            src="/images/home-new-1.png" 
                                            alt="home-new-1" 
                                            width={280} 
                                            height={420} 
                                            className="w-full h-auto max-w-[200px] sm:max-w-[220px] md:w-48 lg:w-[220px]"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Image 
                                            src="/images/home-new-2.png" 
                                            alt="home-new-2" 
                                            width={280} 
                                            height={420} 
                                            className="w-full h-auto max-w-[200px] sm:max-w-[220px] md:w-48 lg:w-[220px]"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Smart Functions Section */}
                <div className="w-full max-w-[1295px] px-6 md:px-8 lg:px-0">
                    <div className="py-12 md:py-16 lg:py-[57px] px-6 md:px-8 lg:px-[30px] w-full">
                        <ScrollAnimation>
                            <div className="bg-white border-2 border-[#5FA9DF]/20 rounded-[40px] px-6 md:px-[122px] pt-16 md:pt-[87px] pb-16 md:pb-[103px] relative overflow-hidden shadow-lg">
                                {/* Subtle blue accents */}
                                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#5FA9DF]/4 to-transparent rounded-full transform -translate-x-8 -translate-y-8"></div>
                                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#5FA9DF]/3 to-transparent rounded-full transform translate-x-12 translate-y-12"></div>
                                <div className="absolute top-1/2 right-0 w-24 h-24 bg-gradient-to-l from-[#5FA9DF]/2 to-transparent rounded-full transform translate-x-6"></div>
                                <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-gradient-to-tr from-[#5FA9DF]/3 to-transparent rounded-full"></div>
                                <ScrollAnimation direction="up" delay={0.2}>
                                    <div className={`gradient-01 ${responsiveH1Classes.full} text-center align-center`}>
                                        Funciones inteligentes que elevan tu experiencia médica
                                    </div>
                                </ScrollAnimation>
                                <div className="mt-12 md:mt-[90px] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[40px]">
                                    <ScrollAnimation direction="up" delay={0.3}>
                                        <div className="text-center md:text-left">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="70" viewBox="0 0 71 70" fill="none" className="mx-auto md:mx-0">
                                                <path d="M34.9988 40.0001C34.5851 39.9997 34.1779 39.8967 33.8138 39.7001L1.31261 22.1995C0.915721 21.9853 0.584168 21.6677 0.353086 21.2804C0.122004 20.893 0 20.4504 0 19.9994C0 19.5484 0.122004 19.1058 0.353086 18.7185C0.584168 18.3312 0.915721 18.0136 1.31261 17.7993L33.8138 0.298699C34.178 0.102632 34.5852 0 34.9988 0C35.4125 0 35.8197 0.102632 36.1839 0.298699L68.6851 17.7993C69.082 18.0136 69.4135 18.3312 69.6446 18.7185C69.8757 19.1058 69.9977 19.5484 69.9977 19.9994C69.9977 20.4504 69.8757 20.893 69.6446 21.2804C69.4135 21.6677 69.082 21.9853 68.6851 22.1995L36.1839 39.7001C35.8198 39.8967 35.4126 39.9997 34.9988 40.0001ZM7.77035 19.9994L34.9988 34.66L62.2273 19.9994L34.9988 5.33888L7.77035 19.9994Z" fill="#5FA9DF"/>
                                                <path d="M1.31254 37.2001L33.8137 54.7008C34.1779 54.8968 34.5851 54.9995 34.9988 54.9995C35.4124 54.9995 35.8196 54.8968 36.1838 54.7008L68.685 37.2001C69.2476 36.8747 69.6613 36.343 69.8384 35.7177C70.0156 35.0924 69.9423 34.4227 69.6341 33.8505C69.326 33.2783 68.8071 32.8486 68.1874 32.6525C67.5678 32.4564 66.8962 32.5093 66.3149 32.8L34.9988 49.6606L3.68262 32.8C3.10134 32.5093 2.42971 32.4564 1.8101 32.6525C1.19048 32.8486 0.671588 33.2783 0.36339 33.8505C0.0551921 34.4227 -0.0180816 35.0924 0.159099 35.7177C0.33628 36.343 0.749988 36.8747 1.31254 37.2001Z" fill="#90D5FC"/>
                                                <path d="M66.3149 47.8007L34.9988 64.6614L3.68262 47.8007C3.10134 47.5101 2.42971 47.4572 1.8101 47.6533C1.19048 47.8494 0.671588 48.2791 0.36339 48.8513C0.0551921 49.4234 -0.0180816 50.0932 0.159099 50.7184C0.33628 51.3437 0.749988 51.8755 1.31254 52.2009L33.8137 69.7015C34.1779 69.8976 34.5851 70.0002 34.9988 70.0002C35.4124 70.0002 35.8196 69.8976 36.1838 69.7015L68.685 52.2009C68.9844 52.0512 69.2506 51.8429 69.468 51.5884C69.6854 51.3339 69.8494 51.0383 69.9504 50.7192C70.0514 50.4001 70.0873 50.0639 70.056 49.7307C70.0246 49.3974 69.9267 49.0739 69.768 48.7792C69.6092 48.4845 69.393 48.2247 69.1319 48.0152C68.8709 47.8056 68.5705 47.6506 68.2485 47.5594C67.9264 47.4681 67.5893 47.4425 67.2572 47.4839C66.9251 47.5254 66.6046 47.6331 66.3149 47.8007Z" fill="#90D5FC"/>
                                                <path d="M34.7647 4.37402L6.0918 20.0777L35.3116 36.0939L63.672 19.4527L34.7647 4.37402Z" fill="#5FA9DF"/>
                                            </svg>
                                            <div className="mt-6 md:mt-[30px] text-h3-sm md:text-h3 font-semibold text-text-primary leading-tight">
                                                Todo en un solo lugar
                                            </div>
                                            <div className={`mt-4 md:mt-[18px] ${responsiveBodyClasses.full} leading-relaxed`}>
                                                Accede y organiza citas, historial médico y documentos desde una sola plataforma. Sin llamadas innecesarias ni perder tiempo en diferentes sistemas.                                </div>
                                        </div>
                                    </ScrollAnimation>
                                    <ScrollAnimation direction="up" delay={0.4}>
                                        <div className="text-center md:text-left">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="70" viewBox="0 0 45 70" fill="none" className="mx-auto md:mx-0">
                                                <path d="M37.5 0H7.5C5.51088 0 3.60322 0.790177 2.1967 2.1967C0.790177 3.60322 0 5.51088 0 7.5V62.5C0 64.4891 0.790177 66.3968 2.1967 67.8033C3.60322 69.2098 5.51088 70 7.5 70H37.5C39.4891 70 41.3968 69.2098 42.8033 67.8033C44.2098 66.3968 45 64.4891 45 62.5V7.5C45 5.51088 44.2098 3.60322 42.8033 2.1967C41.3968 0.790177 39.4891 0 37.5 0ZM40 62.5C40 63.163 39.7366 63.7989 39.2678 64.2678C38.7989 64.7366 38.163 65 37.5 65H7.5C6.83696 65 6.20107 64.7366 5.73223 64.2678C5.26339 63.7989 5 63.163 5 62.5V7.5C5 6.83696 5.26339 6.20107 5.73223 5.73223C6.20107 5.26339 6.83696 5 7.5 5H37.5C38.163 5 38.7989 5.26339 39.2678 5.73223C39.7366 6.20107 40 6.83696 40 7.5V62.5Z" fill="#5FA9DF"/>
                                                <path d="M25 55H20C19.337 55 18.7011 55.2634 18.2322 55.7322C17.7634 56.2011 17.5 56.837 17.5 57.5C17.5 58.163 17.7634 58.7989 18.2322 59.2678C18.7011 59.7366 19.337 60 20 60H25C25.663 60 26.2989 59.7366 26.7678 59.2678C27.2366 58.7989 27.5 58.163 27.5 57.5C27.5 56.837 27.2366 56.2011 26.7678 55.7322C26.2989 55.2634 25.663 55 25 55Z" fill="#5FA9DF"/>
                                                <path d="M32.5 10H12.5C11.1193 10 10 11.1193 10 12.5V47.5C10 48.8807 11.1193 50 12.5 50H32.5C33.8807 50 35 48.8807 35 47.5V12.5C35 11.1193 33.8807 10 32.5 10Z" fill="#5FA9DF"/>
                                            </svg>
                                            <div className="mt-6 md:mt-[30px] text-h3-sm md:text-h3 font-semibold text-text-primary leading-tight">
                                                Compatible y móvil
                                            </div>
                                            <div className={`mt-4 md:mt-[18px] ${responsiveBodyClasses.full} leading-relaxed`}>
                                                Usa Wellbyn desde tu celular, tableta o computadora. Pacientes y clínicas siempre conectados, con agilidad desde cualquier lugar.                                </div>
                                        </div>
                                    </ScrollAnimation>
                                    <ScrollAnimation direction="up" delay={0.5}>
                                        <div className="text-center md:text-left">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none" className="mx-auto md:mx-0">
                                                <path d="M57.5 37.5H32.5V12.5C32.5 11.837 32.2366 11.2011 31.7678 10.7322C31.2989 10.2634 30.6631 10 30 10C24.0666 10 18.2664 11.7595 13.3329 15.0559C8.39943 18.3524 4.55426 23.0377 2.28363 28.5195C0.0129986 34.0013 -0.581101 40.0333 0.576455 45.8527C1.73401 51.6721 4.59123 57.0176 8.78681 61.2132C12.9824 65.4088 18.3279 68.266 24.1473 69.4235C29.9667 70.5811 35.9987 69.987 41.4805 67.7164C46.9623 65.4457 51.6477 61.6006 54.9441 56.6671C58.2405 51.7336 60 45.9334 60 40C60 39.337 59.7366 38.7011 59.2678 38.2322C58.7989 37.7634 58.1631 37.5 57.5 37.5ZM5.00001 40C5.00721 33.8044 7.31171 27.8317 11.4678 23.2369C15.6239 18.6421 21.3362 15.7518 27.5 15.125V64.875C21.3362 64.2482 15.6239 61.3579 11.4678 56.7631C7.31171 52.1683 5.00721 46.1956 5.00001 40ZM32.5 64.87V42.5H54.875C54.2905 48.2345 51.7452 53.5917 47.6688 57.6672C43.5924 61.7426 38.2347 64.2867 32.5 64.87Z" fill="#5FA9DF"/>
                                                <path d="M40 0C39.337 0 38.7011 0.263392 38.2322 0.732233C37.7634 1.20107 37.5 1.83696 37.5 2.5V30C37.5 30.663 37.7634 31.2989 38.2322 31.7678C38.7011 32.2366 39.337 32.5 40 32.5H67.5C68.163 32.5 68.7989 32.2366 69.2678 31.7678C69.7366 31.2989 70 30.663 70 30C69.9914 22.0461 66.8279 14.4205 61.2037 8.7963C55.5795 3.17207 47.9539 0.0086027 40 0Z" fill="#90D5FC"/>
                                            </svg>
                                            <div className="mt-6 md:mt-[30px] text-h3-sm md:text-h3 font-semibold text-text-primary leading-tight">
                                                Inteligencia que trabaja por ti
                                            </div>
                                            <div className={`mt-4 md:mt-[18px] ${responsiveBodyClasses.full} leading-relaxed`}>
                                                Wellbyn automatiza notas, tareas y procesos clínicos, reduciendo errores y simplificando la experiencia para todos.                                </div>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="w-full bg-[#5FA9DF] pt-20 md:pt-[115px] pb-20 md:pb-[160px] flex flex-col items-center justify-center px-6 md:px-8 lg:px-6">
                    <ScrollAnimation direction="up" delay={0.2}>
                        <div className={`text-center gradient-02 ${responsiveH1Classes.full}`}>
                            ¿Listo para transformar tu experiencia médica?
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={0.4}>
                        <div className={`mt-8 md:mt-[42px] max-w-[806px] text-white text-center ${responsiveBodyClasses.full} leading-relaxed`}>
                            Ya seas paciente o clínica, Wellbyn centraliza todo — agenda, historial, notas clínicas y más — en una plataforma simple, rápida y segura.
                        </div>
                    </ScrollAnimation>
                    <div className="mt-8 md:mt-[36px] gap-8 md:gap-[75px] flex flex-col sm:flex-row items-center justify-center">
                        <div>
                            <Link href="/patients">
                                <div className="w-fit flex items-center gap-2 border rounded-full py-4 px-8 text-[#5FA9DF] bg-white hover:bg-gray-50 transition-all duration-300 ease-in-out  hover:shadow-lg cursor-pointer font-bold text-base">
                                    <span>Soy paciente</span>
                                    <span>
                                        <Image src="/icons/arrow-right-blue.svg" alt="cards" width={16} height={16}/>
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link href="/provider">
                                <div className="w-fit flex items-center gap-2 rounded-full py-4 px-8 text-[#5FA9DF] bg-white hover:bg-gray-50 transition-all duration-300 ease-in-out  hover:shadow-lg cursor-pointer font-bold text-base">
                                    <span>Soy proveedor</span>
                                    <span>
                                        <Image src="/icons/arrow-right-blue.svg" alt="cards" width={16} height={16}/>
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="w-full max-w-[1295px] px-6 md:px-8 lg:px-0">
                    <div className="my-16 md:my-[42px] pt-16 md:pt-[96px] pb-8 md:pb-12 px-6 md:px-8 lg:px-6">
                        <ScrollAnimation>
                            <div className="max-w-[1295px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[71px] mx-auto">
                                <ScrollAnimation direction="left" delay={0.2}>
                                    <div className="text-center md:text-left">
                                        <div className={`gradient-01 ${responsiveH1Classes.full}`}>
                                            ¿Tienes preguntas?
                                        </div>
                                        <div className={`mt-6 md:mt-[23px] ${responsiveBodyClasses.full} text-text-secondary leading-relaxed`}>
                                            Aquí respondemos lo más importante sobre Wellbyn para clínicas.
                                        </div>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation direction="right" delay={0.4}>
                                    <div>
                                        {FAQs.map((e, i) => (
                                            <ScrollAnimation key={i} direction="up" delay={0.1 * (i + 1)}>
                                                <div className={`${i > 0 ? 'mt-8 md:mt-[36px]' : ''}`}>
                                                    <FAQ question={e.question} answer={e.answer} />
                                                </div>
                                            </ScrollAnimation>
                                        ))}
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>

                <WellbynFooter />
            </div>
        </div>
    );
}

