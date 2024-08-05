import Container from "@/components/Container";
import SideMeneCv from "@/components/profile/cv/SideMenueCv";
import ProfileLayout from "@/components/profile/ProfileLayout";
import React from "react";

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
