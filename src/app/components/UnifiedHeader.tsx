"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const UnifiedHeader: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
    const pathname = usePathname();

    const isHomePage = pathname === "/";
    const isProviderPage = pathname === "/provider";
    const isPatientsPage = pathname === "/patients";
    // const isBlogPage = pathname === "/blog";
    // const isWaitlistPage = pathname === "/waitlist";
    const isSchedulingPage = pathname === "/scheduling";
    const isProductsPage = isSchedulingPage; // Para determinar si estamos en alguna página de productos

    const textColor = isHomePage ? "#18181B" : "#18181B";
    const logoSource = isHomePage
        ? "/images/logo-horizontal-azul-hd.png"
        : "/images/logo-horizontal-azul-hd.png";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.mobile-menu-container') && !target.closest('.mobile-menu-btn')) {
                setIsMobileMenuOpen(false);
            }
            if (!target.closest('.products-dropdown') && !target.closest('.products-dropdown-btn')) {
                setIsProductsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Determine if navbar should have background
    const shouldHaveBackground = isScrolled || isMobileMenuOpen;

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            shouldHaveBackground
                ? "bg-gray-50 shadow-lg border-b border-gray-200"
                : "bg-transparent"
        }`}>
            <div className="w-full max-w-[1295px] mx-auto px-6 md:px-0">
                <div className="flex items-center justify-between py-6">
                    {/* Left - Logo and Navigation */}
                    <div className="flex items-center gap-16">
                        <Link href="/">
                            <Image
                                src={shouldHaveBackground ? "/images/logo-horizontal-azul-hd.png" : logoSource}
                                alt="Wellbyn Logo"
                                width="300"
                                height="81"
                                className="w-[120px] md:w-[140px] h-auto"
                                quality={100}
                                priority
                                unoptimized
                                sizes="(max-width: 768px) 140px, 164px"
                                style={{
                                    imageRendering: 'crisp-edges'
                                }}
                            />
                        </Link>

                        {/* Desktop Navigation Menu */}
                        <nav className="hidden lg:flex items-center gap-8">
                            <Link
                                href="/"
                                className={`text-base font-medium transition-colors ${
                                    isHomePage 
                                        ? "text-[#5FA9DF] font-semibold" 
                                        : shouldHaveBackground
                                            ? "text-[#18181B] hover:text-[#5FA9DF]"
                                            : "text-[#18181B] hover:text-[#5FA9DF]"
                                }`}
                            >
                                Inicio
                            </Link>
                            
                            <Link
                                href="/provider"
                                className={`text-base font-medium transition-colors ${
                                    shouldHaveBackground
                                        ? isProviderPage 
                                            ? "text-[#5FA9DF] font-semibold" 
                                            : "text-[#18181B] hover:text-[#5FA9DF]"
                                        : isProviderPage
                                            ? "text-[#5FA9DF] font-semibold"
                                            : isHomePage
                                                ? "text-[#18181B] hover:text-[#5FA9DF]"
                                                : "text-[#18181B] hover:text-[#5FA9DF]"
                                }`}
                            >
                                Proveedor
                            </Link>
                            <Link
                                href="/patients"
                                className={`text-base font-medium transition-colors ${
                                    shouldHaveBackground
                                        ? isPatientsPage 
                                            ? "text-[#5FA9DF] font-semibold" 
                                            : "text-[#18181B] hover:text-[#5FA9DF]"
                                        : isPatientsPage
                                            ? "text-[#5FA9DF] font-semibold"
                                            : isHomePage
                                                ? "text-[#18181B] hover:text-[#5FA9DF]"
                                                : "text-[#18181B] hover:text-[#5FA9DF]"
                                }`}
                            >
                                Paciente
                            </Link>
                            
                            {/* Productos Dropdown - Al final */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                                    className={`products-dropdown-btn flex items-center gap-1.5 text-base font-medium transition-colors ${
                                        isProductsPage 
                                            ? "text-[#5FA9DF] font-semibold" 
                                            : shouldHaveBackground
                                                ? "text-[#18181B] hover:text-[#5FA9DF]"
                                                : "text-[#18181B] hover:text-[#5FA9DF]"
                                    }`}
                                >
                                    Productos
                                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                                
                                {/* Dropdown Menu - Estilo cuadrado mejorado */}
                                <div className={`products-dropdown absolute top-full right-0 mt-2 w-40 bg-white rounded-sm shadow-lg border border-gray-200 transition-all duration-150 z-50 ${
                                    isProductsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                                }`}>
                                    <div className="py-1">
                                        <Link
                                            href="/scheduling"
                                            className="block px-3 py-2 text-sm font-medium text-[#18181B] hover:text-[#5FA9DF] hover:bg-gray-50 transition-colors"
                                            onClick={() => setIsProductsDropdownOpen(false)}
                                        >
                                            Scheduling
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>

                    {/* Right - CTA Buttons and Mobile Menu */}
                    <div className="flex items-center gap-4">
                        {/* Desktop CTA Buttons */}
                        <div className="hidden md:flex items-center gap-3">
                            <Link href="/login">
                                <button className={`py-2 font-bold px-4 rounded-full transition-all duration-300 ease-in-out  cursor-pointer text-sm ${
                                    shouldHaveBackground
                                        ? "border-[1.5px] border-[#5FA9DF] text-[#5FA9DF] hover:bg-[#5FA9DF] hover:text-white"
                                        : isHomePage
                                            ? "border-[1.5px] border-[#5FA9DF] text-[#5FA9DF] hover:bg-[#5FA9DF] hover:text-white"
                                            : "border-[1.5px] border-[#5FA9DF] text-[#5FA9DF] hover:bg-[#5FA9DF] hover:text-white"
                                }`}>
                                    Iniciar sesión
                                </button>
                            </Link>
                            <Link href="/waitlist">
                                <button className={`py-2 font-bold px-4 rounded-full transition-all duration-300 ease-in-out  cursor-pointer text-sm ${
                                    shouldHaveBackground
                                        ? "bg-[#5FA9DF] text-white hover:bg-[#4A9BCE]"
                                        : isHomePage
                                            ? "bg-[#5FA9DF] text-white hover:bg-[#4A9BCE]"
                                            : "bg-[#5FA9DF] text-white hover:bg-[#4A9BCE]"
                                }`}>
                                    Registrarse
                                </button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg transition-colors mobile-menu-btn"
                            aria-label="Toggle mobile menu"
                        >
                            <div className="w-6 h-6 flex flex-col justify-center items-center">
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                                    shouldHaveBackground ? "text-[#18181B]" : textColor
                                } ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${
                                    shouldHaveBackground ? "text-[#18181B]" : textColor
                                } ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${
                                    shouldHaveBackground ? "text-[#18181B]" : textColor
                                } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu-container lg:hidden transition-all duration-300 overflow-hidden ${
                    isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <div className="py-4 border-t border-gray-200">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/"
                                className={`text-base font-medium transition-colors py-2 px-4 rounded-lg ${
                                    isHomePage
                                        ? "text-[#5FA9DF] font-semibold bg-[#5FA9DF]/10"
                                        : "text-[#18181B] hover:text-[#5FA9DF] hover:bg-gray-50"
                                }`}
                            >
                                Inicio
                            </Link>
                            
                            {/* Productos en móvil */}
                            <div className="pl-4">
                                <div className="text-sm font-medium text-[#6B7280] mb-2">Productos</div>
                                <Link
                                    href="/scheduling"
                                    className={`text-base font-medium transition-colors py-2 px-4 rounded-lg block ${
                                        isSchedulingPage
                                            ? "text-[#5FA9DF] font-semibold bg-[#5FA9DF]/10"
                                            : "text-[#18181B] hover:text-[#5FA9DF] hover:bg-gray-50"
                                    }`}
                                >
                                    Scheduling
                                </Link>
                            </div>
                            
                            <Link
                                href="/provider"
                                className={`text-base font-medium transition-colors py-2 px-4 rounded-lg ${
                                    shouldHaveBackground
                                        ? isProviderPage
                                            ? "text-[#5FA9DF] font-semibold bg-[#5FA9DF]/10"
                                            : "text-[#18181B] hover:text-[#5FA9DF] hover:bg-gray-50"
                                        : isProviderPage
                                            ? "text-[#5FA9DF] font-semibold bg-[#5FA9DF]/10"
                                            : "text-[#18181B] hover:text-[#5FA9DF] hover:bg-gray-50"
                                }`}
                            >
                                Proveedor
                            </Link>
                            <Link
                                href="/patients"
                                className={`text-base font-medium transition-colors py-2 px-4 rounded-lg ${
                                    shouldHaveBackground
                                        ? isPatientsPage
                                            ? "text-[#5FA9DF] font-semibold bg-[#5FA9DF]/10"
                                            : "text-[#18181B] hover:text-[#5FA9DF] hover:bg-gray-50"
                                        : isPatientsPage
                                            ? "text-[#5FA9DF] font-semibold bg-[#5FA9DF]/10"
                                            : "text-[#18181B] hover:text-[#5FA9DF] hover:bg-gray-50"
                                }`}
                            >
                                Paciente
                            </Link>
                            {/* <Link
                                href="/blog"
                                className={`text-base font-medium transition-colors py-2 px-4 rounded-lg ${
                                    shouldHaveBackground
                                        ? isBlogPage
                                            ? "text-[#5FA9DF] font-semibold bg-[#5FA9DF]/10"
                                            : "text-[#18181B] hover:text-[#5FA9DF] hover:bg-gray-50"
                                        : isBlogPage
                                            ? "text-[#5FA9DF] font-semibold bg-[#5FA9DF]/10"
                                            : "text-white hover:text-gray-200 hover:bg-white/10"
                                }`}
                            >
                                Blog
                            </Link> */}

                            {/* Mobile CTA Buttons */}
                            <div className="pt-4 border-t border-gray-200 space-y-4">
                                <Link href="/login">
                                    <button className={`w-full py-2 font-bold px-4 rounded-full transition-all duration-300 ease-in-out  cursor-pointer text-sm ${
                                        shouldHaveBackground
                                            ? "border-[1.5px] border-[#5FA9DF] text-[#5FA9DF] hover:bg-[#5FA9DF] hover:text-white"
                                            : isHomePage
                                                ? "border-[1.5px] border-[#5FA9DF] text-[#5FA9DF] hover:bg-[#5FA9DF] hover:text-white"
                                                : "border-[1.5px] border-[#5FA9DF] text-[#5FA9DF] hover:bg-[#5FA9DF] hover:text-white"
                                    }`}>
                                        Log In
                                    </button>
                                </Link>
                                <Link href="/waitlist">
                                    <button className={`w-full py-2 font-bold px-4 rounded-full transition-all duration-300 ease-in-out  cursor-pointer text-sm ${
                                        shouldHaveBackground
                                            ? "bg-[#5FA9DF] text-white hover:bg-[#4A9BCE]"
                                            : isHomePage
                                                ? "bg-[#5FA9DF] text-white hover:bg-[#4A9BCE]"
                                                : "bg-[#5FA9DF] text-white hover:bg-[#4A9BCE]"
                                    }`}>
                                        Registrarse
                                    </button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnifiedHeader;
