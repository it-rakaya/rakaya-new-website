import Container from "@/components/Container";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import pattern from "assets/patterns/pattern1.svg";
import Header from "@/components/jobs/Header";
import Section from "@/components/jobs/Section";
import MainForm from "@/components/jobs/MainFormStepOne";
import { Form, Formik } from "formik";
import MainFormStepOne from "@/components/jobs/MainFormStepOne";
import Line from "@/components/Line";
import MainFormStepTow from "@/components/jobs/MainFormStepTow";
import MainFormStepThree from "@/components/jobs/MainFormStepThree";
import Button from "@/components/Button";
import CustomHead from "@/components/CustomHead";

const Content = ({ title, children }) => {
  return (
    <>
      <Container className="p-0">
        <h3 className="">{title}</h3>
        {children}
      </Container>
    </>
  );
};

const Pattern = ({ rotate = false }) => (
  <motion.div
    variants={{
      visible: { x: 0, transition: { duration: 0.5 } },
      hidden: { x: rotate ? "-100%" : "100%", transition: { duration: 0.5 } },
    }}
    initial="hidden"
    animate="visible"
    className={`px-0 mx-0 position-absolute d-flex ${
      rotate
        ? "start-0 top-0 justify-content-end align-items-end"
        : "end-0 bottom-0 align-items-start"
    }`}
    style={{ height: "100%", overflow: "hidden", maxWidth: "12rem" }}
  >
    <Image
      alt=""
      src={pattern}
      style={{ rotate: rotate ? "180deg" : "0deg" }}
      className={`img-fluid col-4 col-lg-8 `}
    />
  </motion.div>
);

const index = () => {
  return (
    <>
      <CustomHead title={"الوظائف"} description={"home page rakaya"} />

    <Container className="m-0 p-0 overflow-hidden">
      <Header text={"التقديم"} />
      <Formik initialValues={""} onSubmit={() => {}}>
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
              <Button color="secondary"> إرسال</Button>
            </div>
          </Section>
        </Form>
      </Formik>
    </Container>
    </>
  );
};

export default index;
