import Button from "@/app/components/ui/Button";
import Image from "next/image";
import React from "react";
import {Download, Zap, Grid2x2Plus, CircleCheck} from "lucide-react";

export default function Features() {
    return (
        <div className="text-[#0C1523] px-[32px]">
            <div className="max-w-[1295px] mx-auto mt-[30px]">
                <div className="mb-[78px] grid md:grid-cols-[55%_45%] gap-[20px]">
                    <div className="max-w-[688px]">
                        <div style={{letterSpacing: '-4px', lineHeight: '106%'}}
                             className="font-bold gradient-01 text-[80px] mt-6 pb-[6px]">
                            Get real-time analytics
                        </div>
                        <div className="mt-[32px] text-lg leading-[30px] max-w-[630px]">
                            Scalo gives you the blocks & components you need to create a truly professional website,
                            landing
                            page or admin panel for your SaaS.
                        </div>
                        <Button className="mt-[40px]">
                            <span>Get 14 Days Free Trial </span>
                            <span>
                                <Image src="/icons/arrow-right.svg" alt="cards" width="16" height="16"/>
                            </span>
                        </Button>

                    </div>
                    <div>
                        <Image src="/images/zaply/analytics.png"
                               alt="analytics" width="650" height="472"/>
                    </div>
                </div>


                <div className="grid md:grid-cols-3">
                    <div className="flex gap-[21px] items-start">
                        <div className="bg-[#EBEDFE] flex items-center justify-center p-2 rounded-full">
                            <Download color="#5FA9DF"/>
                        </div>
                        <div>
                            <div className="text-[#0C1523] text-[24px] font-semibold leading-[31.2px]">
                                Download the app
                            </div>
                            <div className="text-[#3C4147] mt-[13px]">
                                You can easily create your account easily with our software directly any device.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[21px] items-start">
                        <div className="bg-[#EBEDFE] flex items-center justify-center p-2 rounded-full">
                            <Grid2x2Plus color="#5FA9DF"/>
                        </div>
                        <div>
                            <div className="text-[#0C1523] text-[24px] font-semibold leading-[31.2px]">
                                Create workspace
                            </div>
                            <div className="text-[#3C4147] mt-[13px]">
                                Customizable to any block of your choice from many events with just one click.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[21px] items-start">
                        <div className="bg-[#EBEDFE] flex items-center justify-center p-2 rounded-full">
                            <Zap color="#5FA9DF"/>
                        </div>
                        <div>
                            <div className="text-[#0C1523] text-[24px] font-semibold leading-[31.2px]">
                                Track performance
                            </div>
                            <div className="text-[#3C4147] mt-[13px]">
                                Build website from anywhere just one click by turning on the software easily.
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-[89px] py-[47px] grid md:grid-cols-2 py-[139px] bg-[#F3F7FA]">
                <div>
                    <Image src="/images/zaply/job-satistics.png" alt="job-statistics" width="550" height="649"/>
                </div>
                <div>
                    <div style={{letterSpacing: '-3px', lineHeight: '110%'}}
                         className="gradient-01 text-[72px] font-bold pb-[6px]">
                        Smartly manage your remote team
                    </div>
                    <div className="mt-[33px] text-lg text-[#3C4147]">
                        Zaply gives you the blocks and components you need to create a truly professional website,
                        landing page or build your very own SaaS website with Zaply.
                    </div>

                    <div className="flex gap-[13px] items-start mt-[80px]">
                        <CircleCheck color="#5FA9DF" className="mt-[6px]"/>
                        <div>
                            <div className="text-[#0C1523] text-[24px] font-semibold leading-[31.2px]">
                                Easiest way to create
                            </div>
                            <div className="text-[#3C4147] mt-[11px]">
                                Eliminate hiring woes with the freedom to onboard in 150 countries. Simply find your
                                ideal candidate.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[13px] items-start mt-[41px]">
                        <CircleCheck color="#5FA9DF" className="mt-[6px]"/>
                        <div>
                            <div className="text-[#0C1523] text-[24px] font-semibold leading-[31.2px]">
                                Keep track of team members
                            </div>
                            <div className="text-[#3C4147] mt-[11px]">
                                Eliminate hiring woes with the freedom to onboard in 150 countries. Simply find your
                                ideal candidate.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="max-w-[1295px] mx-auto mt-[35px]">
                <div className="mt-[100px] grid md:grid-cols-2 mb-[85px]">
                    <div>
                        <div style={{letterSpacing: '-3px', lineHeight: '110%'}}
                             className="gradient-01 text-[72px] font-bold pb-[6px] mt-[100px]">
                            Obsessed by high speed page loading
                        </div>
                        <div className="mt-[24px] text-lg text-[#3C4147]">
                            Zaply gives you the blocks and components you need to create a truly professional website, landing page fast.
                        </div>

                    </div>
                    <div>
                        <Image src="/images/zaply/job-satistics.png" alt="job-statistics" width="523" height="397"/>
                    </div>
                </div>

                <div className="mt-[100px] pt-[33px] grid md:grid-cols-2">
                    <div>
                        <Image src="/images/zaply/card-8.png" alt="card-8" width="439" height="418"/>
                    </div>
                    <div>
                        <div style={{letterSpacing: '-3px', lineHeight: '110%'}}
                             className="gradient-01 text-[72px] font-bold pb-[6px] mt-[100px]">
                            An infrastructure that scales infinitely
                        </div>
                        <div className="mt-[24px] text-lg text-[#3C4147]">
                            Zaply gives you the blocks and components you need to create a truly professional website, landing page fast.
                        </div>

                    </div>
                </div>

                <div className="my-[134px] flex flex-col items-center justify-center">
                    <div className="max-w-[930px] text-center text-[24px] font-semibold leading-[31.2px]">
                        “First off everything seemed fine, as soon as I connected and we message I couldn&apos;t even get the app to load. My phone even froze four time minutes of having this app open. It seemed like a really good app.”
                    </div>
                    <div className="flex gap-[23px] mt-[38px]">
                        <Image src="/images/zaply/robert.png" alt="robert" width="100" height="100"/>
                        <div>
                            <div className="text-[20px] font-semibold">Robert Jew</div>
                            <div className="max-w-[192px]">Head of Web Marketing @ Karlet Magazine</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
