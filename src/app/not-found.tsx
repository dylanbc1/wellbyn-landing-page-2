import Header from "@/app/zaply/Header";
import Footer from "@/app/zaply/Footer";
import Button from "@/app/components/ui/Button";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function NotFound(){
    return (
        <div>
            <Header />
            <div className="flex items-center flex-col justify-center mb-[200px]">
                <div className="text-[300px] gradient-01 leading-[399px] font-semibold" style={{letterSpacing: '-3px'}}>404</div>
                <div className="text-[56px] font-semibold leading-[61px]">Page not found</div>
                <div className="text-center max-w-[502px] text-[20px] text-[#3C4147] leading-[34px] mt-5">
                    The page you are looking for is not available or doesn’t belong to this website!
                </div>
                <Button className="mt-[34px]">
                    <Link href="/zaply" className="flex items-center gap-[10px]">
                        <span>Go Back Home </span>
                        <span>
                        <Image src="/icons/arrow-right.svg" alt="arrow" width="16" height="16"/>
                    </span>
                    </Link>
                </Button>
            </div>
            <Footer/>
        </div>
    )
}
