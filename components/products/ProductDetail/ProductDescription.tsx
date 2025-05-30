import { ProductDescriptionProps } from "@/types/ProductDetail";
import { useState } from "react";

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const words = description.split(" ");
  const isLong = words.length > 20;
  const displayed = showFullDescription
    ? description
    : words.slice(0, 20).join(" ") + (isLong ? "..." : "");

  return (
    <div>
      <h3 className="product-detail-sub-title">Description</h3>
      <p className="text-gray-700">
        {displayed}
        {isLong && (
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="ml-2 text-black-200 font-medium hover:underline"
          >
            {showFullDescription ? "See Less" : "See More"}
          </button>
        )}
      </p>
    </div>
  );
};

export default ProductDescription;
