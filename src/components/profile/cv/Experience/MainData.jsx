import Button from "@/components/Button";
import BaseInputField from "@/components/form/BaseInputField";
import DatePickerComp from "@/components/form/DatePickerComp";
import SelectJobType from "@/components/form/SelectJobType";
import TextArea from "@/components/form/TextArea";
import { Form, Formik } from "formik";
import React from "react";

function MainData() {
  const placeOption = [
    { label: "داخل المملكة", value: "1" },
    { label: "خارج المملكة", value: "2" },
  ];
  const placeOption2 = [
    { label: "حكومية", value: "3" },
    { label: "خاصة", value: "4" },
    { label: "شبه حكومي", value: "5" },
    { label: "غير ربحي", value: "6" },
  ];

  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <BaseInputField label={"جهة العمل"} placeholder={"جهة العمل"} />
          <BaseInputField
            label={" المسمى الوظيفي"}
            placeholder={" المسمى الوظيفي"}
          />

          <SelectJobType label={"نوع الوظيفة"} />
          {/* <SelectJobType label={"نوع المكان"} /> */}


          <DatePickerComp label={"بداية الفترة"} />
          <div class="form-check-reverse my-3">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexRadioDefault1"
              //   checked={check}
              //   onChange={() => setCheck(!check)}
            />
            <label
              class="form-check-label"
              for="flexRadioDefault1"
              style={{ cursor: "pointer" }}
            >
              لازلت اعمل في هذه الجهة
            </label>
          </div>
          <DatePickerComp label={"نهاية الفترة"} />
          <TextArea label={"تفاصيل مهام عملك"} rows={6} />
          <div className=" mt-3">
            <Button className="">حفظ</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default MainData;
