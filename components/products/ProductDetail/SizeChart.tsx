"use client";
import Image from "next/image";
import { useState } from "react";
import SizeChartIcon from "@/public/assets/images/product-detail/size-chart.svg";
import SizeChartModal from "@/components/common/Auth/Modal/SizeChartModal";
import { SizeChartProps } from "@/types/ProductDetail";

const SizeChart: React.FC<SizeChartProps> = ({ productType }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="flex items-center cursor-pointer" onClick={handleOpen}>
        <span className="text-sm font-semibold mr-2">Size Chart</span>
        <Image src={SizeChartIcon} alt="Size Chart" width={58} height={47} />
      </div>
      <div className="sizeChartModal">
        <SizeChartModal
          open={open}
          closeModal={handleClose}
          productType={productType}
        />
      </div>
    </div>
  );
};

export default SizeChart;
