import Button from "@/components/Button";
import BaseInputField from "@/components/form/BaseInputField";
import Label from "@/components/form/Label";
import RadioButtonGroup from "@/components/form/RadioButton";
import SelectNationality from "@/components/form/SelectNationality";
import { Form, Formik } from "formik";
import React from "react";
import PhoneInput from "../../form/PhoneInput";

function InfoData() {
  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <div>
            <Label required>الاسم كامل بالعربي</Label>
            <div className="row">
              <div className="col-md-3">
                <BaseInputField
                  placeholder={"الاسم الاول"}
                  name={"first"}
                  required={true}
                />
              </div>
              <div className="col-md-3">
                <BaseInputField placeholder={"الاسم الثاني"} name={"first2"} />
              </div>
              <div className="col-md-3">
                <BaseInputField placeholder={"الاسم الثالث"} name={"first3"} />
              </div>
              <div className="col-md-3">
                <BaseInputField placeholder={"الاسم الاخير"} name={"first4"} />
              </div>
            </div>
          </div>
          <div>
            <Label required>الاسم كامل بالانجليزية</Label>
            <div className="row">
              <div className="col-md-3">
                <BaseInputField placeholder={"الاسم الاخير"} name={"last"} />
              </div>
              <div className="col-md-3">
                <BaseInputField placeholder={"الاسم الثالث"} name={"last2"} />
              </div>
              <div className="col-md-3">
                <BaseInputField placeholder={"الاسم الثاني"} name={"last4"} />
              </div>
              <div className="col-md-3">
                <BaseInputField placeholder={"الاسم الاول"} name={"last5"} />
              </div>
            </div>
          </div>
          <BaseInputField
            placeholder={" البريد الالكتروني"}
            label={" البريد الالكتروني"}
            name={"first"}
            required={true}
          />
          {/* <PhoneInput label={"رقم الجوال"} /> */}
          <PhoneInput label={"رقم الجوال"} required />
          <SelectNationality required label={"الجنسية"} />
          <SelectNationality required label={"دولة الاقامة"} />
          <SelectNationality required label={"المدينة"} />

          <div>
            <Label required>الجنس</Label>
            <div className="row">
              <RadioButtonGroup
                options={[
                  { label: "ذكر", value: "1" },
                  { label: "انثى", value: "2" },
                ]}
              />
            </div>
          </div>
       
          <div className="mt-3 d-flex justify-content-between">
            <Button>حفظ</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
export default InfoData;
