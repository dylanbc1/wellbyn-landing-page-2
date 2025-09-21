import React from "react";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import StoryComponent from "@/app/components/StoryComponent";
import Link from "next/link";

interface StoryI {
    title: string;
    image: string;
    profileName: string;
    designation: string;
}
const stories: StoryI[] = [
    {
        title: 'Alterbone closes 32% more deals with Scalo.',
        image: '/images/zaply/story-profile-img-1.svg',
        profileName: 'Ralph Edwards',
        designation: 'General manager'
    },
    {
        title: 'Plamax sees over 300% ROI on Scalo.',
        image: '/images/zaply/story-profile-img-1.svg',
        profileName: 'Jerome Bell',
        designation: 'Project manager'
    },
    {
        title: 'Plamax sees over 300% ROI on Scalo.',
        image: '/images/zaply/story-profile-img-1.svg',
        profileName: 'Jerome Bell',
        designation: 'Project manager'
    }
]

export default function CaseStudyDetails() {
    return (
        <div className="w-full">
            <div className="mt-[97px] max-w-[1295px] mx-auto sm:px-6">
                <div className="flex flex-col gap-[41px]">
                    <Image src="/images/zaply/incanto2.svg" alt="incanto" width="131" height="22"/>
                    <div style={{letterSpacing: '-4px'}}
                         className="text-[80px] font-bold leading-[84px] max-[1051px]">
                        Waverio Reaches it’s revenue
                        goals faster with Scalo.
                    </div>
                    <div className="text-[24px] font-semibold">

                    </div>
                    <div className="flex gap-[23px]">
                        <Image src="/images/zaply/story-profile-img-1.svg" alt="robert" width="57" height="57"/>
                        <div className="max-w-[327px]">With Anthony Nava, Senior Sales Development Manager at
                            Crunchbase
                        </div>
                    </div>
                </div>

                <div className="bg-[#EBEDF2] h-[1px] w-full mt-[92px] mb-[63px]"/>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-[50px] md:gap-[130px]">
                    <div>
                        <div className="text-[#5FA9DF] text-[72px] font-bold leading-[79.2px]"
                             style={{letterSpacing: '-3px'}}>400%
                        </div>
                        <div className="mt-[11px] font-medium text-[#3C4147] leading-[30px]">
                            Improvements in call productivity
                        </div>
                    </div>
                    <div>
                        <div className="text-[#5FA9DF] text-[72px] font-bold leading-[79.2px]"
                             style={{letterSpacing: '-3px'}}>5x
                        </div>
                        <div className="mt-[11px] font-medium text-[#3C4147] leading-[30px]">
                            Increase in # of connects
                        </div>
                    </div>
                    <div>
                        <div className="text-[#5FA9DF] text-[72px] font-bold leading-[79.2px]"
                             style={{letterSpacing: '-3px'}}>7
                        </div>
                        <div className="mt-[11px] font-medium text-[#3C4147] leading-[30px]">
                            hours saved per rep, per week
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <div className="w-full bg-[#F3F7FA] mt-[103px] pt-[116px] pb-[127px]">
                <div className="max-w-[1295px] mx-auto sm-px-6 grid md:grid-cols-[25%_65%] gap-[130px]">
                    <div>
                        <div className="text-[#7F8995] text-[12px] font-medium leading-[16px]">ABOUT</div>
                        <div className="my-[18px] text-[#0C1523] font-medium leading-[25.6px]">
                            Quam interdum eget amet tellus adipiscing nullam a. Eget fermen tum viverra viverra mattis
                            nisi viverra elementum.
                        </div>
                        <Link className="text-[var(--theme-color-primary)]"
                              href="https://www.sitename.com">https://www.sitename.com</Link>

                        <div className="bg-[#EBEDF2] h-[1px] w-full my-[30px]"/>

                        <div className="text-[#7F8995] text-[12px] font-medium leading-[16px]">INDUSTRY</div>
                        <div className="my-[18px] text-[#0C1523] font-medium leading-[25.6px]">
                            Technology
                        </div>
                        <div className="bg-[#EBEDF2] h-[1px] w-full my-[30px]"/>

                        <div className="text-[#7F8995] text-[12px] font-medium leading-[16px]">FEATURES USED</div>
                        <div className="mb-[18px] text-[#0C1523] font-medium leading-[25.6px]">
                            <div className="mt-[18px] underline ">
                                Live Listen
                            </div>
                            <div className="mt-[18px] underline ">
                                Dialers
                            </div>
                            <div className="mt-[18px] underline ">
                                Achievements
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="text-[#021D13] text-[28px] font-semibold leading-[33.6px]">Challenge</div>
                        <div className="mt-[28px] text-[#0C1523] font-medium leading-[25.6px]">
                            If you are running ads to your Shopify store, between 40-60% of purchases will no longer
                            display in Facebook ads manager. This means for every 10 sales you generate, roughly only 5
                            of them will track back to the ad they came from. The other 5 sales are not reported at all
                            inside your ads manager.
                        </div>
                        <div className="mt-[24px] text-[#0C1523] leading-[25.5px]">
                            Quam interdum eget amet tellus adipiscing nullam a. Eget fermentum viverra viverra mattis
                            nisi viverra elementum.
                        </div>
                        <ul className="mt-[19px] list-disc pl-5">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li> Sed blandit gravida arcu risus congue malesuada proin et lectus.</li>
                            <li>Egestas massa massa euismod dolor curabitur.</li>

                        </ul>
                        <div className="mt-[21px] text-[#0C1523] leading-[25.5px]">
                            Dolor sit amet, consectetur adipiscing elit. Sed blandit gravida arcu risus congue malesuada
                            proin et lectus. Egestas massa massa euismod dolor curabitur.
                            <br/>
                            Interdum eget amet tellus adipiscing nullam a. Eget fermentum viverra viverra mattis nisi
                            viverra elementum.
                        </div>

                        <Image className="my-[46px]" src="/images/zaply/challenge.png" alt="challenge" width="990"
                               height="534"/>

                        <div className="text-[#0C1523] leading-[25.5px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit gravida arcu risus
                            congue
                            malesuada proin et lectus. Egestas massa massa euismod dolor curabitur. Quam interdum eget
                            amet
                            tellus adipiscing nullam a. Eget fermentum viverra viverra mattis nisi viverra elementum.
                        </div>

                        <div className="mt-[51px] text-[#021D13] text-[28px] font-semibold leading-[33.6px]">Problems</div>
                        <div className="mt-[28px] text-[#0C1523] font-medium leading-[25.6px]">
                            If you are running ads to your Shopify store, between 40-60% of purchases will no longer
                            display in Facebook ads manager. This means for every 10 sales you generate, roughly only 5
                            of them will track back to the ad they came from. The other 5 sales are not reported at all
                            inside your ads manager.
                        </div>
                        <div className="mt-[24px] text-[#0C1523] leading-[25.5px]">
                            Quam interdum eget amet tellus adipiscing nullam a. Eget fermentum viverra viverra mattis
                            nisi viverra elementum.
                        </div>
                        <ul className="mt-[19px] list-disc pl-5">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li> Sed blandit gravida arcu risus congue malesuada proin et lectus.</li>
                            <li>Egestas massa massa euismod dolor curabitur.</li>

                        </ul>
                        <div className="mt-[21px] text-[#0C1523] leading-[25.5px]">
                            Dolor sit amet, consectetur adipiscing elit. Sed blandit gravida arcu risus congue malesuada
                            proin et lectus. Egestas massa massa euismod dolor curabitur.
                            <br/>
                            Interdum eget amet tellus adipiscing nullam a. Eget fermentum viverra viverra mattis nisi
                            viverra elementum.
                        </div>

                    </div>
                </div>
            </div>


            <div className="w-full mt-[89px] py-[105px]">
                <div className="max-w-[1295px] mx-auto sm-px-6">
                    <div className="flex flex-col items-center justify-center">
                        <div
                            className="max-w-[860px] pb-2 text-center gradient-01 text-[72px] font-bold leading-[79px]"
                            style={{letterSpacing: '-3px'}}>
                            Read more success stories from companies
                        </div>

                        <div className="grid md:grid-cols-3 gap-[25px] mt-[103px]">
                            {stories.map(({title, image, profileName, designation}) => <div
                                key={title} className="rounded-[10px] border border-[#E7F0EC]">
                                <StoryComponent
                                    title={title}
                                    image={image}
                                    profileName={profileName}
                                    designation={designation}
                                />
                            </div>)}

                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-[#5FA9DF] pt-[104px] pb-[124px] flex flex-col items-center">
                <div className="max-w-[707px] flex flex-col items-center">
                    <div style={{letterSpacing: '-3px'}}
                         className="w-full text-[72px] pb-2 font-bold leading-[79.2px] gradient-02">
                        Ready to get started?
                    </div>
                    <div className="mt-[21px] text-[#F6F8FA] text-lg text-center leading-[30px]">
                                Zaply gives you the blocks and components you need to create a truly professional
                                website,
                                landing page or build your very own SaaS website with Zaply.
                            </div>
                            <Button className="mt-[63px] bg-[#0C1523] text-white">
                                <span>Get 14 Days Free Trial </span>
                                <span>
                                <Image src="/icons/arrow-right.svg" alt="cards" width="16" height="16"/>
                                </span>
                            </Button>

                            <div className="mt-4 text-[#F6F8FA] text-center leading-[25px]">
                                No credit card required
                            </div>
                        </div>
                    </div>

                </div>
                )
                }
