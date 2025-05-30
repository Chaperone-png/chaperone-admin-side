"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BestOffer } from "./maali-assets";
import PricingPlanSlider from "./PricingPlansSlider/PricingPlanSlider";
import { PricingPlansProps } from "@/types/MaaliService/components";
import { executeApiCall } from "@/utils/APIResponseHandling";
import { useDispatch } from "react-redux";
import { getAllmaaliServicePlans } from "@/services/apis/admin/servicePlansAPIs";

const PricingPlans = ({
  pricingRef,
  isSubscription,
  setIsSubscription,
}: PricingPlansProps) => {
  const dispatch = useDispatch();

  const [servicePlans, setServicePlans] = useState([]);
  useEffect(() => {
    const plan_type = isSubscription ? "subscription" : "one_time";
    executeApiCall(
      dispatch,
      () => getAllmaaliServicePlans({ plan_type }),
      (data) => {
        const { data: plansData, success } = data;
        if (success) {
          setServicePlans(plansData);
        }
      },
      "Successfully fetched the plans"
    );
  }, [isSubscription]);

  return (
    <div
      ref={pricingRef}
      className="pricing-plans-wrapper mx-auto max-w-7xl responsive-px-15"
    >
      <div className="pricing-plans-header">
        <span className="green-services">
          Green Services That Fit Your Budget
        </span>
        <h2>Pricing Plans</h2>
        <div className="flex items-center gap-4 mb-4 justify-center">
          <span
            className={
              !isSubscription
                ? "text-[var(--textColor)] font-semibold"
                : "text-[var(--progressBarColor)] font-semibold"
            }
          >
            One-Time Plan
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isSubscription}
              onChange={() => setIsSubscription(!isSubscription)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-600 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--skyblue)]" />
          </label>
          <span
            className={
              isSubscription
                ? "text-[var(--textColor)] font-semibold"
                : "text-[var(--progressBarColor)] font-semibold"
            }
          >
            Subscription Plan
          </span>
        </div>
        <Image
          className="mx-auto"
          src={BestOffer}
          alt="BestOffer"
          width={60}
          height={60}
        />
        <span className="best-price-tag">Best of Price</span>
      </div>
      <div className="pricing-plans-slider">
        <PricingPlanSlider servicePlans={servicePlans} />
      </div>
    </div>
  );
};

export default PricingPlans;
