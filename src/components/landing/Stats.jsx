import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Container from "../Container";
    let currentCount = 0;

const StyledHeader = styled.h1`
  font-size: 3rem;
  font-weight: 700 !important;
`;
const Counter = ({ count }) => {
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const maxCount = parseInt(count.replace(/\D/g, ""), 10); 

    const increment = maxCount / 100;

    const intervalId = setInterval(() => {
      currentCount += increment;
      if (currentCount < maxCount) {
        setDisplayCount(Math.floor(currentCount));
      } else {
        clearInterval(intervalId);
        setDisplayCount(maxCount);
      }
    }, 20); 

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <motion.div initial={0} animate={displayCount}>
      +{displayCount.toLocaleString()}
    </motion.div>
  );
};
const Stat = ({ count, text }) => {
  return (
    <Container className={"col-6 col-md-3 text-center "}>
      <StyledHeader className="text-secondary fw-bold my-0 headingNumber">
        <Counter count={`${count}`} />
      </StyledHeader>
      <p className="fs-6 text-primary fw-semibold">{text}</p>
    </Container>
  );
};

const Stats = () => {
  return (
    <div className={"bg-forth "}>
      <div
        className={"row d-flex  justify-content-center m-auto py-5 my-5 w-100"}
      >
        <Stat count={"+3,000,000"} text={"وجبة"} />
        <Stat count={"+800"} text={"مهتم"} />
        <Stat count={"+10"} text={"شريك نجاح"} />
        <Stat count={"+32"} text={"موظف"} />
      </div>
    </div>
  );
};

export default Stats;
