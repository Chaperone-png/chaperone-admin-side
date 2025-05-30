"use client";
import { useRef, useState } from "react";
import MaaliBanner from "./MaaliBanner";
import OffersSection from "./OfferSection";
import WhyChooseUs from "./WhyChooseUs";
import PricingPlans from "./PricingPlans";
import HowItWorks from "./HowItsWork";
import FaqSection from "./FaqSection";
import "./page.scss";

const MaaliService = () => {
  const [isSubscription, setIsSubscription] = useState(false);
  const pricingRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <MaaliBanner
        scrollToPricing={() =>
          pricingRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <OffersSection />
      <WhyChooseUs />
      <PricingPlans
        pricingRef={pricingRef}
        isSubscription={isSubscription}
        setIsSubscription={setIsSubscription}
      />
      <HowItWorks />
      <FaqSection />
    </div>
  );
};

export default MaaliService;
