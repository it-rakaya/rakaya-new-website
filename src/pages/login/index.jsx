import Button from "@/components/Button";
import Container from "@/components/Container";
import BaseInputField from "@/components/form/BaseInputField";
import { Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function LoginPage() {
  const [selectedOption, setSelectedOption] = useState("login");

  return (
    <div
      style={{ backgroundColor: "#f3f4f6", height: "100vh" }}
      className="d-flex align-items-center"
    >
      <Container className="col-lg-8  p-2  bg-white row m-auto align-items-center rounded-4">
        <div className="col-md-6 ">
          <div className="">
            {/* <div
              className="row  w-100 m-auto"
              style={{ border: "1px solid #522222", borderRadius: "5px" }}
            >
              <div
                className={`col-md-6  ${
                  selectedOption == "login" ? "bg-secondary " : ""
                }  `}
                style={{ borderRadius: " 0 0 3px" }}
              >
                <input
                  type="radio"
                  class="btn-check border-0"
                  name="options-base"
                  style={{
                    borderColor: "transparent",
                    backgroundColor: "transparent",
                  }}
                  id="option5"
                  autocomplete="off"
                  checked={selectedOption == "login"}
                  onChange={() => setSelectedOption("login")}
                />
                <label
                  class="btn p-2"
                  for="option5"
                  style={{
                    borderColor: "transparent",
                    backgroundColor: "transparent",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  تسجيل الدخول
                </label>
              </div>
              <div
                className={`col-md-6  ${
                  selectedOption == "sighup" ? "bg-secondary" : ""
                }  2`}
                style={{ borderRadius: "3px  0 0" }}
              >
                <input
                  type="radio"
                  class="btn-check border-0"
                  name="options-base"
                  style={{
                    borderColor: "transparent",
                    backgroundColor: "transparent",
                  }}
                  id="option6"
                  autocomplete="off"
                  checked={selectedOption == "sighup"}
                  onChange={() => setSelectedOption("sighup")}
                />
                <label
                  class="btn p-2"
                  for="option6"
                  style={{
                    borderColor: "transparent",
                    backgroundColor: "transparent",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  انشاء حساب
                </label>
              </div>
            </div> */}
            <h5 className="text-secondary fw-bolder" >
                تسجيل الدخول
            </h5>
            <Formik initialValues={{}} onSubmit={() => {}}>
              <Form>
                <BaseInputField name={""} label={"البريد الالكتروني"} />
                <BaseInputField
                  name={""}
                  label={"كلمة المرور"}
                  type={"password"}
                />
                <p className="" style={{ cursor: "pointer", margin: "5px 0" }}>
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
                <div className="d-flex flex-column justify-content-center align-items-center mt-3 gap-2">
                  <p className="m-0 p-0">ليس لديك حساب ؟</p>
                  <Link
                    href={""}
                    className="text-secondary "
                    style={{ textDecoration: "underline" }}
                  >
                    تسجيل حساب جديد
                  </Link>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
        <div className="col-md-6 px-2">
          <Image
            alt="bg"
            src={"https://auth.tuwaiq.edu.sa/images/auth-background.webp"}
            width={"0"}
            className="rounded-4"
            height={"0"}
            style={{ height: "100%", width: "100%", margin: "-35px 0" }}
          />
        </div>
      </Container>
    </div>
  );
}

export default LoginPage;
LoginPage.noLayout = true;
