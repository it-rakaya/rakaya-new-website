import { Form, Formik } from "formik";
import React from "react";
import BaseInputField from "./form/BaseInputField";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../context/auth/AuthProvider";
import { useMutate } from "../hooks/useMutate";
import * as Yup from "yup";
import { isEmail } from "../utils/Helpers";
import Cookies from "js-cookie";
import { notify } from "../utils/notify";

function LoginFaster({ setOpen }) {
  const router = useRouter();
  const { setUser } = useAuth();
  const { mutate: loginPost, isPending: loadingLogin } = useMutate({
    mutationKey: [`login`],
    endpoint: `login`,
    onSuccess: (data) => {
      notify("success", "مرحبا بك");
      setUser(data?.data?.candidate);
      Cookies.set("token", data?.data?.token);
      setOpen(false);
    },
    onError:(err) => {
      notify("error", err.response?.data?.message);

    },
    formData: true,
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(isEmail, "يجب أن يكون بريدًا إلكترونيًا صالحًا")
      .required("البريد الإلكتروني مطلوب"),

    password: Yup.string()
      .min(8, "كلمة المرور يجب أن تكون على الأقل 8 أحرف")
      .required("كلمة المرور مطلوبة"),
  });
  return (
    <div className="">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          loginPost(values);
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <BaseInputField name={"email"} label={"البريد الالكتروني"} />
          <BaseInputField
            name={"password"}
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
              isLoading={loadingLogin}
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
  );
}

export default LoginFaster;
