import { Form, Formik } from "formik";
import React from "react";
import MainData from "./MainData";
import { useMutate } from "../../hooks/useMutate";
import Button from "../Button";
import { notify } from "../../utils/toast";

function Main() {
  const { mutate: postData, isPending: loading } = useMutate({
    mutationKey: [`visitors`],
    endpoint: `visitors`,
    onSuccess: () => {
      notify("success", "تم الارسال بنجاح");
    },

    formData: true,
  });
  return (
    <div>
      <Formik
        initialValues={{
          full_name: "",
          event_name: "",
          email: "",
          phone_code: "",
          phone: "",
        }}
        onSubmit={(values) => postData(values)}
      >
        <Form>
          <MainData />
          <div className="mt-2 w-100">
            <Button
              color="secondary"
              type="submit"
              isLoading={loading}
              style={{ width: "100%" }}
            >
              تسجيل
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
export default Main;
