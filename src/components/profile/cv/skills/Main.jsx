import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useMutate } from "../../../../hooks/useMutate";
import { notify } from "../../../../utils/notify";
import Button from "../../../Button";
import MainDataSkills from "./MainDataSkills";

function Main({ setShowCard, refetch, mainData }) {
  const endpoint = mainData?.id
    ? `candidate-skills/${mainData?.id}`
    : `candidate-skills`;
  const { mutate: postData, isPending } = useMutate({
    mutationKey: [endpoint],
    endpoint: endpoint,
    onSuccess: (data) => {
      notify(
        "success",
        mainData?.id ? "تم تعديل المهارة بنجاح" : "تم اضافة  مهارة بنجاح"
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
    skill_id: mainData?.skill_id || "",
    years_of_experience: mainData?.years_of_experience || "",
    level: mainData?.level || "",
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
            ? postData({ ...values, method: "PUT" })
            : postData(values)
        }
      >
        <Form>
          <MainDataSkills />
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
