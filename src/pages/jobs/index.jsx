import Button from "@/components/Button";
import Container from "@/components/Container";
import CustomHead from "@/components/CustomHead";
import Line from "@/components/Line";
import LoadingOverlay from "@/components/LoadingOverlay";
import Header from "@/components/jobs/Header";
import MainFormStepOne from "@/components/jobs/MainFormStepOne";
import MainFormStepThree from "@/components/jobs/MainFormStepThree";
import MainFormStepTow from "@/components/jobs/MainFormStepTow";
import ReceivingOrder from "@/components/jobs/ReceivingOrder";
import Section from "@/components/jobs/Section";
import { usePostData } from "@/hooks/usePostData";
import { isEmail } from "@/utils/Helpers";
import pattern from "assets/patterns/pattern1.svg";
import { Form, Formik } from "formik";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import * as Yup from "yup";

// const Content = ({ title, children }) => {
//   return (
//     <>
//       <Container className="p-0">
//         <h3 className="">{title}</h3>
//         {children}
//       </Container>
//     </>
//   );
// };

// const Pattern = ({ rotate = false }) => (
//   <motion.div
//     variants={{
//       visible: { x: 0, transition: { duration: 0.5 } },
//       hidden: { x: rotate ? "-100%" : "100%", transition: { duration: 0.5 } },
//     }}
//     initial="hidden"
//     animate="visible"
//     className={`px-0 mx-0 position-absolute d-flex ${
//       rotate
//         ? "start-0 top-0 justify-content-end align-items-end"
//         : "end-0 bottom-0 align-items-start"
//     }`}
//     style={{ height: "100%", overflow: "hidden", maxWidth: "12rem" }}
//   >
//     <Image
//       alt="image"
//       height={null}
//       width={null}
//       src={pattern}
//       style={{ rotate: rotate ? "180deg" : "0deg" }}
//       className={`img-fluid col-4 col-lg-8 `}
//     />
//   </motion.div>
// );

const Jobs = () => {
  const { postData, isLoading, isSuccess } = usePostData("/candidate");

  const initialValues = {
    full_name: "",
    email: "",
    phone: "",
    phone_code: "",
    qualification: "",
    department_id: "",
    self_description: "",
    resident_status: "",
    salary_expectation: "",
    availability_to_start: "",
    resume_file: null,
    department_id: "",
  };
  const validationSchema = Yup.object({
    full_name: Yup.string().required("الاسم الكامل مطلوب"),
    // email: Yup.string().email('يجب أن يكون بريدًا إلكترونيًا صالحًا').required('البريد الإلكتروني مطلوب'),
    email: Yup.string()
      .matches(isEmail, "يجب أن يكون بريدًا إلكترونيًا صالحًا")
      .required("البريد الإلكتروني مطلوب"),
    phone: Yup.string().required("رقم الهاتف مطلوب"),
    qualification: Yup.string().required("المؤهل العلمي مطلوب"),
    department_id: Yup.string().required("اختيار القسم مطلوب"),
    self_description: Yup.string().required("وصف نفسك مطلوب"),
    resident_status: Yup.string().required("حالة الإقامة مطلوبة"),
    salary_expectation: Yup.string().required("الراتب المتوقع مطلوب"),
    availability_to_start: Yup.string().required("متى تستطيع البدء مطلوب"),
    resume_file: Yup.mixed().required("السيرة الذاتية مطلوبة"),
  });
  const receivingOrderVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  if(isLoading) return <LoadingOverlay/>
  return (
    <>
      <CustomHead title={"الوظائف"} description={"home page rakaya"} />

      <Container className="m-0 p-0 overflow-hidden">
        <Header text={"الوظائف"} />
        {isSuccess ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={receivingOrderVariants}
          >
            <ReceivingOrder />
          </motion.div>
        ) : (
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => postData(values)}
            validationSchema={validationSchema}
          >
            <Form>
              <Section title="القسم الاول" subtitle="معلوماتي">
                <MainFormStepOne />
              </Section>
              <Line />
              <Section title=" القسم الثاني" subtitle="الأسئلة">
                <MainFormStepTow />
              </Section>
              <Line />
              <Section title="القسم الثالث" subtitle="السيرة الذاتية">
                <MainFormStepThree />
                <div className="my-4">
                  <Button color="secondary" type="submit" isLoading={isLoading}>
                    إرسال
                  </Button>
                </div>
              </Section>
            </Form>
          </Formik>
        )}
      </Container>
    </>
  );
};

export default Jobs;
