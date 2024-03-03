import Container from "@/components/Container";
import CustomHead from "@/components/CustomHead";
import ImgContainer from "@/components/ImgContainer";
import Header from "@/components/jobs/Header";
import SmallCard from "@/components/services/SmallCard";
import { postsStudio } from "@/data";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <>
      <CustomHead title={"قُمرة ركايا"} description={"home page rakaya"} />
      <Header
        text={"قُمرة ركايا"}
        subTitle={"هنا جميع أحداث ركايا"}
        image={"/studio/headers-bg/4.png"}
      />

      <Container className="col-lg-10 d-flex flex-column align-items-center py-4 ">
        {postsStudio.map((item, index) => (
          <>
            <h1 className="align-self-start">{item?.headTitle}</h1>
            <Container className="d-flex align-items-center flex-lg-row flex-column-reverse gap-3 gap-lg-0">
              <Container className="col-lg-5">
                {item?.posts?.map((supItem, index) => (
                  <SmallCard
                    key={index}
                    title={supItem?.title}
                    description={supItem?.desc}
                    footer={"2024 Jan 14"}
                    imgUrl={supItem?.image}
                  />
                ))}
              </Container>
              <Container className="col-lg-5">
                <ImgContainer
                  className="rounded coverImageStudio"
                  style={{ width: "450px", height: "300px" }}
                >
                  <Image
                    className="img-fluid rounded"
                    src={item?.coverPost}
                    alt=""
                    srcset=""
                    width={0}
                    height={0}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </ImgContainer>
              </Container>
            </Container>
            <hr className="col-10 my-5" />
          </>
        ))}
      </Container>
    </>
  );
};

export default index;
