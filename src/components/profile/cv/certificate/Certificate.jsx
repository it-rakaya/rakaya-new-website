import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import useFetch from "../../../../hooks/useFetch";
import Button from "../../../Button";
import NoData from "../../../NoData";
import SpinnerLoading from "../../../SpinnerLoading";
import CardProfile from "../../CardProfile";
import Main from "./Main";

function Certificate() {
  const [showCard, setShowCard] = useState(true);
  const [mainData, setMainData] = useState({});

  const { data, isLoading, refetch } = useFetch({
    queryKey: [`candidate-certificates`],
    endpoint: `candidate-certificates`,
  });
  return (
    <div>
      {showCard ? (
        <>
          <div className="d-flex justify-content-between">
            <Button
              className="d-flex align-items-center gap-2"
              onClick={() => {
                setShowCard(false);
                setMainData({});
              }}
            >
              <IoMdAdd style={{ fontSize: "20px", color: "white" }} />
              اضافة شهادة
            </Button>
          </div>
          <div className="row gap-4">
            {isLoading ? (
              <div
                className="d-flex justify-content-between align-items-center "
                style={{
                  height: "27vh",
                }}
              >
                <SpinnerLoading />
              </div>
            ) : data?.data?.courses?.length ? (
              data?.data?.courses?.map((item) => (
                <div onClick={() => setMainData(item)} key={item?.id}>
                  <CardProfile
                    key={item?.id}
                    title={item?.certificate_name}
                    endpointDelete={"candidate-certificates"}
                    id={item?.id}
                    refetch={refetch}
                    setShowCard={setShowCard}
                  />

                </div>
              ))
            ) : (
              <NoData message={" لايوجد شهادات لديك"} />
            )}
          </div>
        </>
      ) : (
        <Main setShowCard={setShowCard}  mainData={mainData} refetch={refetch}/>
      )}
    </div>
  );
}

export default Certificate;
