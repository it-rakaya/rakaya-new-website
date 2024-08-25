import Main from "@/components/profile/completeProfile/Main";
import ProfileLayout from "@/components/profile/ProfileLayout";
import React from "react";

function CompleteProfile() {
  return (
    <div>
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
