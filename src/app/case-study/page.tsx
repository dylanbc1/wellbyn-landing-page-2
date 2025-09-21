import React from "react";
import Image from "next/image";
import UnifiedHeader from "@/app/components/UnifiedHeader";
import WellbynFooter from "@/app/components/WellbynFooter";

export default function CaseStudy() {
    return (
        <div className="w-full relative pt-24 overflow-x-hidden">
            {/* Header */}
            <UnifiedHeader />

            {/* Hero Section */}
            <div className="max-w-[1295px] mx-auto px-6 mt-8 md:mt-12 lg:mt-16">
                <div className="text-center">
                    <h1 
                        className="text-3xl md:text-5xl lg:text-[80px] font-bold leading-[106%] mb-4 md:mb-6 relative"
                        style={{letterSpacing: '-4px'}}
                    >
                        Cómo Wellbyn transforma la gestión y experiencia médica en Puerto Rico
                        <div className="absolute right-0 top-0 w-16 md:w-24 lg:w-32 h-full bg-gradient-to-l from-white to-transparent"></div>
                    </h1>
                    
                    {/* User Profile */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 md:mt-8">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#5FA9DF] rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-base md:text-lg">NT</span>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-base md:text-lg font-medium text-[#0C1523] leading-[170%]">
                                Con la Dra. Natalia Torres, Directora Médica – Clínica San Vital
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Section */}
            <div className="max-w-[1295px] mx-auto px-6 mt-8 md:mt-12 lg:mt-16">
                <div className="border-t border-[#EBEDF2] pt-8 md:pt-12 lg:pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                        <div className="text-center">
                            <div className="text-[#5FA9DF] text-4xl md:text-6xl lg:text-[72px] font-bold leading-[110%]" style={{letterSpacing: '-3px'}}>
                                85%
                            </div>
                            <div className="mt-3 md:mt-4 text-base md:text-lg font-medium text-[#3C4147] leading-[170%]">
                                Reducción en tiempo de espera en recepción
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-[#5FA9DF] text-4xl md:text-6xl lg:text-[72px] font-bold leading-[110%]" style={{letterSpacing: '-3px'}}>
                                5x
                            </div>
                            <div className="mt-3 md:mt-4 text-base md:text-lg font-medium text-[#3C4147] leading-[170%]">
                                Más rápida la confirmación de citas
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-[#5FA9DF] text-4xl md:text-6xl lg:text-[72px] font-bold leading-[110%]" style={{letterSpacing: '-3px'}}>
                                +70%
                            </div>
                            <div className="mt-3 md:mt-4 text-base md:text-lg font-medium text-[#3C4147] leading-[170%]">
                                Aumento en satisfacción del paciente
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Challenge Section */}
            <div className="w-full bg-[#F3F7FA] mt-8 md:mt-12 lg:mt-16 py-12 md:py-16 lg:py-24">
                <div className="max-w-[1295px] mx-auto px-6">
                    <div className="max-w-[1150px]">
                        <h2 className="text-xl md:text-2xl lg:text-[28px] font-semibold leading-[120%] text-[#021D13] mb-6 md:mb-8" style={{letterSpacing: '-1.5px'}}>
                            Challenge
                        </h2>
                        <p className="text-base md:text-lg font-medium text-[#0C1523] leading-[170%] mb-6 md:mb-8">
                            Muchas clínicas en Puerto Rico aún dependen de procesos manuales para su operación diaria: agendas físicas, confirmaciones por WhatsApp, expedientes en papel y notas médicas impresas. Esta forma de operar puede funcionar en volúmenes bajos, pero a medida que aumenta la demanda de pacientes, también lo hacen los errores, los retrasos y el desorden. Wellbyn ofrece una solución moderna, segura y centralizada para digitalizar por completo la gestión clínica, sin complicaciones.
                        </p>
                        <p className="text-base md:text-lg text-[#0C4147] leading-[170%] mb-6 md:mb-8">
                            Sin una plataforma centralizada, las clínicas enfrentan múltiples fricciones a diario. Entre las más comunes: Las citas se anotan a mano o en hojas de Excel, lo que provoca errores de doble booking o pacientes sin turno asignado. Las confirmaciones de citas se hacen una por una, por teléfono o mensajes, generando pérdidas de tiempo y falta de seguimiento. Los expedientes están en carpetas físicas, y muchas veces incompletos o difíciles de encontrar justo cuando se necesitan. El tiempo de espera en la recepción se alarga porque los pacientes deben llenar formularios manuales cada vez. Las notas médicas quedan escritas en papel, sin integración con otros datos del paciente. No existe una vista única del paciente que le permita al doctor entender su historial en segundos. Todo esto crea un ambiente desorganizado, donde el personal se siente abrumado y el paciente pierde confianza en la calidad del servicio.
                        </p>
                    </div>
                </div>
            </div>

            {/* Solution Section */}
            <div className="max-w-[1295px] mx-auto px-6 py-12 md:py-16 lg:py-24">
                <div className="max-w-[1150px]">
                    <h2 className="text-xl md:text-2xl lg:text-[28px] font-semibold leading-[120%] text-[#021D13] mb-6 md:mb-8" style={{letterSpacing: '-1.5px'}}>
                        Problem
                    </h2>
                    <p className="text-base md:text-lg font-medium text-[#0C1523] leading-[170%] mb-6 md:mb-8">
                        Si trabajas en una clínica en Puerto Rico, sabes que el día a día no se detiene. La agenda se llena rápido, los pacientes llegan sin avisar, las llamadas no paran, y los documentos —físicos o digitales— muchas veces no están donde deben estar. Entre atender pacientes y coordinar internamente, los errores se acumulan. La mayoría de las clínicas aún dependen de una mezcla de agendas en Excel, confirmaciones manuales por WhatsApp o llamadas, y expedientes médicos en papel. Esto significa que, por cada paciente atendido, existe una alta probabilidad de que se pierda tiempo buscando información, se retrase la atención o simplemente se omitan detalles importantes del historial. El personal administrativo está sobrecargado tratando de confirmar citas una por una. Los médicos dedican más tiempo buscando papeles o resumiendo visitas anteriores que atendiendo directamente. Y los pacientes lo notan: largas filas, tiempos de espera sin explicación, y una experiencia que se siente desorganizada. Mientras más crece la clínica, más visibles se vuelven estos problemas. Y aunque se intenten resolver con esfuerzo humano, la falta de un sistema centralizado termina afectando la eficiencia, la moral del equipo, y sobre todo, la confianza del paciente.
                    </p>
                </div>
            </div>

            {/* Results Section */}
            <div className="w-full bg-[#F3F7FA] py-12 md:py-16 lg:py-24">
                <div className="max-w-[1295px] mx-auto px-6">
                    <div className="max-w-[1150px]">
                        <h2 className="text-xl md:text-2xl lg:text-[28px] font-semibold leading-[120%] text-[#021D13] mb-6 md:mb-8" style={{letterSpacing: '-1.5px'}}>
                            Solution
                        </h2>
                        <p className="text-base md:text-lg font-medium text-[#0C1523] leading-[170%] mb-6 md:mb-8">
                            Wellbyn es una plataforma médica todo-en-uno que digitaliza completamente la gestión clínica. La solución incluye:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <div className="space-y-4 md:space-y-6">
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-6 h-6 md:w-8 md:h-8 bg-[#5FA9DF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm md:text-base font-bold">1</span>
                                    </div>
                                    <div>
                                        <div className="text-base md:text-lg font-semibold text-[#0C1523]">
                                            Agenda digital inteligente
                                        </div>
                                        <div className="text-sm md:text-base text-[#3C4147] mt-1">
                                            Sistema de citas automatizado con confirmaciones y recordatorios.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-6 h-6 md:w-8 md:h-8 bg-[#5FA9DF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm md:text-base font-bold">2</span>
                                    </div>
                                    <div>
                                        <div className="text-base md:text-lg font-semibold text-[#0C1523]">
                                            Expedientes médicos digitales
                                        </div>
                                        <div className="text-sm md:text-base text-[#3C4147] mt-1">
                                            Historial completo del paciente en un solo lugar.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-6 h-6 md:w-8 md:h-8 bg-[#5FA9DF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm md:text-base font-bold">3</span>
                                    </div>
                                    <div>
                                        <div className="text-base md:text-lg font-semibold text-[#0C1523]">
                                            Notas clínicas automatizadas
                                        </div>
                                        <div className="text-sm md:text-base text-[#3C4147] mt-1">
                                            IA que genera notas médicas y códigos automáticamente.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4 md:space-y-6">
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-6 h-6 md:w-8 md:h-8 bg-[#5FA9DF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm md:text-base font-bold">4</span>
                                    </div>
                                    <div>
                                        <div className="text-base md:text-lg font-semibold text-[#0C1523]">
                                            Check-in digital
                                        </div>
                                        <div className="text-sm md:text-base text-[#3C4147] mt-1">
                                            Los pacientes completan formularios desde su celular.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-6 h-6 md:w-8 md:h-8 bg-[#5FA9DF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm md:text-base font-bold">5</span>
                                    </div>
                                    <div>
                                        <div className="text-base md:text-lg font-semibold text-[#0C1523]">
                                            Comunicación integrada
                                        </div>
                                        <div className="text-sm md:text-base text-[#3C4147] mt-1">
                                            Mensajes y notificaciones automáticas para pacientes.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-6 h-6 md:w-8 md:h-8 bg-[#5FA9DF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm md:text-base font-bold">6</span>
                                    </div>
                                    <div>
                                        <div className="text-base md:text-lg font-semibold text-[#0C1523]">
                                            Facturación automatizada
                                        </div>
                                        <div className="text-sm md:text-base text-[#3C4147] mt-1">
                                            Generación automática de facturas y códigos de facturación.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Implementation Section */}
            <div className="max-w-[1295px] mx-auto px-6 py-12 md:py-16 lg:py-24">
                <div className="max-w-[1150px]">
                    <h2 className="text-xl md:text-2xl lg:text-[28px] font-semibold leading-[120%] text-[#021D13] mb-6 md:mb-8" style={{letterSpacing: '-1.5px'}}>
                        Implementation
                    </h2>
                    <p className="text-base md:text-lg font-medium text-[#0C1523] leading-[170%] mb-6 md:mb-8">
                        La implementación de Wellbyn en Clínica San Vital se realizó en fases durante 3 meses:
                    </p>
                    <div className="space-y-6 md:space-y-8">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                            <div className="w-full md:w-32 flex-shrink-0">
                                <div className="bg-[#5FA9DF] text-white text-center py-2 px-4 rounded-lg font-semibold">
                                    Fase 1
                                </div>
                            </div>
                            <div>
                                <div className="text-base md:text-lg font-semibold text-[#0C1523] mb-2">
                                    Configuración inicial (2 semanas)
                                </div>
                                <div className="text-sm md:text-base text-[#3C4147]">
                                    Configuración de la plataforma, importación de datos de pacientes existentes y capacitación del equipo administrativo.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                            <div className="w-full md:w-32 flex-shrink-0">
                                <div className="bg-[#5FA9DF] text-white text-center py-2 px-4 rounded-lg font-semibold">
                                    Fase 2
                                </div>
                            </div>
                            <div>
                                <div className="text-base md:text-lg font-semibold text-[#0C1523] mb-2">
                                    Lanzamiento gradual (4 semanas)
                                </div>
                                <div className="text-sm md:text-base text-[#3C4147]">
                                    Implementación por departamentos, comenzando con la agenda digital y el check-in de pacientes.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                            <div className="w-full md:w-32 flex-shrink-0">
                                <div className="bg-[#5FA9DF] text-white text-center py-2 px-4 rounded-lg font-semibold">
                                    Fase 3
                                </div>
                            </div>
                            <div>
                                <div className="text-base md:text-lg font-semibold text-[#0C1523] mb-2">
                                    Optimización (2 semanas)
                                </div>
                                <div className="text-sm md:text-base text-[#3C4147]">
                                    Ajustes basados en feedback del equipo, optimización de flujos de trabajo y capacitación adicional.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Section */}
            <div className="w-full bg-[#F3F7FA] py-12 md:py-16 lg:py-24">
                <div className="max-w-[1295px] mx-auto px-6">
                    <div className="max-w-[1150px]">
                        <h2 className="text-xl md:text-2xl lg:text-[28px] font-semibold leading-[120%] text-[#021D13] mb-6 md:mb-8" style={{letterSpacing: '-1.5px'}}>
                            Results
                        </h2>
                        <p className="text-base md:text-lg font-medium text-[#0C1523] leading-[170%] mb-6 md:mb-8">
                            Después de 6 meses de implementación, Clínica San Vital experimentó mejoras significativas:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <div className="space-y-4 md:space-y-6">
                                <div className="bg-white p-4 md:p-6 rounded-lg">
                                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#5FA9DF] mb-2">
                                        85%
                                    </div>
                                    <div className="text-base md:text-lg font-semibold text-[#0C1523] mb-2">
                                        Reducción en tiempo de espera
                                    </div>
                                    <div className="text-sm md:text-base text-[#3C4147]">
                                        Los pacientes ahora completan el check-in en 2 minutos vs. 15 minutos antes.
                                    </div>
                                </div>
                                <div className="bg-white p-4 md:p-6 rounded-lg">
                                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#5FA9DF] mb-2">
                                        5x
                                    </div>
                                    <div className="text-base md:text-lg font-semibold text-[#0C1523] mb-2">
                                        Más rápida confirmación de citas
                                    </div>
                                    <div className="text-sm md:text-base text-[#3C4147]">
                                        Confirmaciones automáticas en segundos vs. llamadas manuales.
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4 md:space-y-6">
                                <div className="bg-white p-4 md:p-6 rounded-lg">
                                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#5FA9DF] mb-2">
                                        +70%
                                    </div>
                                    <div className="text-base md:text-lg font-semibold text-[#0C1523] mb-2">
                                        Aumento en satisfacción
                                    </div>
                                    <div className="text-sm md:text-base text-[#3C4147]">
                                        Los pacientes reportan una experiencia más fluida y organizada.
                                    </div>
                                </div>
                                <div className="bg-white p-4 md:p-6 rounded-lg">
                                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#5FA9DF] mb-2">
                                        40%
                                    </div>
                                    <div className="text-base md:text-lg font-semibold text-[#0C1523] mb-2">
                                        Reducción en errores administrativos
                                    </div>
                                    <div className="text-sm md:text-base text-[#3C4147]">
                                        Menos doble booking y citas perdidas gracias a la agenda digital.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Read More Section */}
            <div className="max-w-[1295px] mx-auto px-6 py-24">
                <div className="text-center">
                    <h2 className="text-[72px] font-bold leading-[110%] mb-16" style={{letterSpacing: '-3px'}}>
                        Read more success stories from companies
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                                                 {/* Review 1 */}
                         <div className="bg-white border border-[#E7F0EC] rounded-[10px] p-9">
                             <div className="mb-8">
                                 <div className="flex items-center gap-3 mb-8">
                                     <Image
                                         src="/images/logo-horizontal-azul-hd.png"
                                         alt="Wellbyn Logo"
                                         width="131"
                                         height="22"
                                     />
                                 </div>
                                 <h3 className="text-2xl font-semibold text-[#0C1523] leading-[130%]">
                                     Waverio Reaches it&apos;s revenue goals faster with Scalo.
                                 </h3>
                             </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#5FA9DF] rounded-full flex items-center justify-center">
                                    <span className="text-white font-semibold">MM</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-[#0C1523]">Marvin McKinney</p>
                                    <p className="text-[#3C4147]">Chief executive officer</p>
                                </div>
                            </div>
                        </div>

                                                 {/* Review 2 */}
                         <div className="bg-white border border-[#E7F0EC] rounded-[10px] p-9">
                             <div className="mb-8">
                                 <div className="flex items-center gap-3 mb-8">
                                     <Image
                                         src="/images/logo-horizontal-azul-hd.png"
                                         alt="Wellbyn Logo"
                                         width="131"
                                         height="22"
                                     />
                                 </div>
                                 <h3 className="text-2xl font-semibold text-[#0C1523] leading-[130%]">
                                     Waverio Reaches it&apos;s revenue goals faster with Scalo.
                                 </h3>
                             </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#5FA9DF] rounded-full flex items-center justify-center">
                                    <span className="text-white font-semibold">MM</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-[#0C1523]">Marvin McKinney</p>
                                    <p className="text-[#3C4147]">Chief executive officer</p>
                                </div>
                            </div>
                        </div>

                                                 {/* Review 3 */}
                         <div className="bg-white border border-[#E7F0EC] rounded-[10px] p-9">
                             <div className="mb-8">
                                 <div className="flex items-center gap-3 mb-8">
                                     <Image
                                         src="/images/logo-horizontal-azul-hd.png"
                                         alt="Wellbyn Logo"
                                         width="131"
                                         height="22"
                                     />
                                 </div>
                                 <h3 className="text-2xl font-semibold text-[#0C1523] leading-[130%]">
                                     Waverio Reaches it&apos;s revenue goals faster with Scalo.
                                 </h3>
                             </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#5FA9DF] rounded-full flex items-center justify-center">
                                    <span className="text-white font-semibold">MM</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-[#0C1523]">Marvin McKinney</p>
                                    <p className="text-[#3C4147]">Chief executive officer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="w-full bg-[#5FA9DF] py-24">
                <div className="max-w-[707px] mx-auto text-center">
                    <h2 className="text-[72px] font-bold leading-[110%] mb-6 text-white" style={{letterSpacing: '-3px'}}>
                        Ready to get started?
                    </h2>
                    <p className="text-lg text-[#F6F8FA] leading-[170%] mb-12">
                        Wellbyn te da las herramientas que necesitas para crear una plataforma médica verdaderamente profesional, landing page o construir tu propio sistema SaaS con Wellbyn.
                    </p>
                    <button className="bg-[#171717] text-white px-8 py-5 rounded-lg font-medium text-base hover:bg-[#2a2a2a] transition-colors">
                        Get Started Now
                    </button>
                    <p className="mt-4 text-[#EBEDF2] text-base">
                        No credit card required
                    </p>
                </div>
            </div>

            {/* Footer */}
            <WellbynFooter />
        </div>
    );
}
