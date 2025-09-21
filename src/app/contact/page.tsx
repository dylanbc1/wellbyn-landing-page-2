"use client";
import React from "react";
import { useState } from "react";
import UnifiedHeader from "@/app/components/UnifiedHeader";
import WellbynFooter from "@/app/components/WellbynFooter";
import Input from "@/app/components/ui/input";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        // Handle form submission here
    };

    return (
        <div className="w-full relative pt-24 overflow-x-hidden">
            {/* Header */}
            <UnifiedHeader />

            {/* Hero Section */}
            <div className="max-w-[1295px] mx-auto px-6 mt-8 md:mt-12 lg:mt-16">
                <div className="text-center">
                    <h1 
                        className="text-4xl md:text-6xl lg:text-[80px] font-bold leading-[106%] mb-4 md:mb-6 relative"
                        style={{letterSpacing: '-4px'}}
                    >
                        Contáctanos
                        <div className="absolute right-0 top-0 w-16 md:w-24 lg:w-32 h-full bg-gradient-to-l from-white to-transparent"></div>
                    </h1>
                    <p className="text-base md:text-lg text-[#3C4147] leading-[170%] max-w-[600px] md:max-w-[718px] mx-auto px-4 md:px-0">
                        En Wellbyn estamos aquí para ayudarte. Si tienes preguntas, sugerencias o quieres hablar con nuestro equipo, llena el formulario y nos comunicaremos contigo pronto.
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <div className="max-w-[1295px] mx-auto px-6 mt-8 md:mt-12 lg:mt-16">
                <div className="flex justify-center">
                    <div className="w-full max-w-[636px] bg-white rounded-lg p-6 md:p-8 lg:p-12 shadow-[0px_44px_94px_rgba(0,0,0,0.11)]">
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

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="text-sm md:text-base font-medium text-[#0C1523]">
                                    Mensaje *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChangeMessage}
                                    rows={4}
                                    placeholder="Cuéntanos cómo podemos ayudarte..."
                                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-[#CBD2D9] rounded-lg bg-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#5FA9DF] focus:border-transparent resize-none"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="text-center pt-2 md:pt-4">
                                <button
                                    type="submit"
                                    className="w-full md:w-auto bg-[#5FA9DF] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium hover:bg-[#4A9BCE] transition-colors text-base md:text-lg"
                                >
                                    Enviar mensaje
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Additional Contact Info */}
            <div className="max-w-[1295px] mx-auto px-6 mt-12 md:mt-16 lg:mt-20 mb-16">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#18181B] mb-6 md:mb-8">
                        Otras formas de contactarnos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#E8F4FD] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#5FA9DF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold text-[#18181B] mb-2">Email</h3>
                            <p className="text-[#3C4147] text-sm md:text-base">hola@wellbyn.com</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#E8F4FD] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#5FA9DF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold text-[#18181B] mb-2">Teléfono</h3>
                            <p className="text-[#3C4147] text-sm md:text-base">+1 (787) 555-0123</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#E8F4FD] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#5FA9DF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold text-[#18181B] mb-2">Ubicación</h3>
                            <p className="text-[#3C4147] text-sm md:text-base">San Juan, Puerto Rico</p>
                        </div>
                    </div>
                </div>
            </div>

            <WellbynFooter />
        </div>
    );
}
