import React from "react";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import {Clock, MapPin } from "lucide-react";

export default function Career(){
    return (
        <div className="w-full">
            <div className="max-w-[1295px] mx-auto sm:px-6">
                <div style={{letterSpacing: '-4px', lineHeight: '106%'}}
                     className="font-bold gradient-01 text-[80px] max-w-[788px] mt-6 pb-[6px]">
                    Work with us and grow fast with others
                </div>
                <div className="w-full mt-[42px] flex flex-col items-end md:pr-[156px]">

                    <div className="text-lg leading-[30px] max-w-[590px]">
                        We partner closely with the most progressive companies in the world to improve their customer support operations. As consumers, we all have our own version of that one call to customer support.
                    </div>
                    <Button className="mt-[37px]">
                        <span>See Open Jobs </span>
                        <span>
                                <Image src="/icons/arrow-right.svg" alt="cards" width="16" height="16"/>
                    </span>
                    </Button>
                </div>

                <div className="grid grid-cols-[60%_40%] pt-[137px] pb-[88px]">
                    <Image src="/images/zaply/work-1.png" alt="work-1" width="734" height="439"/>
                    <div className="relative">
                        <Image className="absolute left-[225px] top-[179px]" src="/images/play-button.svg"
                               alt="play-button" width="80" height="80"/>
                        <Image src="/images/zaply/work-2.png" alt="work-2" width="531" height="439"/>
                    </div>

                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="text-center gradient-01 text-[72px] font-bold leading-[79px]" style={{letterSpacing: '-3px'}}>
                        Benefits & Perks
                    </div>
                    <div className="mt-4 max-w-[710px] leading-[30.6px] text-lg text-[#3C4147] text-center">
                        Zaply gives you the blocks and components you need to create a truly professional website, landing page or build your very own SaaS website with Zaply.
                    </div>

                </div>

                <div className="mt-[79px] mb-[100px] max-w-[858px] mx-auto grid md:grid-cols-2 md:gap-x-[160px] md:gap-y-[60px]">
                    <div>
                        <Image className="mt-2" src="/icons/zaply/card-bg.svg" alt="card-bg" width="51"
                               height="46"/>
                        <div className="mt-[34px] text-[#0C1523] text-[24px] font-semibold leading-[31.2px]">
                            Competitive Salary & Equity
                        </div>
                        <div className="mt-[18px] text-lg text-[#3C4147]">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit of a officia consequat to the main.
                        </div>
                    </div>
                    <div>
                        <Image className="mt-2" src="/icons/zaply/heart-bg.svg" alt="heart-bg" width="51"
                               height="46"/>
                        <div className="mt-[34px] text-[#0C1523] text-[24px] font-semibold leading-[31.2px]">
                            Top-notch Health Benefits
                        </div>
                        <div className="mt-[18px] text-lg text-[#3C4147]">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit of a officia consequat to the main.
                        </div>
                    </div>
                    <div>
                        <Image className="mt-2" src="/icons/zaply/retreat-bg.svg" alt="retreat-bg" width="51"
                               height="46"/>
                        <div className="mt-[34px] text-[#0C1523] text-[24px] font-semibold leading-[31.2px]">
                            Company & team retreats
                        </div>
                        <div className="mt-[18px] text-lg text-[#3C4147]">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit of a officia consequat to the main.
                        </div>
                    </div>
                    <div>
                        <Image className="mt-2" src="/icons/zaply/setup-bg.svg" alt="setup-bg" width="51"
                               height="46"/>
                        <div className="mt-[34px] text-[#0C1523] text-[24px] font-semibold leading-[31.2px]">
                            Office setup budget
                        </div>
                        <div className="mt-[18px] text-lg text-[#3C4147]">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit of a officia consequat to the main.
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full bg-[#F3F7FA] pt-[87px] py-[136px]">
                <div className="max-w-[1295px] mx-auto sm-px-6">
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-center gradient-01 text-[72px] font-bold leading-[79px]" style={{letterSpacing: '-3px'}}>
                            Open Jobs
                        </div>
                        <div className="mt-4 max-w-[572px] leading-[30.6px] text-lg text-[#3C4147] text-center">
                            Zaply gives you the blocks and components you need to create a truly professional website, landing page fast.
                        </div>

                    </div>
                    <div className="mt-[89px]">
                        <div className="mb-[30px] text-[#0C1523] text-[24px] font-semibold leading-[31.2px]">Engineering</div>
                        <div className="py-[33px] px-[40px] bg-white rounded-[10px] flex items-center justify-between">
                            <div>
                                <div className="text-lg font-semibold">
                                    Head of Security Engineering
                                </div>
                                <div className="mt-[9px] flex items-center gap-[10px] text-sm text-[#3C4147]">
                                    <MapPin color="#A1A1AA" size="18"  />
                                    <span>New York</span>
                                    <Clock color="#A1A1AA" size="18" className="ml-[32px]" />
                                    <span>Full Time</span>
                                </div>

                            </div>
                            <Button className="text-sm font-medium">
                                See Details
                            </Button>
                        </div>
                        <div className="mt-[10px] py-[33px] px-[40px] bg-white rounded-[10px] flex items-center justify-between">
                            <div>
                                <div className="text-lg font-semibold">
                                    Platform Engineer
                                </div>
                                <div className="mt-[9px] flex items-center gap-[10px] text-sm text-[#3C4147]">
                                    <MapPin color="#A1A1AA" size="18"  />
                                    <span>New York</span>
                                    <Clock color="#A1A1AA" size="18" className="ml-[32px]" />
                                    <span>Full Time</span>
                                </div>

                            </div>
                            <Button  className="text-sm font-medium">
                                See Details
                            </Button>
                        </div>
                        <div className="mt-[10px] py-[33px] px-[40px] bg-white rounded-[10px] flex items-center justify-between">
                            <div>
                                <div className="text-lg font-semibold">
                                    Front-end Developer
                                </div>
                                <div className="mt-[9px] flex items-center gap-[10px] text-sm text-[#3C4147]">
                                    <MapPin color="#A1A1AA" size="18"  />
                                    <span>Remote</span>
                                    <Clock color="#A1A1AA" size="18" className="ml-[32px]" />
                                    <span>Full Time</span>
                                </div>

                            </div>
                            <Button  className="text-sm font-medium">
                                See Details
                            </Button>
                        </div>

                        <div className="mt-[56px] mb-[30px] text-[#0C1523] text-[24px] font-semibold leading-[31.2px]">Marketing</div>
                        <div className="py-[33px] px-[40px] bg-white rounded-[10px] flex items-center justify-between">
                            <div>
                                <div className="text-lg font-semibold">
                                    Head of Marketing
                                </div>
                                <div className="mt-[9px] flex items-center gap-[10px] text-sm text-[#3C4147]">
                                    <MapPin color="#A1A1AA" size="18"  />
                                    <span>New York</span>
                                    <Clock color="#A1A1AA" size="18" className="ml-[32px]" />
                                    <span>Full Time</span>
                                </div>

                            </div>
                            <Button  className="text-sm font-medium">
                                See Details
                            </Button>
                        </div>
                        <div className="mt-[10px] py-[33px] px-[40px] bg-white rounded-[10px] flex items-center justify-between">
                            <div>
                                <div className="text-lg font-semibold">
                                    Content Marketer / Writer (SaaS, SalesTech)
                                </div>
                                <div className="mt-[9px] flex items-center gap-[10px] text-sm text-[#3C4147]">
                                    <MapPin color="#A1A1AA" size="18"  />
                                    <span>Remote</span>
                                    <Clock color="#A1A1AA" size="18" className="ml-[32px]" />
                                    <span>Full Time</span>
                                </div>

                            </div>
                            <Button  className="text-sm font-medium">
                                See Details
                            </Button>
                        </div>
                        <div className="mt-[10px] py-[33px] px-[40px] bg-white rounded-[10px] flex items-center justify-between">
                            <div>
                                <div className="text-lg font-semibold">
                                    Senior Growth Manager
                                </div>
                                <div className="mt-[9px] flex items-center gap-[10px] text-sm text-[#3C4147]">
                                    <MapPin color="#A1A1AA" size="18"  />
                                    <span>Remote</span>
                                    <Clock color="#A1A1AA" size="18" className="ml-[32px]" />
                                    <span>Full Time</span>
                                </div>

                            </div>
                            <Button  className="text-sm font-medium">
                                See Details
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}