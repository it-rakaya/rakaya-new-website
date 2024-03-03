import React from "react";
import UploadDoc from "../form/UploadDoc";

function MainFormStepThree() {
  return (
    <div>
      <UploadDoc
        name="candidate_cv"
        isRequired
        label={" الرجاء رفع سيرتك الذاتية هنا"}
      />
      <UploadDoc
        name="candidate_portfolio"
        label={"ارفع ملف لأهم أعمالك «إن وجد»"}
      />
    </div>
  );
}

export default MainFormStepThree;
