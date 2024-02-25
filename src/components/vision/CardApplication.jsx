import React from "react";
import img1 from "../../../assets/Applications/figma.png";
import img2 from "../../../assets/Applications/jisr.png";
import img3 from "../../../assets/Applications/metting.png";
import img4 from "../../../assets/Applications/trello.png";

import Image from "next/image";

function CardApplication() {
  const images = [img1, img2, img3, img4, img4, img4];
  return (
    <div className="row row-cols-3 mx-3 gap-5 - align-items-between mb-5 over_margin">
      {images?.map((item, index) => (
        <div
          className="teamShadow rounded-4 d-flex align-items-center carApp justify-content-center"
          key={index}
        >
          <div className="">
            <Image alt="" src={item} width={0} height={0} className="w-auto" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardApplication;
