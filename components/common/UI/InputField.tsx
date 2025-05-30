const InputField = ({
  label,
  name,
  type,
  value,
  onChange,
  error,
  Icon,
}: any) => {
  const isTel = type === "tel";

  let paddingLeft = "pl-2";
  if (Icon && isTel) paddingLeft = "pl-[80px]";
  else if (isTel) paddingLeft = "pl-[40px]";
  else if (Icon) paddingLeft = "pl-[40px]";

  return (
    <div className="input-field-style flex flex-col gap-2">
      <label className="font-medium">{label}</label>
      <div className="relative w-full">
        {Icon && (
          <Icon className="w-6 h-6 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
        )}
        {isTel && (
          <span className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm select-none">
            +91
          </span>
        )}
        <input
          className={`p-2 ${paddingLeft} w-full border rounded-md ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          placeholder={`Enter ${label}`}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          inputMode={isTel ? "numeric" : undefined}
        />
      </div>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default InputField;
