"use client";
import React, {useState} from "react";
import { X, CircleQuestionMark, Plus } from "lucide-react";

interface PropsI {
    question: string,
    answer: string
}
const FAQ2:React.FC<PropsI> = ({ question, answer}) => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className="cursor-pointer text-[20px] font-semibold flex items-center justify-between gap-[28px]"
                 onClick={() => setShow(prev => !prev)}>
                <div className=" flex items-center gap-[28px]">
                    <span className="mt-2">
                    <CircleQuestionMark color="rgb(79 70 229)" />
                    </span>
                    <span>{question}</span>
                </div>
                <span className="mt-2">
                    {show ? (
                        <X />
                    ) : (
                        <Plus />
                    )}
                </span>
            </div>
            {show && <div className="text-[#3C4147]">
                {answer}
            </div>}
        </div>
    )
};

export default FAQ2;
