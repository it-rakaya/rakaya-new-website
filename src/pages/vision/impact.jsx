import VisionLayout from "@/components/vision/VisionLayout";
import Image from "next/image";
import React from "react";
import defaultImage from "../../../assets/defaultImage.png";
const impact = () => {
  return (
    <VisionLayout>
      <div className="row align-items-end">
        <div className="col-3">
          <Image
            alt=""
            src={defaultImage}
            width={"200"}
            height={"200"}
            className="rounded-3 w-fit"
          />
        </div>
        <div className="col-9">
          <div className="d-flex align-items-center gap-2">
            <h3>الاسم:</h3>
            <p
              className="m-0
            "
            >
              agittis cursus amet neque
            </p>
          </div>
          <div className="d-flex align-items-center gap-2 mt-4">
            <h3>البوزشن:</h3>
            <p className="m-0">
              agittis cursus amet neque agittis cursus amet neque{" "}
            </p>
          </div>
        </div>
        <div className="mt-5 col-11">
          <p>
            Lorem ipsum dolor sit amet consectetur. Sagittis eget in nunc
            tincidunt. Maecenas sit eu gravida in vitae euismod dictum. Turpis
            molestie sagittis cursus amet neque cras tempus lacus facilisis.
            Morbi vitae euismod dictum. Turpis molestie sagittis cursus amet
            neque cras tempus lacus facilisis. Morbi volutpat neque maecenas est
            euismod egestas habitaneuismod egestas habitant mauris feugiat.
          </p>
        </div>
      </div>
    </VisionLayout>
  );
};

export default impact;
