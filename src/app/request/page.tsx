"use client";
import React from "react";
import { useState } from "react";
import {Download, Grid2x2Plus, Zap} from "lucide-react";
import UnifiedHeader from "@/app/components/UnifiedHeader";
import WellbynFooter from "@/app/components/WellbynFooter";
import Input from "@/app/components/ui/input";

export default function RequestPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: "provider" as "patient" | "provider" | "both",
        clinicName: "",
        message: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        // Validación especial para el campo teléfono
        if (name === 'phone') {
            // Solo permitir + y números
            const phoneRegex = /^[+\d]*$/;
            if (!phoneRegex.test(value)) {
                return; // No actualizar si contiene caracteres no válidos
            }
        }
        
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

         const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
         const { name, value } = e.target;
         setFormData((prev) => {
             const newData = {
                 ...prev,
                 [name]: value,
             };
             
             // Si cambia a "paciente", limpiar el campo clinicName
             if (name === 'role' && value === 'patient') {
                 newData.clinicName = '';
             }
             
             return newData;
         });
     };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage(null);

        try {
            // Importar el servicio de API dinámicamente para evitar errores de SSR
            const { apiService } = await import('@/services/api');
            
            await apiService.createRegistration({
                ...formData,
                type: 'demo',
                source: 'website'
            });

            setSubmitMessage({
                type: 'success',
                message: '¡Gracias por tu interés! Te contactaremos pronto para programar tu demo.'
            });

            // Limpiar el formulario
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                role: "provider",
                clinicName: "",
                message: "",
            });

        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitMessage({
                type: 'error',
                message: error instanceof Error ? error.message : 'Error al enviar el formulario. Por favor, intenta de nuevo.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full relative pt-24 overflow-x-hidden">
            {/* Header */}
            <UnifiedHeader />

            {/* Hero Section */}
            <div className="max-w-[1295px] mx-auto px-6 md:px-8 lg:px-0 mt-12 md:mt-16 lg:mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
                    {/* Left Column - Title, Description and Features */}
                    <div className="max-w-[628px] order-2 lg:order-1">
                        <h1 
                            className="font-medium text-[#0C1523] text-[28px] sm:text-5xl md:text-6xl lg:text-[56px] leading-tight md:leading-tight lg:leading-[100%] mb-4 md:mb-6"
                            style={{letterSpacing: '-1px'}}
                        >
                            Solicita tu demo
                        </h1>
                        <p className="text-sm md:text-base lg:text-lg max-w-[600px] font-medium text-[#3C4147] leading-relaxed mb-8 md:mb-12 lg:mb-16">
                            Descubre cómo Wellbyn puede transformar la forma en que tu clínica o práctica médica se conecta con sus pacientes. Sin compromiso, sin complicaciones.
                        </p>

                        {/* Features Section */}
                        <div className="flex flex-col gap-6 md:gap-8 lg:gap-11">
                            {/* Feature 1 */}
                            <div className="flex gap-4 md:gap-6 items-start">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#EBEDFE] rounded-full flex items-center justify-center flex-shrink-0">
                                    <Download className="w-4 h-4 md:w-5 md:h-5" color="#5FA9DF" />
                                </div>
                                <div className="max-w-[440px]">
                                    <h3 className="text-[#0C1523] text-lg md:text-xl font-medium leading-tight mb-2 md:mb-3">
                                        Implementación rápida y sin dolores de cabeza
                                    </h3>
                                    <p className="text-[#3C4147] text-base md:text-lg leading-relaxed">
                                        Olvídate de los sistemas complicados. Wellbyn se activa fácil, sin cables ni semanas de espera.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-4 md:gap-6 items-start">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#EBEDFE] rounded-full flex items-center justify-center flex-shrink-0">
                                    <Grid2x2Plus className="w-4 h-4 md:w-5 md:h-5" color="#5FA9DF" />
                                </div>
                                <div className="max-w-[440px]">
                                    <h3 className="text-[#0C1523] text-lg md:text-xl font-medium leading-tight mb-2 md:mb-3">
                                        Todo conectado, en un solo lugar
                                    </h3>
                                    <p className="text-[#3C4147] text-base md:text-lg leading-relaxed">
                                        Agenda médica, historial clínico, notas, documentos y comunicación — todo fluye desde una sola plataforma.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex gap-4 md:gap-6 items-start">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#EBEDFE] rounded-full flex items-center justify-center flex-shrink-0">
                                    <Zap className="w-4 h-4 md:w-5 md:h-5" color="#5FA9DF" />
                                </div>
                                <div className="max-w-[440px]">
                                    <h3 className="text-[#0C1523] text-lg md:text-xl font-medium leading-tight mb-2 md:mb-3">
                                        Pacientes felices, clínicas más ágiles
                                    </h3>
                                    <p className="text-[#3C4147] text-base md:text-lg leading-relaxed">
                                        Haz que tus pacientes hagan check-in desde el celular, reciban sus documentos y vivan una experiencia sin papeleo ni filas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="order-1 lg:order-2">
                        <div className="bg-white rounded-lg p-6 md:p-8 lg:p-12 shadow-[0px_44px_94px_rgba(0,0,0,0.11)]">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#0C1523] mb-6 md:mb-8 leading-tight" style={{letterSpacing: '-1px'}}>
                                Solicita tu demo gratuita
                            </h2>
                            {/* Status Message */}
                            {submitMessage && (
                                <div className={`mb-6 p-4 rounded-lg ${
                                    submitMessage.type === 'success' 
                                        ? 'bg-green-50 border border-green-200 text-green-800' 
                                        : 'bg-red-50 border border-red-200 text-red-800'
                                }`}>
                                    {submitMessage.message}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                {/* First Name & Last Name */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm md:text-base font-medium text-[#0C1523]">
                                            Nombre *
                                        </label>
                                        <Input
                                            name="firstName"
                                            type="text"
                                            placeholder="Tu nombre"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full h-[48px] md:h-[54px] px-3 md:px-4 py-2 md:py-3 border border-[#CBD2D9] rounded-lg bg-white text-sm md:text-base"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm md:text-base font-medium text-[#0C1523]">
                                            Apellido *
                                        </label>
                                        <Input
                                            name="lastName"
                                            type="text"
                                            placeholder="Tu apellido"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full h-[48px] md:h-[54px] px-3 md:px-4 py-2 md:py-3 border border-[#CBD2D9] rounded-lg bg-white text-sm md:text-base"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="text-sm md:text-base font-medium text-[#0C1523]">
                                        Correo electrónico *
                                    </label>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="tu@email.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full h-[48px] md:h-[54px] px-3 md:px-4 py-2 md:py-3 border border-[#CBD2D9] rounded-lg bg-white text-sm md:text-base"
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div className="space-y-2">
                                    <label className="text-sm md:text-base font-medium text-[#0C1523]">
                                        Teléfono (opcional)
                                    </label>
                                    <Input
                                        name="phone"
                                        type="tel"
                                        placeholder="+12345678901"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full h-[48px] md:h-[54px] px-3 md:px-4 py-2 md:py-3 border border-[#CBD2D9] rounded-lg bg-white text-sm md:text-base"
                                        pattern="^\+\d+$"
                                    />

                                </div>

                                {/* Role Selection */}
                                <div className="space-y-2">
                                    <label className="text-sm md:text-base font-medium text-[#0C1523]">
                                        ¿Cómo planeas usar Wellbyn? *
                                    </label>
                                    <select
                                        name="role"
                                        value={formData.role}
                                        onChange={handleSelectChange}
                                        required
                                        className="w-full h-[48px] md:h-[54px] px-3 md:px-4 py-2 md:py-3 border border-[#CBD2D9] rounded-lg bg-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#5FA9DF] focus:border-transparent"
                                    >
                                        <option value="patient">Como paciente</option>
                                        <option value="provider">Como proveedor de salud</option>
                                        <option value="both">Ambos</option>
                                    </select>
                                </div>

                                                                 {/* Clinic Name (conditional) */}
                                 {(formData.role === "provider" || formData.role === "both") && (
                                     <div className="space-y-2">
                                         <label className="text-sm md:text-base font-medium text-[#0C1523]">
                                             Nombre de la clínica/institución
                                         </label>
                                         <Input
                                             name="clinicName"
                                             type="text"
                                             placeholder="Nombre de tu clínica o práctica médica"
                                             value={formData.clinicName}
                                             onChange={handleInputChange}
                                             className="w-full h-[48px] md:h-[54px] px-3 md:px-4 py-2 md:py-3 border border-[#CBD2D9] rounded-lg bg-white text-sm md:text-base"
                                         />
                                     </div>
                                 )}

                                {/* Message */}
                                <div className="space-y-2">
                                    <label className="text-sm md:text-base font-medium text-[#0C1523]">
                                        Mensaje adicional (opcional)
                                    </label>
                                    <textarea
                                        name="message"
                                        placeholder="Cuéntanos más sobre tus necesidades específicas..."
                                        value={formData.message}
                                        onChange={handleTextAreaChange}
                                        className="w-full min-h-[100px] px-3 md:px-4 py-2 md:py-3 border border-[#CBD2D9] rounded-lg bg-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#5FA9DF] focus:border-transparent resize-vertical"
                                        rows={4}
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="text-center pt-2 md:pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium transition-colors text-base md:text-lg ${
                                            isSubmitting
                                                ? 'bg-gray-400 cursor-not-allowed'
                                                : 'bg-[#5FA9DF] hover:bg-[#4A9BCE]'
                                        } text-white`}
                                    >
                                        {isSubmitting ? 'Enviando...' : 'Solicitar demo gratuita'}
                                    </button>
                                </div>
                            </form>

                            <div className="mt-6 md:mt-8 text-center text-sm text-[#6B7280]">
                                Al solicitar tu demo, uno de nuestros especialistas se pondrá en contacto contigo en las próximas 24 horas.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Info */}
            <div className="max-w-[1295px] mx-auto px-6 md:px-8 lg:px-0 mt-16 md:mt-20 lg:mt-24 mb-16 md:mb-20 lg:mb-24">
                <div className="text-center">
                    <h3 
                        className="text-2xl md:text-3xl lg:text-4xl font-medium gradient-01 mb-6 md:mb-8 leading-tight md:leading-tight lg:leading-[110%]"
                        style={{letterSpacing: '-1px'}}
                    >
                        ¿Tienes preguntas sobre la implementación?
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg font-medium text-[#3C4147] leading-relaxed mb-8 max-w-[600px] mx-auto">
                        Nuestro equipo de implementación está aquí para ayudarte en cada paso del proceso.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#E8F4FD] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-[#5FA9DF] text-2xl font-bold">1</span>
                            </div>
                            <h4 className="text-lg md:text-xl font-medium text-[#0C1523] mb-2">Configuración inicial</h4>
                            <p className="text-base md:text-lg text-[#3C4147] leading-relaxed">Configuramos tu plataforma en menos de 24 horas</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#E8F4FD] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-[#5FA9DF] text-2xl font-bold">2</span>
                            </div>
                            <h4 className="text-lg md:text-xl font-medium text-[#0C1523] mb-2">Capacitación del equipo</h4>
                            <p className="text-base md:text-lg text-[#3C4147] leading-relaxed">Entrenamiento completo para tu personal</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#E8F4FD] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-[#5FA9DF] text-2xl font-bold">3</span>
                            </div>
                            <h4 className="text-lg md:text-xl font-medium text-[#0C1523] mb-2">Soporte continuo</h4>
                            <p className="text-base md:text-lg text-[#3C4147] leading-relaxed">Asistencia técnica disponible 24/7</p>
                        </div>
                    </div>
                </div>
            </div>

            <WellbynFooter />
        </div>
    );
}
