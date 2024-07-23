import Container from "@/components/Container";
import AvailableJobLayout from "@/components/jobs/available_job/AvailbleJobLayout";
import ItemAvailableJob from "@/components/jobs/available_job/ItemAvailableJob";
import { DarkModeContext } from "@/context/DarkModeContext";
import React, { useContext } from "react";

function AvailableJob() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <>
      <AvailableJobLayout hiddenMenu> 
        <div className="">
          <Container className="m-auto  col-md-7 ">
            <ItemAvailableJob />
            <ItemAvailableJob />

            <ItemAvailableJob />
          </Container>
        </div>
      </AvailableJobLayout>
    </>
  );
}

export default AvailableJob;
