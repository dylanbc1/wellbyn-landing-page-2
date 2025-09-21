"use client";
import React from "react";
import {Download, Grid2x2Plus, Zap} from "lucide-react";
import { useState } from "react"
import Button from "@/app/components/ui/Button"
import Input from "@/app/components/ui/input"

export default function RequestPage(){

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Handle form submission here
    }
    return (
        <div className="w-full">
            <div className="mt-[97px] pb-[135px] max-w-[1295px] mx-auto sm:px-6 grid md:grid-cols-2 md:gap-[50px]">
                <div className="">
                    <div style={{letterSpacing: '-4px', lineHeight: '106%'}}
                         className="font-bold gradient-01 text-[80px] pb-[6px]">
                        Request free trial
                    </div>
                    <div className="text-lg mt-6 text-[#3C4147]">
                        Zaply gives you the blocks & components you need to create a truly clean website, landing page
                        or admin panel for your SaaS.
                    </div>

                    <div className="mt-[118px] flex flex-col gap-[45px]">
                        <div className="flex gap-[21px] items-start">
                            <div className="bg-[#EBEDFE] flex items-center justify-center p-2 rounded-full">
                                <Download color="#5FA9DF"/>
                            </div>
                            <div>
                                <div className="text-[#0C1523] text-[24px] font-semibold leading-[31.2px]">
                                    Easy to Download
                                </div>
                                <div className="text-[#3C4147] mt-[13px] max-w-[359px]">
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
                                    Unlimited Workspace
                                </div>
                                <div className="text-[#3C4147] mt-[13px] max-w-[359px]">
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
                                <div className="text-[#3C4147] mt-[13px] max-w-[359px]">
                                    Build website from anywhere just one click by turning on the software easily.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="w-full custom-shadow-lg max-w-[491px] mx-auto bg-white rounded-lg shadow-sm border border-gray-200 py-[39px] px-[45px]">
                        <div className="text-center mb-[56px]">
                            <h1 className="text-2xl font-semibold text-gray-900 mb-[10px]">Fill up the form</h1>
                            <p className="text-sm text-gray-600">We reply back with 24 hours after your request</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-[16px]">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-[10px]">
                                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                                        First Name *
                                    </label>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        placeholder="Enter your first name"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border-gray-200 focus:bg-white"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                                        Last Name *
                                    </label>
                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        placeholder="Enter your last name"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border-gray-200 focus:bg-white"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Email Address *
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border-gray-200 focus:bg-white"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                                    Phone Number *
                                </label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="XXX-XXX-XXXX"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border-gray-200 focus:bg-white"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium text-gray-700">
                                    Company Name (Optional)
                                </label>
                                <Input
                                    id="company"
                                    name="company"
                                    type="text"
                                    placeholder="Enter company name"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border-gray-200 focus:bg-white"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full text-center flex justify-center"
                            >
                                Request Free Trial
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#EBEDF2]" />


        </div>
    )
}
