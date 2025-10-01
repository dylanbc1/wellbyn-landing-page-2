import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function WellbynFooter() {
    return (
        <div className="w-full">
            <div className="mt-32 md:mt-36 lg:mt-[200px] mx-auto max-w-[1295px] px-6 md:px-0">
                <div className="mt-8 md:mt-12 lg:mt-[80px] pb-8 md:pb-12 lg:pb-[66px] border-b border-[#EBEDF2] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-[138px]">
                    <div className="text-center md:text-left">
                        <Image
                            src={'/images/logo-horizontal-azul-hd.png'}
                            alt="horizontal-logo"
                            width="164"
                            height="44"
                            className="w-32 md:w-40 lg:w-[164px] h-auto mx-auto md:mx-0"
                        />
                        <div className="leading-[25.6px] text-[#0C1523] text-sm md:text-base mt-4 md:mt-6 lg:mt-8">
                            Wellbyn te da el control total de tu salud, desde una sola app.
                        </div>
                        <div className="mt-6 md:mt-8 lg:mt-[68px] flex justify-center md:justify-start">
                            <Image 
                                src="/icons/socials.svg" 
                                alt="socials" 
                                width="148" 
                                height="28"
                                className="w-32 md:w-40 lg:w-[148px] h-auto"
                            />
                        </div>
                    </div>
                    {/* <div className="flex flex-col gap-4 md:gap-6 lg:gap-[24px] text-[#3C4147] font-medium text-center md:text-left">
                        <div className="text-lg md:text-xl lg:text-[20px] leading-[1.5] md:leading-[34px] font-semibold">Servicios</div>
                        <Link href="/provider" className="text-sm md:text-base hover:text-[#5FA9DF] transition-colors">Para Proveedores</Link>
                        <Link href="/patients" className="text-sm md:text-base hover:text-[#5FA9DF] transition-colors">Para Pacientes</Link>
                    </div> */}
                    <div className="flex flex-col gap-4 md:gap-6 lg:gap-[24px] text-[#3C4147] font-medium text-center md:text-left">
                        <div className="text-lg md:text-xl lg:text-[20px] leading-[1.5] md:leading-[34px] font-semibold">Recursos</div>
                        {/* <Link href="/blog" className="text-sm md:text-base hover:text-[#5FA9DF] transition-colors">Blog</Link> */}
                        <Link href="/waitlist" className="text-sm md:text-base hover:text-[#5FA9DF] transition-colors">Únete a la Waitlist</Link>
                        {/* <Link href="/request" className="text-sm md:text-base hover:text-[#5FA9DF] transition-colors">Solicita Demo</Link>
                        <Link href="/login" className="text-xs text-[#9CA3AF] hover:text-[#5FA9DF] transition-colors">Admin</Link> */}
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6 lg:gap-[24px] text-[#3C4147] font-medium text-center md:text-left">
                        {/* <div className="text-lg md:text-xl lg:text-[20px] leading-[1.5] md:leading-[34px] font-semibold">Legal</div>
                        <Link href="/zaply/terms-and-conditions" className="text-sm md:text-base hover:text-[#5FA9DF] transition-colors">Términos y Condiciones</Link>
                        <Link href="/zaply/privacy-policy" className="text-sm md:text-base hover:text-[#5FA9DF] transition-colors">Política de Privacidad</Link> */}
                    </div>
                </div>
                <div className="py-6 md:py-8 lg:py-[38px] text-center text-[#3C4147] text-sm md:text-base">
                    © Copyright 2025, All Rights Reserved by Wellbyn
                </div>
            </div>
        </div>
    );
}
