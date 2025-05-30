import { useState, useRef } from "react";
import { CakeIcon, CalendarDateRangeIcon } from "@heroicons/react/24/outline";
import CustomDatePicker from "@/components/common/UI/CustomDatePicker/CustomDatePicker";
import useOutsideClick from "@/hooks/useOutsideClick";
import { DateOfBirthPickerProps } from "@/types/profile";

const DateOfBirthPicker = ({ dob, setDob }: DateOfBirthPickerProps) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef(null);

  useOutsideClick(datePickerRef, () => setShowDatePicker(false));

  const convertedintoDate = dob != "" ? new Date(dob) : null;
  return (
    <div
      className="input-field-style flex flex-col gap-2 relative"
      ref={datePickerRef}
    >
      <label className="font-medium">Date of Birth</label>
      <div
        className="flex items-center gap-2 border border-gray-300 rounded-md px-2  cursor-pointer"
        onClick={() => setShowDatePicker((prev) => !prev)}
      >
        <CakeIcon className="w-[25px] h-[25px] text-gray-400" />
        <input
          readOnly
          value={
            convertedintoDate ? convertedintoDate.toLocaleDateString() : ""
          }
          placeholder="Select Date"
          className="outline-none bg-transparent w-full border-none focus:ring-0 cursor-pointer"
        />
        <CalendarDateRangeIcon className="calendar-icon w-[30px] h-[30px] text-[var(--skyblue)]" />
      </div>
      {showDatePicker && (
        <div className="absolute top-full  z-20 bg-white shadow-md mt-2 rounded-lg">
          <CustomDatePicker
            selectedDate={convertedintoDate || undefined}
            onSelect={(date) => {
              setDob(date.toISOString());
              setShowDatePicker(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DateOfBirthPicker;
