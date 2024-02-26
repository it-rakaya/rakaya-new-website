import VisionLayout from "@/components/vision/VisionLayout";
import Image from "next/image";
import React from "react";
import defaultImage from "../../../assets/defaultImage.png";
import CustomHead from "@/components/CustomHead";
const impact = () => {
  return (
    <>

      <VisionLayout>
        <div className="row align-items-end">
          <div className=" col-12 col-md-3 text-center">
            <Image
              alt=""
              src={defaultImage}
              width={"200"}
              height={"200"}
              className="rounded-3 w-fit"
            />
          </div>
          <div className="col-12 col-md-9 mt-2">
            <div className="d-flex align-items-center gap-2  justify-content-center justify-content-md-start">
              <h3>الاسم:</h3>
              <p
                className="m-0
            "
              >
                عبد الرحمن الشيخ
              </p>
            </div>
            <div className="d-flex align-items-center gap-2 mt-md-4  justify-content-center justify-content-md-start">
              <h3>البوزشن:</h3>
              <p className="m-0">مطور واجهات امامية</p>
            </div>
          </div>
          <div className="mt-5 col-12 col-md-11 justify-content-center">
            <p>
              Lorem ipsum dolor sit amet consectetur. Sagittis eget in nunc
              tincidunt. Maecenas sit eu gravida in vitae euismod dictum. Turpis
              molestie sagittis cursus amet neque cras tempus lacus facilisis.
              Morbi vitae euismod dictum. Turpis molestie sagittis cursus amet
              neque cras tempus lacus facilisis. Morbi volutpat neque maecenas
              est euismod egestas habitaneuismod egestas habitant mauris
              feugiat.
            </p>
          </div>
        </div>
      </VisionLayout>
    </>
  );
};

export default impact;
