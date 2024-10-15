import React, { useEffect, useState } from "react";
import Container from "../Container";
import ImgContainer from "../ImgContainer";
import Image from "next/image";
import ShareSocialComp from "../ShareSocialComp";
import PreviewImage from "../PreviewImage";

const SmallCard = ({ title, description, imgUrl, id }) => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href); 
    }
  }, []);

  return (
    <Container className="d-lg-flex my-lg-3 p-0">
      <PreviewImage url={imgUrl}>
        <ImgContainer
          className="col-lg-5 my-3 my-lg-0 rounded shadow"
          style={{ width: "200px", height: "200px" }}
        >
          <Image
            className="img-fluid rounded w-100 h-100"
            src={imgUrl}
            alt="image"
            srcSet=""
            height={0}
            width={0}
            style={{ objectFit: "cover" }}
          />
        </ImgContainer>
      </PreviewImage>
      <Container className="col-lg-6 mx-lg-3 p-0 position-relative">
        <h5 className="fs-5 fw-bold text_Dark">{title}</h5>
        <p className="text-break text-justify mb-0 text_Dark">{description}</p>
        {id && (
          <ShareSocialComp
            postId={id}
            title={title}
            description={description}
            imgUrl={imgUrl}
            currentUrl={currentUrl}
          />
        )}
      </Container>
    </Container>
  );
};

export default SmallCard;
