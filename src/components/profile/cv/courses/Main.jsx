import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useMutate } from "../../../../hooks/useMutate";
import { notify } from "../../../../utils/notify";
import Button from "../../../Button";
import MainDataCourses from "./MainDataCourses";
import { getModifiedValues } from "../../../../utils/Helpers";

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
    duration: mainData?.duration || "",
    attachment: mainData?.attachment_url
      ? { value: mainData?.attachment_url }
      : "",
  };
  const validationSchema = Yup.object({
    course_name: Yup.string().required("اسم الدورة مطلوب"),
    organization_name: Yup.string().required("اسم المنظمة مطلوب"),
    date: Yup.date().required("تاريخ الدورة مطلوب"),
    duration: Yup.string().required("مدة الدورة مطلوبة"),
    attachment:mainData?.attachment_url ? "" : Yup.string().required("المرفق مطلوب"),
  });

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => {
          const modifiedValues = getModifiedValues(initialValues, values);
          mainData?.id
            ? postData({ ...modifiedValues, _method: "PUT" })
            : postData(values);
        }}
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
