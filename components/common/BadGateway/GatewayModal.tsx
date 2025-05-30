"use client";

import { useEffect, useState } from "react";
import { MAX_RETRIES } from "@/configs/constants/public";
import { BadGatewayModalProps } from "@/types/Home/components";
import Image from "next/image";
import BadGatewayImg from "@/public/assets/images/errors/bad-gateway.svg";

const BadGatewayModal = ({ initialDown }: BadGatewayModalProps) => {
  const [isDown, setIsDown] = useState(initialDown);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (retryCount >= MAX_RETRIES) return;

    const interval = setInterval(() => {
      setRetryCount((prev) => prev + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, [retryCount]);

  if (!isDown) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <Image
          className="max-w-full"
          alt="loader-img"
          src={BadGatewayImg}
          height={550}
          width={550}
        />
        <h2 className="text-xl font-semibold text-red-600 mt-4">
          Bad Gateway (502)
        </h2>
        <p className="mt-1">
          Our servers are temporarily unavailable. Please try again later.
        </p>
      </div>
    </div>
  );
};

export default BadGatewayModal;
