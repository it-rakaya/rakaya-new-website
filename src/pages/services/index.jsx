import Container from "@/components/Container";
import SmallCard from "@/components/services/SmallCard";
import React from "react";

const index = () => {
  return (
    <Container className="col-lg-10">
      <h1>Services</h1>
      <Container className="col-lg-12 d-lg-flex align-items-center">
        <Container className="col-lg-5">
          <SmallCard
            title={"Hello World"}
            description={"ajwdkawjkldklakldjkaldjklawkjldkjlawjkldakjl"}
            footer={"2024 Jan 14"}
            imgUrl={
              "https://images.unsplash.com/photo-1576675466684-456bcdeccfbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <SmallCard
            title={"Hello World"}
            description={"ajwdkawjkldklakldjkaldjklawkjldkjlawjkldakjl"}
            footer={"2024 Jan 14"}
            imgUrl={
              "https://images.unsplash.com/photo-1576675466684-456bcdeccfbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <SmallCard
            title={"Hello World"}
            description={"ajwdkawjkldklakldjkaldjklawkjldkjlawjkldakjl"}
            footer={"2024 Jan 14"}
            imgUrl={
              "https://images.unsplash.com/photo-1576675466684-456bcdeccfbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </Container>
        <Container className="col-lg-5">
          <img
            className="rounded img-fluid"
            src="https://images.unsplash.com/photo-1560851691-ebb64b584d3d?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            srcset=""
          />
        </Container>
      </Container>
    </Container>
  );
};

export default index;
