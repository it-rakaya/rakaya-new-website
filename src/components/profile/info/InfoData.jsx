import { Form, Formik } from "formik";
import React from "react";
import Button from "../../Button";
import MainData from "./MainData";
import { useAuth } from "../../../context/auth/AuthProvider";
import { useMutate } from "../../../hooks/useMutate";
import { notify } from "../../../utils/notify";
import { getModifiedValues } from "../../../utils/Helpers";

function InfoData() {
  const { user, setUser } = useAuth();
  const initialValues = {
    f_name_ar: user?.f_name_ar || "",
    s_name_ar: user?.s_name_ar || "",
    t_name_ar: user?.t_name_ar || "",
    l_name_ar: user?.l_name_ar || "",
    f_name_en: user?.f_name_en || "",
    s_name_en: user?.s_name_en || "",
    t_name_en: user?.t_name_en || "",
    l_name_en: user?.l_name_en || "",
    email: user?.email || "",
    phone_code: "+966",
    phone: user?.phone || "",
    nationality_id: user?.nationality_id || "",
    country_of_residence: user?.country_of_residence_id || "",
    city: user?.city || "",
    gender: user?.gender || "",
    cv_attachment: user?.cv_attachment ? { value: user?.cv_attachment } : "",
    profile_attachment: user?.profile_attachment
      ? { value: user?.profile_attachment }
      : "",
  };

  const endpoint = `candidate-profile`;
  const { mutate: updateProfile, isPending } = useMutate({
    mutationKey: [endpoint],
    endpoint: endpoint,
    onSuccess: (data) => {
      notify("success", "تم تعديل البيانات بنجاح");
      setUser(data?.data?.candidate);
    },
    onError: (e) => {
      notify("error", e.response?.data?.message);
    },
    formData: true,
  });



  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          const modifiedValues = getModifiedValues(initialValues, values);
          updateProfile(modifiedValues);
        }}
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
    </div>
  );
}

export default InfoData;
