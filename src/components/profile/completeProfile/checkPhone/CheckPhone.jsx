import Button from "@/components/Button";
import PhoneInputNew from "@/components/form/PhoneInputNew";
import { Form, Formik } from "formik";
import React from "react";

function CheckPhone() {
  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <h5>التحقق من رقم الجوال</h5>
          <div>
            <PhoneInputNew label={"رقم الجوال"} />
          </div>
          <div className="mt-3 d-flex justify-content-between">
            <Button>حفظ</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default CheckPhone;
