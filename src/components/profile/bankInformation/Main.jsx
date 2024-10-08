import { Form, Formik } from "formik";
import React from "react";
import Button from "../../Button";
import MainData from "./MainData";
import { useMutate } from "../../../hooks/useMutate";
import { notify } from "../../../utils/notify";
import useFetch from "../../../hooks/useFetch";
import SpinnerLoading from "../../SpinnerLoading";
function Main() {
  const endpoint = `iban`;
  const { data, isLoading, refetch } = useFetch({
    queryKey: [endpoint],
    endpoint: endpoint,
  });

  const mainData = data?.data?.iban;
  const { mutate: postData, isPending } = useMutate({
    mutationKey: [endpoint],
    endpoint: endpoint,
    onSuccess: (data) => {
      notify("success", "تم تعديل البيانات بنجاح");
      refetch();
    },
    onError: (e) => {
      notify("error", e.response?.data?.message);
    },
    formData: true,
  });
  const initialValues = {
    account_name: mainData?.account_name || "",
    iban: mainData?.iban || "",
    owner_national_id: mainData?.owner_national_id || "",
    bank_id: mainData?.bank_id || "",
  };
  if (isLoading)
    return (
      <div
        className="d-flex justify-content-center align-items-center "
        style={{
          height: "200px",
        }}
      >
        <SpinnerLoading />
      </div>
    );
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => postData({ ...values, method: "PUT" })}
    >
      <Form>
        <MainData />
        <div className="mt-3 d-flex justify-content-between">
          <Button type="submit" isLoading={isPending}>
            حفظ
          </Button>
        </div>
      </Form>
    </Formik>
  );
}

export default Main;
