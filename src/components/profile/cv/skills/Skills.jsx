import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import MainDataSkills from "./MainDataSkills";
import Button from "../../../Button";
import Main from "./Main";
import useFetch from "../../../../hooks/useFetch";
import SpinnerLoading from "../../../SpinnerLoading";
import NoData from "../../../NoData";
import CardProfile from "../../CardProfile";

function Skills() {
  const [showSkills, setShowSkills] = useState(true);
  const [mainData, setMainData] = useState({});

  const { data, isLoading, refetch } = useFetch({
    queryKey: [`candidate-skills`],
    endpoint: `candidate-skills`,
  });
  return (
    <div>
      {showSkills ? (
        <div>
          <div className="d-flex justify-content-between">
            <Button
              className="d-flex align-items-center gap-2 "
              onClick={() => {
                setShowSkills(false);

                setMainData({});
              }}
            >
              <IoMdAdd style={{ fontSize: "20px", color: "white" }} />
              اضافة مهارة جديدة
            </Button>
          </div>
          {isLoading ? (
            <div
              className="d-flex justify-content-between align-items-center "
              style={{
                height: "27vh",
              }}
            >
              <SpinnerLoading />
            </div>
          ) : data?.data?.skills?.length ? (
            data?.data?.skills?.map((item) => (
              <div onClick={() => setMainData(item)} key={item?.id}>
                <CardProfile
                  key={item?.id}
                  title={item?.skill}
                  subTitle={item?.years_of_experience}
                  refetch={refetch}
                  id={item?.id}
                  endpointDelete={"candidate-skills"}
                  setShowCard={setShowSkills}
                />
              </div>
            ))
          ) : (
            <NoData message={"لايوجد مهارات لديك"} />
          )}
        </div>
      ) : (
        <Main setShowCard={setShowSkills} refetch={refetch} mainData={mainData}  />
      )}
    </div>
  );
}

export default Skills;
