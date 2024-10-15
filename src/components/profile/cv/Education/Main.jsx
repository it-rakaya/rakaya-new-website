import { Form, Formik } from "formik";
import React from "react";
import MainData from "./MainData";
import Button from "../../../Button";
import { useMutate } from "../../../../hooks/useMutate";
import { notify } from "../../../../utils/notify";
import * as Yup from "yup";

function Main({ setShowCard, refetch, mainData }) {
  const endpoint = mainData?.id
    ? `candidate-education/${mainData?.id}`
    : `candidate-education`;
  const { mutate: postData, isPending } = useMutate({
    mutationKey: [endpoint],
    endpoint: endpoint,
    onSuccess: (data) => {
      notify(
        "success",
        mainData?.id
          ? "تم تعديل المستوى التعليمي بنجاح"
          : "تم اضافة مستوى تعليمي بنجاح"
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
    education_level_id: mainData?.education_level_id || "",
    country_id: mainData?.country_id || "",
    university: mainData?.university_id || mainData?.university || "",
    major: mainData?.major_id || "",
    gpa: mainData?.gpa || "",
    gpa_from: mainData?.gpa_from || "",
    start_date: mainData?.start_date || "",
    still_studying: mainData?.still_studying || 0,
    graduation_date: mainData?.graduation_date || "",
  };
  const today = new Date();
  const validationSchema = Yup.object({
    education_level_id: Yup.string().required("مستوى التعليم مطلوب"),
    country_id: Yup.string().required(" اسم الدولة  مطلوب"),
    gpa: Yup.string().required("المعدل مطلوب"),
    gpa_from: Yup.string().required("المعدل مطلوب"),
    start_date: Yup.date()
      .max(today, "تاريخ البدء يجب أن يكون قبل أو يساوي اليوم")
      .required("سنة الالتحاق  مطلوب"),
    graduation_date: Yup.lazy((value, { parent }) => {
      return parent.still_studying
        ? Yup.date().nullable()
        : Yup.date()
            .max(today, "سنة التخرج يجب أن يكون قبل أو يساوي اليوم")
            .required("سنة التخرج مطلوب");
    }),
  });

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => {
          mainData?.id
            ? postData({ ...values, _method: "PUT" })
            : postData(values);
        }}
      >
        <Form>
          <MainData />
          <div className="mt-3 d-flex justify-content-between">
            <Button type="submit" isLoading={isPending}>
              {mainData?.id ? "تعديل" : "حفظ"}
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
