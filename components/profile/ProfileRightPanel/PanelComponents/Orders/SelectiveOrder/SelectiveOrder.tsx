"use client";
import { useState } from "react";
import { SelectiveOrderProps } from "@/types/profile";
import OrderHeader from "./OrderHeader";
import OrderItem from "./OrderItem";
import DeliveryAddressPanel from "./DeliveryAddressPanel";
import OrderPricePanel from "./OrderPricePanel";
import InvoiceDownload from "./InvoiceDownload";
import ReviewSection from "./ReviewSection";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const SelectiveOrder: React.FC<SelectiveOrderProps> = ({ orderInfo }) => {
  const [showAddress, setShowAddress] = useState(false);
  const [showOrderPrice, setShowOrderPrice] = useState(false);
  if (!orderInfo) return null;

  return (
    <div className="bg-white rounded-3xl p-5 min-h-[640px] order-detail-wrapper">
      <OrderHeader orderId={orderInfo.id} orderDate="Tue, 4 Feb" />
     
      <div className="grid grid-cols-12 gap-x-14">
        <div className="col-span-12">
          <h3 className="delivery-date text-xl font-semibold mb-4">
            Delivery - 1st May, Tue, 7:00 PM
          </h3>
        </div>

        <div className="col-span-7 flex flex-col gap-4">
          {[...Array(4)].map((_, index) => (
            <OrderItem key={index} />
          ))}
        </div>

        <div className="col-span-5 order-detail-right-panel">
          <div className="mb-6">
            <h4
              className="font-semibold mb-2 cursor-pointer flex justify-between items-center"
              onClick={() => setShowAddress(!showAddress)}
            >
              <span>Delivery Address</span>
              {showAddress ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </h4>
            {!showAddress && <DeliveryAddressPanel />}
          </div>

          <div className="mb-6">
            <h4
              className="font-semibold mb-2 cursor-pointer flex justify-between items-center"
              onClick={() => setShowOrderPrice(!showOrderPrice)}
            >
              <span>Order Price</span>
              {showOrderPrice ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </h4>
            {!showOrderPrice && <OrderPricePanel />}
          </div>

          <InvoiceDownload />
        </div>

        <div className="col-span-12 mt-5">
          <div className="flex gap-2 items-center return-policy-wrapper">
            <h3>Return Window Open/Close</h3>
            <Link href="/">Read Return Policy</Link>
          </div>
        </div>

        <div className="col-span-12 mt-5">
          <ReviewSection />
        </div>
      </div>
    </div>
  );
};

export default SelectiveOrder;
