import Button from "@/components/Button";
import BaseInputField from "@/components/form/BaseInputField";
import { Form, Formik } from "formik";
import React from "react";

function Main() {
  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <div>
            <BaseInputField
              name={""}
              label={"كلمة المرور القديمة"}
              type={"password"}
              placeholder={"كلمة المرور القديمة"}
              required
            />
            <BaseInputField
              name={""}
              label={" كلمة المرور الجديدة"}
              type={"password"}
              placeholder={" كلمة المرور الجديدة"}
              required
            />
            <BaseInputField
              name={""}
              label={"  تاكيد كلمة المرور  الجديدة"}
              type={"password"}
              placeholder={"تاكيد كلمة المرور"}
              required
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

export default Main;
