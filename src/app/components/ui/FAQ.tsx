"use client";
import React, {useState} from "react";

interface PropsI {
    question: string,
    answer: string
}
const FAQ:React.FC<PropsI> = ({ question, answer}) => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className="cursor-pointer text-h3 font-semibold text-text-primary flex items-center gap-[28px]" onClick={() => setShow(prev => !prev)}>
                <span className="mt-2">
                    {show ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
                            <path d="M18 10L10 2L2 10" stroke="#0C1523" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
                            <path d="M2 2L10 10L18 2" stroke="#0C1523" strokeWidth="2.5" strokeLinecap="round"
                                                                      strokeLinejoin="round"/>
                        </svg>
                    )}
                </span>
                <span>{question}</span>
            </div>
            {show && <div className="text-text-secondary body-text" dangerouslySetInnerHTML={{ __html: answer }}>
            </div>}
        </div>
    )
};

export default FAQ;
