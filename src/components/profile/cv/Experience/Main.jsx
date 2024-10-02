import { Form, Formik } from "formik";
import React from "react";
import MainData from "./MainData";
import { notify } from "../../../../utils/notify";
import { useMutate } from "../../../../hooks/useMutate";
import * as Yup from "yup";
import Button from "../../../Button";

function Main({ setShowCard, refetch, mainData }) {
  console.log("🚀 ~ Main ~ mainData:", mainData)
  const endpoint = mainData?.id
    ? `candidate-experiences/${mainData?.id}`
    : "candidate-experiences";
  const { mutate: postData, isPending } = useMutate({
    mutationKey: [endpoint],
    endpoint: endpoint,
    onSuccess: (data) => {
      notify(
        "success",
        mainData?.id ? "تم تعديل الخبرة بنجاح" : "تم اضافة  خبرة بنجاح"
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
    employer: mainData?.employer || "",
    position: mainData?.position || "",
    location_type_id: mainData?.location_type_id || "",
    work_type_id: mainData?.work_type_id || "",
    start_date: mainData?.start_date || "",
    still_working: mainData?.still_working || 0,
    end_date: mainData?.end_date || "",
    details: mainData?.details || "",
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
          <MainData />
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
