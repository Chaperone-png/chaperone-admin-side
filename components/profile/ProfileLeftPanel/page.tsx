"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openCartDrawer } from "@/store/slices/cartSlice";
import ProfileImageUpload from "./profileImageUpload";
import UserInfo from "./UserInfo";
import NavigationList from "./NavigationList";
import { ProfileLeftPanelProps } from "@/types/profile";
import "./page.scss";
import { RootState } from "@/store/store";

const ProfileLeftPanel: React.FC<ProfileLeftPanelProps> = ({
  onSectionChange,
  currentSection,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => state.user);

  const handleSectionClick = (value: string) => {
    onSectionChange(value);
    if (value === "cart") {
      dispatch(openCartDrawer(true));
    }
  };

  const badgeLevel: "Sprout Starter" | "Budding Enthusiast" | "Plant Prodigy" =
    "Sprout Starter";

  return (
    <div className="bg-white rounded-3xl p-5 profile-section">
      <ProfileImageUpload
        selectedImage={selectedImage}
        onImageSelect={setSelectedImage}
      />
      <UserInfo name={userInfo?.name} badgeLevel={badgeLevel} />
      <NavigationList
        currentSection={currentSection}
        onSectionClick={handleSectionClick}
      />
    </div>
  );
};

export default ProfileLeftPanel;
