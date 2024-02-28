import Container from "@/components/Container";
import Header from "@/components/jobs/Header";
import CardApplication from "@/components/vision/CardApplication";
import VisionLayout from "@/components/vision/VisionLayout";
import React from "react";
const Program = ({ title, description }) => (
  <Container>
    <div className="d-flex align-items-baseline mb-1 gap-3 text-gold">
      <i className="bi bi-grid-1x2 fs-4"></i>
      <h4>{title}</h4>
    </div>
    <p>{description}</p>
  </Container>
);

const programs = () => {
  return (
    <>
      <Header text={"برامج نستخدمها"} />

    <VisionLayout>
      <Program
        title="جسر"
        description="شرح مختصر شرح مختصر شرح مختصر شرح مختصر شرح مختصر شرح مختصر "
      />
      <Program
        title="تريلو"
        description="شرح مختصر شرح مختصر شرح مختصر شرح مختصر شرح مختصر شرح مختصر "
      />
      <CardApplication/>
    </VisionLayout>
    </>
  );
};

export default programs;
