import { CreateCartItemProps } from "@/types/common";

export const createCartItem = ({
  Product,
  selectedSize,
  finalPrice,
  finalValueWithOffer,
  currentImages,
  colorType,
  containerType,
}: CreateCartItemProps) => {
  if (!selectedSize) return null;

  return {
    id: Product.id,
    nursery_id: Product.nursery_id,
    product_id:
      Product?.productType == "plant"
        ? Product?.plant_id
        : Product?.potPlanter_id,
    product_name:
      Product?.productType == "plant"
        ? Product?.plant_name
        : Product?.potPlanter_name,
    description: Product.description,
    category: Product.category,
    status: Product.status,
    stock: Product.stock,
    quantity: 1,
    original_price: selectedSize.original_price,
    final_display_price: finalPrice,
    offer_price: finalValueWithOffer,
    size: selectedSize.size,
    weight: selectedSize.weight,
    colorInfo: colorType ?? undefined,
    containerInfo: containerType ?? undefined,
    images: currentImages,
    tags: Product.tags,
    discount: {
      percentage: Product.discount?.percentage || 0,
      valid_till: Product.discount?.valid_till || "",
    },
    shipping_details: {
      estimated_delivery: Product.shipping_details?.estimated_delivery || "",
      return_policy: Product.shipping_details?.return_policy || "",
    },
    productType: Product?.productType,
    rating: {
      average_rating: Product.rating?.average_rating || 0,
      total_reviews: Product.rating?.total_reviews || 0,
    },
    faqs: Product.faqs || [],
    frequently_bought_together: Product.frequently_bought_together || [],
    addedAt: new Date().toISOString(),
  };
};
