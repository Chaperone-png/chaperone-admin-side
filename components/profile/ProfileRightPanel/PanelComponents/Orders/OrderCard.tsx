"use client";

import Button from "@/components/common/UI/Button";
import OrderImageGallery from "./OrderImageGallery";
import { OrderCardProps } from "@/types/profile";

const OrderCard = ({
  order,
  visibleImages,
  onShowMoreImages,
  onViewDetails,
  isDetailedView,
}: OrderCardProps) => {
  return (
    <div key={order.id} className="orders-list my-6">
      <div className="flex justify-between items-center">
        <div>
          <span className="font-semibold">Order ID:</span> {order.id}
        </div>
        <div>{order.date}</div>
      </div>
      <div
        className={`${order.bg} p-4 mt-2 rounded-md order-card-wrapper ${
          order.status === "delivered" ? "order-delivered" : ""
        }`}
      >
        <div className="flex flex-col">
          <span
            className={
              order.status === "delivered"
                ? "status-delivered"
                : "status-delivery"
            }
          >
            {order.status === "delivered" ? "Delivered" : "Delivery By"}
          </span>
          <span className="text-[16px]">{order.deliveryTime}</span>
        </div>
        <div className="flex justify-between items-end mt-3">
          <OrderImageGallery
            images={order.images}
            visibleCount={visibleImages}
            onShowMore={() => onShowMoreImages(order.id)}
          />
          <Button
            className="common-button max-w-[150px]"
            content={isDetailedView ? "Back to Orders" : "View Details"}
            onClick={() => onViewDetails(isDetailedView ? null : order.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
