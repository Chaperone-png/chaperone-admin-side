"use client";

const steps = [
  {
    title: "Choose Your Plan",
    description: "Select from one-time or subscription-based service packages.",
  },
  {
    title: "Schedule a Visit",
    description: "Pick a date and time that works best for you.",
  },
  {
    title: "We Nurture Your Garden",
    description:
      "Our experts arrive with tools and care to transform your space.",
  },
  {
    title: "Relax & Enjoy",
    description:
      "Admire your healthy, thriving plants without lifting a finger.",
  },
];

const HowItWorks = () => {
  return (
    <div className="how-It-Works mx-auto max-w-7xl responsive-px-15">
      <h2>How it Works</h2>
      <div className="how-it-Works-Steps">
        {steps.map((step, index) => (
          <div key={index} className="step-list">
            <div className="step-number">{index + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
