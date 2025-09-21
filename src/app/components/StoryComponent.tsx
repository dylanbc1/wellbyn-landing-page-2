import React from "react";
import Image from "next/image";

interface StoryI {
    title: string;
    image: string;
    profileName: string;
    designation: string;
}

export default function StoryComponent({ title, image, profileName, designation }: StoryI) {
    return (
        <div className="relative group p-[35px] rounded-[10px] bg-white hover:bg-[#4c3dffb3] h-[290px] max-h-[290px]">
            <div
                className="absolute z-10 left-0 top-0 hidden group-hover:flex  items-center justify-center w-full h-[290px] max-h-[290px]">
                <Image src="/images/play-button.svg"
                       alt="play-button" width="80" height="80"/>
            </div>
            <div className="group-hover:blur-[5.5px]">
                <Image src="/images/zaply/incanto2.svg" alt="incanto" width="131" height="22"/>
                <div className="mt-[30px] text-[24px] font-semibold">
                    {title}
                </div>
                <div className="flex gap-[23px] mt-[50px]">
                    <Image src={image} alt="robert" width="50" height="50"/>
                    <div>
                        <div className="text-lg font-semibold">{profileName}</div>
                        <div className="">{designation}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
