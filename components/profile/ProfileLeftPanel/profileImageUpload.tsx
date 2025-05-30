"use client";
import { useRef } from "react";
import Image from "next/image";
import Camera from "@/public/assets/images/camera.svg";
import ProfilePicture from "@/public/assets/images/profile/profileImg.png";
import { ProfileImageUploadProps } from "@/types/profile";
import { executeApiCall } from "@/utils/APIResponseHandling";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfileImage } from "@/services/apis/admin/userAPIs";
import { RootState } from "@/store/store";
import { showToast } from "@/store/slices/toastSlice";

const ProfileImageUpload: React.FC<ProfileImageUploadProps> = ({
  onImageSelect,
  selectedImage,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => state.user);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    try {
      await executeApiCall(
        dispatch,
        () =>
          updateUserProfileImage({
            token: userInfo.token,
            formData: formData,
          }),
        (data) => {
          //temp solution
          const imageUrl = URL.createObjectURL(file);
          onImageSelect(imageUrl);
          // onImageSelect(data.uploadedImageUrl);
        },
        "Successfully updated the profile Image"
      );
    } catch {
      dispatch(
        showToast({ type: "error", message: "Failed to update profile" })
      );
    }
  };

  return (
    <div className="relative text-center">
      <div className="rounded-full overflow-hidden mb-4 w-[220px] h-[220px] mx-auto">
        <Image
          className="w-full h-full object-cover"
          src={selectedImage || ProfilePicture}
          width={220}
          height={220}
          alt="profile"
        />
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="bg-white text-sm px-2 py-1 rounded-full border shadow mx-auto hover:bg-[var(--lightGray)] transition-colors duration-300"
      >
        <div className="flex items-center gap-2">
          <span>Upload Photo</span>
          <Image src={Camera} width={25} height={25} alt="Camera" />
        </div>
      </button>
    </div>
  );
};

export default ProfileImageUpload;
