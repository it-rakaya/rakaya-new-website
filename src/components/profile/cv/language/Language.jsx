import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import Button from "../../../Button";
import Main from "./Main";
import useFetch from "../../../../hooks/useFetch";
import SpinnerLoading from "../../../SpinnerLoading";
import NoData from "../../../NoData";
import CardProfile from "../../CardProfile";

function Language() {
  const [showCard, setShowCard] = useState(true);
  const [mainData, setMainData] = useState({});

  const { data, isLoading, refetch } = useFetch({
    queryKey: [`candidate-languages`],
    endpoint: `candidate-languages`,
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
              اضافة لغة
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
            ) : data?.data?.languages?.length ? (
              data?.data?.languages?.map((item) => (
                <div onClick={() => setMainData(item)} key={item?.id}>
                  <CardProfile
                    key={item?.id}
                    title={item?.language}
                    endpointDelete={"candidate-languages"}
                    id={item?.id}
                    refetch={refetch}
                    setShowCard={setShowCard}
                    urlCertificate={item?.attachment_url}
                    showCertificate={!!item?.attachment_url}
                  />
                </div>
              ))
            ) : (
              <NoData message={"لايوجد لغات لديك"} />
            )}
          </div>
        </>
      ) : (
        <Main setShowCard={setShowCard} refetch={refetch} mainData={mainData} />
      )}
    </div>
  );
}

export default Language;
