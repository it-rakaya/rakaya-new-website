import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import Main from "./Main";
import Button from "../../../Button";
import useFetch from "../../../../hooks/useFetch";
import NoData from "../../../NoData";
import SpinnerLoading from "../../../SpinnerLoading";
import CardProfile from "../../CardProfile";
import ButtonUpdateCv from "../../ButtonUpdateCv";
import { useAuth } from "../../../../context/auth/AuthProvider";

function Experience() {
  const [showCard, setShowCard] = useState(true);
  const [mainData, setMainData] = useState({});
  const {user} = useAuth()
  console.log("🚀 ~ Experience ~ user:", user)

  const { data, isLoading, refetch } = useFetch({
    queryKey: [`candidate-experiences`],
    endpoint: `candidate-experiences`,
  });

  return (
    <div className="">
      {showCard ? (
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <Button
              className="d-flex align-items-center gap-2 "
              onClick={() => {
                setShowCard(false);

                setMainData({});
              }}
              disabled={user?.has_experiences == 0}
            >
              <IoMdAdd style={{ fontSize: "20px", color: "white" }} />
              اضافة خبرة
            </Button>
            {!data?.data?.experiences?.length && (
              <ButtonUpdateCv
                label={"لايوجد لدي خبرات"}
                value={user?.has_experiences}
                name='has_experiences'
                checked={user?.has_experiences == 0}
              />
            )}
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
          ) : data?.data?.experiences?.length ? (
            data?.data?.experiences?.map((item) => (
              <div onClick={() => setMainData(item)} key={item?.id}>
                <CardProfile
                  title={item?.position}
                  subTitle={item?.employer}
                  endpointDelete={"candidate-experiences"}
                  id={item?.id}
                  refetch={refetch}
                  setShowCard={setShowCard}
                />
              </div>
            ))
          ) : (
            <NoData message={"لايوجد خبرات لديك"} />
          )}
        </div>
      ) : (
        <Main setShowCard={setShowCard} refetch={refetch} mainData={mainData} />
      )}
    </div>
  );
}

export default Experience;
