import React from "react";
import BaseInputField from "../form/BaseInputField";
import SelectQualifications from "../form/SelectQualifications";
import TextArea from "../form/TextArea";
import Label from "../form/Label";
import RadioButtonGroup from "../form/RadioButtonGroup";
import SelectSections from "../form/SelectDepartment";
import SelectDepartment from "../form/SelectDepartment";

function MainFormStepTwo() {
  const residencyStatusOptions = [
    { label: "مواطن", value: "citizen" },
    { label: "مقيم", value: "resident" },
    { label: "زائر", value: "visitor" },
    { label: "أخرى", value: "other" },
  ];

  const availabilityOptions = [
    { label: "جاهز حالًا", value: "now" },
    { label: "من أسبوعين إلى أربعة أسابيع", value: "two_to_four_weeks " },
    { label: "من أربعة أسابيع إلى ثمانية أسابيع", value: "four_to_eight_weeks " },
    { label: "أكثر من ثمانية أسابيع", value: "more_than_eight_weeks" },
  ];

  return (
    <div className="my-">
      <SelectDepartment label="اختر القسم الذي ترغب بالإنضمام إليه" />
      <TextArea
        label="أخبرنا عن نفسك؟"
        placeholder="اكتب هنا"
        name={"self_description"}
      />

      <Label>
        حالة إقامتك في السعودية
        <span>{"*"}</span>
      </Label>
      <RadioButtonGroup
        options={residencyStatusOptions}
        name="resident_status"
        defaultValue="option1"
      />
      <BaseInputField
        name="salary_expectation"
        label="الراتب الشهري المتوقع"
        placeholder="4000"
      />
      <Label>
        إذا رشحت لهذا الشاغر، فمتى تستطيع أن تباشر معنا
        <span>{"*"}</span>
      </Label>
      <RadioButtonGroup
        options={availabilityOptions}
        name="availability_to_start"
        defaultValue="option1"
      />
    </div>
  );
}

export default MainFormStepTwo;
