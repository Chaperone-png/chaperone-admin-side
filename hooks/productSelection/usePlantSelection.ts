import { useState, useEffect, useCallback, useMemo } from "react";
import { AvailableSize, Container } from "@/types/ProductsType/PlantType";
import { dealOfTheDayPlantCardComponentProp } from "@/types/Home/components";
import { CartItem } from "@/types/ReduxSliceType/cart";
import { createCartItem } from "@/helpers/cart";
import { Product } from "@/types/ProductsType/ProductType";

const usePlantSelection = (
  Plant: dealOfTheDayPlantCardComponentProp["Plant"]
) => {
  const { available_sizes: availableSizes } = Plant;

  const [selectedSize, setSelectedSize] = useState<AvailableSize | null>(null);
  const [containerType, setContainerType] = useState<Container | null>(null);

  /** Sets default size and container type when product data changes. */
  const initializeDefaults = useCallback(() => {
    if (!availableSizes?.length) return;
    const defaultSize = availableSizes[0];
    setSelectedSize(defaultSize);

    const defaultContainer =
      defaultSize.containers?.find(
        (container) => container.type === defaultSize.containers[0]?.type
      ) || null;
    setContainerType(defaultContainer);
  }, [availableSizes]);

  useEffect(() => {
    initializeDefaults();
  }, [initializeDefaults]);

  /** Computes the final price dynamically. */
  const finalPrice = useMemo(() => {
    const calcWithGST = (price = 0, gst = 0) => price + (gst / 100) * price;

    return (
      calcWithGST(
        Number(selectedSize?.final_display_price),
        +(Number(selectedSize?.gst_percent) || 0)
      ) +
      calcWithGST(
        Number(containerType?.additional_price),
        +(Number(containerType?.gst_percent) || 0)
      )
    );
  }, [selectedSize, containerType]);

  /** Computes offer details dynamically. */
  const { isInOffer, offerPercent, finalValueWithOffer } = useMemo(
    () => ({
      isInOffer: !!Plant?.discount?.percentage || false,
      offerPercent: Number(Plant?.discount?.percentage) || 0,
      finalValueWithOffer: Math.floor(
        finalPrice * ((100 - (Number(Plant?.discount?.percentage) || 0)) / 100)
      ),
    }),
    [Plant, finalPrice]
  );

  const currentImages: string[] = useMemo(
    () =>
      [containerType?.image, ...(selectedSize?.images ?? [])].filter(
        (img): img is string => Boolean(img)
      ),
    [selectedSize, containerType]
  );

  const createItem = useCallback(() => {
    if (!selectedSize || !containerType) {
      return null;
    }
    const Product = Plant as Product;
    const item: CartItem | null = createCartItem({
      Product,
      selectedSize,
      finalPrice,
      finalValueWithOffer,
      currentImages,
      colorType: undefined,
      containerType,
    });
    return item;
  }, [
    Plant,
    selectedSize,
    containerType,
    finalPrice,
    finalValueWithOffer,
    currentImages,
  ]);

  return {
    selectedSize,
    setSelectedSize,
    containerType,
    setContainerType,
    finalPrice,
    isInOffer,
    offerPercent,
    finalValueWithOffer,
    currentImages,
    createItem,
  };
};

export default usePlantSelection;
