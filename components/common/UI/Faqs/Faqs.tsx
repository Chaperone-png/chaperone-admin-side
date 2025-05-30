"use client";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";


const faqData = [
    {
        question: "What are the maali’s responsibilities?",
        answer: `<p>Our highly experienced maali’s are responsible for various tasks, such as:</p>
        <ul>
          <li>Reliable plant care</li>
          <li>Professional gardening consultations</li>
          <li>Regular gardening assistance</li>
        </ul>`
    },
    {
        question: "What will our maali carry along with them while offering a visit to your plants?",
        answer: "You can contact support via email at support@maaliexample.com."
    },
    {
        question: "How will our maali’s manage their time in a particular slot?",
        answer: "Our support is available from 9 AM to 6 PM, Monday to Friday."
    },
    {
        question: "Will you get free fertilisers?",
        answer: "Our support is available from 9 AM to 6 PM, Monday to Friday."
    },
    {
        question: "Do you provide plant care instructions?",
        answer: "Our support is available from 9 AM to 6 PM, Monday to Friday."
    }
];

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-wrapper max-w-5xl mx-auto p-4">
            <h2>FAQs</h2>
            <div>
                {faqData.map((faq, index: number) => (
                    <div key={index} className="border-b border-gray-300">
                        <button
                            className="w-full text-left px-4 py-4 font-medium flex justify-between items-center"
                            onClick={() => toggleFAQ(index)}
                        >  <span className="faq-question">{`${index + 1}. ${faq.question}`}</span>
                            <span className="w-5 h-5">
                                {activeIndex === index ? (
                                    <ChevronUpIcon className="w-5 h-5 text-black" />
                                ) : (
                                    <ChevronDownIcon className="w-5 h-5  text-black" />
                                )}
                            </span>
                        </button>
                        <div className={`px-4 transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 overflow-hidden opacity-0"
                            }`}
                        >
                            <div
                                className="faq-answer text-gray-700"
                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faqs;
