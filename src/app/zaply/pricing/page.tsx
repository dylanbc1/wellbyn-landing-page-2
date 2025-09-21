import React from "react";
import { Check, Minus, X, ArrowRight } from "lucide-react"
import clsx from "clsx";

type PlanKey = "starter" | "pro" | "company" | "enterprise"

const plans2: { key: PlanKey; name: string; price: string }[] = [
    { key: "starter", name: "Starter", price: "$99/mo" },
    { key: "pro", name: "Pro", price: "$199/mo" },
    { key: "company", name: "Company", price: "$349/mo" },
    { key: "enterprise", name: "Enterprise", price: "$499/mo" },
]

type Cell = boolean | string | null

const rows: { feature: string; values: Record<PlanKey, Cell> }[] = [
    {
        feature: "Common Inbox",
        values: { starter: true, pro: true, company: true, enterprise: true },
    },
    {
        feature: "Cloud Storage",
        values: { starter: "50 GB", pro: "100 GB", company: "500 GB", enterprise: "1 TB" },
    },
    {
        feature: "Ads Management",
        values: { starter: true, pro: true, company: true, enterprise: true },
    },
    {
        feature: "Instant Data Refresh",
        values: { starter: null, pro: true, company: true, enterprise: true },
    },
    {
        feature: "Team Members",
        values: { starter: "2", pro: "5", company: "10", enterprise: "Unlimited" },
    },
    {
        feature: "Advanced Reporting",
        values: { starter: null, pro: true, company: true, enterprise: true },
    },
]

type Feature = {
    label: string
    included: boolean
}

type Plan = {
    name: string
    price: string
    cadence: string
    popular?: boolean
    features: Feature[]
    cta: string
}

const plans: Plan[] = [
    {
        name: "Free Plan",
        price: "$0",
        cadence: "Per Month",
        features: [
            { label: "10 GB Disk Space", included: true },
            { label: "1 Year Support", included: true },
            { label: "500 Queries", included: true },
            { label: "Video Collections", included: false },
            { label: "Learning Path", included: false },
            { label: "Download Images", included: false },
            { label: "Free Custom Domain", included: false },
        ],
        cta: "Get 14 Days Free Trial",
    },
    {
        name: "Basic Plan",
        price: "$5",
        cadence: "Per Month",
        features: [
            { label: "10 GB Disk Space", included: true },
            { label: "1 Year Support", included: true },
            { label: "600 Queries", included: true },
            { label: "Video Collections", included: true },
            { label: "Learning Path", included: false },
            { label: "Download Images", included: false },
            { label: "Free Custom Domain", included: false },
        ],
        cta: "Get 14 Days Free Trial",
    },
    {
        name: "Popular Plan",
        price: "$45",
        cadence: "Per Month",
        popular: true,
        features: [
            { label: "10 GB Disk Space", included: true },
            { label: "1 Year Support", included: true },
            { label: "800 Queries", included: true },
            { label: "Video Collections", included: true },
            { label: "Learning Path", included: true },
            { label: "Download Images", included: false },
            { label: "Free Custom Domain", included: false },
        ],
        cta: "Get 14 Days Free Trial",
    },
    {
        name: "Premium",
        price: "$99",
        cadence: "Per Month",
        features: [
            { label: "10 GB Disk Space", included: true },
            { label: "1 Year Support", included: true },
            { label: "1000 Queries", included: true },
            { label: "Video Collections", included: true },
            { label: "Learning Path", included: true },
            { label: "Download Images", included: true },
            { label: "Free Custom Domain", included: true },
        ],
        cta: "Get 14 Days Free Trial",
    },
]


function CellValue({ value }: { value: Cell }) {
    if (typeof value === "string") {
        return <span className="text-foreground">{value}</span>
    }
    if (value === true) {
        return <Check className="mx-auto h-4 w-4 text-emerald-600" aria-label="Included" />
    }
    return <Minus className="mx-auto h-4 w-4 text-muted-foreground/50" aria-label="Not included" />
}

