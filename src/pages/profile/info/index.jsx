import InfoData from "../../../components/profile/info/InfoData";
import ProfileLayout from "../../../components/profile/ProfileLayout";
import React, { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";

function UserInfo() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`text_Dark  ${isDarkMode ? "bg-dark" : ""}`}>
      <ProfileLayout>
        <h2 className="text-gold pt-md-4">الملف الشخصي</h2>
        <div className={`tab-content col-md-8  ${isDarkMode ? "bg-dark" : "bg-white"} text_Dark mx-2 rounded-3 my-5 mx-5 profile_content `}>
          <InfoData />
        </div>
      </ProfileLayout>
    </div>
  );
}

export default UserInfo;
