"use client";
import { useState } from "react";
import ProfileLeftPanel from "./ProfileLeftPanel/page";
import ProfileRightPanel from "./ProfileRightPanel/page";
import "./profile.scss";

const ProfileView = () => {
  const [currentSection, setCurrentSection] = useState("profile");

  return (
    <div className="bg-[var(--gray)] py-12  mb-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            {" "}
            <ProfileLeftPanel
              currentSection={currentSection}
              onSectionChange={setCurrentSection}
            />
          </div>
          <ProfileRightPanel currentSection={currentSection} />
        </div>
      </div>
    </div>
  );
};
export default ProfileView;
