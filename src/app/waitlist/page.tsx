"use client";
import React, { useState } from "react";
import UnifiedHeader from "../components/UnifiedHeader";
import WellbynFooter from "../components/WellbynFooter";
import Input from "../components/ui/input";
import Link from "next/link";

const WaitlistPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: "patient" as "patient" | "provider" | "both",
        clinicName: "",
        message: ""
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

    const handleInputChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
                type: 'waitlist',
                source: 'website'
            });

            setSubmitMessage({
                type: 'success',
                message: '¡Gracias por unirte a nuestra waitlist! Te contactaremos pronto.'
            });

            // Limpiar el formulario
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                role: "patient",
                clinicName: "",
                message: ""
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
                <div className="text-center">
                    <h1 
                        className="font-medium text-[#0C1523] text-[28px] sm:text-5xl md:text-6xl lg:text-[56px] leading-tight md:leading-tight lg:leading-[100%] mb-4 md:mb-6"
                        style={{letterSpacing: '-1px'}}
                    >
                        Únete a la Waitlist
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg max-w-[600px] mx-auto font-medium text-[#3C4147] leading-relaxed">
                        Sé de los primeros en experimentar la revolución de Wellbyn en la atención médica. Únete a nuestra waitlist y recibe acceso anticipado y soporte prioritario.
                    </p>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="max-w-[1295px] mx-auto px-6 md:px-8 lg:px-0 mt-16 md:mt-20 lg:mt-24">
                <div className="text-center mb-12 md:mb-16">
                    <h2 
                        className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-tight lg:leading-[110%] gradient-01 mb-6 md:mb-8"
                        style={{letterSpacing: '-1px'}}
                    >
                        ¿Por qué unirte a la waitlist?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#E8F4FD] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#5FA9DF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-medium text-[#0C1523] mb-2">Acceso anticipado</h3>
                            <p className="text-base md:text-lg text-[#3C4147] leading-relaxed">Sé de los primeros en probar nuevas funcionalidades</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#E8F4FD] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#5FA9DF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-medium text-[#0C1523] mb-2">Descuentos especiales</h3>
                            <p className="text-base md:text-lg text-[#3C4147] leading-relaxed">Obtén precios preferenciales al lanzamiento</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#E8F4FD] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#5FA9DF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-medium text-[#0C1523] mb-2">Soporte prioritario</h3>
                            <p className="text-base md:text-lg text-[#3C4147] leading-relaxed">Recibe atención personalizada de nuestro equipo</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="max-w-[1295px] mx-auto px-6 md:px-8 lg:px-0 mt-16 md:mt-20 lg:mt-24">
                <div className="flex justify-center">
                    <div className="w-full max-w-[636px] bg-white rounded-lg p-8 md:p-12 shadow-[0px_44px_94px_rgba(0,0,0,0.11)]">

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* First Name & Last Name */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-base font-medium text-[#0C1523]">
                                        Nombre *
                                    </label>
                                    <Input
                                        name="firstName"
                                        type="text"
                                        placeholder="Tu nombre"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full h-[54px] px-4 py-3 border border-[#CBD2D9] rounded-lg bg-white text-base"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-base font-medium text-[#0C1523]">
                                        Apellido *
                                    </label>
                                    <Input
                                        name="lastName"
                                        type="text"
                                        placeholder="Tu apellido"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full h-[54px] px-4 py-3 border border-[#CBD2D9] rounded-lg bg-white text-base"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-base font-medium text-[#0C1523]">
                                    Correo electrónico *
                                </label>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="tu@email.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full h-[54px] px-4 py-3 border border-[#CBD2D9] rounded-lg bg-white text-base"
                                    required
                                />
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                                <label className="text-base font-medium text-[#0C1523]">
                                    Teléfono (opcional)
                                </label>
                                <Input
                                    name="phone"
                                    type="tel"
                                    placeholder="+12345678901"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full h-[54px] px-4 py-3 border border-[#CBD2D9] rounded-lg bg-white text-base"
                                    pattern="^\+\d+$"
                                />

                            </div>

                            {/* Role Selection */}
                            <div className="space-y-2">
                                <label className="text-base font-medium text-[#0C1523]">
                                    ¿Cómo planeas usar Wellbyn? *
                                </label>
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleSelectChange}
                                    required
                                    className="w-full h-[54px] px-4 py-3 border border-[#CBD2D9] rounded-lg bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#5FA9DF] focus:border-transparent"
                                >
                                    <option value="patient">Como paciente</option>
                                    <option value="provider">Como proveedor de salud</option>
                                    <option value="both">Ambos</option>
                                </select>
                            </div>

                            {/* Clinic Name (conditional) */}
                            {(formData.role === "provider" || formData.role === "both") && (
                                <div className="space-y-2">
                                    <label className="text-base font-medium text-[#0C1523]">
                                        Nombre de la clínica/institución
                                    </label>
                                    <Input
                                        name="clinicName"
                                        type="text"
                                        placeholder="Nombre de tu clínica o práctica médica"
                                        value={formData.clinicName}
                                        onChange={handleInputChange}
                                        className="w-full h-[54px] px-4 py-3 border border-[#CBD2D9] rounded-lg bg-white text-base"
                                    />
                                </div>
                            )}

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="text-base font-medium text-[#0C1523]">
                                    Mensaje (opcional)
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChangeMessage}
                                    rows={4}
                                    placeholder="Cuéntanos más sobre tus necesidades o expectativas..."
                                    className="w-full px-4 py-3 border border-[#CBD2D9] rounded-lg bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#5FA9DF] focus:border-transparent resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`px-8 py-4 rounded-full font-bold transition-all duration-300 ease-in-out transform text-base ${
                                        isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-[#5FA9DF] hover:bg-[#4A9BCE] hover:scale-105 hover:shadow-lg'
                                    } text-white`}
                                >
                                    {isSubmitting ? 'Enviando...' : 'Unirme a la Waitlist'}
                                </button>
                            </div>
                        </form>

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

                        <div className="mt-8 text-center text-sm text-[#6B7280]">
                            Al unirte a la waitlist, recibirás actualizaciones sobre el lanzamiento de Wellbyn. 
                            Puedes cancelar tu suscripción en cualquier momento.
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Info 
            <div className="max-w-[1295px] mx-auto px-6 mt-16 mb-16">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#18181B] mb-4">
                        ¿Tienes preguntas?
                    </h3>
                    <p className="text-[#3C4147] mb-6">
                        Nuestro equipo está aquí para ayudarte. No dudes en contactarnos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/request">
                            <div className="w-fit flex items-center gap-2 rounded-full py-4 px-8 text-[#5FA9DF] bg-white border border-[#5FA9DF] hover:bg-gray-50 hover:border-[#4A9BCE] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer font-bold text-base">
                                <span>Ver Demo</span>
                                <span>
                                    <Image src="/icons/arrow-right-blue.svg" alt="arrow" width={16} height={16}/>
                                </span>
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div className="w-fit flex items-center gap-2 rounded-full py-4 px-8 text-[#5FA9DF] bg-white border border-[#5FA9DF] hover:bg-gray-50 hover:border-[#4A9BCE] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer font-bold text-base">
                                <span>Contactar Soporte</span>
                                <span>
                                    <Image src="/icons/arrow-right-blue.svg" alt="arrow" width={16} height={16}/>
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>*/}

            <WellbynFooter />
        </div>
    );
};

export default WaitlistPage;
