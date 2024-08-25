
import { Form, Formik } from "formik";
import React from "react";
import BaseInputField from "../../../form/BaseInputField";
import Button from "../../../Button";

function CheckEmail() {
  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <h5>التحقق من البريد الالكتروني</h5>
          <div>
            <BaseInputField
              label={"البريد الالكتروني"}
              placeholder={"البريد الالكتروني"}
              type={"email"}
            />
          </div>
          <div className="mt-3 d-flex justify-content-between">
            <Button>حفظ</Button>

           
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default CheckEmail;
