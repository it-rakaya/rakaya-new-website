import BaseInputField from "@/components/form/BaseInputField";
import DatePickerComp from "@/components/form/DatePickerComp";
import SelectEducation from "@/components/form/SelectEducation";
import SelectGpa from "@/components/form/SelectGpa";
import { Form, Formik } from "formik";
import React from "react";

function Education() {
  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <SelectEducation label={"مستوى التعليم"} />
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
              تخصص تقني
            </label>
          </div>
          <SelectGpa />
          <DatePickerComp label={"سنة الالتحاق (ميلادي)"} />
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
              لازلت ادرس
            </label>
          </div>
          <DatePickerComp label={"سنة التخرج (ميلادي)"} />
        </Form>
      </Formik>
    </div>
  );
}

export default Education;
