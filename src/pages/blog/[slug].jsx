import React from "react";
import Container from "../../components/Container";
import CustomHead from "../../components/CustomHead";
import Header from "../../components/jobs/Header";
import fetchData from "../../utils/fetchData";

function DetailsBlog({ initialData }) {
  return (
    <>
      <CustomHead title={"مدونة ركايا"} description={"description"} />
      <Header
        text={initialData?.blog?.title}
        subTitle={initialData?.blog?.description}
        image={"/studio/headers-bg/4.webp"}
      />
      <Container className="col-lg-6 d-flex flex-column align-items-center py-4 rakayaStudio">
        <div className="mt-5 ">
        
          {/* <ShareSocialComp/> */}

          <div className="mt-4">
            <div
              style={{
                lineHeight: "40px",
                textAlign: "center",
              }}
              dangerouslySetInnerHTML={{ __html: initialData?.blog?.content }}
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default DetailsBlog;
export async function getServerSideProps(context) {
  const slug = context?.query?.slug;
  const blogs = await fetchData(`blogs/${slug}`);
  return {
    props: {
      initialData: blogs,
    },
  };
}
