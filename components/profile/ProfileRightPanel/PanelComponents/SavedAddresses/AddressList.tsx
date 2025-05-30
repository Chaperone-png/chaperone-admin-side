import { AddressListProps } from "@/types/profile";
import AddressCard from "./AddressCard";
import { AddressFormData } from "@/types/address";

const AddressList = ({ addresses, onEdit, onDelete }: AddressListProps) => {
  return (
    <div className="grid grid-cols-2 mt-5 gap-4 max-h-[540px] overflow-y-auto">
      {addresses ? (
        addresses.map((address: AddressFormData, index) => (
          <AddressCard
            key={address.id}
            address={address}
            index={index}
            onEdit={() => onEdit(address.id)}
            onDelete={() => onDelete(address.id)}
          />
        ))
      ) : (
        <span>No Saved Addresses</span>
      )}
    </div>
  );
};

export default AddressList;
