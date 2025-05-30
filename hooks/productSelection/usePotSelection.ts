import { useState, useEffect, useCallback, useMemo } from "react";
import {
  PotPlanterAvailableSize,
  Color,
  PotPlanterDetailedProps,
} from "@/types/ProductsType/PotPlanterType";
import { Product } from "@/types/ProductsType/ProductType";
import { CartItem } from "@/types/ReduxSliceType/cart";
import { createCartItem } from "@/helpers/cart";

const usePotSelection = (potPlanter: PotPlanterDetailedProps["potPlanter"]) => {
  const { available_sizes: availableSizes } = potPlanter;

  const [selectedSize, setSelectedSize] =
    useState<PotPlanterAvailableSize | null>(null);
  const [colorType, setColorType] = useState<Color | null>(null);

  /**
   * Sets default size and color when product data changes.
   */
  const initializeDefaults = useCallback((): void => {
    if (!availableSizes?.length) return;

    const defaultSize = availableSizes[0];
    setSelectedSize(defaultSize);

    const defaultColor =
      defaultSize.colors?.find(
        (color) => color.title === defaultSize.colors?.[0]?.title
      ) || null;

    setColorType(defaultColor);
  }, [availableSizes]);

  useEffect(() => {
    initializeDefaults();
  }, [initializeDefaults]);

  /**
   * Computes the final price dynamically.
   */
  const finalPrice = useMemo(() => {
    const calcWithGST = (price = 0, gst = 0) => price + (gst / 100) * price;

    return calcWithGST(
      Number(selectedSize?.final_display_price),
      +(Number(selectedSize?.gst_percent) || 0)
    );
  }, [selectedSize]);

  /**
   * Calculates offer details dynamically, applying discounts if available.
   */
  const { isInOffer, offerPercent, finalValueWithOffer } = useMemo(
    () => ({
      isInOffer: !!potPlanter?.discount?.percentage || false,
      offerPercent: Number(potPlanter?.discount?.percentage) || 0,
      finalValueWithOffer: Math.floor(
        finalPrice *
          ((100 - (Number(potPlanter?.discount?.percentage) || 0)) / 100)
      ),
    }),
    [potPlanter, finalPrice]
  );

  /**
   * Computes the images dynamically, ensuring no `undefined` values.
   */
  const currentImages: string[] = useMemo(
    () =>
      [colorType?.image, ...(selectedSize?.images ?? [])].filter(
        (img): img is string => Boolean(img)
      ),
    [selectedSize, colorType]
  );

  const createItem = useCallback(() => {
    if (!selectedSize || !colorType) {
      return null;
    }
    const Product = potPlanter as Product;
    const item: CartItem | null = createCartItem({
      Product,
      selectedSize,
      finalPrice,
      finalValueWithOffer,
      currentImages,
      colorType,
      containerType: undefined,
    });
    return item;
  }, [
    potPlanter,
    selectedSize,
    colorType,
    finalPrice,
    finalValueWithOffer,
    currentImages,
  ]);

  return {
    selectedSize,
    setSelectedSize,
    colorType,
    setColorType,
    finalPrice,
    isInOffer,
    offerPercent,
    finalValueWithOffer,
    currentImages,
    createItem,
  };
};

export default usePotSelection;
