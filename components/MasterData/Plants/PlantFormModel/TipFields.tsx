'use client';
import React from 'react';

interface Tip {
  title: string;
  description: string;
}

type Props = {
  tips: Tip[];
  setTips: React.Dispatch<React.SetStateAction<Tip[]>>;
};

const TipFields: React.FC<Props> = ({ tips, setTips }) => {
  const handleChange = (index: number, field: keyof Tip, value: string) => {
    const updated = [...tips];
    updated[index][field] = value;
    setTips(updated);
  };

  const addTip = () => setTips([...tips, { title: '', description: '' }]);
  const removeTip = (index: number) => setTips(tips.filter((_, i) => i !== index));

  return (
    <div className="space-y-4">
      {tips.map((tip, idx) => (
        <div key={idx} className="flex flex-col md:flex-row gap-4 items-center">
          <input
            className="w-full md:w-1/3 p-2 border rounded"
            placeholder="Title"
            value={tip.title}
            onChange={(e) => handleChange(idx, 'title', e.target.value)}
          />
          <input
            className="w-full md:w-2/3 p-2 border rounded"
            placeholder="Description"
            value={tip.description}
            onChange={(e) => handleChange(idx, 'description', e.target.value)}
          />
          {tips.length > 1 && (
            <button
              type='button'
              className="text-red-500 hover:text-red-700"
              onClick={() => removeTip(idx)}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type='button'
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={addTip}
      >
        Add Tip
      </button>
    </div>
  );
};

export default TipFields;