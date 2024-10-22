/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import Container from "../../components/Container";
import AvailableJobLayout from "../../components/jobs/available_job/AvailbleJobLayout";
import ItemAvailableJob from "../../components/jobs/available_job/ItemAvailableJob";
import NoData from "../../components/NoData";
import { DarkModeContext } from "../../context/DarkModeContext";
import fetchData from "../../utils/fetchData";

const Jobs = ({ jobs }) => {
  const { isDarkMode } = useContext(DarkModeContext);
  const visibleJobs = jobs?.vacancies?.filter(item => !!item?.is_visible);

  return (
    <>
      <AvailableJobLayout hiddenMenu>
        <div className="">
          <Container className="m-auto col-md-12 mx-md-5 ">
            {visibleJobs?.length ? (
              visibleJobs.map(item => (
                <div className="row  justify-content-between  " key={item?.id}>
                  <ItemAvailableJob item={item} key={item?.id} />

                </div>
              ))
            ) : (
              <NoData message={"لايوجد وظائف متاحة الان"} />
            )}
          </Container>
        </div>
      </AvailableJobLayout>
    </>
  );
};

export default Jobs;

export async function getServerSideProps(context) {
  const jobs = await fetchData("vacancies");
  return {
    props: {
      jobs,
    },
  };
}
