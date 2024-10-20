import { Form, Formik } from "formik";
import React from "react";
import MainData from "../../components/register/MainData";
import LoginLayout from "../../components/form/Login/LoginLayout";
import { useMutate } from "../../hooks/useMutate";
import * as Yup from "yup";
import { isEmail } from "../../utils/Helpers";
import { useAuth } from "../../context/auth/AuthProvider";
import { notify } from "../../utils/notify";

function Register() {
  const { login, setUser } = useAuth();
  const { mutate: postData, isPending: loadingRegister } = useMutate({
    mutationKey: [`register`],
    endpoint: `register`,
    onSuccess: (data) => {
      login(data?.data);
      setUser(data?.data?.candidate);
      notify("success", "مرحبا بك");
    },
    formData: true,
  });

  const initialValues = {
    first_name_ar: "",
    second_name_ar: "",
    third_name_ar: "",
    last_name_ar: "",
    first_name_en: "",
    second_name_en: "",
    third_name_en: "",
    last_name_en: "",
    email: "",
    phone_code: "+966",
    phone: "",
    password: "",
    confirm_password: "",
  };

  const validationSchema = Yup.object({
    first_name_ar: Yup.string().required("الاسم الأول مطلوب"),
    second_name_ar: Yup.string().required("اسم الثاني مطلوب"),
    third_name_ar: Yup.string().required("اسم الثالث مطلوب"),
    last_name_ar: Yup.string().required("اسم الاخير مطلوب"),
    first_name_en: Yup.string().required("الاسم الأول بالإنجليزية مطلوب"),
    second_name_en: Yup.string().required("اسم الثاني بالإنجليزية مطلوب"),
    third_name_en: Yup.string().required("اسم الثالث بالإنجليزية مطلوب"),
    last_name_en: Yup.string().required("اسم الاخير بالإنجليزية مطلوب"),
    email: Yup.string()
      .matches(isEmail, "يجب أن يكون بريدًا إلكترونيًا صالحًا")
      .required("البريد الإلكتروني مطلوب"),
    phone_code: Yup.string().required("رمز الاتصال مطلوب"),
    phone:
      Yup.string()
      .required("رقم الجوال مطلوب"),
    password: Yup.string()
      .min(8, "كلمة المرور يجب أن تكون على الأقل 8 أحرف")
      .required("كلمة المرور مطلوبة"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "كلمة المرور غير متطابقة")
      .required("تأكيد كلمة المرور مطلوب"),
  });

  return (
    <div>
      <LoginLayout>
        <div className="">
          <h2 className="fw-bolder">تسجيل حساب جديد</h2>
          <p>تسجيل حساب في موقع شركة ركايا للاستشارات الأدارية</p>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              console.log("🚀 ~ Register ~ values:", values);
              postData(values);
            }}
            validationSchema={validationSchema}
          >
            <Form>
              <MainData loadingRegister={loadingRegister} />
            </Form>
          </Formik>
        </div>
      </LoginLayout>
    </div>
  );
}

export default Register;
Register.noLayout = true;
