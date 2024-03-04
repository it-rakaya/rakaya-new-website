import Button from "@/components/Button";
import Line from "@/components/Line";
import LoadingOverlay from "@/components/LoadingOverlay";
import JobsLayout from "@/components/jobs/JobsLayout";
import MainFormStepOne from "@/components/jobs/MainFormStepOne";
import MainFormStepThree from "@/components/jobs/MainFormStepThree";
import MainFormStepTow from "@/components/jobs/MainFormStepTow";
import ReceivingOrder from "@/components/jobs/ReceivingOrder";
import Section from "@/components/jobs/Section";
import { usePostData } from "@/hooks/usePostData";
import { isEmail } from "@/utils/Helpers";
import { ConnectedFocusError } from "focus-formik-error";
import { Form, Formik } from "formik";
import { motion } from "framer-motion";
import React from "react";
import * as Yup from "yup";

function New() {
  const { postData, isLoading, isSuccess, responseData } =
    usePostData("/candidate");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    phone_code: "",
    qualification: "",
    department_id: "",
    self_description: "",
    resident_status: "",
    salary_expectation: "",
    availability_to_start: "",
    candidate_cv: null,
    candidate_portfolio: null,

    department_id: "",
    job_category: "",
    marital_status: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("الاسم الكامل مطلوب"),
    email: Yup.string()
      .matches(isEmail, "يجب أن يكون بريدًا إلكترونيًا صالحًا")
      .required("البريد الإلكتروني مطلوب"),
    phone: Yup.string()
      .matches(/^[0-9]{9}$/, "رقم الجوال مطلوب")
      .required("رقم الجوال مطلوب"),
    qualification: Yup.string().required("المؤهل العلمي مطلوب"),
    department_id: Yup.string().required("اختيار القسم مطلوب"),
    self_description: Yup.string().required("وصف نفسك مطلوب"),
    resident_status: Yup.string().required("حالة الإقامة مطلوبة"),
    salary_expectation: Yup.string().required("الراتب المتوقع مطلوب"),
    availability_to_start: Yup.string().required("متى تستطيع البدء مطلوب"),
    marital_status: Yup.string().required("الحالة الاجتماعية مطلوبة"),
    job_category: Yup.string().required("نوع الوظيفة مطلوب"),
    candidate_cv: Yup.mixed().required("السيرة الذاتية مطلوبة"),
    // candidate_portfolio: Yup.mixed().required(" ملف الأعمال مطلوب"),
  });
  const receivingOrderVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  

  return (
    <JobsLayout>
      <div>
        {isSuccess ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={receivingOrderVariants}
          >
            <ReceivingOrder code={responseData?.code} />
          </motion.div>
        ) : (
          <>
            {isLoading && !isSuccess && <LoadingOverlay />}
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => postData(values)}
              validationSchema={validationSchema}
            >
              <Form>
              <ConnectedFocusError />
                <Section title="القسم الأول" subtitle="معلوماتي الشخصية">
                  <MainFormStepOne />
                </Section>
                <Line />
                <Section title=" القسم الثاني" subtitle="الأسئلة">
                  <p className="fw-bold">يا ليت تجاوب على الأسئلة الإضافية</p>
                  <MainFormStepTow />
                </Section>
                <Line />
                <Section title="القسم الثالث" subtitle="السيرة الذاتية">
                  <MainFormStepThree />
                  <div className="my-4">
                    <Button
                      color="secondary"
                      type="submit"
                      isLoading={isLoading}
                    >
                      إرسال
                    </Button>
                  </div>
                </Section>
              </Form>
            </Formik>
          </>
        )}
      </div>
    </JobsLayout>
  );
}

export default New;
