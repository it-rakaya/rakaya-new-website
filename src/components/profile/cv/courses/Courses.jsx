import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import useFetch from "../../../../hooks/useFetch";
import Button from "../../../Button";
import Main from "./Main";
import SpinnerLoading from "../../../SpinnerLoading";
import NoData from "../../../NoData";
import CardProfile from "../../CardProfile";
import ButtonUpdateCv from "../../ButtonUpdateCv";
import { useAuth } from "../../../../context/auth/AuthProvider";

function Courses() {
  const [showCard, setShowCard] = useState(true);
  const [mainData, setMainData] = useState({});
  const { user } = useAuth();

  const { data, isLoading, refetch } = useFetch({
    queryKey: [`candidate-courses`],
    endpoint: `candidate-courses`,
  });
  return (
    <div>
      {showCard ? (
        <>
          <div className="d-flex justify-content-between align-items-center ">
            <Button
              className="d-flex align-items-center gap-2"
              onClick={() => {
                setShowCard(false);

                setMainData({});
              }}
              disabled={user?.has_courses == 0}
            >
              <IoMdAdd style={{ fontSize: "20px", color: "white" }} />
              اضافة دورة تدريبية
            </Button>

            {!data?.data?.courses?.length && (
              <ButtonUpdateCv
                label={"لايوجد  دورات تدريبية"}
                value={user?.has_courses}
                name="has_courses"
                checked={user?.has_courses == 0}
              />
            )}
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
                    title={item?.course_name}
                    subTitle={item?.organization_name}
                    endpointDelete={"candidate-courses"}
                    id={item?.id}
                    refetch={refetch}
                    setShowCard={setShowCard}
                    urlCertificate={item?.attachment_url}
                    showCertificate={!!item?.attachment_url}
                  />
                </div>
              ))
            ) : (
              <NoData message={" لايوجد دورات تدريبية لديك"} />
            )}
          </div>
        </>
      ) : (
        <Main setShowCard={setShowCard} refetch={refetch} mainData={mainData} />
      )}
    </div>
  );
}

export default Courses;
