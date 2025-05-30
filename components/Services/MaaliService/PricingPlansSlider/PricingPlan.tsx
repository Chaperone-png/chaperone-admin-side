import Button from "@/components/common/UI/Button";
import {
  FeatureItems,
  FreebieItems,
  pricingPlanProps,
} from "@/types/MaaliService/components";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

const PricingPlan: React.FC<pricingPlanProps> = ({
  planDetails,
  slideClass,
}) => {
  const router = useRouter();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const { finalAmount, featureList, freebiesList } = useMemo(() => {
    const total_amount = parseFloat(planDetails.final_display_price);
    const gstValue =
      total_amount * (parseFloat(planDetails.gst_percent) * 0.01);
    const finalAmount = total_amount + gstValue;

    const featureList: FeatureItems[] =
      typeof planDetails.features === "string"
        ? JSON.parse(planDetails.features)
        : [];

    const freebiesList: FreebieItems[] =
      typeof planDetails.freebies === "string"
        ? JSON.parse(planDetails.freebies)
        : [];

    return { finalAmount, featureList, freebiesList };
  }, [planDetails]);

  const descriptionWords = planDetails.plan_description?.split(" ") || [];
  const shouldTruncate = descriptionWords.length > 30;
  const displayedDescription = showFullDescription
    ? planDetails.plan_description
    : descriptionWords.slice(0, 30).join(" ") + (shouldTruncate ? "..." : "");

  const redirectionToUrl = (plan_type: string) => {
    router.push(`/services/maali-service/create-booking?planType=${plan_type}`);
  };

  return (
    <div className={`pricing-card ${slideClass}`}>
      <p className="descriptionText font-bold">{planDetails.plan_name}</p>

      <h3 className="priceAmountTxt">₹{finalAmount.toFixed(2)}</h3>

      <p className="descriptionText">
        {displayedDescription}
        {shouldTruncate && (
          <button
            onClick={() => setShowFullDescription((prev) => !prev)}
            className="text-green-600 underline ml-1"
          >
            {showFullDescription ? "Show less" : "Show more"}
          </button>
        )}
      </p>

      <Button
        onClick={() => redirectionToUrl(planDetails.plan_type)}
        className="common-button"
        content="Get Started"
      />

      <div className="flex items-center gap-4">
        <div className="name-location">
          <ul className="list-disc list-inside">
            {featureList.map((item, index) => (
              <li key={index} className="mb-2 reviewText mt-2">
                {item.title}
              </li>
            ))}

            {freebiesList.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold text-green-700">
                  Freebies Included:
                </h4>
                <ul className="list-disc list-inside">
                  {freebiesList.map((freebie, index) => (
                    <li key={index} className="mt-1 reviewText">
                      {freebie.item} (x{freebie.quantity})
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
