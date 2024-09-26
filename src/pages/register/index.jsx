import { Form, Formik } from "formik";
import React from "react";
import MainData from "../../components/register/MainData";
import LoginLayout from "../../components/form/Login/LoginLayout";
import { useMutate } from "../../hooks/useMutate";
import * as Yup from "yup";
import { isEmail } from "../../utils/Helpers";
import { useAuth } from "../../context/auth/AuthProvider";
import { notify } from "../../utils/toast";

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
    f_name_ar: "",
    s_name_ar: "",
    t_name_ar: "",
    l_name_ar: "",
    f_name_en: "",
    s_name_en: "",
    t_name_en: "",
    l_name_en: "",
    email: "",
    phone_code: "",
    phone: "",
    password: "",
    confirm_password: "",
  };

  const validationSchema = Yup.object({
    f_name_ar: Yup.string().required("الاسم الأول مطلوب"),
    s_name_ar: Yup.string().required("اسم الثاني مطلوب"),
    t_name_ar: Yup.string().required("اسم الثالث مطلوب"),
    l_name_ar: Yup.string().required("اسم الاخير مطلوب"),
    f_name_en: Yup.string().required("الاسم الأول بالإنجليزية مطلوب"),
    s_name_en: Yup.string().required("اسم الثاني بالإنجليزية مطلوب"),
    t_name_en: Yup.string().required("اسم الثالث بالإنجليزية مطلوب"),
    l_name_en: Yup.string().required("اسم الاخير بالإنجليزية مطلوب"),
    email: Yup.string()
      .matches(isEmail, "يجب أن يكون بريدًا إلكترونيًا صالحًا")
      .required("البريد الإلكتروني مطلوب"),
    phone_code: Yup.string().required("رمز الاتصال مطلوب"),
    phone: Yup.string()
      .matches(/^[0-9]{9}$/, "رقم الجوال يجب أن يكون مكونًا من 9 أرقام")
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
