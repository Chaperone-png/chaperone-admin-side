"use client";

import { useState } from "react";
import { MapPinIcon } from "@heroicons/react/20/solid";

const DeliveryPincodeChecker = () => {
  const [inputPincode, setInputPincode] = useState<string>("");
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [deliveryPincode, setDeliveryPincode] = useState<string | null>(null);

  const handleCheckDelivery = () => { };

  return (
    <div className="fastdeliveryform flex flex-col items-start gap-2">
      {!isChecking ? (
        <button
          onClick={() => setIsChecking(true)}
          className="common-button flex items-center gap-1 common-button-icon"
        >
          <MapPinIcon className="fill-none stroke-white size-4" />
          <span>
            {deliveryPincode
              ? `Delivering to: ${deliveryPincode}`
              : "Check Delivery Availability"}
          </span>
        </button>
      ) : (
        <div className="flex flex-row gap-2">
          <input
            type="text"
            value={inputPincode}
            onChange={(e) => setInputPincode(e.target.value)}
            placeholder="Enter your pincode"
            className="border border-gray-300 rounded-full px-3 py-1"

          />
          <button
            onClick={handleCheckDelivery}
            className="common-button"
          >
            Check Availability
          </button>
        </div>
      )}
    </div>
  );
};

export default DeliveryPincodeChecker;
