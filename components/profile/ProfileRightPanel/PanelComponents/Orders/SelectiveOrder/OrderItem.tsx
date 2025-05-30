import Image from "next/image";
import Rating from "@/components/common/UI/Rating";
import PriceDisplay from "@/components/common/Card/CommonComponents/PriceDisplay";
import PlantImg from "@/public/assets/images/profile/orders/img1.png";

const OrderItem = () => (
  <div className="flex gap-4">
    <div className="plant-img-wrapper">
      <Image src={PlantImg} width={150} height={150} alt="PlantImg" />
    </div>
    <div className="Delivery-content">
      <div className="flex justify-between">
        <h4 className="font-semibold text-lg">Lorem ipsum dolor sit amet</h4>
        <Rating rating={4} type="label" size="md" color="text-yellow-400" />
      </div>
      <p className="descriptionTxt">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
      <PriceDisplay
        price={701}
        isInOffer={true}
        offerPercent={30}
        discountedPrice={601}
      />
    </div>
  </div>
);

export default OrderItem;
