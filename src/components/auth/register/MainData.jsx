import React from "react";
import Button from "../../Button";
import BaseInputField from "../../form/BaseInputField";
import PhoneInput from "../../form/PhoneInput";
import Link from "next/link";
import Label from "../../form/Label";
function MainData({loadingRegister}) {
  return (
    <div>
      <div>
        <Label required>الاسم كامل بالعربي</Label>
        <div className="row">
          <div className="col-md-3 px-1">
            <BaseInputField
              placeholder={"الاسم الاول"}
              name={"first_name_ar"}
              required={true}
            />
          </div>
          <div className="col-md-3 px-1">
            <BaseInputField placeholder={"الاسم الثاني"} name={"second_name_ar"} />
          </div>
          <div className="col-md-3 px-1">
            <BaseInputField placeholder={"الاسم الثالث"} name={"third_name_ar"} />
          </div>
          <div className="col-md-3 px-1">
            <BaseInputField placeholder={"الاسم الاخير"} name={"last_name_ar"} />
          </div>
        </div>
      </div>
      <div>
        <Label required>الاسم كامل بالانجليزية</Label>
        <div className="row">
          <div className="col-md-3 px-1">
            <BaseInputField placeholder={"الاسم الاخير"} name={"last_name_en"} />
          </div>
          <div className="col-md-3 px-1">
            <BaseInputField placeholder={"الاسم الثالث"} name={"third_name_en"} />
          </div>
          <div className="col-md-3 px-1">
            <BaseInputField placeholder={"الاسم الثاني"} name={"second_name_en"} />
          </div>
          <div className="col-md-3 px-1">
            <BaseInputField placeholder={"الاسم الاول"} name={"first_name_en"} />
          </div>
        </div>
      </div>
      <BaseInputField
        name={"email"}
        type={"email"}
        label={"البريد الالكتروني"}
        placeholder={"البريد الالكتروني"}
      />

      <PhoneInput label={"رقم الجوال"} />
      <BaseInputField
        name={"password"}
        label={"كلمة المرور"}
        type={"password"}
        placeholder={"كلمة المرور"}
      />
      <BaseInputField
        name={"confirm_password"}
        label={"تاكيد كلمة المرور"}
        type={"password"}
        placeholder={"تاكيد كلمة المرور"}
      />

      <div className="mt-2 w-100">
        <Button
          color="secondary"
          type="submit"
          isLoading={loadingRegister}
          style={{ width: "100%" }}
        >
          تسجيل
        </Button>
      </div>
      <div className="d-flex  justify-content-center align-items-center mt-3 gap-2">
        <p className="m-0 p-0"> لديك حساب بالفعل ؟</p>
        <Link href={"/login"} className="text-gold fw-bold ">
          تسجيل الدخول
        </Link>
      </div>
      <div className="d-flex  justify-content-center align-items-center  gap-2">
        <Link href={"/"} className="text-secondary fw-bold ">
          العودة الى الصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
}

export default MainData;
