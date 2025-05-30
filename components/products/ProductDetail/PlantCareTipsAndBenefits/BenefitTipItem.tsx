import { useEffect, useRef, useState } from "react";
import { HighlightItemProps } from "@/types/ProductDetail";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const BenefitTipItem: React.FC<HighlightItemProps> = ({
  imageSrc,
  title,
  bgColor,
  borderColor,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`border-2 px-5 py-3 rounded-xl w-full transition-colors duration-300 
      ${
        isOpen
          ? `${bgColor ?? "bg-indigo-100"} ${
              borderColor ?? "border-indigo-100"
            }`
          : "bg-white border-gray-200"
      }`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="image-toggle flex gap-4 items-center cursor-pointer">
        <div className="rounded-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={title || "Benefits Tips Image"}
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <h3>{title}</h3>
          <span className="cursor-pointer toggle-arrow">
            {" "}
            {isOpen ? (
              <ChevronDownIcon className="w-5 h-5" />
            ) : (
              <ChevronUpIcon className="w-5 h-5" />
            )}
          </span>
        </div>
      </div>

      {isOpen && <div className="discription mt-2">{description}</div>}
    </div>
  );
};

export default BenefitTipItem;
