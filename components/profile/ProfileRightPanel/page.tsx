import { ProfileRightPanelProps } from "@/types/profile";
import React from "react";
import MaaliBooking from "./PanelComponents/MaaliBooking/MaaliBooking";
import ProfileInformation from "./PanelComponents/UserProfile/page";
import SavedAddress from "./PanelComponents/SavedAddresses/page";
import Orders from "./PanelComponents/Orders/Orders";
import "./page.scss";

const ProfileRightPanel: React.FC<ProfileRightPanelProps> = ({
  currentSection,
}) => {
  const renderSection = () => {
    switch (currentSection) {
      case "profile":
        return <ProfileInformation />;
      case "orders":
        return <Orders />;
      case "cart":
        return null;
      case "bookings":
        return <MaaliBooking />;
      case "address":
        return <SavedAddress />;
      default:
        return <ProfileInformation />;
    }
  };
  return (
    <div className="col-span-9 rounded-3xl active-panel">{renderSection()}</div>
  );
};

export default ProfileRightPanel;
