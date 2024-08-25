import BaseInputField from "../../../form/BaseInputField";
import DatePickerComp from "../../../form/DatePickerComp";
import SelectEducation from "../../../form/SelectEducation";
import SelectGpa from "../../../form/SelectGpa";
import { Form, Formik } from "formik";
import React from "react";
import SelectNationality from "../../../form/SelectNationality";
import Button from "../../../Button";

function MainData({ setShowCard }) {
  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <SelectEducation label={"مستوى التعليم"} />
          <SelectNationality label={"الدولة"} />
          <SelectNationality label={"الكلية"} />
          <SelectNationality label={"التخصص"} />

          <div className="d-flex gap-2 mt-3">
            <div className="w-25">
              <BaseInputField label={"المعدل"} disabled />
            </div>
            <div className="w-75 ">
              <SelectGpa label={"من"} />
            </div>
          </div>
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
          <div className="mt-3 d-flex justify-content-between">
            <Button>حفظ</Button>

            <Button color="secondary" onClick={() => setShowCard(true)}>
              الرجوع
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default MainData;
