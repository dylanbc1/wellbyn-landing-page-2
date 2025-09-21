import UnifiedHeader from "@/app/components/UnifiedHeader";
import WellbynFooter from "@/app/components/WellbynFooter";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import FAQ from "@/app/components/ui/FAQ";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import { CheckCircle } from "lucide-react";
import PatientsMovingCards from "@/app/components/ui/patients-moving-cards";

const FAQs = [
    {
        question: "¿Cuánto cuesta usar la app?",
        answer: "Nada. Wellbyn para pacientes es completamente gratis."
    },
    {
        question: "¿Puedo usar la app para manejar la salud de mis hijos o padres?",
        answer: "Nada. Wellbyn para pacientes es completamente gratis."
    },
    {
        question: "¿Recibo recordatorios de mis citas?",
        answer: "Nada. Wellbyn para pacientes es completamente gratis."
    },
    {
        question: "¿Puedo cambiar o cancelar una cita desde la app?",
        answer: "Nada. Wellbyn para pacientes es completamente gratis."
    },
    {
        question: "¿Es segura mi información médica en Wellbyn?",
        answer: "Nada. Wellbyn para pacientes es completamente gratis."
    },
    {
        question: "¿Necesito estar en una clínica específica para usar Wellbyn?",
        answer: "Nada. Wellbyn para pacientes es completamente gratis."
    },
    {
        question: "¿Qué tipo de citas puedo agendar desde la app?",
        answer: "Nada. Wellbyn para pacientes es completamente gratis."
    },
    {
        question: "¿Puedo ver mis resultados de laboratorio o MRI?",
        answer: "Nada. Wellbyn para pacientes es completamente gratis."
    }
];

