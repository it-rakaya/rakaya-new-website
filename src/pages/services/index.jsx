import Container from "@/components/Container";
import LargeCard from "@/components/services/LargeCard";
import SmallCard from "@/components/services/SmallCard";
import React from "react";

const index = () => {
  return (
    <Container className="col-lg-10 d-flex flex-column align-items-center py-4 ">
      <h1 className="align-self-start">Services</h1>
      <Container className="d-flex align-items-center flex-lg-row flex-column-reverse gap-3 gap-lg-0">
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
            description={"ajwdkawjkldklakldjkaldjklawkjldkjlawjkldakjlajkjhwajhfsjhjhksfjhksjwhajkdjwaadjwajh"}
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
      <hr className="col-10 my-5" />
      <Container className="d-lg-flex flex-wrap col-lg-12  mx-0">
        <LargeCard
          title={"Hello World"}
          date={"19 Jan 2070"}
          description={
            "jasjfhksjkhfhjksdfhshjfjsheajajgjgnhsjngsjngjnksejngsjnegjnksejngnjksengjksnejkgnjksegnjkesnjkgsnjks"
          }
          imgUrl={
            "https://images.unsplash.com/photo-1504416285472-eccf03dd31eb?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          source={"Okaz"}
        />
        <LargeCard
          title={"Hello World"}
          date={"19 Jan 2070"}
          description={
            "jasjfhksjkhfhjksdfhshjfjsheajajgjgnhsjngsjngjnksejngsjnegjnksejngnjksengjksnejkgnjksegnjkesnjkgsnjks"
          }
          imgUrl={
            "https://images.unsplash.com/photo-1533050487297-09b450131914?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          source={"Okaz"}
        />
        <LargeCard
          title={"Hello World"}
          date={"19 Jan 2070"}
          description={
            "jasjfhksjkhfhjksdfhshjfjsheajajgjgnhsjngsjngjnksejngsjnegjnksejngnjksengjksnejkgnjksegnjkesnjkgsnjks"
          }
          imgUrl={
            "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          source={"Okaz"}
        />
      </Container>
    </Container>
  );
};

export default index;
