import React from "react";
import BaseInputField from "../form/BaseInputField";
import SelectQualifications from "../form/SelectQualifications";
import TextArea from "../form/TextArea";
import Label from "../form/Label";
import RadioButtonGroup from "../form/RadioButtonGroup";
import SelectSections from "../form/SelectSections";

function MainFormStepTwo() {
  const residencyStatusOptions = [
    { label: "مواطن", value: "option1" },
    { label: "مقيم", value: "option2" },
    { label: "زائر", value: "option3" },
    { label: "أخرى", value: "option4" },
  ];

  const availabilityOptions = [
    { label: "جاهز حالًا", value: "option1" },
    { label: "من أسبوعين إلى أربعة أسابيع", value: "option2" },
    { label: "من أربعة أسابيع إلى ثمانية أسابيع", value: "option3" },
    { label: "أكثر من ثمانية أسابيع", value: "option4" },
  ];

  return (
    <div className="my-">
      <SelectSections label="اختر القسم الذي ترغب بالإنضمام إليه" pl />
      <TextArea label="أخبرنا عن نفسك؟" placeholder="اكتب هنا" />
      <Label>
        حالة إقامتك في السعودية
        <span>{"*"}</span>
      </Label>
      <RadioButtonGroup
        options={residencyStatusOptions}
        name="residencyStatus"
        defaultValue="option1"
      />
      <BaseInputField
        name="name"
        label="الراتب الشهري المتوقع"
        placeholder="4000"
      />
      <Label>
        إذا رشحت لهذا الشاغر، فمتى تستطيع أن تباشر معنا
        <span>{"*"}</span>
      </Label>
      <RadioButtonGroup
        options={availabilityOptions}
        name="availability"
        defaultValue="option1"
      />
    </div>
  );
}

export default MainFormStepTwo;
