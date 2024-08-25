import Button from "@/components/Button";
import Container from "@/components/Container";
import BaseInputField from "@/components/form/BaseInputField";
import AvailableJobLayout from "@/components/jobs/available_job/AvailbleJobLayout";
import ItemAvailableJob from "@/components/jobs/available_job/ItemAvailableJob";
import ModalComp from "@/components/ModalComp";
import { DarkModeContext } from "@/context/DarkModeContext";
import { Form, Formik } from "formik";
import Link from "next/link";
import React, { useContext } from "react";
import { SiTrueup } from "react-icons/si";

function AvailableJob() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <>
      <AvailableJobLayout hiddenMenu>
        <div className="">
          <Container className="m-auto  col-md-7 ">
            <ItemAvailableJob />
            <ItemAvailableJob />

            <ItemAvailableJob />
          </Container>
        </div>

        <ModalComp
          isOpen={false}
          header={"الرجاء تسجيل الدخول اولًا "}
          alert={true}

          // Footer={
          //   <div className="d-flex justify-content-between ">
          //     {/* <Button>الملف الشخصي</Button> */}
          //     {/* <Button color="secondary">الرجوع</Button> */}
          //   </div>
          // }
        >
          <div className="">
          {/* <h2 className="fw-bolder">تسجيل الدخول</h2> */}
          {/* <p>تسجيل الدخول لموقع شركة ركايا للاستشارات الأدارية</p> */}
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
