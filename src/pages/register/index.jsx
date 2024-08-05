import Button from "@/components/Button";
import BaseInputField from "@/components/form/BaseInputField";
import PhoneInput from "@/components/form/PhoneInput";
import PhoneInputNew from "@/components/form/PhoneInputNew";
import LoginLayout from "@/components/Login/LoginLayout";
import { Form, Formik } from "formik";
import Link from "next/link";
import React from "react";

function Register() {
  return (
    <div>
      <LoginLayout>
        <div className="">
          <h2 className="fw-bolder">تسجيل حساب جديد</h2>
          <p>تسجيل حساب في موقع شركة ركايا للاستشارات الأدارية</p>
          <Formik initialValues={{}} onSubmit={() => {}}>
            <Form>
              <div className="row ">
                <div className="col-md-3">
                  <BaseInputField
                    name={""}
                    type={"text"}
                    label={"الاسم الاول"}
                    placeholder={"الاسم الاول"}
                  />
                </div>
                <div className="col-md-3">
                  <BaseInputField
                    name={""}
                    type={"text"}
                    label={"الاسم الثانيي"}
                    placeholder={"الاسم الثانيي"}
                  />
                </div>
                <div className="col-md-3">
                  <BaseInputField
                    name={""}
                    type={"text"}
                    label={"الاسم الثالث "}
                    placeholder={"الاسم الثالث "}
                  />
                </div>
                <div className="col-md-3">
                  <BaseInputField
                    name={""}
                    type={"text"}
                    label={"الاسم الاخير"}
                    placeholder={"الاسم الاخير"}
                  />
                </div>
              </div>
              <BaseInputField
                name={""}
                type={"email"}
                label={"البريد الالكتروني"}
                placeholder={"البريد الالكتروني"}
              />
              {/* <PhoneInput /> */}
              <PhoneInputNew label={"رقم الهاتف"} />
              <BaseInputField
                name={""}
                label={"كلمة المرور"}
                type={"password"}
                placeholder={"كلمة المرور"}
              />
              <BaseInputField
                name={""}
                label={"تاكيد كلمة المرور"}
                type={"password"}
                placeholder={"تاكيد كلمة المرور"}
              />

              <div className="mt-2 w-100">
                <Button
                  color="secondary"
                  type="submit"
                  isLoading={false}
                  style={{ width: "100%" }}
                >
                  تسجيل
                </Button>
              </div>
              <div className="d-flex  justify-content-center align-items-center mt-3 gap-2">
                <p className="m-0 p-0"> لديك حساب بالفعل ؟</p>
                <Link href={"/login"} className="text-gold ">
                  تسجيل الدخول
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </LoginLayout>
    </div>
  );
}

export default Register;
Register.noLayout = true;
