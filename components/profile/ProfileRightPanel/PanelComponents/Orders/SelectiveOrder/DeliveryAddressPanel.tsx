import Image from "next/image";
import UserIcon from "@/public/assets/images/profile/userIcon.svg";
import EmailIcon from "@/public/assets/images/profile/emailIcon.svg";
import ContactIcon from "@/public/assets/images/profile/call.svg";

const DeliveryAddressPanel = () => (
  <div className="address-body border-box-ui">
    <div className="flex gap-2 items-center iconWDText">
      <Image src={UserIcon} width={24} height={24} alt="UserIcon" />
      <span>John Liberete</span>
    </div>
    <p className="text-[14px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit... Pin Code :
      122002
    </p>
    <div className="flex gap-2 items-center iconWDTextSm mt-3 mb-1">
      <Image src={ContactIcon} width={20} height={20} alt="ContactIcon" />
      <span>+91 8765278918</span>
    </div>
    <div className="flex gap-2 items-center iconWDTextSm">
      <Image src={EmailIcon} width={20} height={20} alt="EmailIcon" />
      <span>xyz101@gmail.com</span>
    </div>
  </div>
);

export default DeliveryAddressPanel;