function PlanCard({ plan }: { plan: Plan }) {
    const isPopular = plan.popular

    return (
        <div
            role="region"
            aria-labelledby={`${plan.name.replace(/\s+/g, "-").toLowerCase()}-title`}
            className={clsx(
                "relative flex h-full flex-col overflow-hidden border border-[#EBEDF2] rounded-[10px] p-[40px]",
                {"bg-background": !isPopular },
                {"bg-[#5FA9DF] text-white shadow-xl shadow-violet-600/30 border-transparent": isPopular}
            )}
        >
            <div className="pt-6 pb-2">
                <div className="text-lg leading-[30.6px] font-medium" id={`${plan.name.replace(/\s+/g, "-").toLowerCase()}-title`}>
                    {plan.name}
                </div>
                <div className="mt-[37px] flex items-baseline gap-2">
                    <div className={clsx(
                        "text-[56px] font-semibold tracking-tight",
                        {"text-white": isPopular},
                        {"text-foreground": !isPopular}
                    )}>
                        {plan.price}
                    </div>
                    <span className={clsx(
                        "text-sm",
                        {"text-white/80": isPopular},
                        {"text-muted-foregroun": !isPopular}
                        )}>
            {"/ "}
                        {plan.cadence}
          </span>
                </div>
            </div>
            <div>
                <hr className={clsx(
                    "my-5 border-[#EBEDF2]"
                )} />
                <ul className="mt-5 space-y-[10px] font-medium">
                    {plan.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            {f.included ? (
                                <Check className={clsx(
                                    "mt-0.5 h-4 w-4",
                                    {"text-emerald-200": isPopular},
                                    {"text-emerald-600": !isPopular}
                                )} />
                            ) : (
                                <X className={clsx(
                                    "mt-0.5 h-4 w-4",
                                    {"text-white/30": isPopular},
                                    {"text-[#B8C1CC]": !isPopular}
                                    )} />
                            )}
                            <span
                                className={clsx(
                                    "leading-none",
                                    {"text-white/60 line-through": !f.included && isPopular},
                                    {"text-[#B8C1CC] line-through": !f.included && !isPopular}
                                )}
                            >
                {f.label}
              </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-[38px] pb-6">
                <button
                    className={clsx(
                        "py-3 cursor-pointer font-semibold px-[14px] border-[1.5px] border-[#E3E5EA] rounded-lg flex items-center gap-[10px]",
                        {"bg-white text-[#5FA9DF]": isPopular },
                        {"hover:bg-muted": !isPopular})}
                >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </button>
            </div>
        </div>
    )
}

export default function Pricing(){
    return (
        <div className="max-w-[1295px] mx-auto">
            <div className="max-w-[849px] mt-[81px]">
                <div style={{letterSpacing: '-4px', lineHeight: '106%'}}
                     className="font-bold gradient-01 text-[80px] mt-6 pb-[6px]">
                    Simple pricing for companies at any scale
                </div>
                <div className="mt-[32px] text-lg leading-[30px] max-w-[630px]">
                    Scalo gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.
                </div>
            </div>

            <div className="mt-[117px] grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {plans.map((plan) => (
                    <PlanCard key={plan.name} plan={plan} />
                ))}
            </div>

            <div className="mt-[112px] mb-[137px]">
                <h1 className="mb-8 text-center text-[72px] font-bold tracking-tight md:text-5xl">
                    <span className="gradient-01">Compare all features</span>
                </h1>

                <div className="overflow-x-auto rounded-lg bg-white">
                    <table className="w-full min-w-[720px] table-fixed text-sm">
                        <thead>
                        <tr className="border-b border-gray-100 bg-muted/30 text-muted-foreground">
                            <th scope="col" className="w-1/3 px-4 py-4 text-left font-medium text-foreground">
                            </th>
                            {plans2.map((p) => (
                                <th key={p.key} scope="col" className="px-4 py-4 text-center font-medium">
                                    <div className="text-xs text-[#616C77]">{p.name}</div>
                                    <div className="mt-1 text-base font-semibold text-foreground">{p.price}</div>
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody className="">
                        {rows.map((row) => (
                            <tr key={row.feature} className="border-b border-gray-100">
                                <th
                                    scope="row"
                                    className="whitespace-nowrap px-4 py-4 text-left text-[#3C4147] font-medium text-foreground"
                                >
                                    {row.feature}
                                </th>
                                {plans2.map((p) => (
                                    <td key={p.key} className="px-4 py-4 text-center">
                                        <CellValue value={row.values[p.key]}/>
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
