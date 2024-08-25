import Button from "@/components/Button";
import BaseInputField from "@/components/form/BaseInputField";
import { Form, Formik } from "formik";
import React from "react";

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
