import React from "react";
import Image from "next/image";
import Button from "@/app/components/ui/Button";

const companies = [
    {
        name: "Slack",
        image: "/images/zaply/slack.svg",
        description: "Whether it’s a small internal app or a new for millions of customers, our design and development teams."
    },
    {
        name: "Whatsapp",
        image: "/images/zaply/whatsapp.svg",
        description: "Whether it’s a small internal app or a new for millions of customers, our design and development teams."
    },
    {
        name: "Zoom",
        image: "/images/zaply/zoom.svg",
        description: "Whether it’s a small internal app or a new for millions of customers, our design and development teams."
    }
]
const marketing = [
    {
        name: "Figma",
        image: "/images/zaply/figma.svg",
        description: "Whether it’s a small internal app or a new for millions of customers, our design and development teams."
    },
    {
        name: "MailChimp",
        image: "/images/zaply/mailchimp.svg",
        description: "Whether it’s a small internal app or a new for millions of customers, our design and development teams."
    },
    {
        name: "Shopify",
        image: "/images/zaply/shopify.svg",
        description: "Whether it’s a small internal app or a new for millions of customers, our design and development teams."
    },
    {
        name: "Hubspot",
        image: "/images/zaply/hubspot.svg",
        description: "Whether it’s a small internal app or a new for millions of customers, our design and development teams."
    },
    {
        name: "Intercom",
        image: "/images/zaply/Intercom.svg",
        description: "Whether it’s a small internal app or a new for millions of customers, our design and development teams."
    },
    {
        name: "Zapier",
        image: "/images/zaply/zapier.svg",
        description: "Whether it’s a small internal app or a new for millions of customers, our design and development teams."
    }
]
const payments = [
    {
        name: "Paypal",
        image: "/images/zaply/paypal.png",
        description: "Whether it’s a small internal app or a new for millions of customers, our design and development teams."
    },
    {
        name: "Stripe",
        image: "/images/zaply/stripe.png",
        description: "Whether it’s a small internal app or a new for millions of customers, our design and development teams."
    },
    {
        name: "Lemon Squeezy",
        image: "/images/zaply/lemon.png",
        description: "Whether it’s a small internal app or a new for millions of customers, our design and development teams."
    }
]
function IntegrationCard({name, image, description}: {name: string; image: string; description: string}) {
    return (
        <div className="p-6 bg-white border-r border-b border-[#E3E5EA] [&:nth-child(3n)]:border-r-0 [&:nth-last-child(-n+3)]:border-b-0">
            <Image src={image} alt={name} width="40" height="40"/>
            <div className="mt-[32px] text-[20px] font-semibold leading-[34px]">
                {name}
            </div>
            <div className="text-[#3C4147] mt-2">
                {description}
            </div>
            <div className="cursor-pointer font-semibold flex items-center gap-[10px] mt-[26px] text-[#5FA9DF]">
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                     fill="none">
                    <path
                        d="M9.33333 3.33325L14 7.99992M14 7.99992L9.33333 12.6666M14 7.99992L2 7.99992"
                        stroke="#5FA9DF" strokeWidth="1.5" strokeLinecap="round"
                                                 strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    )
}

export default function Integration() {
    return (
        <div className="w-full">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="mt-[93px]">
                    <div style={{letterSpacing: '-4px', lineHeight: '106%'}}
                         className="font-bold gradient-01 text-[80px] text-center pb-[6px]">
                        Integrations
                    </div>
                    <div className="max-w-[665px] text-lg text-center mt-6 text-[#3C4147]">
                        Zaply gives you the blocks & components you need to create a truly professional website, landing
                        page or admin panel for your SaaS.
                    </div>
                </div>

                <div className="w-full bg-[#F3F7FA] mt-[91px] pt-[87px] pb-[121px]">
                    <div className="max-w-[1295px] mx-auto sm-px-6">
                        <div className="text-[24px] leading-[31.2px] font-semibold">
                            Communication
                        </div>
                        <div
                            className="mt-[32px] grid md:grid-cols-3 rounded-[8px] border border-[#E3E5EA] overflow-hidden">
                            {companies.map(e => (
                                <IntegrationCard
                                    key={e.name}
                                    name={e.name}
                                    image={e.image}
                                    description={e.description}
                                />
                            ))}
                        </div>
                        <div className="mt-[64px] text-[24px] leading-[31.2px] font-semibold">
                            Marketing
                        </div>
                        <div
                            className="mt-[32px] grid md:grid-cols-3 rounded-[8px] border border-[#E3E5EA] overflow-hidden">
                            {marketing.map(e => (
                                <IntegrationCard
                                    key={e.name}
                                    name={e.name}
                                    image={e.image}
                                    description={e.description}
                                />
                            ))}
                        </div>
                        <div className="mt-[64px] text-[24px] leading-[31.2px] font-semibold">
                            Payments
                        </div>
                        <div
                            className="mt-[32px] grid md:grid-cols-3 rounded-[8px] border border-[#E3E5EA] overflow-hidden">
                            {payments.map(e => (
                                <IntegrationCard
                                    key={e.name}
                                    name={e.name}
                                    image={e.image}
                                    description={e.description}
                                />
                            ))}
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
