import Container from "@/components/Container";
import CustomHead from "@/components/CustomHead";
import FinalSubmit from "@/components/contact-us/FinalSubmit";
import MainData from "@/components/contact-us/MainData";
import Header from "@/components/jobs/Header";
import { usePostData } from "@/hooks/usePostData";
import React from "react";

const Index = () => {
  const { isLoading, postData, isSuccess } = usePostData("/contact-us");

  return (
    <>
      <CustomHead title={"تواصل معنا"} description={"home page rakaya"} />

      <Header text={"تواصل معنا"} />

      <Container className="px-3 px-md-0  col-lg-6 my-5">
        {!isSuccess ? (
          <FinalSubmit />
        ) : (
          <>
            <p style={{ lineHeight: "2.2", fontWeight: "500" }}>
              أهلًا، في حال كانت لديك أي اقتراحات تخص ما تنتجه ركايا، أو أي
              مصادر أو محتوى قيّم قد يساعدنا في إكمال شيء مما ابتدأنا، أو حتى
              أسئلة لفريق العمل، أو لتقديم طلبات العمل والتدريب مع ركايا، أو عرض
              شراكة بيننا، يمكنك الوصول لنا سريعًا عبر التواصل معنا على بريد
              أهلًا، وسنوجهك للشخص المطلوب والإدارة المسؤولة في ركايا فورًا.
            </p>
            <MainData postData={postData} isLoading={isLoading} />
          </>
        )}
      </Container>
    </>
  );
};

export default Index;
