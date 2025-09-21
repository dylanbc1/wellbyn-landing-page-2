"use client";
import Header from "@/app/zaply/Header";
import Footer from "@/app/zaply/Footer";
import {usePathname} from "next/navigation";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const pathName = usePathname();
    return (
        <div>
            <Header />
            {children}
            {!pathName.includes('landing-5') && <Footer />}
        </div>
    );
}
