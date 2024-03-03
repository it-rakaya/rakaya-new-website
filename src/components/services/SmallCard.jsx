import React from "react";
import Container from "../Container";
import ImgContainer from "../ImgContainer";
import Image from "next/image";

const SmallCard = ({ title, description, footer, imgUrl }) => {
  return (
    <Container className="d-lg-flex my-lg-3 p-0">
      <ImgContainer
        className="col-lg-5 my-3 my-lg-0 rounded "
        style={{ width: "200px", height: "125px" }}
      >
        <Image
          className="img-fluid rounded w-100 h-100"
          src={imgUrl}
          alt="image"
          srcset=""
          height={0}
          width={0}
          style={{ objectFit: "cover" }}
        />
      </ImgContainer>
      <Container className="col-lg-6  mx-lg-3 p-0 position-relative">
        <h4>{title}</h4>
        <p className="text-break text-justify">{description}</p>
        {/* <p className='position-absolute bottom-0 p-0 m-0'>{footer}</p> */}
      </Container>
    </Container>
  );
};

export default SmallCard;
