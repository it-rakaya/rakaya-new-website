import { Form, Formik } from "formik";
import React, { useState } from "react";
import Button from "../../../Button";
import PhoneInput from "../../../form/PhoneInput";
import OTPInput from "../../../form/OTPInput";
import { useMutate } from "../../../../hooks/useMutate";
import { notify } from "../../../../utils/notify";
import { MdVerified } from "react-icons/md";

function CheckPhone() {
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);

  const endpoint = `send-phone-otp`;
  const {
    mutate: sendOTP,
    isPending,
    isSuccess,
  } = useMutate({
    mutationKey: [endpoint],
    endpoint: endpoint,
    onSuccess: (data) => {
      notify("success", "تم ارسال رمز التحقق اليك");
      setShowOTP(true);
    },
    onError: (e) => {
      notify("error", e.response?.data?.message);
    },
    formData: true,
  });
  const { mutate: verifyPhone, isPending: pendingVerify } = useMutate({
    mutationKey: [`verify-phone-otp`],
    endpoint: `verify-phone-otp`,
    onSuccess: (data) => {
      notify("success", "تم التحقق من رقم الهاتف");
    },
    onError: (e) => {
      notify("error", e.response?.data?.message);
    },
    formData: true,
  });
  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          {showOTP ? (
            <div className="d-flex justify-content-center flex-column align-items-center">
              <OTPInput setOtp={setOtp} otp={otp} />
              <div className="mt-3 d-flex justify-content-between gap-4">
                <Button
                  onClick={() =>
                    verifyPhone({
                      value: otp,
                    })
                  }
                  isLoading={pendingVerify}
                  disabled={otp.length != 4}
                >
                  تحقق
                </Button>
                <Button onClick={() => setShowOTP(false)} color="secondary">
                  الغاء
                </Button>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-center m-4">
              <Button
                color="secondary"
                onClick={() => sendOTP({})}
                isLoading={isPending}
              >
                التحقق من رقم الجوال
              </Button>
            </div>
          )}
          {/* <div className="d-flex align-items-center gap-1 justify-content-center my-4 ">
            <MdVerified className="fs-4 text-success" />

            <p className="m-0">تم التحقق من رقم الجوال</p>
          </div> */}
        </Form>
      </Formik>
    </div>
  );
}

export default CheckPhone;
