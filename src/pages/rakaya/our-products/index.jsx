import CustomHead from "../../../components/CustomHead";
import Header from "../../../components/jobs/Header";
import fetchData from "../../../utils/fetchData";
import React, { useState, useEffect } from "react";
import Container from "../../../components/Container";
import VisionLayout from "../../../components/vision/VisionLayout";
import Loading from "../../../components/Loading";

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

const Index = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(!initialData);
  useEffect(() => {
    if (!initialData) {
      const fetchDataAsync = async () => {
        setLoading(true); 
        const products = await fetchData("products");
        setData(products);
        setLoading(false); 
      };

      fetchDataAsync();
    }
  }, [initialData]);

  const description = "منتجات نفخر بها ";
  return (
    <>
      <CustomHead title={"منتجاتنا"} description={description} />

      <Header text={"منتجاتنا"} />

      <VisionLayout title="">
        <div className="col-lg-10 col-md-10 me-0">
          {loading ? ( 
            <Loading/>
          ) : (
            data?.products?.map((item, index) => (
              <Product
                key={index}
                title={item?.name}
                subTitle={item?.subTitle}
                description={item?.description}
              />
            ))
          )}
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
      initialData: products || null,
    },
  };
}
