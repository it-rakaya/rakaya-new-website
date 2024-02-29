import Container from "@/components/Container";
import Header from "@/components/jobs/Header";
import VisionLayout from "@/components/vision/VisionLayout";
import { works } from "@/data";
import React from "react";

const Work = () => (
  <>
    <Header text={"كيف تعمل ركايا"} />

    <VisionLayout title={"كيف تعمل ركايا"}>
      <Container className="mt-5 me-0 col-12 col-lg-10">
        <div className="">
          {works.map((item, index) => (
            <div key={index}>
              <h3 className="badge bg-forth border-primary py-2 px-3 text-primary fw-bold fs-5 my-2">
                {item.title}
              </h3>

              <p className="text-justify">{item?.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </VisionLayout>
  </>
);

export default Work;
