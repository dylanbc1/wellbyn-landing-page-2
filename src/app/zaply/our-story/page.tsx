import Image from "next/image";

export default function OurStory(){
    return (
        <div className="px-[32px] max-w-[1295px] mx-auto mt-[30px]">
            <div className="relative">
                <Image className="md:absolute left-0 top-[655px]" src="/images/zaply/story-img-1.png" alt="story-img-1"
                       width="302" height="415"/>

                <div className="md:absolute left-[328px] top-[567px]">
                    <Image src="/images/zaply/story-img-2.png" alt="story-img-2" width="304" height="282"/>
                    <Image className="mt-[27px]" src="/images/zaply/story-img-3.png" alt="story-img-3" width="304"
                           height="434"/>
                </div>
                <Image className="md:absolute left-[656px] top-[471px]" src="/images/zaply/story-img-4.png"
                       alt="story-img-4" width="306" height="325"/>
                <div className="md:absolute left-[996px] top-[214px]">
                    <Image src="/images/zaply/story-img-5.png" alt="story-img-5" width="306" height="386"/>
                    <Image className="mt-[27px]" src="/images/zaply/story-img-6.png" alt="story-img-6" width="306"
                           height="325"/>
                </div>
                <div className="grid md:grid-cols-2 gap-[20px]">
                    <div className="text-lg text-[#0C1523]">
                        <div style={{letterSpacing: '-4px'}}
                             className="text-[80px] font-bold leading-[84px] mb-[42px]">Our Story
                        </div>
                        <p>
                            We partner closely with the most progressive companies in the world to improve their
                            customer support operations. As consumers, we all have our own version of that one call to
                            customer support.
                        </p>
                        <br/>
                        <p>
                            On the other end of the line are well-meaning, talented people doing their best with what
                            they have: a tangled web of tribal knowledge, spreadsheets, and outdated systems. Our
                            technology provides teams a way to balance efficiency and performance with a caring and
                            empowering environment.
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="grid md:grid-cols-2 gap-[120px] md:mt-[697px]">
                    <div></div>
                    <div className="text-lg text-[#0C1523]">
                        <div
                            className="text-[24px] font-semibold leading-[31px] mb-[29px]">
                            Growing since 2020
                        </div>
                        <p>
                            On the other end of the line are well-meaning, talented people doing their best with what
                            they have: a tangled web of tribal knowledge, spreadsheets, and outdated systems.
                        </p>
                        <br/>
                        <p>
                            Our technology provides teams a way to balance efficiency and performance with a caring and
                            empowering environment.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-4 mt-[200px] mb-[106px] gap-[48px]">
                <div>
                    <Image src="/images/zaply/story-profile-1.png" alt="story-profile-1" width="288" height="288"/>
                    <div className="mt-[22px] text-lg font-semibold leading-[30.6px]">Dianne Russell</div>
                    <div className="text-[#3C4147] leading-[25.6px]">Account Manager, Supply Partnerships</div>
                </div>
                <div>
                    <Image src="/images/zaply/story-profile-2.png" alt="story-profile-2" width="288" height="288"/>
                    <div className="mt-[22px] text-lg font-semibold leading-[30.6px]">Annette Black</div>
                    <div className="text-[#3C4147] leading-[25.6px]">Associate Product Writer</div>
                </div>
                <div>
                    <Image src="/images/zaply/story-profile-3.png" alt="story-profile-3" width="288" height="288"/>
                    <div className="mt-[22px] text-lg font-semibold leading-[30.6px]">Ralph Edwards</div>
                    <div className="text-[#3C4147] leading-[25.6px]">Recruiter</div>
                </div>
                <div>
                    <Image src="/images/zaply/story-profile-4.png" alt="story-profile-4" width="288" height="288"/>
                    <div className="mt-[22px] text-lg font-semibold leading-[30.6px]">Jenny Wilson</div>
                    <div className="text-[#3C4147] leading-[25.6px]">Account Manager</div>
                </div>
                <div>
                    <Image src="/images/zaply/story-profile-5.png" alt="story-profile-5" width="288" height="288"/>
                    <div className="mt-[22px] text-lg font-semibold leading-[30.6px]">Eleanor Pena</div>
                    <div className="text-[#3C4147] leading-[25.6px]">Technical Account Manager</div>
                </div>
                <div>
                    <Image src="/images/zaply/story-profile-6.png" alt="story-profile-6" width="288" height="288"/>
                    <div className="mt-[22px] text-lg font-semibold leading-[30.6px]">Jacob Jones</div>
                    <div className="text-[#3C4147] leading-[25.6px]">Pre-sales Manager</div>
                </div>
                <div>
                    <Image src="/images/zaply/story-profile-7.png" alt="story-profile-7" width="288" height="288"/>
                    <div className="mt-[22px] text-lg font-semibold leading-[30.6px]">Theresa Webb</div>
                    <div className="text-[#3C4147] leading-[25.6px]">VP of Marketing</div>
                </div>
            </div>
        </div>
    )
}
