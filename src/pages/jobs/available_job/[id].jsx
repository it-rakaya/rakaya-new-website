import React from "react";
import AvailableJobLayout from "../../../components/jobs/available_job/AvailbleJobLayout";
import SideMenuJob from "../../../components/jobs/available_job/SideMenuJob";
import fetchData from "../../../utils/fetchData";

function DetailsJob(DetailsJob) {
  console.log("🚀 ~ DetailsJob ~ DetailsJob:", DetailsJob)
  return (
    <div style={{ backgroundColor: "#e3e3e35e", height: "100%" }} className="">
      <AvailableJobLayout>
        <SideMenuJob DetailsJob={DetailsJob} />
      </AvailableJobLayout>
    </div>
  );
}

export default DetailsJob;

export async function getServerSideProps(context) {
  const job_id = context?.query?.id
  const DetailsJob = await fetchData(`vacancies/${job_id}`);
  return {
    props: {
      DetailsJob,
    },
  };
}
