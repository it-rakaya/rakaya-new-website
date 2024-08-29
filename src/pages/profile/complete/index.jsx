import Main from "../../../components/profile/completeProfile/Main";
import ProfileLayout from "../../../components/profile/ProfileLayout";
import React, { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";

function CompleteProfile() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div  className={`text_Dark  ${isDarkMode ? "bg-dark" : ""}`}>
      <ProfileLayout>
        <h2 className="text-gold pt-md-4">الملف الشخصي</h2>
        <div className="my-5 ">
          <Main/>
        </div>
      </ProfileLayout>
    </div>
  );
}

export default CompleteProfile;
