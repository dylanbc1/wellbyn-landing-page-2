"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Footer: React.FC = () => {
    const pathName = usePathname();

    return (
        <div className="w-full">
            <div className="mt-[80px] mx-auto max-w-[1295px]">
                <div className="mt-[80px] pb-[66px] border-b border-[#EBEDF2] grid md:grid-cols-4 gap-[138px]">
                    {pathName !== "/zaply" && <div>
                        <Image
                            src={'/images/zaply/zaply-logo-horizontal.png'}
                            alt="horizontal-logo"
                            width="122"
                            height="33"
                        />
                        <div className="leading-[25.6px] text-[#0C1523] mt-[31px]">
                            Zaply gives you the blocks and components you need to create a truly professional website.
                        </div>
                        <div className="mt-[68px]">
                            <Image src="/icons/zaply/socials.svg" alt="socials" width="148" height="28"/>
                        </div>
                    </div>}
                    <div className="flex flex-col gap-[24px] text-[#3C4147] font-medium">
                        <div className="text-[20px] leading-[34px] font-semibold">Company</div>
                        <Link href="#">About</Link>
                        <Link href="#">Features</Link>
                        <Link href="#">Works</Link>
                        <Link href="#">Career</Link>
                    </div>
                    <div className="flex flex-col gap-[24px] text-[#3C4147] font-medium">
                        <div className="text-[20px] leading-[34px] font-semibold">Help</div>
                        <Link href="#">Customer Support</Link>
                        <Link href="#">Delivery Details</Link>
                        <Link href="#">Terms & Conditions</Link>
                        <Link href="#">Privacy Policy</Link>
                    </div>
                    <div className="flex flex-col gap-[24px] text-[#3C4147] font-medium">
                        <div className="text-[20px] leading-[34px] font-semibold">Resources</div>
                        <Link href="#">Free eBooks</Link>
                        <Link href="#">Development Tutorials</Link>
                        <Link href="#">How to -Blog</Link>
                        <Link href="#">Youtube Playlist</Link>
                    </div>
                    {pathName === "/zaply" && <div className="flex flex-col gap-[24px] text-[#3C4147] font-medium">
                        <div className="text-[20px] leading-[34px] font-semibold">Links</div>
                        <Link href="#">Free eBooks</Link>
                        <Link href="#">Development Tutorials</Link>
                        <Link href="#">How to -Blog</Link>
                        <Link href="#">Youtube Playlist</Link>
                    </div>}
                </div>
                <div className="py-[38px] text-center text-[#3C4147]">
                    © Copyright 2023, All Rights Reserved by FramerBite
                </div>
            </div>
        </div>
    )
}

export default Footer;
