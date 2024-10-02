import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useMutate } from "../../../../hooks/useMutate";
import { notify } from "../../../../utils/notify";
import Button from "../../../Button";
import MainDataCertificate from "./MainDataCertificate";

function Main({ setShowCard, refetch, mainData }) {
  console.log("🚀 ~ Main ~ mainData:", mainData);
  const endpoint = mainData?.id
    ? `candidate-certificates/${mainData?.id}`
    : `candidate-certificates`;
  const { mutate: postData, isPending } = useMutate({
    mutationKey: [endpoint],
    endpoint: endpoint,
    onSuccess: (data) => {
      notify(
        "success",
        mainData?.id ? "تم تعديل الشهادة بنجاح" : "تم اضافة  شهادة بنجاح"
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
    certificate_name: mainData?.certificate_name || "",
    date: mainData?.date || "",
    attachment: {value:mainData?.attachment_url }|| "",
  };
  const validationSchema = Yup.object({
    certificate_name: Yup.string().required("مستوى التعليم مطلوب"),
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
          <MainDataCertificate />
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
