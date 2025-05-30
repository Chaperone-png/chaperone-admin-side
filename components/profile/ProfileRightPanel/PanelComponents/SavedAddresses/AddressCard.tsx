import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Button from "@/components/common/UI/Button";
import UserIcon from "@/public/assets/images/profile/userIcon.svg";
import EmailIcon from "@/public/assets/images/profile/emailIcon.svg";
import ContactIcon from "@/public/assets/images/profile/call.svg";
import { AddressCardProps } from "@/types/profile";
import "./page.scss";
import { getAddressTypeIcon } from "./addressUtil";

const AddressCard = ({ address, onEdit, onDelete }: AddressCardProps) => {
  return (
    <div
      className={`address-card ${
        address.is_default ? "default-address-card" : ""
      }`}
    >
      <div className="address-header">
        <div className={address.is_default ? "default-address" : ""}>
          {address.is_default ? "Default Address" : ""}
        </div>
        <div className="flex gap-1 items-center addressTag">
          <Image
            src={getAddressTypeIcon(address.address_type)}
            width={15}
            height={15}
            alt={`${address.address_type} Address`}
          />
          <span>{address.address_type}</span>
        </div>
      </div>

      <div className="address-body">
        <div className="flex gap-2 items-center iconWDText">
          <Image src={UserIcon} width={24} height={24} alt="UserIcon" />
          <span>{address.name}</span>
        </div>
        <p className="text-[14px]">
          {address.address}, {address.city} {address.state} -{" "}
          {address.postal_code} , {address.country}
        </p>
        <div className="flex gap-2 items-center iconWDTextSm mt-3 mb-1">
          <Image src={ContactIcon} width={20} height={20} alt="ContactIcon" />
          <span>{address.phone}</span>
        </div>
        <div className="flex gap-2 items-center iconWDTextSm">
          <Image src={EmailIcon} width={20} height={20} alt="EmailIcon" />
          <span>{address.email}</span>
        </div>
      </div>

      <div className="address-footer">
        <Button
          onClick={onEdit}
          className="mt-5 max-w-[250px] edit-button"
          content="Edit"
          leftIcon={<PencilSquareIcon className="size-5 text-white" />}
        />
        <Button
          onClick={onDelete}
          className="mt-5 max-w-[250px] remove-button"
          content="Remove"
          leftIcon={<TrashIcon className="size-5 text-white" />}
        />
      </div>
    </div>
  );
};

export default AddressCard;
