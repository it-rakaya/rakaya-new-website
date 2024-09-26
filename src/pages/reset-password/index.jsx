import Button from "../../components/Button";
import BaseInputField from "../../components/form/BaseInputField";
import { Form, Formik } from "formik";
import Link from "next/link";
import React from "react";
import LoginLayout from "../../components/form/Login/LoginLayout";

function ResetPassword() {
  return (
    <div>
      <LoginLayout>
        <div className="">
          <h2 className="fw-bolder">اعادة تعيين كلمة المرور</h2>
          <Formik initialValues={{}} onSubmit={() => {}}>
            <Form>
              <BaseInputField
                name={""}
                type={"email"}
                label={"البريد الالكتروني"}
                placeholder={"البريد الالكتروني"}
              />
               <div className="mt-2 w-100">
                <Button
                  color="secondary"
                  type="submit"
                  isLoading={false}
                  style={{ width: "100%" }}
                >
                  اعادة تعيين
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
    </div>
  );
}

export default ResetPassword;
ResetPassword.noLayout = true;
