import Container from "@/components/Container";
import ItemAvailableJob from "@/components/jobs/available_job/ItemAvailableJob";
import JobsLayout from "@/components/jobs/JobsLayout";
import { DarkModeContext } from "@/context/DarkModeContext";
import React, { useContext } from "react";

function AvailableJob() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <>
      <JobsLayout>
        <div className="">
          <Container className="m-auto  col-md-7 ">
            <ItemAvailableJob />
            <ItemAvailableJob />

            <ItemAvailableJob />
          </Container>
        </div>
      </JobsLayout>
    </>
  );
}

export default AvailableJob;
