import { isEmail } from "@/utils/Helpers";
import * as Yup from "yup";

export const initialValues = {
    name: "",
    email: "",
    phone: "",
    phone_code: "",
    qualification: "",
    department_id: "",
    self_description: "",
    resident_status: "",
    salary_expectation: "",
    availability_to_start: "",
    candidate_cv: null,
    candidate_portfolio: null,
    candidate_personal_picture: null,
    gender: "",
    department_id: "",
    job_category: "",
    marital_status: "",
    years_of_experience: "",
  };
  export const validationSchema = Yup.object({
    name: Yup.string().required("الاسم الكامل مطلوب"),
    email: Yup.string()
      .matches(isEmail, "يجب أن يكون بريدًا إلكترونيًا صالحًا")
      .required("البريد الإلكتروني مطلوب"),
    phone: Yup.string()
      .matches(/^[0-9]{9}$/, "رقم الجوال مطلوب")
      .required("رقم الجوال مطلوب"),
    qualification: Yup.string().required("المؤهل العلمي مطلوب"),
    department_id: Yup.string().required("اختيار القسم مطلوب"),
    self_description: Yup.string().required("وصف نفسك مطلوب"),
    resident_status: Yup.string().required("حالة الإقامة مطلوبة"),
    salary_expectation: Yup.string().required("الراتب المتوقع مطلوب"),
    availability_to_start: Yup.string().required("متى تستطيع البدء مطلوب"),
    marital_status: Yup.string().required("الحالة الاجتماعية مطلوبة"),
    gender: Yup.string().required("النوع مطلوب"),
    job_category: Yup.string().required("نوع الوظيفة مطلوب"),
    candidate_cv: Yup.mixed().required("السيرة الذاتية مطلوبة"),
    candidate_personal_picture: Yup.mixed().required(" الصورة الشخصية مطلوبة"),
    years_of_experience: Yup.mixed().required("عدد سنوات الخبرة مطلوب"),
  });