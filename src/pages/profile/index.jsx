import MainDataProfile from "@/components/profile/main/MainDataProfile";
import ProfileLayout from "@/components/profile/ProfileLayout";
import React from "react";

function Profile() {
  return (
    <div>
      <ProfileLayout>
        <h2 className="text-gold pt-md-4">الملف الشخصي</h2>
        <div
          className="tab-content col-md-8  bg-white mx-2 rounded-3 my-5 mx-5 "
          style={{ padding: "30px 120px " }}
        >

         <MainDataProfile/>
        </div>
      </ProfileLayout>
    </div>
  );
}

export default Profile;
