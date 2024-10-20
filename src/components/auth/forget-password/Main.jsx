import { Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useMutate } from "../../../hooks/useMutate";
import { notify } from "../../../utils/notify";
import Button from "../../Button";
import VerifyUser from "../VerifyUser";
import MainData from "./MainData";
function Main() {
  const [value, setValue] = useState();
  const {
    mutate: sendOTP,
    isPending,
    errorMessage,
    isSuccess,
  } = useMutate({
    mutationKey: ["send-otp"],
    endpoint: "send-otp",
    onSuccess: (data) => {
      notify("success", "تم ارسال رمز التحقق اليك");
    },

    formData: true,
  });

  return !isSuccess ? (
    <VerifyUser value={value} />
  ) : (
    <div>
      <div className="d-flex justify-content-center ">
        <Image
          src={"/My password-bro (2).png"}
          alt=""
          width={0}
          height={0}
          className=" "
          style={{
            height: "170px",
            width: "170px",
            objectFit: "contain",
          }}
        />
      </div>
      <h2 className="fw-bolder text-center mt-3  ">اعادة تعيين كلمة المرور</h2>
      <Formik
        initialValues={{
          phone: "",
          phone_code: "+966",
        }}
        onSubmit={(values) => {
          sendOTP(values);
          setValue(values);
        }}
      >
        <Form>
          {/* <ResetPasswordIcon/> */}

          <MainData errorMessage={errorMessage} isSuccess={isSuccess} />
          <div className="mt-2 w-100">
            <Button
              color="secondary"
              type="submit"
              isLoading={isPending}
              style={{ width: "100%" }}
            >
              اعادة تعيين
            </Button>
          </div>

          <div className="d-flex  justify-content-center align-items-center mt-3 gap-2">
            <p className="m-0 p-0">ليس لديك حساب ؟</p>
            <Link href={"/register"} className="text-gold ">
              سجل الان
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Main;
