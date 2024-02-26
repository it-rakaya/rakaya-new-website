import Container from "@/components/Container";
import CustomHead from "@/components/CustomHead";
import Header from "@/components/jobs/Header";
import React from "react";

const Section = ({ title, children }) => (
  <Container className="m-0 p-0">
    <h1>{title}</h1>
    <p>{children}</p>
  </Container>
);

const TeamMember = ({ title, job }) => (
  <div className="col-6 col-lg-3 d-flex d-lg-block flex-column align-items-center">
    <h5 className="fw-semibold fs-5 my-0">{title}</h5>
    <h5 className="text-body-tertiary fw-regular fs-6">{job}</h5>
  </div>
);

function index() {
  return (
    <>
      <CustomHead title={"طريقك معنا"} description={"home page rakaya"} />

      <Header text={"طريقك معنا"} />

      <Container className="col-lg-6 mt-5">
        <p className="m-0 p-0 ">
          في ركايا نحن نعدّك كشريك لنا ونبدأ معك بخطة زمنية واضحة ، حيث تتواصل
          معنا إبتداءًا عن طريق البريد الإلكتروني أو إحدى طرق التواصل الأخرى
          الموجودة في الموقع ..  يقوم فريقنا بالاجتماع معك -عن بعد- لسماع
          متطلباتك وتحديد احتياجاتك وتلخيص أهم النقاط الرئيسية..  يرفع الفريق
          النقاط الرئيسية للاستشاري ويجتمع معك مجددًا للنقاش ومعرفة التطلّعات
          والأولويات للبحث عن حل الإشكالية وصياغة الحلول..   تقديم الحلول
          والتوصيات ووضع الخطط التحسينية وآلية واضحة لمتابعة التطبيق وتقييم
          النتائج.. 
        </p>
        <p className="m-0 p-0">
           تقديم الحلول والتوصيات ووضع الخطط التحسينية وآلية واضحة لمتابعة
          التطبيق وتقييم النتائج.. 
        </p>
      </Container>
    </>
  );
}

export default index;
