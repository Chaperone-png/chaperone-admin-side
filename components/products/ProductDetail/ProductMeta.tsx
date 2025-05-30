import Rating from "@/components/common/UI/Rating";
import { ProductMetaProps } from "@/types/ProductDetail";

const ProductMeta: React.FC<ProductMetaProps> = ({ soldQuantity, rating }) => (
  <div className="flex justify-between items-center gap-4">
    <h3 className="text-sm font-semibold text-gray-600">{soldQuantity} Sold</h3>
    <Rating
      rating={Number(rating)}
      type="label"
      size="md"
      color="text-yellow-400"
    />
  </div>
);

export default ProductMeta;
