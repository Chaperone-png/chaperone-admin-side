import React from "react";

const SelectField = ({ label, name, value, onChange, error, options }: any) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full appearance-none px-4 py-2 pr-10 rounded-lg shadow-sm transition-all
            ${
              error
                ? "border-red-500 bg-red-50 text-red-700"
                : "border border-gray-300 text-gray-800"
            }`}
          style={{
            backgroundColor: "var(--cc-skyblue)",
          }}
        >
          <option value="">{label}</option>
          {options.map((opt: string) => (
            <option
              key={opt}
              value={opt.toLowerCase()}
              style={{ backgroundColor: "var(--cc-skyblue)" }}
            >
              {opt}
            </option>
          ))}
        </select>

        {/* Custom arrow */}
        <div className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
          ▼
        </div>
      </div>
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
};

export default SelectField;