export default function PatientsPage() {
    return (
        <div className="text-[#0C1523] overflow-x-hidden">
            <div className="bg-[#FFFFFF] w-full flex items-center justify-center">
                <div className="max-w-[1295px] px-6 md:px-8 lg:px-0">
                    <UnifiedHeader />
                    <div className="pt-32 sm:pt-[140px] md:pt-[160px] lg:pt-[180px] pb-20 md:pb-[120px] lg:pb-[150px]">
                        {/* Layout: imagen izquierda, texto derecha en desktop */}
                        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 xl:gap-16 items-center min-h-[500px]">
                            {/* Imagen - izquierda en desktop - REDUCIDA DRÁSTICAMENTE */}
                            <div className="flex justify-center lg:justify-start items-center order-2 lg:order-1">
                                <div className="relative w-full max-w-[300px] lg:max-w-[400px]">
                                    <Image 
                                        src="/images/p-mob-img.png" 
                                        alt="p-mob-img" 
                                        width={600} 
                                        height={600} 
                                        className="w-full h-auto drop-shadow-lg" 
                                        priority={true}
                                    />
                                </div>
                            </div>
                            
                            {/* Texto - derecha en desktop - MÁS ESPACIO */}
                            <div className="text-center lg:text-left order-1 lg:order-2">
                                <div style={{letterSpacing: '-1px'}} className="font-medium text-[#0C1523] text-[28px] sm:text-5xl md:text-6xl lg:text-[52px] xl:text-[60px] leading-tight md:leading-tight lg:leading-[100%]">
                                    Tu salud, más simple
                                </div>
                                <div className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg max-w-[600px] mx-auto lg:mx-0 font-medium text-[#3C4147] leading-relaxed">
                                    Agenda citas, revisa tu historial y recibe recordatorios al instante. Todo en un solo lugar, sin complicaciones.
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
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1295px] mx-auto w-full px-6 md:px-8 lg:px-0">
                <ScrollAnimation>
                    <div className="flex flex-col items-center justify-center py-16 md:py-20 lg:py-[70px]">
                        <ScrollAnimation direction="up" delay={0.2}>
                            <div style={{letterSpacing: '-1px'}} className="text-center gradient-01 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-tight">
                                Una nueva forma de cuidar tu salud
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation direction="up" delay={0.4}>
                            <div className="mt-6 md:mt-8 text-base md:text-lg text-[#3C4147] text-center max-w-[600px] px-4 leading-relaxed">
                                Hicimos una app pensando en lo que tú necesitas como paciente: encontrar doctores confiables, agendar sin complicaciones, tener tu historial organizado y comunicarte en un solo lugar.
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation direction="up" delay={0.6}>
                            <div className="mt-8 md:mt-12 flex justify-center">
                                <Image src="/images/3-26.png" alt="3-26" width={400} height={600} className="w-auto h-auto drop-shadow-lg" />
                            </div>
                        </ScrollAnimation>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation>
                    <div className="flex flex-col items-center justify-center w-full mt-12 md:mt-0">
                        <ScrollAnimation direction="up" delay={0.2}>
                            <div className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-tight lg:leading-[110%] max-w-[1140px] gradient-01 text-center">
                                Una nueva forma de cuidar tu salud, desde tu celular.
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation direction="up" delay={0.4}>
                            <div className="max-w-[705px] mt-[42px] text-base md:text-lg lg:text-[20px] leading-relaxed md:leading-relaxed lg:leading-[34px] text-center">
                                Hicimos una app pensando en lo que tú necesitas como paciente:
                                encontrar doctores confiables, agendar sin complicaciones, tener tu historial organizado y
                                comunicarte en un solo lugar.
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation direction="up" delay={0.6}>
                            <div className="w-full mt-[60px] sm:mt-[80px] md:mt-[102px] flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
                                <Image src="/images/patients-cel-1.png" alt="patients-cel-1" width="400" height="600" className="w-full h-auto max-w-[320px] sm:max-w-[370px] md:max-w-[420px]"/>
                                <Image src="/images/patients-cel-2.png" alt="patients-cel-2" width="300" height="600" className="w-full h-auto max-w-[250px] sm:max-w-[300px] md:max-w-[350px]"/>
                            </div>
                        </ScrollAnimation>
                    </div>
                </ScrollAnimation>

                {/* Todo lo que necesitas - Moving Cards */}
                <ScrollAnimation>
                    <div className="my-32 md:my-20 lg:my-[167px] w-full flex flex-col items-center justify-center">
                        <ScrollAnimation direction="up" delay={0.2}>
                            <div style={{letterSpacing: '-1px', lineHeight: '100%'}}
                                 className="font-medium gradient-01 text-2xl md:text-3xl lg:text-4xl max-w-[770px] w-full text-center px-4 mb-12 md:mb-16 lg:mb-20">
                                Todo lo que necesitas, en una sola app
                            </div>
                        </ScrollAnimation>
                        
                        {/* Infinite Moving Cards */}
                        <ScrollAnimation direction="up" delay={0.4}>
                            <PatientsMovingCards />
                        </ScrollAnimation>
                    </div>
                </ScrollAnimation>
                {/* 
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="text-3xl sm:text-4xl md:text-6xl lg:text-[72px] font-bold leading-tight max-w-[1140px] gradient-01 text-center px-4">
                        Tu experiencia médica, transformada
                    </div>

                    <div className="mt-12 md:mt-16 lg:mt-[91px] mb-16 md:mb-[108px] grid md:grid-cols-2 gap-8 md:gap-12 w-full">
                        <div className="flex justify-center items-center">
                            <Image src="/images/1-portrait.png" alt="1-portrait" width="291" height="573" className="w-full h-auto max-w-[250px] sm:max-w-[291px]"/>
                        </div>
                        <div className="text-center md:text-left">
                            <div
                                className="text-3xl sm:text-4xl md:text-6xl lg:text-[72px] font-bold leading-tight gradient-01">
                                Elige. Toca. Listo.
                            </div>

                            <div className="mt-[25px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Busca por especialidad</span>
                            </div>
                            <div className="mt-[43px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Selecciona fecha y hora</span>
                            </div>
                            <div className="mt-[43px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Completa un breve screening médico</span>
                            </div>
                            <div className="mt-[43px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Confirma desde tu celular</span>
                            </div>
                            <Link href="/request">
                                <div
                                    className="mt-[49px] w-fit flex items-center gap-[10px] py-[19px] px-[20px] text-[#5FA9DF] hover:text-[#4A9BCE] transition-colors cursor-pointer">
                                <span>
                                    <Image src="/icons/tick-circle.svg" alt="tick-circle" width="16" height="16"/>
                                </span>
                                    <span>Ver cómo funciona</span>
                                    <span>
                                    <Image src="/icons/arrow-right-blue.svg" alt="cards" width="16" height="16"/>
                                </span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="mt-16 md:mt-[100px] mb-[158px] grid md:grid-cols-2 w-full">
                        <div>
                            <div
                                className="text-4xl md:text-6xl lg:text-[72px] max-w[587px] font-bold leading-tight md:leading-tight lg:leading-[79.2px] gradient-01">
                                Llegaste. Tu clínica ya lo sabe
                            </div>

                            <div className="mt-[25px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Haz check-in desde tu celular al llegar a la clínica.</span>
                            </div>
                            <div className="mt-[43px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Sin hablar. Sin fila. Sin pasar por recepción.</span>
                            </div>
                            <div className="mt-[43px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Tu clínica recibe la notificación al instante.</span>
                            </div>
                            <div className="mt-[43px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Tú solo te enfocas en lo importante: tu salud.</span>
                            </div>
                            <Link href="/request">
                                <div
                                    className="mt-[49px] w-fit flex items-center gap-[10px] py-[19px] px-[20px] text-[#5FA9DF] hover:text-[#4A9BCE] transition-colors cursor-pointer">
                            <span>
                                <Image src="/icons/tick-circle.svg" alt="tick-circle" width="16" height="16"/>
                            </span>
                                <span>Ver cómo funciona</span>
                                <span>
                                <Image src="/icons/arrow-right-blue.svg" alt="cards" width="16" height="16"/>
                            </span>
                                </div>
                            </Link>
                        </div>

                        <div className="flex justify-center items-center">
                            <Image src="/images/1-portrait.png" alt="1-portrait" width="291" height="573" className="w-full h-auto max-w-[291px]"/>
                        </div>
                    </div>

                    <div className="mt-16 md:mt-[91px] mb-[108px] grid md:grid-cols-2 w-full">
                        <div className="flex justify-center items-center w-full">
                            <Image src="/images/1-portrait.png" alt="1-portrait" width="291" height="573" className="w-full h-auto max-w-[291px]"/>
                        </div>
                        <div>
                            <div
                                className="text-4xl md:text-6xl lg:text-[72px] font-bold max-w-[488px] leading-tight md:leading-tight lg:leading-[79.2px] gradient-01">
                                Tus récords, sin revolú
                            </div>

                            <div className="mt-[25px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span
                                    className="font-medium leading-[25.6px]">Tu salud organizada. Tu vida, más fácil.</span>
                            </div>
                            <div className="mt-[43px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Todos tus documentos médicos en un solo lugar.</span>
                            </div>
                            <div className="mt-[43px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Resultados de laboratorio, MRI y más — sin revolú.</span>
                            </div>
                            <div className="mt-[43px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Organiza por fecha, doctor o tipo de examen.</span>
                            </div>
                            <div className="mt-[43px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Accede cuando quieras, sin papeles ni llamadas.</span>
                            </div>
                            <Link href="/request">
                                <div
                                    className="mt-[49px] w-fit flex items-center gap-[10px] py-[19px] px-[20px] text-[#5FA9DF] hover:text-[#4A9BCE] transition-colors cursor-pointer">
                            <span>
                                <Image src="/icons/tick-circle.svg" alt="tick-circle" width="16" height="16"/>
                            </span>
                                <span>Ver cómo funciona</span>
                                <span>
                                <Image src="/icons/arrow-right-blue.svg" alt="cards" width="16" height="16"/>
                            </span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="mt-16 md:mt-[100px] mb-[158px] grid md:grid-cols-2 w-full">
                        <div>
                            <div
                                className="text-4xl md:text-6xl lg:text-[72px] max-w-[587px] font-bold leading-tight md:leading-tight lg:leading-[79.2px] gradient-01">
                                ¿No hay turno? Te avisamos
                            </div>

                            <div className="mt-[25px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span
                                    className="font-medium leading-[25.6px]">Actívala con un toque si no hay espacio</span>
                            </div>
                            <div className="mt-[43px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Te avisamos si se libera un turno</span>
                            </div>
                            <div className="mt-[43px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Aprovecha cancelaciones sin llamar</span>
                            </div>
                            <div className="mt-[43px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Mueve tu cita sin estrés, directo desde el app</span>
                            </div>
                            <div
                                className="mt-[49px] w-fit flex items-center gap-[10px] py-[19px] px-[20px] text-[#5FA9DF]">
                            <span>
                                <Image src="/icons/tick-circle.svg" alt="tick-circle" width="16" height="16"/>
                            </span>
                                <span>Ver cómo funciona</span>
                                <span>
                                <Image src="/icons/arrow-right-blue.svg" alt="cards" width="16" height="16"/>
                            </span>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <Image src="/images/1-portrait.png" alt="1-portrait" width="291" height="573" className="w-full h-auto max-w-[291px]"/>
                        </div>
                    </div>

                    <div className="mt-16 md:mt-[91px] mb-[108px] grid md:grid-cols-2 w-full">
                        <div className="flex justify-center items-center">
                            <Image src="/images/1-portrait.png" alt="1-portrait" width="291" height="573" className="w-full h-auto max-w-[291px]"/>
                        </div>
                        <div>
                            <div
                                className="text-4xl md:text-6xl lg:text-[72px] font-bold max-w-[488px] leading-tight md:leading-tight lg:leading-[79.2px] gradient-01">
                                Cuida de los tuyos!
                            </div>

                            <div className="mt-[25px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span
                                    className="font-medium leading-[25.6px]">Si cuidas de tus padres o hijos, Wellbyn te ayuda a estar al tanto de su salud.</span>
                            </div>
                            <div className="mt-[43px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Maneja sus citas médicas fácilmente, todo desde tu cuenta.</span>
                            </div>
                            <div className="mt-[43px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Accede a resultados de laboratorio, MRI y documentos importantes.</span>
                            </div>
                            <div className="mt-[43px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Recibe notificaciones clave, para que no se te pase nada.</span>
                            </div>
                            <div className="mt-[43px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Wellbyn te da las herramientas para cuidar mejor a quienes más amas.</span>
                            </div>
                            <Link href="/request">
                                <div
                                    className="mt-[49px] w-fit flex items-center gap-[10px] py-[19px] px-[20px] text-[#5FA9DF] hover:text-[#4A9BCE] transition-colors cursor-pointer">
                            <span>
                                <Image src="/icons/tick-circle.svg" alt="tick-circle" width="16" height="16"/>
                            </span>
                                <span>Ver cómo funciona</span>
                                <span>
                                <Image src="/icons/arrow-right-blue.svg" alt="cards" width="16" height="16"/>
                            </span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="mt-16 md:mt-[100px] mb-[158px] grid md:grid-cols-2 w-full">
                        <div>
                            <div
                                className="text-4xl md:text-6xl lg:text-[72px] max-w-[587px] font-bold leading-tight md:leading-tight lg:leading-[79.2px] gradient-01">
                                Recordatorios que cuidan de ti
                            </div>

                            <div className="mt-[25px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span
                                    className="font-medium leading-[25.6px]">Registra todos tus medicamentos, dosis y horarios</span>
                            </div>
                            <div className="mt-[43px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Recibe recordatorios automáticos y personalizables</span>
                            </div>
                            <div className="mt-[43px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Comparte tu tratamiento con tu médico o cuidador</span>
                            </div>
                            <div className="mt-[43px] flex items-center gap-[10px]">
                                <Image className="mt-2 flex-shrink-0" src="/icons/check.svg" alt="check-icon" width="20" height="20"/>
                                <span className="font-medium leading-[25.6px]">Mueve tu cita sin estrés, directo desde el app</span>
                            </div>
                            <div
                                className="mt-[49px] w-fit flex items-center gap-[10px] py-[19px] px-[20px] text-[#5FA9DF]">
                            <span>
                                <Image src="/icons/tick-circle.svg" alt="tick-circle" width="16" height="16"/>
                            </span>
                                <span>Ver cómo funciona</span>
                                <span>
                                <Image src="/icons/arrow-right-blue.svg" alt="cards" width="16" height="16"/>
                            </span>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <Image src="/images/1-portrait.png" alt="1-portrait" width="291" height="573" className="w-full h-auto max-w-[291px]"/>
                        </div>
                    </div>

                </div>*/}

            </div>

            {/* CTA Section 
            <div className="w-full bg-[#5FA9DF] pt-20 md:pt-[115px] pb-20 md:pb-[160px] flex flex-col items-center justify-center px-6 md:px-8 lg:px-6">
                <ScrollAnimation direction="up" delay={0.2}>
                    <div style={{letterSpacing: '-2px'}} className="text-center font-bold gradient-02 text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-tight lg:leading-[100%]">
                        ¿Listo para transformar tu experiencia médica?
                    </div>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={0.4}>
                    <div className="mt-8 md:mt-[42px] max-w-[806px] text-white text-center text-base md:text-lg leading-relaxed">
                        Ya seas paciente o clínica, Wellbyn centraliza todo — agenda, historial, notas clínicas y más — en una plataforma simple, rápida y segura.
                    </div>
                </ScrollAnimation>
                <div className="mt-8 md:mt-[36px] gap-8 md:gap-[75px] flex flex-col sm:flex-row items-center justify-center">
                    <div>
                        <Link href="/waitlist">
                            <div className="w-fit flex items-center gap-2 border rounded-full py-4 px-8 text-[#5FA9DF] bg-white hover:bg-gray-50 transition-all duration-300 ease-in-out  hover:shadow-lg cursor-pointer font-bold text-base">
                                <span>Unirme a la lista</span>
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
            </div>*/}

            {/* Descubre cómo funciona Wellbyn Section */}
            <div className="w-full bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] py-16 md:py-20 lg:py-24 relative overflow-hidden">
                {/* Subtle blue accent - smooth fade */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#5FA9DF]/3 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#5FA9DF]/2 to-transparent pointer-events-none"></div>
                <div className="absolute top-1/2 right-1/3 w-1/4 h-1/2 bg-gradient-to-l from-[#5FA9DF]/2 to-transparent pointer-events-none"></div>
                
                <div className="max-w-[1295px] mx-auto px-6 md:px-8 lg:px-0 relative z-10">
                    <ScrollAnimation>
                        <div className="flex flex-col items-center justify-center text-center">
                            <ScrollAnimation direction="up" delay={0.2}>
                                <div style={{letterSpacing: '-1px'}} className="text-[#0C1523] text-2xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-tight lg:leading-[110%]">
                                    Descubre cómo funciona Wellbyn, en menos de un minuto
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation direction="up" delay={0.4}>
                                <div className="mt-6 md:mt-8 lg:mt-[38px] text-[#3C4147] text-base md:text-lg max-w-[600px] mx-auto leading-relaxed">
                                    Mira cómo puedes agendar citas, hacer check-in desde casa, revisar tu historial médico y más — todo desde tu celular.
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation direction="up" delay={0.6}>
                                <div className="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[900px] mx-auto">
                                    <div className="flex items-center gap-3 text-center md:text-left">
                                        <CheckCircle className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 text-[#5FA9DF]" />
                                        <span className="text-base md:text-lg font-medium text-[#0C1523]">Descubre todas las funciones clave paso a paso.</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-center md:text-left">
                                        <CheckCircle className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 text-[#5FA9DF]" />
                                        <span className="text-base md:text-lg font-medium text-[#0C1523]">Familiarízate con tu historial, citas y notificaciones.</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-center md:text-left md:col-span-2 lg:col-span-1">
                                        <CheckCircle className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 text-[#5FA9DF]" />
                                        <span className="text-base md:text-lg font-medium text-[#0C1523]">Convierte tu celular en tu asistente médico personal.</span>
                                    </div>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation direction="up" delay={0.8}>
                                <div className="mt-8 md:mt-12 lg:mt-16">
                                    <Link href="/waitlist">
                                        <div className="w-fit flex items-center gap-2 rounded-full py-2.5 px-6 text-white bg-[#5FA9DF] hover:bg-[#4A9BCE] transition-all duration-200 ease-in-out cursor-pointer font-medium text-sm">
                                            <span>Waitlist</span>
                                            <span>
                                                <Image src="/icons/arrow-right.svg" alt="arrow" width={14} height={14}/>
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>

            <div className="max-w-[1295px] mx-auto w-full px-6 md:px-8 lg:px-0 mt-16 md:mt-8">

                {/* FAQs 
                <div className="grid md:grid-cols-2 gap-[71px] py-[110px]">
                    <div>
                        <div style={{letterSpacing: '-3px', lineHeight: '110%'}}
                             className="gradient-01 text-4xl md:text-6xl lg:text-[72px] font-bold">
                            ¿Tienes preguntas?
                        </div>
                        <div className="mt-[23px] text-base md:text-lg text-[#3C4147]">
                            Aquí respondemos lo más importante sobre Wellbyn para clínicas.
                        </div>
                    </div>
                    <div>
                        {FAQs.map((e, i) => <div key={i} className={`${i > 0 ? 'mt-[36px]' : ''}`}>
                            <FAQ question={e.question} answer={e.answer}/>
                        </div>)}
                    </div>
                </div>*/}

                {/* 
                <div className="mt-16 md:mt-20 lg:mt-[106px] flex flex-col items-center justify-center w-full">
                    <div className="text-3xl sm:text-4xl md:text-6xl lg:text-[72px] font-bold leading-tight max-w-[1140px] gradient-01 text-center px-4">
                        Confiado por más de 1,400 pacientes
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-[46px] mt-12 md:mt-16 lg:mt-[92px] px-4 md:px-0">
                        <div
                            className="flex flex-col items-center justify-center pt-[40px] pb-[32px] px-[22px] rounded-[10px]">
                            <div>
                                <Image src="/images/user-1.svg" alt="user-1" width="90" height="90"/>
                            </div>
                            <div className="mt-[44px] text-base md:text-lg text-center font-semibold leading-[30.6px]">
                                &ldquo;Con Wellbyn me olvidé de las filas, llamadas y papeles. Ahora todo lo manejo desde mi
                                celular, sin estrés.&rdquo;
                            </div>
                            <div className="mt-[71px] text-center text-base md:text-lg font-semibold leading-[30.6px]">
                                María Rodríguez
                            </div>
                            <div className="text-center text-sm leading-[22.4px]">
                                Paciente desde San Juan
                            </div>
                        </div>
                        <div
                            className="custom-shadow-lg flex flex-col items-center justify-center pt-[40px] pb-[32px] px-[22px] rounded-[10px]">
                            <div>
                                <Image src="/images/user-2.svg" alt="user-2" width="90" height="90"/>
                            </div>
                            <div className="mt-[44px] text-base md:text-lg text-center font-semibold leading-[30.6px]">
                                &ldquo;Puedo enviar recordatorios, revisar el historial y organizar la agenda sin llamadas.
                                Todo en una sola plataforma.&rdquo;
                            </div>
                            <div className="mt-[71px] text-center text-base md:text-lg font-semibold leading-[30.6px]">
                                Luis Antonio Rivera
                            </div>
                            <div className="text-center text-sm leading-[22.4px]">
                                Asistente en Clínica Familiar Cupey
                            </div>
                        </div>
                        <div
                            className="flex flex-col items-center justify-center pt-[40px] pb-[32px] px-[22px] rounded-[10px]">
                            <div>
                                <Image src="/images/user-3.svg" alt="user-3" width="90" height="90"/>
                            </div>
                            <div className="mt-[44px] text-base md:text-lg text-center font-semibold leading-[30.6px]">
                                &ldquo;Me encanta que puedo tener a mis padres al día con sus citas. El acceso como cuidador
                                ha sido un cambio total para mi familia.&rdquo;
                            </div>
                            <div className="mt-[71px] text-center text-base md:text-lg font-semibold leading-[30.6px]">
                                Carla Nieves
                            </div>
                            <div className="text-center text-sm leading-[22.4px]">
                                Cuidadora y usuaria de Wellbyn
                            </div>
                        </div>
                    </div>
                </div>*/}
            </div>

            {/* <div className="mt-16 md:mt-20 lg:mt-[153px] bg-[#5FA9DF] w-full">
                <div className="px-6 md:px-8 lg:px-0 flex flex-col md:flex-row justify-center gap-8 md:gap-16 lg:gap-24">
                    <div className="flex flex-col justify-center w-full max-w-[600px]">
                        <div className="max-w-[550px] mx-auto md:mx-0 w-full px-4 md:px-0 py-16 md:py-20 lg:py-24">
                            <div style={{letterSpacing: '-1px', lineHeight: '110%'}}
                                 className="gradient-02 text-3xl sm:text-4xl md:text-6xl lg:text-[72px] font-bold text-center md:text-left">
                                Tu salud, en tu bolsillo.
                            </div>
                            <div className="mt-6 md:mt-[23px] text-base md:text-lg text-[#F6F8FA] text-center md:text-left">
                                La app que conecta pacientes y clínicas en un solo lugar. Desde agendar tu cita hasta
                                ver tu historial médico — todo empieza aquí.
                            </div>
                            <Link href="/request">
                                <button className="cursor-pointer rounded-[8px] py-4 md:py-[19px] px-6 md:px-[20px] bg-[#171717] mt-8 md:mt-[40px] text-white hover:bg-[#2a2a2a] transition-colors flex items-center gap-[10px] mx-auto md:mx-0">
                                    <span>
                                        <Image src="/icons/check-circle-white.svg" alt="check-circle-white" width="16" height="16"/>
                                    </span>
                                            <span>Ver cómo funciona</span>
                                            <span>
                                        <Image src="/icons/arrow-right.svg" alt="arrow-right" width="16" height="16"/>
                                    </span>
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div className="flex justify-center md:justify-center items-center">
                        <Image src="/images/balazs-ketyi.png" alt="balazs-ketyi" width="678" height="785" className="w-full h-auto max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[650px] mb-8 md:mb-0"/>
                    </div>
                </div>
            </div>*/}


            <WellbynFooter />

        </div>
    )
}
