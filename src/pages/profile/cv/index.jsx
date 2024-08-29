import ProfileLayout from "../../../components/profile/ProfileLayout";
import React, { useContext } from "react";
import SideMeneCv from "../../../components/profile/cv/SideMenueCv";
import { DarkModeContext } from "../../../context/DarkModeContext";

function Cv() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`text_Dark  ${isDarkMode ? "bg-dark" : ""}`}>
      <ProfileLayout>
        <h2 className="text-gold pt-md-4"> الملف الشخصي</h2>
        <div className="my-5">
          <SideMeneCv />
        </div>
      </ProfileLayout>
    </div>
  );
}

export default Cv;
