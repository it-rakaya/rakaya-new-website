/* eslint-disable @next/next/no-img-element */
import CustomHead from "../../components/CustomHead";
import ImgContainer from "../../components/ImgContainer";
import Header from "../../components/jobs/Header";
import Team from "../../components/vision/Team";
import VisionLayout from "../../components/vision/VisionLayout";
import { TeamData, contentData } from "../../data";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Container from "../../components/Container";
import fetchData from "../../utils/fetchData";

const Index = (members) => {
  console.log("🚀 ~ Index ~ members:", members);
  const description =
    "ركايا هي أرض خصبة للأفكار الإبداعية والحلول اللامتناهية وأساليب العمل الإحترافية";
  return (
    <>
      <CustomHead title={"ركايا البديعة"} description={description} />

      <AnimatePresence mode="wait">
        <Header
          text="ركايا البديعة"
          subTitle="داعمين وممكنين لك..."
          image="/studio/headers-bg/11.webp"
          location
        />
        <VisionLayout title="عن ركايا البديعة">
          <ContentSection />
          <TeamSection members={members} />
        </VisionLayout>
      </AnimatePresence>
    </>
  );
};
const ContentSection = () => (
  <Container className="me-0 col-lg-12 text_Dark">
    {contentData.map((section, index) => (
      <React.Fragment key={index}>
        <TextImageSection
          textContent={section.textContent}
          imgSrc={section.imgSrc}
          subtitle={section?.subtitle}
        />
        <hr />
      </React.Fragment>
    ))}
    <p className="text-justify mt-4 text_Dark">
      ركايا بقطاعاتها وأفرادها معك .. من البداية حتى النهاية داعمين و ممكنين
    </p>
  </Container>
);
const TextImageSection = ({ textContent, imgSrc, subtitle }) => (
  <div className="row ">
    <div className="col-lg-8">
      <p className="text-justify p-0 m-0 text_Dark">{textContent}</p>
      <p className="text-justify m-0 p-0 mt-2 text_Dark">{subtitle}</p>
    </div>
    <Container className="col-lg-4">
      <ImgContainer className="rounded d-flex align-items-center p-3 my-4 my-md-0 justify-content-center">
        <img className="img-fluid rounded imgVision" src={imgSrc} alt="" />
      </ImgContainer>
    </Container>
  </div>
);
const TeamSection = ({ members }) => {
  // Sort members based on the arrangement property
  const sortedMembers = members?.data?.members?.sort(
    (a, b) => a?.arrangement - b?.arrangement
  );

  return (
    <div className="col-12 mt-5 m-auto m-md-0 mb-2 text_Dark">
      <h2>أعضاء ركايا</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3">
        {sortedMembers?.map((item, index) => (
          <div className=" " key={`team-member-${index}`}>
            <Team
              name={item?.name}
              position={item?.position}
              image={"/studio/team/man.webp"}
              desc={item?.description}
              linked_in={item?.linked_in}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
export async function getServerSideProps(context) {
  const members = await fetchData("members");
  return {
    props: {
      data: members,
    },
  };
}
