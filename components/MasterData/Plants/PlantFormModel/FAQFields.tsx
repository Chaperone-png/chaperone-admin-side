"use client";
import React from "react";

interface FAQ {
  question: string;
  answer: string;
}

type Props = {
  faqs: FAQ[];
  setFaqs: React.Dispatch<React.SetStateAction<FAQ[]>>;
};

const FAQFields: React.FC<Props> = ({ faqs, setFaqs }) => {
  const handleChange = (index: number, field: keyof FAQ, value: string) => {
    const updated = [...faqs];
    updated[index][field] = value;
    setFaqs(updated);
  };

  const addFAQ = () => setFaqs([...faqs, { question: "", answer: "" }]);
  const removeFAQ = (index: number) =>
    setFaqs(faqs.filter((_, i) => i !== index));

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="flex flex-col md:flex-row gap-4 items-center">
          <input
            className="w-full md:w-1/2 p-2 border rounded"
            placeholder="Question"
            value={faq.question}
            onChange={(e) => handleChange(idx, "question", e.target.value)}
          />
          <input
            className="w-full md:w-1/2 p-2 border rounded"
            placeholder="Answer"
            value={faq.answer}
            onChange={(e) => handleChange(idx, "answer", e.target.value)}
          />
          {faqs.length > 1 && (
            <button
              type="button"
              className="text-red-500 hover:text-red-700"
              onClick={() => removeFAQ(idx)}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={addFAQ}
      >
        Add FAQ
      </button>
    </div>
  );
};

export default FAQFields;
