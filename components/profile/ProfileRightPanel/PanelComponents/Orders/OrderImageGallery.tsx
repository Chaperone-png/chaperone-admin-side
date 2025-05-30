"use client";

import Image from "next/image";
import Button from "@/components/common/UI/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import { OrderImageGalleryProps } from "@/types/profile";

const OrderImageGallery = ({
  images,
  visibleCount,
  onShowMore,
}: OrderImageGalleryProps) => {
  const imagesToShow = images.slice(0, visibleCount);
  const hasMoreImages = visibleCount < images.length;
  const remaining = images.length - visibleCount;

  return (
    <div className="flex gap-2 flex-wrap items-center">
      {imagesToShow.map((img: any, i: number) => (
        <div key={i}>
          <Image src={img} width={80} height={80} alt="Plant" />
        </div>
      ))}
      {hasMoreImages && (
        <Button
          onClick={onShowMore}
          className="w-[80px] h-[80px] bg-[rgba(0,0,0,0.5)] text-white text-[12px] rounded-md flex flex-col items-center justify-center"
          content={`${remaining} more`}
          leftIcon={<PlusIcon className="w-5 h-5 text-white mb-1" />}
        />
      )}
    </div>
  );
};

export default OrderImageGallery;
