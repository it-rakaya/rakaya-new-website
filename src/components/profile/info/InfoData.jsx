import Button from "@/components/Button";
import BaseInputField from "@/components/form/BaseInputField";
import Label from "@/components/form/Label";
import PhoneInputNew from "@/components/form/PhoneInputNew";
import RadioButtonGroup from "@/components/form/RadioButton";
import SelectNationality from "@/components/form/SelectNationality";
import { Form, Formik } from "formik";
import React from "react";

function InfoData() {
  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <div>
            <Label>الاسم كامل بالعربي</Label>
            <div className="row">
              <div className="col-md-3">
                <BaseInputField placeholder={"الاسم الاول"} />
              </div>
              <div className="col-md-3">
                <BaseInputField placeholder={"الاسم الثاني"} />
              </div>
              <div className="col-md-3">
                <BaseInputField placeholder={"الاسم الثالث"} />
              </div>
              <div className="col-md-3">
                <BaseInputField placeholder={"الاسم الاخير"} />
              </div>
            </div>
          </div>
          <div>
            <Label>الاسم كامل بالانجليزية</Label>
            <div className="row">
              <div className="col-md-3">
                <BaseInputField placeholder={"الاسم الاخير"} />
              </div>
              <div className="col-md-3">
                <BaseInputField placeholder={"الاسم الثالث"} />
              </div>
              <div className="col-md-3">
                <BaseInputField placeholder={"الاسم الثاني"} />
              </div>
              <div className="col-md-3">
                <BaseInputField placeholder={"الاسم الاول"} />
              </div>
            </div>
          </div>
          {/* <PhoneInput label={"رقم الجوال"} /> */}
          <PhoneInputNew label={"رقم الهاتف"} />
          <SelectNationality label={"الجنسية"} />
          <SelectNationality label={"دولة الاقامة"} />
          <SelectNationality label={"المدينة"} />

          <div>
            <Label>الجنس</Label>
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
