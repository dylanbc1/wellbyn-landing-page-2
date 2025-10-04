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
        <div className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
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
                            {/* <Link
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
                            </Link> */}
                            
                            {/* <Link
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
                            </Link> */}
                            {/* <Link
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
                            </Link> */}
                            
                            {/* Productos Dropdown - Al final
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
                                
                                {/* Dropdown Menu - Estilo cuadrado mejorado 
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
                            */}
                        </nav>
                    </div>

                    {/* Right - CTA Buttons and Mobile Menu */}
                    <div className="flex items-center gap-4">
                        {/* Desktop CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Link href="/request">
                                <button className={`py-2 font-bold px-4 rounded-full transition-all duration-300 ease-in-out  cursor-pointer text-sm ${
                                    shouldHaveBackground
                                        ? "border-[1.5px] border-[#5FA9DF] text-[#5FA9DF] hover:bg-[#5FA9DF] hover:text-white"
                                        : isHomePage
                                            ? "border-[1.5px] border-[#5FA9DF] text-[#5FA9DF] hover:bg-[#5FA9DF] hover:text-white"
                                            : "border-[1.5px] border-[#5FA9DF] text-[#5FA9DF] hover:bg-[#5FA9DF] hover:text-white"
                                }`}>
                                    Solicitar demo
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

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div 
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}

                {/* Mobile Menu - Slide from right */}
                <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className="flex flex-col h-full">
                        {/* Header with close button */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <Image
                                src="/images/logo-horizontal-azul-hd.png"
                                alt="Wellbyn Logo"
                                width="120"
                                height="32"
                                className="h-8 w-auto"
                                quality={100}
                                unoptimized
                            />
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                aria-label="Close mobile menu"
                            >
                                <div className="w-6 h-6 flex flex-col justify-center items-center">
                                    <span className="block w-5 h-0.5 bg-[#18181B] rotate-45 translate-y-1"></span>
                                    <span className="block w-5 h-0.5 bg-[#18181B] -rotate-45 -translate-y-1"></span>
                                </div>
                            </button>
                        </div>

                        {/* Navigation Content */}
                        <div className="flex-1 overflow-y-auto">
                            <nav className="p-6 space-y-6">
                                {/* <Link
                                    href="/"
                                    className={`text-lg font-medium transition-colors py-3 px-4 rounded-lg block ${
                                        isHomePage
                                            ? "text-[#5FA9DF] font-semibold bg-[#5FA9DF]/10"
                                            : "text-[#18181B] hover:text-[#5FA9DF] hover:bg-gray-50"
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Inicio
                                </Link> */}
                                
                                {/* Productos en móvil 
                                <div className="space-y-2">
                                    <div className="text-sm font-medium text-[#6B7280] mb-2 px-4">Productos</div>
                                    <Link
                                        href="/scheduling"
                                        className={`text-lg font-medium transition-colors py-3 px-4 rounded-lg block ${
                                            isSchedulingPage
                                                ? "text-[#5FA9DF] font-semibold bg-[#5FA9DF]/10"
                                                : "text-[#18181B] hover:text-[#5FA9DF] hover:bg-gray-50"
                                        }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Scheduling
                                    </Link>
                                </div>*/}
                                
                                {/* <Link
                                    href="/provider"
                                    className={`text-lg font-medium transition-colors py-3 px-4 rounded-lg block ${
                                        shouldHaveBackground
                                            ? isProviderPage
                                                ? "text-[#5FA9DF] font-semibold bg-[#5FA9DF]/10"
                                                : "text-[#18181B] hover:text-[#5FA9DF] hover:bg-gray-50"
                                            : isProviderPage
                                                ? "text-[#5FA9DF] font-semibold bg-[#5FA9DF]/10"
                                                : "text-[#18181B] hover:text-[#5FA9DF] hover:bg-gray-50"
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Proveedor
                                </Link> */}
                                {/* <Link
                                    href="/patients"
                                    className={`text-lg font-medium transition-colors py-3 px-4 rounded-lg block ${
                                        shouldHaveBackground
                                            ? isPatientsPage
                                                ? "text-[#5FA9DF] font-semibold bg-[#5FA9DF]/10"
                                                : "text-[#18181B] hover:text-[#5FA9DF] hover:bg-gray-50"
                                            : isPatientsPage
                                                ? "text-[#5FA9DF] font-semibold bg-[#5FA9DF]/10"
                                                : "text-[#18181B] hover:text-[#5FA9DF] hover:bg-gray-50"
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Paciente
                                </Link> */}
                                {/* <Link
                                    href="/blog"
                                    className={`text-lg font-medium transition-colors py-3 px-4 rounded-lg block ${
                                        shouldHaveBackground
                                            ? isBlogPage
                                                ? "text-[#5FA9DF] font-semibold bg-[#5FA9DF]/10"
                                                : "text-[#18181B] hover:text-[#5FA9DF] hover:bg-gray-50"
                                            : isBlogPage
                                                ? "text-[#5FA9DF] font-semibold bg-[#5FA9DF]/10"
                                                : "text-white hover:text-gray-200 hover:bg-white/10"
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Blog
                                </Link> */}
                            </nav>
                        </div>

                        {/* Mobile CTA Buttons - Fixed at bottom */}
                        <div className="p-6 border-t border-gray-200 bg-gray-50">
                            <div className="flex flex-col gap-2">
                                <Link href="/request" onClick={() => setIsMobileMenuOpen(false)}>
                                    <button className="w-full py-3 font-bold px-4 rounded-full transition-all duration-300 ease-in-out cursor-pointer text-sm border-[1.5px] border-[#5FA9DF] text-[#5FA9DF] hover:bg-[#5FA9DF] hover:text-white">
                                        Solicitar demo
                                    </button>
                                </Link>
                                <Link href="/waitlist" onClick={() => setIsMobileMenuOpen(false)}>
                                    <button className="w-full py-3 font-bold px-4 rounded-full transition-all duration-300 ease-in-out cursor-pointer text-sm bg-[#5FA9DF] text-white hover:bg-[#4A9BCE]">
                                        Registrarse
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnifiedHeader;
