import { useFormikContext } from "formik";
import React from "react";
import BaseInputField from "../form/BaseInputField";
import Label from "../form/Label";
import RadioButtonGroup from "../form/RadioButtonGroup";
import SelectDepartment from "../form/SelectDepartment";
import TextArea from "../form/TextArea";

function MainFormStepTwo() {
  const { setFieldValue } = useFormikContext(); 
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
  const handleRadioButtonChange = (name, value) => {
    setFieldValue(name, value);
  };

  return (
    <div className="my-">
      <SelectDepartment label="اختر القسم الذي ترغب بالإنضمام إليه"  required/>
      <TextArea
        label="أخبرنا عن نفسك؟"
        placeholder="اكتب هنا"
        name={"self_description"}
        required
      />

      <Label>
        حالة إقامتك في السعودية
        <span className="text-danger mx-1">{"*"}</span>
      </Label>
      <RadioButtonGroup
        options={residencyStatusOptions}
        name="resident_status"
        defaultValue="citizen"
        onChange={(e) => handleRadioButtonChange('resident_status', e.target.value)}

      />
      <BaseInputField
        name="salary_expectation"
        label="الراتب الشهري المتوقع"
        placeholder="4000"
        type='num'
        required
        
      />
      <Label>
        إذا رشحت لهذا الشاغر، فمتى تستطيع أن تباشر معنا
        <span className="text-danger mx-1">{"*"}</span>
      </Label>
      <RadioButtonGroup
        options={availabilityOptions}
        name="availability_to_start"
        defaultValue="now"
        onChange={(e) => handleRadioButtonChange('availability_to_start', e.target.value)}

      />
    </div>
  );
}

export default MainFormStepTwo;
