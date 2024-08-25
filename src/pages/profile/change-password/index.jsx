import ProfileLayout from "@/components/profile/ProfileLayout";
import React from "react";
import Main from "../../../components/profile/changePassword/Main";

function ChangePassword() {
  return (
    <div>
      <ProfileLayout>
        <h2 className="text-gold pt-md-4">الملف الشخصي</h2>
        <div className="tab-content col-md-8  bg-white mx-2 rounded-3 my-5 mx-5 profile_content ">
          <Main />
        </div>
      </ProfileLayout>
    </div>
  );
}

export default ChangePassword;
