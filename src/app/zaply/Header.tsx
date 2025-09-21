import Image from "next/image";
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {

    return (
        <div className="flex items-center justify-center w-full">
            <div className="py-[26px] flex items-center gap-[4rem] max-w-[1295px] w-full">
                <div>
                    <Image
                        src={'/images/zaply/zaply-logo-horizontal.png'}
                        alt="horizontal-logo"
                        width="122"
                        height="33"
                    />
                </div>
                <div className={`flex items-center justify-between w-full`}>
                    <div className="flex items-center gap-[3.38rem]">
                        <Link href="/">Products</Link>
                        <Link href="/">Features</Link>
                        <Link href="/">Pricing</Link>
                        <Link href="/">Support</Link>
                    </div>
                    <button className={`py-3 font-semibold px-[14px] border-[1.5px] border-[#E3E5EA] rounded-lg`}>
                        Get Started Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;
