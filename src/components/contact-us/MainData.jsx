import React from "react";
import BaseInputField from "../form/BaseInputField";
import { Form, Formik } from "formik";
import Label from "../form/Label";
import PhoneInput from "../form/PhoneInput";
import TextArea from "../form/TextArea";
import Button from "../Button";

function MainData() {
  return (
    <div className="my-5">
      <Formik initialValues={""} onSubmit={() => {}}>
        <Form>
          <BaseInputField
            name={"name"}
            label={"اسمك الكامل"}
            placeholder={"الاسم الرباعي"}
          />
          <BaseInputField
            name={"email"}
            label={"البريد الإلكتروني"}
            placeholder={"example@example.com"}
          />
          <PhoneInput label={"رقم الجوال"} />
          <TextArea label={"الرسالة"} placeholder={"اكتب رسالتك هنا"} />
          <div className="my-4">
            <Button color="secondary"> إرسال</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default MainData;
