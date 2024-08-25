import AlertIcon from "@/components/icons/AlertIcon";
import MainDataProfile from "@/components/profile/main/MainDataProfile";
import ProfileLayout from "@/components/profile/ProfileLayout";
import StatusCompleteProfile from "@/components/StatusCompleteProfile";
import React from "react";
import { GoAlert } from "react-icons/go";

function Profile() {
  return (
    <div>
      <ProfileLayout>
        <h2 className="text-gold pt-md-4">الملف الشخصي</h2>
        <div
          className="tab-content col-md-8  bg-white mx-2 rounded-4 mx-5  p-3"
          // style={{ padding: "30px 120px " }}
        >
          <div
            className="d-flex align-items-center gap-3 my-3"
            style={{
              margin: "0 13px",
            }}
          >
            <GoAlert
              className="fs-2 text-danger"
              style={{ width: "22px", height: "22px" }}
            />
            <div>
              <p className="m-0 text-danger">
                الرجاء تعبئة الاقسام المطلوبة لتتمكن من التقديم على الوظائف
              </p>
            </div>
          </div>
          <MainDataProfile />
          <StatusCompleteProfile />
        </div>
      </ProfileLayout>
    </div>
  );
}

export default Profile;
