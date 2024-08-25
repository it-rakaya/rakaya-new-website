import useFetch from "../../hooks/useFetch";
import usePusher from ".././hooks/usePusher";
import { useFormikContext } from "formik";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import SideItem from "./SideItem";
import SpinnerLoading from "../SpinnerLoading";

const MainMap = dynamic(() => import("../../components/track-locations/MainMap"), {
  ssr: false,
});

export const initialCenter = {
  lat: 21.410453961653573,
  lng: 39.89736663051703,
};
function Main({ isDarkMode, collapsed }) {
  const { values, setFieldValue } = useFormikContext();
  const [resetMap, setResetMap] = useState(initialCenter);
  const queryParams = {
    monitor_id: values?.monitor_id || "",
    date: values?.date || "",
    sector_id: values?.sector_id || "",
    organization_id: values?.organization_id || "",
    model: values?.modelName || "",
  };
  const searchParams = new URLSearchParams(queryParams);
  const endpoint = `refada-statistics?${searchParams.toString()}`;
  const [allData, setAllData] = useState({});
  const [showSpinner, setShowSpinner] = useState(true);

  const {
    data: mainDataLocation,
    isLoading,
    isSuccess,
    refetch,
  } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
  });

  useEffect(() => {
    if (!values?.modelName?.length) {
      setAllData(mainDataLocation?.data || {});
    } else if (values?.modelName?.length && isSuccess) {
      setAllData((prevData) => {
        const updatedData = { ...prevData };
        Object.keys(mainDataLocation?.data || {}).forEach((key) => {
          updatedData[key] = mainDataLocation.data[key];
        });
        return updatedData;
      });
      setShowSpinner(false);
    }
  }, [isSuccess, values?.modelName, mainDataLocation, values]);
  useEffect(() => {
    refetch();
  }, [refetch, values]);

  usePusher("Ticket-changes", (data) => {
    setFieldValue("modelName", data?.model_name);
    refetch();
  });

  usePusher("Order-changes", (data) => {
    setFieldValue("modelName", data?.model_name);
    refetch();
  });

  usePusher("Support-changes", (data) => {
    setFieldValue("modelName", data?.model_name);
    refetch();
  });

  usePusher("Meal-changes", (data) => {
    setFieldValue("modelName", data?.model_name);
    refetch();
  });

  useEffect(() => {
    const type = localStorage.getItem("type");
    if (type === "ithraa") {
      setFieldValue("organization_id", 2);
    } else if (type === "albeit") {
      setFieldValue("organization_id", 1);
    }
  }, [setFieldValue]);

  return (
    <>
      <div
        className={
          collapsed && !isLoading
            ? "main-sidebar-track-mobile"
            : "main-sidebar-track"
        }
      >
        <SideItem
          setResetMap={setResetMap}
          resetMap={resetMap}
          isDarkMode={isDarkMode}
          mainDataLocation={allData}
          isLoading={isLoading && !allData?.length}
        />
      </div>
      <div className={collapsed ? "" : "mainMap"}>
        {showSpinner && isLoading && !allData?.length ? (
          <div
            className={`d-flex align-items-center justify-content-center`}
            style={{
              height: "100vh",
              backgroundColor: isLoading && isDarkMode ? "#2c3639" : "",
              color: isLoading && isDarkMode ? "white" : "",
            }}
          >
            <SpinnerLoading />
          </div>
        ) : (
          <MainMap resetMap={resetMap} mainDataLocation={allData} />
        )}
      </div>
    </>
  );
}

export default Main;
