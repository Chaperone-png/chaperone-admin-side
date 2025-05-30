export const formatProductImages = (
  currentImages: string[],
  productName: string
) => {
  return (
    currentImages?.map((src: string, index: number) => ({
      id: index + 1,
      src,
      alt: `${productName}-Image-${index + 1}`,
    })) || []
  );
};
