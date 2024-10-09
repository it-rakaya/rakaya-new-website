import React from "react";
import img1 from "../../../assets/Applications/figma.png";
import img2 from "../../../assets/Applications/jisr.png";
import img3 from "../../../assets/Applications/googel.png";
import img4 from "../../../assets/Applications/trello.png";
import Image from "next/image";
import Link from "next/link";

function CardApplication({image , link}) {


  return (
    <div className="row row-cols-2 row-cols-md-4 mx-md-1  gap-2 justify-content-center justify-content-md-start  align-items-between mb-5 over_margin">
      
        <Link
          href={`${link}`}
          // key={index}
          target="_blank"
          className="teamShadow rounded-4 d-flex align-items-center carApp justify-content-center"
        >
          <div>
            <div className="">
              <Image
                alt="image"
                src={image}
                width={0}
                height={0}
                className="w-100 h-100"
              />
            </div>
          </div>
        </Link>

    </div>
  );
}

export default CardApplication;
