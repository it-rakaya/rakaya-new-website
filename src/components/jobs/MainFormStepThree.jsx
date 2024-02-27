import React from "react";
import UploadDoc from "../form/UploadDoc";

function MainFormStepThree() {
  return (
    <div>
      <UploadDoc name="resume_file" isRequired />
    </div>
  );
}

export default MainFormStepThree;
