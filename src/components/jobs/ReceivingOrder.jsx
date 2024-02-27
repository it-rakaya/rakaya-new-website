import React from "react";
import Button from "../Button";
import Link from "next/link";

function ReceivingOrder() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center my-5 gap-3">
      <div className="d-flex align-items-center justify-content-center  ">
        <p className="p-0 m-0 fw-bold">رقم الطلب: </p>
        <p className="text-gold p-0 m-0">#####</p>
      </div>
      <div>
        <p className="fw-bold p-0 m-0">تم استلام طلبك بنجاح</p>
      </div>
      <div>
        <Link href={'/'}>
        <Button color="secondary">العودة للصفحة الرئيسية</Button>
        </Link>
      </div>
    </div>
  );
}

export default ReceivingOrder;
