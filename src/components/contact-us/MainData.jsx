import React from "react";
import { Formik, Form } from "formik";
import Button from "../Button";
import BaseInputField from "../form/BaseInputField";
import SelectHelp from "../form/SelectHelp";
import TextArea from "../form/TextArea";
import PhoneInput from "../form/PhoneInput";
import { usePostData } from "@/hooks/usePostData";
import LoadingOverlay from "../LoadingOverlay";

function MainData() {
  const { isLoading, isSuccess, postData } = usePostData("/contact-us");

  const handleSubmit = (values) => {
    // Placeholder for actual submission logic
    console.log(values);
    postData(values);
  };
  const initialFormValues = {
    name: "",
    message: "",
    email: "",
    phone: "",
    phone_code: "",
    subject_category: "",
  };
  if (isLoading) return <LoadingOverlay />;

  return (
    <div className="my-5">
      <Formik initialValues={initialFormValues} onSubmit={(values)=>handleSubmit(values)}>
        {() => (
          <Form>
            <SectionTitle text="بماذا نستطيع مساعدتك؟" />
            <SelectHelp
              label="تحديده بدقّة يساعدنا في فهم طلبك بشكل أفضل"
              labelClassName="fw-normal"
            />

            <SectionTitle text="الآن، اكتب لنا بتفصيل أكثر عمّا تريد إرساله لنا" />
            <TextArea
              label="اكتب بأكبر قدر من التفاصيل. كلّما اهتممت بالتفاصيل، كلّما سهل علينا الرد عليك ومساعدتك"
              name="message"
              rows={6}
            />

            <SectionTitle text="الاسم" />
            <BaseInputField
              name="name"
              label="قد يكون اسمك الشخصي، أو اسم الجهة أو الشركة التي تمثّلها"
              placeholder="الاسم الأول والأخير"
            />

            <PhoneInput label="رقم الجوال" />

            <SectionTitle text="البريد الإلكتروني" />
            <BaseInputField
              name="email"
              label="سيكون استخدامنا له للتواصل معك بشأن رسالتك. ولن نستخدمه أبدًا خارج نطاق الرسالة"
              placeholder="example@example.com"
            />
            <div className="mt-3">
              <Button color="secondary" className="" type='submit'>
                إرسال
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

// A separate component for section titles to improve readability
const SectionTitle = ({ text }) => (
  <h1 className="my-4" style={{ fontSize: "18px", fontWeight: "bold" }}>
    {text}
  </h1>
);

export default MainData;
