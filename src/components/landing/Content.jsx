import React from "react";
import Container from "../Container";
import Join from "./Join";

const ContentComponent = ({ children, title }) => {
  return (
    <Container className="mb-3">
      <Container className="d-flex align-items-center gap-4 px-0">
        <h4 className="text-body-tertiary">{title}</h4>
        <hr className="flex-grow-1" />
      </Container>
      <Container>{children}</Container>
    </Container>
  );
};

const Content = () => {
  return (
    <Container className="mx-0 px-0 my-3">
      {/* <h3 className="fw-bold text-center my-4">Rakaya</h3> */}
      {/* <ContentComponent title={"Our Achievements"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis
        doloribus ducimus exercitationem laborum voluptatibus repudiandae nihil
        cum vitae dicta eum eligendi nulla dolorum sequi error, commodi eius
        harum perspiciatis. Minima dolore illum voluptate debitis ducimus,
        aliquam optio, iste veritatis dolor, cupiditate amet quisquam labore
        consectetur in dolores ab ratione.
      </ContentComponent>
      <ContentComponent title={"Our Vision"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis
        doloribus ducimus exercitationem laborum voluptatibus repudiandae nihil
        cum vitae dicta eum eligendi nulla dolorum sequi error, commodi eius
        harum perspiciatis. Minima dolore illum voluptate debitis ducimus,
        aliquam optio, iste veritatis dolor, cupiditate amet quisquam labore
        consectetur in dolores ab ratione.
      </ContentComponent>
      <Container className="text-center text-dark bg-forth py-5">
        <h2 className="text-primary">Header</h2>
        <p className="m-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          voluptatem commodi repudiandae quod numquam eveniet accusantium,
          libero saepe vel odit earum perferendis neque error ab officia nam ea
          quidem, adipisci, tenetur odio! Cumque numquam impedit eligendi
          consectetur unde, in nulla a quibusdam sint voluptatibus ut ipsum,
          aliquid velit quasi itaque.
        </p>
      </Container> */}

      <Join />
    </Container>
  );
};

export default Content;
