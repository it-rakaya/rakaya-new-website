import Link from "next/link";
import React, { useState, useEffect } from "react";
import Container from "../../../components/Container";
import CustomHead from "../../../components/CustomHead";
import Header from "../../../components/jobs/Header";
import CardApplication from "../../../components/vision/CardApplication";
import VisionLayout from "../../../components/vision/VisionLayout";
import fetchData from "../../../utils/fetchData";
import Loading from "../../../components/Loading"; 

const Program = ({ title, description, items, href }) => (
  <Container>
    <div className="d-flex align-items-baseline mb-1 gap-3 text-gold">
      <i className="bi bi-grid-1x2 fs-4"></i>
      <Link href={`${href}`} target="_blank">
        <h4>{title}</h4>
      </Link>
    </div>
    <p>{description}</p>
    <ul className="mx-3">
      {items?.map((item, index) => (
        <li key={index}>{item?.item}</li>
      ))}
    </ul>
  </Container>
);

const Programs = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(!initialData); 

  useEffect(() => {
    if (!initialData) {
      const fetchDataAsync = async () => {
        setLoading(true); 
        const programs = await fetchData("programs");
        setData(programs);
        setLoading(false);
      };

      fetchDataAsync();
    }
  }, [initialData]);

  const description =
    "هنا نبذة عن البرامج التي تسهّل عملنا بشكل أفضل، و تجعلنا نعمل بشكل أمثل";

  return (
    <>
      <CustomHead title={"برامج نستخدمها"} description={description} />

      <Header text={"برامج نستخدمها"} />

      <VisionLayout>
        {loading ? ( 
          <Loading />
        ) : (
          <>
            <p>
              هنا نبذة عن البرامج التي تسهّل عملنا بشكل أفضل، و تجعلنا نعمل
              بشكل أمثل
            </p>
            {data?.programs?.map((item, index) => (
              <Program
                key={index}
                title={item?.name}
                description={item?.description}
                href={item?.link}
              />
            ))}
            {data?.programs?.map(
              (item, index) =>
                item?.attachment_url && (
                  <CardApplication
                    image={item?.attachment_url}
                    key={item?.id}
                    link={item?.link}
                  />
                )
            )}
          </>
        )}
      </VisionLayout>
    </>
  );
};

export default Programs;

export async function getServerSideProps(context) {
  const programs = await fetchData("programs");
  return {
    props: {
      initialData: programs || null,
    },
  };
}
