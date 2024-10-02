import React from "react";
import Label from "../../form/Label";
import BaseInputField from "../../form/BaseInputField";
import PhoneInput from "../../form/PhoneInput";
import SelectNationality from "../../form/SelectNationality";
import SelectCities from "../../form/SelectCities";
import RadioButtonGroup from "../../form/RadioButton";
import UploadDoc from "../../form/UploadDoc";
import { useFormikContext } from "formik";

function MainData() {
  const { values, setFieldValue } = useFormikContext();
  const handleRadioButtonChange = (name, value) => {
    setFieldValue(name, value);
  };

  return (
    <div>
      <div>
        <Label required>الاسم كامل بالعربي</Label>
        <div className="row">
          <div className="col-md-3">
            <BaseInputField
              placeholder={"الاسم الاول"}
              name={"f_name_ar"}
              required={true}
            />
          </div>
          <div className="col-md-3">
            <BaseInputField placeholder={"الاسم الثاني"} name={"s_name_ar"} />
          </div>
          <div className="col-md-3">
            <BaseInputField placeholder={"الاسم الثالث"} name={"t_name_ar"} />
          </div>
          <div className="col-md-3">
            <BaseInputField placeholder={"الاسم الاخير"} name={"l_name_ar"} />
          </div>
        </div>
      </div>
      <div>
        <Label required>الاسم كامل بالانجليزية</Label>
        <div className="row">
          <div className="col-md-3">
            <BaseInputField placeholder={"الاسم الاخير"} name={"l_name_en"} />
          </div>
          <div className="col-md-3">
            <BaseInputField placeholder={"الاسم الثالث"} name={"t_name_en"} />
          </div>
          <div className="col-md-3">
            <BaseInputField placeholder={"الاسم الثاني"} name={"s_name_en"} />
          </div>
          <div className="col-md-3">
            <BaseInputField placeholder={"الاسم الاول"} name={"f_name_en"} />
          </div>
        </div>
      </div>
      <BaseInputField
        placeholder={" البريد الالكتروني"}
        label={" البريد الالكتروني"}
        name={"email"}
        required={true}
      />
      <PhoneInput label={"رقم الجوال"} required />
      <SelectNationality required label={"الجنسية"} name={"nationality_id"} />
      <SelectNationality
        required
        label={"دولة الاقامة"}
        name={"country_of_residence"}
      />
      <SelectCities required label={"المدينة"} name="city" />

      <div>
        <Label required>الجنس</Label>
        <div className="row">
          <RadioButtonGroup
            options={[
              { label: "ذكر", value: "Male" },
              { label: "انثى", value: "Female" },
            ]}
            name="gender"
            onChange={(e) => handleRadioButtonChange("gender", e)}
          />
        </div>
      </div>

      <UploadDoc label={"الصورة الشخصية"} name={"profile_attachment"} />
      <UploadDoc label={" السيرة الذاتية"} name={"cv_attachment"} />
    </div>
  );
}

export default MainData;
