"use client";
import React from "react";
import { useState } from "react"
import Button from "@/app/components/ui/Button"
import Input from "@/app/components/ui/input"

export default function RequestPage(){

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleInputChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        <div className="w-full flex flex-col justify-center items-center">
            <div className="max-w-[718px] mt-[70px]">
                <div style={{letterSpacing: '-4px', lineHeight: '106%'}}
                     className="font-bold gradient-01 text-[80px] text-center pb-[6px]">
                    Get In Touch
                </div>
                <div className="text-lg text-center mt-6 text-[#3C4147] mb-[84px]">
                    Zaply gives you the blocks & components you need to create a truly professional website, landing
                    page or admin panel for your SaaS.
                </div>

                <form onSubmit={handleSubmit} className="space-y-[16px] max-w-[550px] mx-auto">
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
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <div>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Write your message"
                                value={formData.message}
                                onChange={handleInputChangeMessage}
                                className="focus:border-[1px] focus:outline-[1px] py-[14px] px-4 w-full rounded-[10px] border border-[#CBD2D9] bg-gray-50 border-gray-200 focus:bg-white"
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full text-center flex justify-center"
                    >
                        Send
                    </Button>
                </form>


            </div>

            <div className="w-full mt-[139px] h-[1px] bg-[#EBEDF2]"/>


        </div>
    )
}
