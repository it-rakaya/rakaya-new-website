import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Button from "../../../Button";
import NoData from "../../../NoData";
import Main from "./Main";
import { RiDeleteBinLine } from "react-icons/ri";
import useFetch from "../../../../hooks/useFetch";
import SpinnerLoading from "../../../SpinnerLoading";
import CardProfile from "../../CardProfile";

function Education() {
  const [showCard, setShowCard] = useState(true);
  const [mainData, setMainData] = useState({});
  const { data, isLoading, refetch } = useFetch({
    queryKey: [`candidate-education`],
    endpoint: `candidate-education`,
  });

  return (
    <div className="">
      {showCard ? (
        <div>
          <div className="d-flex justify-content-between">
            <Button
              className="d-flex align-items-center gap-2 "
              onClick={() => {
                setShowCard(false);
                setMainData({});
              }}
            >
              <IoMdAdd style={{ fontSize: "20px", color: "white" }} />
              اضافة مستوى تعليمي
            </Button>
          </div>
          <div>
            {isLoading ? (
              <div
                className="d-flex justify-content-between align-items-center "
                style={{
                  height: "27vh",
                }}
              >
                <SpinnerLoading />
              </div>
            ) : data?.data?.education?.length ? (
              data?.data?.education?.map((item) => (
                <div onClick={() => setMainData(item)} key={item?.id}>
                  <CardProfile
                    title={item?.education_level}
                    subTitle={item?.university}
                    id={item?.id}
                    refetch={refetch}
                    endpointDelete={"candidate-education"}
                    setShowCard={setShowCard}
                  />
                </div>
              ))
            ) : (
              <NoData message={" لايوجد مستوى تعليمي لديك"} />
            )}
          </div>
        </div>
      ) : (
        <Main setShowCard={setShowCard} refetch={refetch} mainData={mainData} />
      )}
    </div>
  );
}

export default Education;
