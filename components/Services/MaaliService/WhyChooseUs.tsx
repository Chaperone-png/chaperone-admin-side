import React from "react";
import Button from "@/components/common/UI/Button";

const reasons = [
  {
    title: "Reliable Service",
    description: "We pride ourselves on punctuality and consistency.",
  },
  {
    title: "Affordable Pricing",
    description: "Our competitive rates offer value without compromise.",
  },
  {
    title: "Eco-Friendly Practices",
    description: "Sustainable gardening methods for a better environment.",
  },
];

const WhyChooseUs = () => (
  <div className="why-choose-us">
    <div className="why-choose-us-content mx-auto max-w-7xl responsive-px-15">
      <div className="inner-why-choose-us">
        <small>Ready to transform your garden into a lush paradise?</small>
        <h2>
          Why <span>Choose Chaperone ?</span>
        </h2>

        {reasons.map(({ title, description }, index) => (
          <p key={index}>
            <span>{title}:</span> {description}
          </p>
        ))}

        <Button
          className="common-button mt-5 max-w-[150px]"
          content="Read More"
        />
      </div>
    </div>
  </div>
);

export default WhyChooseUs;
