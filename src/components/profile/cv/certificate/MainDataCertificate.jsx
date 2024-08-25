import Button from "../../../Button";
import BaseInputField from "../../../form/BaseInputField";
import DatePickerComp from "../../../form/DatePickerComp";
import { Form, Formik } from "formik";
import React from "react";
import UploadDoc from "../../../form/UploadDoc";

function MainDataCertificate({ setShowSkills }) {
  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <div className="my-4">
            <BaseInputField label={"اسم الشهادة"} placeholder={"اسم الشهادة"} />
            <DatePickerComp label={"تاريخ الشهادة"} />

            <UploadDoc label={"ارفاق الشهادة"} />
          </div>
          <div className="mt-3 d-flex justify-content-between">
            <Button>حفظ</Button>

            <Button color="secondary" onClick={() => setShowSkills(true)}>
              الرجوع
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default MainDataCertificate;
