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
    skill_id: Yup.string().required("اسم المهارة  مطلوب"),
    years_of_experience: Yup.lazy((value, { parent }) => {
      return parent.typeSkills == "technical"
        ? Yup.string().required("عدد سنوات الخبرة مطلوب")
        : Yup.string().nullable();
    }),
    level: Yup.lazy((value, { parent }) => {
      return parent.typeSkills == "technical"
        ? Yup.string().required("  المستوى مطلوب")
        : Yup.string().nullable();
    }),
  });

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
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
