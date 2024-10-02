import { Form, Formik } from "formik";
import Link from "next/link";
import React from "react";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import BaseInputField from "../../../components/form/BaseInputField";
import AvailableJobLayout from "../../../components/jobs/available_job/AvailbleJobLayout";
import ItemAvailableJob from "../../../components/jobs/available_job/ItemAvailableJob";
import ModalComp from "../../../components/ModalComp";
import fetchData from "../../../utils/fetchData";
import NoData from "../../../components/NoData";

function AvailableJob({ jobs }) {
  return (
    <>
      <AvailableJobLayout hiddenMenu>
        <div className="">
          <Container className="m-auto  col-md-7 ">
            {jobs?.vacancies?.length ? (
              jobs?.vacancies?.map(
                (item) =>
                  !!item?.is_visible && (
                    <ItemAvailableJob item={item} key={item?.id} />
                  )
              )
            ) : (
              <NoData message={"لايوجد وظائف متاحة الان"} />
            )}
          </Container>
        </div>

        <ModalComp
          isOpen={false}
          header={"الرجاء تسجيل الدخول اولًا "}
          alert={true}
        >
          <div className="">
            <Formik initialValues={{}} onSubmit={() => {}}>
              <Form>
                <BaseInputField name={""} label={"البريد الالكتروني"} />
                <BaseInputField
                  name={""}
                  label={"كلمة المرور"}
                  type={"password"}
                />
                <p
                  className=""
                  style={{ cursor: "pointer", margin: "20px 0 0 0" }}
                  onClick={() => router.push("/reset-password")}
                >
                  نسيت كلمة المرور؟
                </p>
                <div className="mt-2 w-100">
                  <Button
                    color="secondary"
                    type="submit"
                    isLoading={false}
                    style={{ width: "100%" }}
                  >
                    تسجيل الدخول
                  </Button>
                </div>
                <div className="d-flex  justify-content-center align-items-center mt-3 gap-2">
                  <p className="m-0 p-0">ليس لديك حساب ؟</p>
                  <Link href={"/register"} className="text-gold ">
                    سجل الان
                  </Link>
                </div>
              </Form>
            </Formik>
          </div>
        </ModalComp>
      </AvailableJobLayout>
    </>
  );
}

export default AvailableJob;
export async function getServerSideProps(context) {
  const jobs = await fetchData("vacancies");
  return {
    props: {
      jobs,
    },
  };
}
