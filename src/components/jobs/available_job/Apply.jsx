import BaseInputField from "../../../components/form/BaseInputField";
import Label from "../../../components/form/Label";
import { Formik } from "formik";
import React from "react";
import RadioButtonGroup from "../../form/RadioButton";
import UploadDoc from "../../form/UploadDoc";

function Apply() {
  return (
    <div className="p-4">
      <Formik initialValues={{}} onSubmit={() => {}}>
        <div className="row row-cols-md-2">
          {/* <PhoneInput /> */}
          <BaseInputField name={""} label={"الاسم"} placeholder={"الاسم"} />
          <BaseInputField name={""} label={"الايميل"} placeholder={"الايميل"} />
          <div>
            <Label>هل انت مستعد للعمل معنا من الشهر القادم ؟</Label>
            <div className="row">
              <RadioButtonGroup
                options={[
                  { label: "نعم ", value: "1" },
                  { label: "لاء", value: "2" },
                  { label: "ربما", value: "4" },
                  { label: "احيانا", value: "6" },
                ]}
              />
            </div>
          </div>
          <div>
            <Label>الجنس</Label>
            <div className="row">
              <RadioButtonGroup
                options={[
                  { label: "ذكر", value: "3" },
                  { label: "انثى", value: "4" },
                ]}
              />
            </div>
          </div>
          <div>
            <UploadDoc label={"ارفاق صورة شخصية"} name={"profile"} />
          </div>
          <div>
            <UploadDoc label={"ارفاق  ملف الاعمال"} name={"cv"} />
          </div>
        </div>
      </Formik>
    </div>
  );
}

export default Apply;
