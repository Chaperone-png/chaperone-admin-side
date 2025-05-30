"use client";

import { useState } from "react";
import OrderCard from "./OrderCard";
import Button from "@/components/common/UI/Button";
import PlantImg1 from "@/public/assets/images/profile/orders/img1.png";
import PlantImg2 from "@/public/assets/images/profile/orders/img2.png";
import { OrderData } from "@/types/profile";
import SelectiveOrder from "./SelectiveOrder/SelectiveOrder";

const ordersArray: OrderData[] = [
  {
    id: "CHAP-1011-2404",
    date: "Tue, 4 Feb",
    status: "pending",
    deliveryTime: "Today, 7:00 PM",
    images: [PlantImg1.src, PlantImg2.src],
    bg: "bg-[var(--skyLight)]",
  },
  {
    id: "CHAP-1011-2405",
    date: "Tue, 4 Feb",
    status: "delivered",
    deliveryTime: "Wed, 6 Feb",
    images: [PlantImg1.src, PlantImg2.src, PlantImg1.src, PlantImg2.src],
    bg: "bg-[var(--grayBG)]",
  },
  {
    id: "CHAP-1011-2406",
    date: "Tue, 4 Feb",
    status: "delivered",
    deliveryTime: "Wed, 6 Feb",
    images: [PlantImg1.src, PlantImg2.src],
    bg: "bg-[var(--grayBG)]",
  },
];

const Orders = () => {
  const [visibleCount, setVisibleCount] = useState(2);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [visibleImages, setVisibleImages] = useState(
    Object.fromEntries(ordersArray.map((order) => [order.id, 3]))
  );

  const handleLoadMore = () => setVisibleCount((prev) => prev + 2);

  const handleShowMoreImages = (orderId: string) => {
    setSelectedOrderId(orderId);
  };

  const ordersToShow = selectedOrderId
    ? ordersArray.filter((order) => order.id === selectedOrderId)
    : ordersArray.slice(0, visibleCount);

  return (
    <>
      {selectedOrderId ? (
        <SelectiveOrder orderInfo={ordersToShow?.[0] || {}} />
      ) : (
        <div className="bg-white rounded-3xl p-5 min-h-[640px]">
          <h2 className="text-3xl font-semibold">{"Orders"}</h2>

          {ordersToShow.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              visibleImages={visibleImages[order.id]}
              onShowMoreImages={handleShowMoreImages}
              onViewDetails={setSelectedOrderId}
              isDetailedView={!!selectedOrderId}
            />
          ))}

          {!selectedOrderId && visibleCount < ordersArray.length && (
            <div className="flex justify-center mt-4">
              <Button
                className="common-button max-w-[150px]"
                content="Load More"
                onClick={handleLoadMore}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Orders;
