import Image from "next/image";
import React from "react";
import Button from "@/app/components/ui/Button";
import FAQ from "@/app/components/ui/FAQ2";

const FAQs = [
    {
        question: "How does App help people in problems?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, tempor condimentum commodo tincidunt sit dictumst. Eu placerat to a arcu at sem vitae eros, purus nonprofit organizations for all,"
    },
    {
        question: "What happens if i go over my subscription limits?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, tempor condimentum commodo tincidunt sit dictumst. Eu placerat to a arcu at sem vitae eros, purus nonprofit organizations for all,"
    },
    {
        question: "Why we are so confident about the future?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, tempor condimentum commodo tincidunt sit dictumst. Eu placerat to a arcu at sem vitae eros, purus nonprofit organizations for all,"
    },
    {
        question: "Where’s the funding goes?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, tempor condimentum commodo tincidunt sit dictumst. Eu placerat to a arcu at sem vitae eros, purus nonprofit organizations for all,"
    },

]

export default function ZaplyPage() {
    return (
        <div className="text-[#0C1523] px-[32px]">
            <div className="max-w-[1295px] mx-auto mt-[30px] mb-[78px] grid md:grid-cols-[55%_45%] gap-[20px]">
                <div className="max-w-[688px]">
                    <div style={{letterSpacing: '-4px', lineHeight: '100%'}}
                         className="font-bold gradient-01 text-[110px] mt-6">
                        Easy way to build website
                    </div>
                    <div className="mt-6 text-[20px] leading-[34px] font-medium max-w-[630px]">
                        Zaply gives you the blocks and components you need to create a truly professional website,
                        landing page or build your very own SaaS website with Zaply.
                    </div>

                    <div
                        className="mt-[40px] rounded-[12px] border border-[#EBEDF2] p-[6px] flex items-center justify-between">
                        <input className="w-full outline-0" placeholder="Enter your email"/>
                        <Button className="min-w-[240px]">
                            <span>Get 14 Days Free Trial </span>
                            <span>
                                <Image src="/icons/arrow-right.svg" alt="cards" width="16" height="16"/>
                                </span>
                        </Button>
                    </div>

                    <div className="mt-[28px] flex items-center gap-3 text-sm text-[#3C4147]">
                        <span>No credit card required</span>
                        <span>.</span>
                        <span>Cancel anytime</span>
                    </div>

                </div>
                <div>
                    <Image src="/images/zaply/cover-img.png"
                           alt="cover-img" width="485" height="636"/>
                </div>


            </div>

            <div
                className="rounded-[20px] gradient-01-bg pt-[106px] pb-[122px] flex flex-col items-center justify-center">
                <div style={{letterSpacing: '-3px', lineHeight: '110%'}}
                     className="gradient-02 text-[72px] font-bold">
                    Trusted by popular companies
                </div>
                <div className="mt-[92px] flex items-center justify-center gap-x-[130px] gap-y-[62px] flex-wrap">
                    <Image src="/images/zaply/waverio-logo.svg" alt="company-logo-1" width="196" height="47"/>
                    <Image src="/images/zaply/logoipsum.svg" alt="logoipsum" width="170" height="44"/>
                    <Image src="/images/zaply/alterbone.svg" alt="alterbone" width="229" height="47"/>
                    <Image src="/images/zaply/carbonia.svg" alt="carbonia" width="188" height="35"/>
                    <Image src="/images/zaply/tinygone.svg" alt="tinygone" width="205" height="36"/>
                    <Image src="/images/zaply/preso.svg" alt="preso" width="138" height="35"/>
                    <Image src="/images/zaply/ridoria.svg" alt="ridoria" width="167" height="39"/>
                    <Image src="/images/zaply/incanto.svg" alt="incanto" width="200" height="34"/>
                </div>
            </div>


            <div className="max-w-[1295px] mx-auto mt-[157px] mb-[78px] grid md:grid-cols-[55%_45%] gap-[20px]">
                <div className="max-w-[688px] mt-[45px]">
                    <div style={{letterSpacing: '-4px', lineHeight: '100%'}}
                         className="font-bold gradient-01 text-[72px] mt-6">
                        Create blog by drag and drop
                    </div>
                    <div className="mt-6 text-lg leading-[34px] max-w-[630px]">
                        Zaply gives you the blocks and components you need to create a truly professional website,
                        landing page or build your very own SaaS website with Zaply.
                    </div>

                    <Button className="mt-[48px]">
                        <span>Get 14 Days Free Trial </span>
                        <span>
                                <Image src="/icons/arrow-right.svg" alt="cards" width="16" height="16"/>
                                </span>
                    </Button>

                </div>
                <div>
                    <Image src="/images/zaply/create-blog.png"
                           alt="create-blog" width="587" height="476"/>
                </div>


            </div>

            <div
                className="mt-[106px] flex flex-col items-center justify-center w-full bg-[#F3F7FA] rounded-[20px] pt-[99px] pb-[132px] px-[121px]">
                <div className="text-[72px] font-bold leading-[79.2px] max-w-[1140px] gradient-01 text-center">
                    What our users are saying
                </div>
                <div className="grid md:grid-cols-3 gap-[46px] mt-[92px]">
                    <div
                        className="custom-shadow-lg flex flex-col items-center justify-center pt-[40px] pb-[32px] px-[22px] rounded-[10px]">
                        <div>
                            <Image src="/images/user-1.svg" alt="user-1" width="90" height="90"/>
                        </div>
                        <div className="mt-[44px] text-lg text-center font-semibold leading-[30.6px]">
                            “Just started using this app and love the fact that you click on connect and that&apos;s it.
                            No configuration or confusion. I have kept it going and have used my apps and surfed the web
                            without any issues.”
                        </div>
                        <div className="mt-[71px] text-center text-lg font-semibold leading-[30.6px]">
                            Jenny Wilson
                        </div>
                        <div className="text-center text-sm leading-[22.4px]">
                            Founder of XYZ Company
                        </div>
                    </div>
                    <div
                        className="custom-shadow-lg flex flex-col items-center justify-center pt-[40px] pb-[32px] px-[22px] rounded-[10px]">
                        <div>
                            <Image src="/images/user-2.svg" alt="user-2" width="90" height="90"/>
                        </div>
                        <div className="mt-[44px] text-lg text-center font-semibold leading-[30.6px]">
                            “First off everything seemed fine, as soon as I connected and we message I couldn&apos;t
                            even get the app to load. My phone even froze four time minutes of having this app open. It
                            seemed like a really good app.”
                        </div>
                        <div className="mt-[71px] text-center text-lg font-semibold leading-[30.6px]">
                            Robert Jew
                        </div>
                        <div className="text-center text-sm leading-[22.4px]">
                            Co-Founder of Jett
                        </div>
                    </div>
                    <div
                        className="custom-shadow-lg flex flex-col items-center justify-center pt-[40px] pb-[32px] px-[22px] rounded-[10px]">
                        <div>
                            <Image src="/images/user-3.svg" alt="user-3" width="90" height="90"/>
                        </div>
                        <div className="mt-[44px] text-lg text-center font-semibold leading-[30.6px]">
                            “Recommend the service. Just started to use their proxy, and had small difficulties creating
                            it because I&apos;m new to this stuff. Eve from customer service helped me and we resolved a
                            problem effortlessly.”
                        </div>
                        <div className="mt-[71px] text-center text-lg font-semibold leading-[30.6px]">
                            Monalisa Fox
                        </div>
                        <div className="text-center text-sm leading-[22.4px]">
                            Chief Marketing Officer
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-[42px] py-[96px]">
                <div className="max-w-[1295px] grid md:grid-cols-2 gap-[71px]">
                    <div>
                        <div style={{letterSpacing: '-3px', lineHeight: '110%'}}
                             className="gradient-01 text-[72px] font-bold">
                            Got any questions?
                        </div>
                        <div className="mt-[23px] text-lg text-[#3C4147]">
                            Zaply gives you the blocks and components you need to create a truly professional website, landing page.
                        </div>
                    </div>
                    <div>
                        {FAQs.map((e, i) => <div key={i} className={`${i > 0 ? 'mt-[36px]' : ''} border-b border-[#EBEDF2] pb-[24px]`}>
                            <FAQ question={e.question} answer={e.answer}/>
                        </div>)}
                    </div>
                </div>

            </div>

            <div className="bg-[var(--theme-color-primary)] flex items-center justify-between py-[71px] px-[61px] rounded-[20px]">
                <div className="text-white text-[56px] mt-[-10px] font-medium leading-[61px]">
                    Get started with your site now
                </div>
                <button className="py-[19px] px-[20px] text-white border border-white rounded-[8px] flex items-center gap-[10px]">
                    <span>Get 14 Days Free Trial </span>
                    <span>
                        <Image src="/icons/arrow-right.svg" alt="cards" width="16" height="16"/>
                    </span>
                </button>
            </div>
        </div>
    )
}
