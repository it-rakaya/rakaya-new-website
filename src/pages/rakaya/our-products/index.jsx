import CustomHead from "../../../components/CustomHead";
import Header from "../../../components/jobs/Header";
import fetchData from "../../../utils/fetchData";
import React from "react";
import Container from "../../../components/Container";
import VisionLayout from "../../../components/vision/VisionLayout";

const Product = ({ title, description, subTitle }) => (
  <Container>
    <div className="d-flex align-items-baseline mb-1 gap-3 text-gold ">
      <i className="bi bi-grid-1x2 fs-4"></i>
      <h4>{title}</h4>
    </div>
    <p
      className="text-justify p-0 m-0"
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    ></p>

    <p className="text-justify p-0 mt-2">{subTitle}</p>
  </Container>
);

const Index = ({ data }) => {
  const description = "منتجات نفخر بها ";
  return (
    <>
      <CustomHead title={"منتجاتنا"} description={description} />

      <Header text={"منتجاتنا"} />

      <VisionLayout title="">
        <div className="col-lg-10 col-md-10 me-0">
          {data?.products?.map((item, index) => (
            <Product
              key={index}
              title={item?.name}
              subTitle={item?.subTitle}
              description={item?.description}
            />
          ))}
        </div>
      </VisionLayout>
    </>
  );
};

export default Index;
export async function getServerSideProps(context) {
  const products = await fetchData("products");
  return {
    props: {
      data: products,
    },
  };
}
