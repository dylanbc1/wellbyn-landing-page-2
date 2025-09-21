import React from "react";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import StoryComponent from "@/app/components/StoryComponent";

interface StoryI {
    title: string;
    image: string;
    profileName: string;
    designation: string;
}

const stories: StoryI[] = [
    {
        title: 'Waverio Reaches it\'s revenue goals faster with Scalo.',
        image: '/images/zaply/story-profile-img-1.svg',
        profileName: 'Marvin McKinney',
        designation: 'Chief executive officer'
    },
    {
        title: 'Waverio Reaches it\'s revenue goals faster with Scalo.',
        image: '/images/zaply/story-profile-img-1.svg',
        profileName: 'Marvin McKinney',
        designation: 'Chief executive officer'
    },
    {
        title: 'Darlene closes 21% of her deal, thanks to Scalo.',
        image: '/images/zaply/story-profile-img-1.svg',
        profileName: 'Devon Lane',
        designation: 'Chief executive officer'
    },
    {
        title: 'Incanto\'s call got 3x in just couple of months.',
        image: '/images/zaply/story-profile-img-1.svg',
        profileName: 'Kathryn Murphy',
        designation: 'Marketing manager'
    },
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

export default function CaseStudy() {
    return (
        <div className="w-full">
            <div className="mt-[93px] flex flex-col items-center justify-center">
                <div className="text-center gradient-01 text-[80px] w-full font-bold leading-[84.4px]"
                     style={{letterSpacing: '-3px'}}>
                    Customer Stories
                </div>
                <div className="mt-4 max-w-[665px] leading-[30.6px] text-lg text-[#3C4147] text-center">
                    Zaply gives you the blocks & components you need to create a truly professional website, landing
                    page or admin panel for your SaaS.
                </div>

                <div className="mt-[148px] grid grid-cols-2 md:grid-cols-4 gap-[50px] md:gap-[130px]">
                    <div>
                        <div className="text-[#5FA9DF] text-[72px] font-bold leading-[79.2px]"
                             style={{letterSpacing: '-3px'}}>15
                        </div>
                        <div className="mt-[11px] font-medium text-[#3C4147] leading-[30px]">
                            Years of experience
                        </div>
                    </div>
                    <div>
                        <div className="text-[#5FA9DF] text-[72px] font-bold leading-[79.2px]"
                             style={{letterSpacing: '-3px'}}>86K
                        </div>
                        <div className="mt-[11px] font-medium text-[#3C4147] leading-[30px]">
                            Satisfied clients worldwide
                        </div>
                    </div>
                    <div>
                        <div className="text-[#5FA9DF] text-[72px] font-bold leading-[79.2px]" style={{letterSpacing: '-3px'}}>30K</div>
                        <div className="mt-[11px] font-medium text-[#3C4147] leading-[30px]">
                            Project has been completed
                        </div>
                    </div>
                    <div>
                        <div className="text-[#5FA9DF] text-[72px] font-bold leading-[79.2px]" style={{letterSpacing: '-3px'}}>4.8</div>
                        <div className="mt-[11px] font-medium text-[#3C4147] leading-[30px]">
                            Companies success rate
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full bg-[#F3F7FA] mt-[105px] py-[105px]">
                <div className="max-w-[1295px] mx-auto sm-px-6">
                    <div className="flex flex-col items-center justify-center">
                        <div className="max-w-[860px] pb-2 text-center gradient-01 text-[72px] font-bold leading-[79px]"
                             style={{letterSpacing: '-3px'}}>
                            More success stories from companies like yours
                        </div>

                        <div className="grid md:grid-cols-3 gap-[25px] mt-[103px]">
                            {stories.map( ({ title, image, profileName, designation }) => <StoryComponent
                                key={title}
                                title={title}
                                image={image}
                                profileName={profileName}
                                designation={designation}
                            />)}

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
                        Zaply gives you the blocks and components you need to create a truly professional website,
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
