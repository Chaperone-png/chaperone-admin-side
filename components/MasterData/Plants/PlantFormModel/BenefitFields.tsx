'use client';
import React from 'react';

interface Benefit {
  title: string;
  description: string;
}

type Props = {
  benefits: Benefit[];
  setBenefits: React.Dispatch<React.SetStateAction<Benefit[]>>;
};

const BenefitFields: React.FC<Props> = ({ benefits, setBenefits }) => {
  const handleChange = (index: number, field: keyof Benefit, value: string) => {
    const updated = [...benefits];
    updated[index][field] = value;
    setBenefits(updated);
  };

  const addBenefit = () => setBenefits([...benefits, { title: '', description: '' }]);
  const removeBenefit = (index: number) => setBenefits(benefits.filter((_, i) => i !== index));

  return (
    <div className="space-y-4">
      {benefits.map((benefit, idx) => (
        <div key={idx} className="flex flex-col md:flex-row gap-4 items-center">
          <input
            className="w-full md:w-1/3 p-2 border rounded"
            placeholder="Title"
            value={benefit.title}
            onChange={(e) => handleChange(idx, 'title', e.target.value)}
          />
          <input
            className="w-full md:w-2/3 p-2 border rounded"
            placeholder="Description"
            value={benefit.description}
            onChange={(e) => handleChange(idx, 'description', e.target.value)}
          />
          {benefits.length > 1 && (
            <button
              type="button"
              className="text-red-500 hover:text-red-700"
              onClick={() => removeBenefit(idx)}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={addBenefit}
      >
        Add Benefit
      </button>
    </div>
  );
};

export default BenefitFields;