import PlantImg from "@/public/assets/images/profile/orders/img1.png";

export const orderInfo = {
  id: 80797674,
  cartItem: [
    {
      id: 12,
      available_sizes: [
        {
          original_price: 701,
          final_display_price: 601,
          is_offer: true,
          offer_price: 100,
          gst_percent: "18",
          images: [PlantImg.src],
          containers: [
            {
              type: "Plastic",
              additional_price: 0,
              image: PlantImg.src,
            },
          ],
        },
      ],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore`,
      product_name: "Lorem ipsum dolor sit amet",
    }, 
    {
      id: 14,
      available_sizes: [
        {
          original_price: 701,
          final_display_price: 601,
          is_offer: true,
          offer_price: 100,
          gst_percent: "18",
          images: [PlantImg.src],
          colors: [
            {
              type: "Re",
              additional_price: 0,
              image: PlantImg.src,
            },
          ],
        },
      ],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore`,
      product_name: "Lorem ipsum dolor sit amet",
    },
  ],
  deliveryDetails: {
    expectedDate: "2025-05-01T19:00:00Z",
    status: "Out for Delivery",
    deliveryAddress: {
      id: 73654,
      name: "Joe Doe",
      phone: "8958609895",
      email: "joedoe@gmail.com",
      pincode: "8948986",
      city: "XYZ",
      state: "XYZ",
      street: "34 line",
      address: "",
      landmark: "-",
      addressType: "Home",
      isDefault: false,
      alternatePhone: "8958609895",
    },
    amountDetails: {
      totalAmount: 4749,
      discountedValue: 249,
      finalDisplayPrice: 4500,
      additionalDiscount: 3,
      paymentMode: "UPI",
    },
  },
};
