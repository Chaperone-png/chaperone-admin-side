"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import "./page.scss";
import loaderImg from "@/public/assets/images/website-loader.gif";
import Image from "next/image";
const GlobalLoader: React.FC = () => {
  const { isLoading } = useSelector((state: RootState) => state.loader);

  if (!isLoading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader">
        <Image alt="loader-img" src={loaderImg} height={200} width={200} />
      </div>
    </div>
  );
};

export default GlobalLoader;
