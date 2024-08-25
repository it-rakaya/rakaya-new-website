import Button from "../../components/Button";
import BaseInputField from "../../components/form/BaseInputField";
import LoginLayout from "../../components/Login/LoginLayout";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function LoginPage() {
  const router = useRouter();
  return (
    <>
      <LoginLayout>
        <div className="">
          <h2 className="fw-bolder">تسجيل الدخول</h2>
          <p>تسجيل الدخول لموقع شركة ركايا للاستشارات الأدارية</p>
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
      </LoginLayout>
    </>
  );
}

export default LoginPage;
LoginPage.noLayout = true;
