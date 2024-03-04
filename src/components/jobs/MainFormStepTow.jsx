import { useFormikContext } from "formik";
import React, { useEffect } from "react";
import BaseInputField from "../form/BaseInputField";
import Label from "../form/Label";
import RadioButtonGroup from "../form/RadioButtonGroup";
import SelectDepartment from "../form/SelectDepartment";
import TextArea from "../form/TextArea";

function MainFormStepTwo() {
  const { setFieldValue, values } = useFormikContext();
  const availabilityOptions = [
    { label: "جاهز حالًا", value: "now" },
    { label: "من أسبوعين إلى أربعة أسابيع", value: "two_to_four_weeks" },
    {
      label: "من أربعة أسابيع إلى ثمانية أسابيع",
      value: "four_to_eight_weeks ",
    },
    { label: "أكثر من ثمانية أسابيع", value: "more_than_eight_weeks" },
  ];
  const jobsOptions = [
    {
      label: "دوام كامل",
      value: "full_time",
    },
    {
      label: "دوام جزئي",
      value: "part_time",
    },
    {
      label: "عن بعد",
      value: "remotely",
    },
    {
      label: "دوام مرن",
      value: "hybrid",
    },
    {
      label: "تدريب تعاوني /  تدريب صيفي",
      value: "training",
    },
  ];

  const handleRadioButtonChange = (name, value) => {
    setFieldValue(name, value);
  };
  useEffect(() => {
    if (values.job_category == "training") {
      setFieldValue("salary_expectation", 0);
      setFieldValue("availability_to_start", "now");
    } else {
      setFieldValue("salary_expectation", "");
      setFieldValue("availability_to_start", "");
    }
  }, [values.job_category, setFieldValue]);

  return (
    <div className="my-">
      <SelectDepartment label="اختر القسم الذي ترغب بالإنضمام إليه" required />
      <TextArea
        label="أخبرنا عن نفسك؟"
        placeholder="اكتب هنا"
        name={"self_description"}
        required
      />

      <Label>
        نوع الوظيفة
        <span className="text-danger mx-1">{"*"}</span>
      </Label>
      <RadioButtonGroup
        options={jobsOptions}
        name="job_category"
        defaultValue=""
        onChange={(e) =>
          handleRadioButtonChange("job_category", e.target.value)
        }
      />
      {values?.job_category == "training" ? (
        ""
      ) : (
        <>
          <BaseInputField
            name="salary_expectation"
            label="الراتب الشهري المتوقع"
            placeholder="4000 SAR"
            type="num"
            required
          />
          <Label>
            إذا رشحت لهذا الشاغر، فمتى تستطيع أن تباشر معنا
            <span className="text-danger mx-1">{"*"}</span>
          </Label>
          <RadioButtonGroup
            options={availabilityOptions}
            name="availability_to_start"
            defaultValue=""
            onChange={(e) =>
              handleRadioButtonChange("availability_to_start", e.target.value)
            }
          />
        </>
      )}
    </div>
  );
}

export default MainFormStepTwo;
