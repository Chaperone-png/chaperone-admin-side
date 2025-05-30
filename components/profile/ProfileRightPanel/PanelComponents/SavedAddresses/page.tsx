"use client";

import { useEffect, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "@/components/common/UI/Button";
import AddressModal from "./AddressModal";
import AddressList from "./AddressList";
import { AddressFormData } from "@/types/address";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { executeApiCall } from "@/utils/APIResponseHandling";
import {
  deleteUserAddresses,
  getUserAddresses,
} from "@/services/apis/admin/userAddressAPIs";
import { showToast } from "@/store/slices/toastSlice";

const SavedAddress = () => {
  const dispatch = useDispatch();
  const user_id = useSelector((state: RootState) => state.user.id);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [addresses, setAddresses] = useState<AddressFormData[]>([]);
  const [formData, setFormData] = useState<AddressFormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postal_code: "",
    address_type: "Home",
    is_default: false,
    alternate_phone: "",
    landmark: "",
  });

  useEffect(() => {
    executeApiCall(
      dispatch,
      () => getUserAddresses({ user_id }),
      (data) => {
        setAddresses(data?.data || []);
      },
      "Successfully fetched the User's Addresses."
    );
  }, [user_id, dispatch]);

  const openAddForm = () => {
    setIsFormOpen(true);
    setEditIndex(null);
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      state: "",
      country: "",
      postal_code: "",
      address_type: "Home",
      is_default: false,
      alternate_phone: "",
      landmark: "",
    });
  };

  const openEditForm = async (index: number | undefined) => {
    if (!index) {
      return dispatch(
        showToast({ type: "error", message: "Cannot Update this address." })
      );
    }

    const address =
      addresses.filter((address) => address.id == index)?.[0] || {};
    if (address) {
      setFormData(address);
      setEditIndex(index);
      setIsFormOpen(true);
    }
  };

  const handleFormSubmit = (formData: AddressFormData) => {
    const updated = addresses
      .map((addr) => ({
        ...addr,
        is_default: formData.is_default ? false : addr.is_default,
      }))
      .map((addr) => (addr.id === editIndex ? formData : addr));

    const exists = addresses.some((addr) => addr.id === editIndex);
    const updatedAddresses = exists ? updated : [...updated, formData];

    setAddresses(updatedAddresses);
    setIsFormOpen(false);
    setEditIndex(null);
  };

  const handleAddressDelete = (id?: number) => {
    if (!id) {
      return dispatch(
        showToast({ type: "error", message: "Cannot delete this address." })
      );
    }

    executeApiCall(
      dispatch,
      () => deleteUserAddresses({ id }),
      () => setAddresses(addresses.filter((address) => address.id !== id)),
      "Address deleted successfully."
    );
  };

  return (
    <div
      className={`bg-white rounded-3xl p-5 h-[640px] relative ${
        isFormOpen ? "overlay-blur" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold">Saved Address</h2>
        <Button
          className="common-button max-w-[250px]"
          content="Add New Address"
          leftIcon={<PlusIcon className="size-5 text-white" />}
          onClick={openAddForm}
        />
      </div>

      <AddressList
        addresses={addresses}
        onEdit={openEditForm}
        onDelete={handleAddressDelete}
      />

      {isFormOpen && (
        <AddressModal
          formData={formData}
          user_id={user_id}
          isEditMode={editIndex !== null}
          onCancel={() => {
            setIsFormOpen(false);
            setEditIndex(null);
          }}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default SavedAddress;
