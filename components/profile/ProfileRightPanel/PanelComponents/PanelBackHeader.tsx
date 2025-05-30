import Image from "next/image";
import BackArrow from "@/public/assets/images/profile/returnArrow.svg";

interface PanelBackHeaderProps {
  textSizeClassName: string;
  BackButtonSizing: {
    width: number;
    height: number;
  };
}
const PanelBackHeader: React.FC<PanelBackHeaderProps> = ({
  textSizeClassName,
  BackButtonSizing,
}) => {
  return (
    <h2
      className={`${textSizeClassName} font-semibold flex items-center gap-4`}
    >
      <Image
        src={BackArrow}
        width={BackButtonSizing.width}
        height={BackButtonSizing.height}
        alt="ReturnArrow"
      />
      <span>Order Details</span>
    </h2>
  );
};

export default PanelBackHeader;
