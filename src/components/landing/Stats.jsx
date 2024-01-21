import React from "react";
import Container from "../Container";

const Stat = ({ count, text }) => {
   return (
      <Container className={"col-6 col-md-3 text-center"}>
         <p className="fs-1 text-primary fw-bold">{count}</p>
         <p className="fs-5 text-dark fw-semibold">{text}</p>
      </Container>
   );
};

const Stats = () => {
   return (
      <div className="container py-5">
         <div className={"row d-flex justify-content-center"}>
            <Stat count={"+50"} text={"Subscribers"} />
            <Stat count={"+50"} text={"Subscribers"} />
            <Stat count={"+50"} text={"Subscribers"} />
            <Stat count={"+50"} text={"Subscribers"} />
            <Stat count={"+50"} text={"Subscribers"} />
            <Stat count={"+50"} text={"Subscribers"} />
            <Stat count={"+50"} text={"Subscribers"} />
            <Stat count={"+50"} text={"Subscribers"} />
         </div>
      </div>
   );
};

export default Stats;
