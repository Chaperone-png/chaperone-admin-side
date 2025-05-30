// components/profile/ReviewSection.tsx
import Rating from "@/components/common/UI/Rating";
import Button from "@/components/common/UI/Button";

const ReviewSection = () => (
  <div className="drop-review-wrapper">
    <label htmlFor="drop-review" className="drop-review-label">
      Drop Your Review
    </label>
    <input type="text" id="drop-review" className="drop-review-field" />
    <span className="font-semibold mb-3 mt-5 raiting-title">
      Rate Your Product:
    </span>
    <div className="mx-auto">
      <Rating rating={4} type="stars" size="lg" color="text-yellow-400" />
    </div>
    <Button
      className="common-button mt-5 max-w-[250px] mx-auto"
      content="Submit"
    />
  </div>
);

export default ReviewSection;
