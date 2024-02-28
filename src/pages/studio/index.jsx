import Container from "@/components/Container";
import CustomHead from "@/components/CustomHead";
import ImgContainer from "@/components/ImgContainer";
import Header from "@/components/jobs/Header";
import LargeCard from "@/components/services/LargeCard";
import SmallCard from "@/components/services/SmallCard";
import React from "react";

const index = () => {
  return (
    <>
      <CustomHead title={"قُمرة ركايا"} description={"home page rakaya"} />

      {/* <Header text={"قُمرة ركايا"} /> */}
      <Header
          text={"قُمرة ركايا"}
          subTitle={"هنا جميع أحداث ركايا"}
          image={'/studio/headers-bg/4.jpg'}
          // location
        />

      <Container className="col-lg-10 d-flex flex-column align-items-center py-4 ">
        <h1 className="align-self-start">{"احتفالات يوم التأسيس"}</h1>
        <Container className="d-flex align-items-center flex-lg-row flex-column-reverse gap-3 gap-lg-0">
          <Container className="col-lg-5">
            <SmallCard
              title={"المستشار نبيل عابد"}
              description={"مشاركة المستشار نبيل عابد حفلة يوم التأسيس مع فريق ركايا"}
              footer={"2024 Jan 14"}
              imgUrl={"/studio/studio/foundation-day/2.png"}
            />
            <SmallCard
              title={"ركايا"}
              description={"هدية تذكارية من المهندس حاتم باناصر إلى الاستاذ.أحمد الغريب"}
              footer={"2024 Jan 14"}
              imgUrl={"/studio/studio/foundation-day/3.jpeg"}
            />
            <SmallCard
              title={"الاستاذ مازن درار"}
              description={"مشاركة الاستاذ مازن درار حفلة يوم التأسيس مع فريق ركايا"}
              footer={"2024 Jan 14"}
              imgUrl={"/studio/studio/foundation-day/4.png"}

            />
          </Container>
          <Container className="col-lg-5">
            <ImgContainer className="rounded">
              <img
                className="img-fluid rounded"
                src="/studio/studio/foundation-day/1.jpeg"
                alt=""
                srcset=""
              />
            </ImgContainer>
          </Container>
        </Container>
        <hr className="col-10 my-5" />
        <h1 className="align-self-start">{"اتقان الرقمية"}</h1>
        <Container className="d-flex align-items-center flex-lg-row flex-column-reverse gap-3 gap-lg-0">
          <Container className="col-lg-5">
            <SmallCard
              title={"بوست سين"}
              description={"ليش دايمًا نتجنب نسأل ؟وليش البعض يعتبر السؤال مؤشر على الضعف و عدم المعرفة ؟"}
              footer={"2024 Jan 14"}
              imgUrl={"/studio/studio/etqan/2.png"}
            />
            <SmallCard
              title={"بوست جيم"}
              description={"الاجابة مهارة مهمة في تواصلنا تتطلب مننا نفهم ونسمع كويس عشان نقدر نوّصل المعلومة بوضوح ، وقدرتنا على توصيل الإجابة تعكس مهارتنا في فن الاجابة"}
              footer={"2024 Jan 14"}
              imgUrl={"/studio/studio/etqan/3.png"}
            />
            <SmallCard
              title={"بوست الاحتراق الوظيفي"}
              description={"‏‎اذا كنت بتعاني من وظيفتك انتبه توصل للـ#الاحتراق_الوظيفي 🚫              "}
              footer={"2024 Jan 14"}
              imgUrl={"/studio/studio/etqan/4.jpg"}

            />
          </Container>
          <Container className="col-lg-5">
            <ImgContainer className="rounded">
              <img
                className="img-fluid rounded"
                src="/studio/studio/etqan/1.png"
                alt=""
                srcset=""
              />
            </ImgContainer>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default index;
