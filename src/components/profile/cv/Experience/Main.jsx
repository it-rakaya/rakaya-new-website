import { Form, Formik } from "formik";
import React from "react";
import MainData from "./MainData";
import { notify } from "../../../../utils/notify";
import { useMutate } from "../../../../hooks/useMutate";
import * as Yup from "yup";
import Button from "../../../Button";

function Main({ setShowCard, refetch, mainData }) {
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


  const today = new Date();
  const validationSchema = Yup.object({
    employer: Yup.string().required("اسم الشركة مطلوب"),
    position: Yup.string().required("المسمى الوظيفي مطلوب"),
    location_type_id: Yup.string().required("نوع المكان مطلوب"),
    work_type_id: Yup.string().required("نوع العمل مطلوب"),
    start_date: Yup.date()
      .max(today, "تاريخ البدء يجب أن يكون قبل أو يساوي اليوم")
      .required("تاريخ البدء مطلوب"),
    still_working: Yup.boolean(),
    end_date: Yup.lazy((value, { parent }) => {
      return parent.still_working
        ? Yup.date().nullable() 
        : Yup.date()
            .max(today, "تاريخ الانتهاء يجب أن يكون قبل أو يساوي اليوم")
            .required("تاريخ الانتهاء مطلوب");
    }),
    details: Yup.string().required("تفاصيل العمل مطلوبة"),
  });
  
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
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

          {/* Display validation errors */}
          {/* {errors && touched && (
              <div className="text-danger">
                {Object.keys(errors).map((key) => (
                  <div key={key}>{errors[key]}</div>
                ))}
              </div>
            )} */}
        </Form>
      </Formik>
    </div>
  );
}

export default Main;
