import { Form, Formik } from "formik";
import React from "react";
import Button from "../../Button";
import BaseInputField from "../../form/BaseInputField";
import { useMutate } from "../../../hooks/useMutate";
import * as Yup from "yup";
import { notify } from "../../../utils/notify";

function Main() {
  const endpoint = `reset-password`;
  const { mutate: updatePassword, isPending } = useMutate({
    mutationKey: [endpoint],
    endpoint: endpoint,
    onSuccess: (data) => {
      notify("success", "تم تعديل كلمة المرور بنجاح");
    },
    onError: (e) => {
      notify("error", e.response?.data?.message);
    },
    formData: true,
  });
  const initialValues = {
    current_password: "",
    new_password: "",
    confirm_new_password: "",
  };
  const validationSchema = Yup.object({
    current_password: Yup.string()
      .min(8, "كلمة المرور يجب أن تكون على الأقل 8 أحرف")
      .required("كلمة المرور مطلوبة"),
    new_password: Yup.string()
      .min(8, "كلمة المرور يجب أن تكون على الأقل 8 أحرف")
      .required("كلمة المرور مطلوبة"),
      confirm_new_password: Yup.string()
      .oneOf([Yup.ref("new_password"), null], "كلمة المرور غير متطابقة")
      .required("تأكيد كلمة المرور مطلوب"),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => updatePassword(values)}
        validationSchema={validationSchema}
      >
        <Form>
          <div>
            <BaseInputField
              name={"current_password"}
              label={"كلمة المرور القديمة"}
              type={"password"}
              placeholder={"كلمة المرور القديمة"}
              required
            />
            <BaseInputField
              name={"new_password"}
              label={" كلمة المرور الجديدة"}
              type={"password"}
              placeholder={" كلمة المرور الجديدة"}
              required
            />
            <BaseInputField
              name={"confirm_new_password"}
              label={"  تاكيد كلمة المرور  الجديدة"}
              type={"password"}
              placeholder={"تاكيد كلمة المرور"}
              required
            />
          </div>
          <div className="mt-3 d-flex justify-content-between">
            <Button type="submit" isLoading={!!isPending}>
              حفظ
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Main;
