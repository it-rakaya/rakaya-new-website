import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useMutate } from "../../../../hooks/useMutate";
import { notify } from "../../../../utils/notify";
import Button from "../../../Button";
import MainDataCourses from "./MainDataCourses";

function Main({ setShowCard, refetch, mainData }) {
  const endpoint = mainData?.id
    ? `candidate-courses/${mainData?.id}`
    : `candidate-courses`;
  const { mutate: postData, isPending } = useMutate({
    mutationKey: [endpoint],
    endpoint: endpoint,
    onSuccess: (data) => {
      notify(
        "success",
        mainData?.id ? "تم تعديل الشهادة بنجاح" : "تم اضافة شهادة بنجاح"
      );
      refetch();
      setShowCard(true);
    },
    onError: (e) => {
      notify("error", e.response?.data?.message);
    },
    formData: true,
  });
  const initialValues = {
    course_name: mainData?.course_name || "",
    organization_name: mainData?.organization_name || "",
    date: mainData?.date || "",
    major: mainData?.major || "",
    duration: mainData?.duration || "",
    attachment: { value: mainData?.attachment_url } || "",
  };
  const validationSchema = Yup.object({
    education_level_id: Yup.string().required("مستوى التعليم مطلوب"),
    country_id: Yup.string().required(" اسم الدولة  مطلوب"),
    gpa: Yup.string().required("المعدل مطلوب"),
    gpa_from: Yup.string().required("المعدل مطلوب"),
    start_date: Yup.string().required("سنة الالتحاق  مطلوب"),
  });

  return (
    <div>
      <Formik
        // validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) =>
          mainData?.id
            ? postData({ ...values, _method: "PUT" })
            : postData(values)
        }
      >
        <Form>
          <MainDataCourses />
          <div className="mt-3 d-flex justify-content-between">
            <Button type="submit" isLoading={isPending}>
              حفظ
            </Button>

            <Button color="secondary" onClick={() => setShowCard(true)}>
              الرجوع
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Main;
