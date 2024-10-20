import { Form, Formik } from "formik";
import React, { useState } from "react";
import OTPInput from "../form/OTPInput";
import Button from "../Button";
import { useMutate } from "../../hooks/useMutate";
import { notify } from "../../utils/notify";
import Image from "next/image";
import ResetPassword from "./ResetPassword";
import Cookies from "js-cookie";

function VerifyUser({value}) {
  const [otp, setOtp] = useState("");
  
  const [showResetPassword, setShowResetPassword] = useState(false);
  const { mutate: verifyPhone, isPending: pendingVerify } = useMutate({
    mutationKey: [`verify-user`],
    endpoint: `verify-user`,
    onSuccess: (data) => {
      notify("success", "تم التحقق من رقم الهاتف");
      setShowResetPassword(true)
      Cookies.set("token", data?.data?.token);
    },
    onError: (e) => {
      notify("error", e.response?.data?.message);
    },
    formData: true,
  });
  return !showResetPassword ? (
    <ResetPassword />
  ) : (
    <div>
      <div className="text-center">
        <div className="d-flex justify-content-center ">
          <Image
            src={"/Two factor authentication-rafiki (1).png"}
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
        <h2 className="fw-bolder mt-3"> ادخل رمز التحقق </h2>
        <p>تم ارسال رمز تحقق على رقم الجوال</p>
      </div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <div className="d-flex justify-content-center flex-column align-items-center mt-">
            <OTPInput setOtp={setOtp} otp={otp} />
            <div className="mt-3 d-flex justify-content-between gap-4">
              <Button
                onClick={() =>
                  verifyPhone({
                    value: otp,
                    ...value
                  })
                }
                isLoading={pendingVerify}
                disabled={otp.length != 4}
              >
                تحقق
              </Button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default VerifyUser;
