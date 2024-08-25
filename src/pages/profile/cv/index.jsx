import ProfileLayout from "../../../components/profile/ProfileLayout";
import React from "react";
import SideMeneCv from "../../../components/profile/cv/SideMenueCv";

function Cv() {
  return (
    <div>
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
