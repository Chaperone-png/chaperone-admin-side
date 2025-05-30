import AddressForm from "@/components/common/UI/AddressForm";
import { AddressModalProps } from "@/types/profile";

const AddressModal = ({
  formData,
  isEditMode,
  user_id,
  onCancel,
  onSubmit,
}: AddressModalProps) => {
  return (
    <div className="popup-overlay fixed inset-0 z-50">
      <div className="popup-content">
        <AddressForm
          formData={formData}
          user_id={user_id}
          onCancel={onCancel}
          onSubmit={onSubmit}
          isEditMode={isEditMode}
        />
      </div>
    </div>
  );
};

export default AddressModal;
