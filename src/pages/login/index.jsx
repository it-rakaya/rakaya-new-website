import Button from "../../components/Button";
import BaseInputField from "../../components/form/BaseInputField";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import LoginLayout from "../../components/form/Login/LoginLayout";
import MainData from "../../components/login/MainData";
import { useMutate } from "../../hooks/useMutate";
import { useAuth } from "../../context/auth/AuthProvider";
import { isEmail } from "../../utils/Helpers";
import * as Yup from "yup";
import { notify } from "../../utils/toast";

function LoginPage() {
  const router = useRouter();
  const { login, setUser } = useAuth();
  const { mutate: loginPost, isPending: loadingLogin } = useMutate({
    mutationKey: [`login`],
    endpoint: `login`,
    onSuccess: (data) => {
      notify("success", "مرحبا بك");
      login(data?.data);
      setUser(data?.data?.candidate);
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
    <>
      <LoginLayout>
        <div className="">
          <h2 className="fw-bolder">تسجيل الدخول</h2>
          <p>تسجيل الدخول لموقع شركة ركايا للاستشارات الأدارية</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              loginPost(values);
            }}
          >
            <Form>
              <MainData loadingLogin={loadingLogin} />
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
      </LoginLayout>
    </>
  );
}

export default LoginPage;
LoginPage.noLayout = true;
