import React from "react";
import { GoAlert } from "react-icons/go";
import { IoIosInformationCircle } from "react-icons/io";

function StatusCompleteProfile({ mainProfile , isLoading }) {
  const profileData = mainProfile?.data?.candidate;

  return (
    <div>
      <div className=" rounded-4 mt-4  ">
        <div
          className="progress "
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow={profileData?.profile_completion_percentage}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{
            height: "1.5rem",
          }}
        >
          <div
            className="progress-bar bg-primary"
            style={{ width: `${profileData?.profile_completion_percentage}` }}
          >
            {profileData?.profile_completion_percentage}
          </div>
        </div>
        <div className="d-flex align-items-center gap-2 my-3">
          {/* <GoAlert className="fs-2 text-danger" /> */}
          <IoIosInformationCircle
            className="fs-5 "
            style={{
              color: "#80B3F0",
              width: "22px",
              height: "22px",
            }}
          />

          <div>
            <p
              className="m-0"
              style={{
                color: "#80B3F0",
              }}
            >
              مستوى التقدم
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusCompleteProfile;
