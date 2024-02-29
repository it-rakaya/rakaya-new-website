import Container from "@/components/Container";
import Header from "@/components/jobs/Header";
import CardApplication from "@/components/vision/CardApplication";
import VisionLayout from "@/components/vision/VisionLayout";
import { program } from "@/data";
import React from "react";
const Program = ({ title, description, items }) => (
  <Container>
    <div className="d-flex align-items-baseline mb-1 gap-3 text-gold">
      <i className="bi bi-grid-1x2 fs-4"></i>
      <h4>{title}</h4>
    </div>
    <p>{description}</p>
    <ul className="mx-3">
      {items?.map((item, index) => (
        <li key={index}>{item?.item}</li>
      ))}
    </ul>
  </Container>
);

const programs = () => {
  return (
    <>
      <Header text={"برامج نستخدمها"} />

      <VisionLayout>
        {program?.map((item, index) => (
          <Program
            key={index}
            title={item?.title}
            description={item?.description}
            items={item?.items}
          />
        ))}

        <CardApplication />
      </VisionLayout>
    </>
  );
};

export default programs;
