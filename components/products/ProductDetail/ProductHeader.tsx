import Image from "next/image";
import Link from "next/link";
import ShareBtn from "@/public/assets/images/product-detail/ShareBtn.svg";
import { ProductHeaderProps } from "@/types/ProductDetail";

const ProductHeader: React.FC<ProductHeaderProps> = ({
  productName,
  productSlug,
}) => (
  <div className="flex justify-between items-center mb-3">
    <h2 className="product-main-title text-3xl font-semibold mt-3">
      {productName}
    </h2>
    <Link href={`/products/${productSlug}/share`}>
      <Image src={ShareBtn} alt="ShareBtn" width={50} height={50} />
    </Link>
  </div>
);

export default ProductHeader;
