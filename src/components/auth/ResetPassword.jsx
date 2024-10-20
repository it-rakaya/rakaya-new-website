import { Form, Formik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import * as Yup from "yup";
import { useMutate } from "../../hooks/useMutate";
import { notify } from "../../utils/notify";
import Button from "../Button";
import BaseInputField from "../form/BaseInputField";
import { useRouter } from "next/router";

function ResetPassword() {
  const route = useRouter()
  const { mutate: resetPassword, isPending: pendingReset } = useMutate({
    mutationKey: [`reset-password`],
    endpoint: `reset-password`,
    onSuccess: (data) => {
      notify("success", "تم اعادة تعيين كلمة المرور بنجاح");
      route.push('/login')
    },
    onError: (e) => {
      notify("error", e.response?.data?.message);
    },
    formData: true,
  });
  const validationSchema = Yup.object({
    new_password: Yup.string()
      .min(8, "كلمة المرور يجب أن تكون على الأقل 8 أحرف")
      .required("كلمة المرور مطلوبة"),
    confirm_new_password: Yup.string()
      .oneOf([Yup.ref("new_password"), null], "كلمة المرور غير متطابقة")
      .required("تأكيد كلمة المرور مطلوب"),
  });
  return (
    <div>
      <div className="text-center">
        <div className="d-flex justify-content-center ">
          <Image
            src={"/Login-amico.png"}
            alt=""
            width={0}
            height={0}
            className=" "
            style={{
              height: "220px",
              width: "300px",
              objectFit: "contain",
            }}
          />
        </div>
        <h2 className="fw-bolder mt-3"> ادخل كلمة المرور الجديدة </h2>
      </div>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          new_password: "",
          confirm_new_password: "",
        }}
        onSubmit={(values) => resetPassword(values)}
      >
        <Form>
          <div className="d-flex justify-content-center flex-column align-items-center mt-">
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
            <div className="mt-3 d-flex justify-content-between gap-4">
              <Button type="submit" isLoading={pendingReset}>
                تاكيد
              </Button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ResetPassword;
