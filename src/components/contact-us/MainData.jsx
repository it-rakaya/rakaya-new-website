import React from "react";
import BaseInputField from "../form/BaseInputField";
import { Form, Formik } from "formik";
import Label from "../form/Label";
import PhoneInput from "../form/PhoneInput";
import TextArea from "../form/TextArea";
import Button from "../Button";
import SelectHelp from "../form/SelectHelp";

function MainData() {
  return (
    <div className="my-5">
      <Formik initialValues={""} onSubmit={() => {}}>
        <Form>
          <div>
            <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>
              بماذا نستطيع مساعدتك؟
            </h1>
            <SelectHelp label={"تحديده بدقّة يساعدنا في فهم طلبك بشكل أفضل"}  labelClassName="fw-normal"/>
          </div>
          <div className="my-4">
            <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>
              الآن، اكتب لنا بتفصيل أكثر عمّا تريد إرساله لنا{" "}
            </h1>
            <TextArea
              label={
                "اكتب بأكبر قدر من التفاصيل. كلّما اهتممت بالتفاصيل، كلّما سهل علينا الرد عليك ومساعدتك "
              }
              rows={6}
            />
          </div>
          <div>
            <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>الاسم</h1>

            <BaseInputField
              name={"name"}
              label={"قد يكون اسمك الشخصي، أو اسم الجهة أو الشركة التي تمثّلها"}
              placeholder={"الاسم الرباعي"}
            />
          </div>
          <div>
            <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>
              البريد الإلكتروني
            </h1>

            <BaseInputField
              name={"email"}
              label={
                "سيكون استخدامنا له للتواصل معك بشأن رسالتك. ولن نستخدمه أبدًا خارج نطاق الرسالة"
              }
              placeholder={"example@example.com"}
            />
          </div>

          <div className="my-4">
            <Button color="secondary"> إرسال</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default MainData;
