import React from "react";
import UploadDoc from "../form/UploadDoc";

function MainFormStepThree() {
  return (
    <div>
      <UploadDoc
        name="resume_file"
        isRequired
        label={" الرجاء رفع سيرتك الذاتية هنا"}
      />
      <UploadDoc
        name="resume_file"
        isRequired
        label={"ارفع ملف لأهم أعمالك «إن وجد»"}
      />
    </div>
  );
}

export default MainFormStepThree;
