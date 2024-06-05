import useFetch from "@/hooks/useFetch";
import usePusher from "@/hooks/usePusher";
import { useFormikContext } from "formik";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import SideItem from "./SideItem";
import { dataLocation } from "@/fakeData";
import SpinnerLoading from "../SpinnerLoading";

const MainMap = dynamic(() => import("@/components/track-locations/MainMap"), {
  ssr: false,
  // loading: () => <SpinnerLoading />,
});
function Main({ isDarkMode, collapsed }) {
  const { values, setFieldValue } = useFormikContext();
  const initialCenter = {
    lat: 21.3666652,
    lng: 40.00166666,
  };
  const [resetMap, setResetMap] = useState(initialCenter);
  const queryParams = {
    monitor_id: values?.monitor_id || "",
    date: values?.date || "",
    sector_id: values?.sector_id || "",
    organization_id: values?.organization_id || "",
  };
  const searchParams = new URLSearchParams(queryParams);
  const endpoint = `refada-statistics?${searchParams.toString()}`;
  const { data: mainDataLocation, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
  });
  usePusher("Order-changes", (data) => {
    console.log("🚀 ~ usePusher ~ data:", data);
  });
  useEffect(() => {
    const type = localStorage.getItem("type");
    if (type == "ithraa") {
      setFieldValue("organization_id", 2);
    } else if (type == "albeit") {
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
          isDarkMode={isDarkMode}
          mainDataLocation={mainDataLocation}
          isLoading={isLoading}
        />
      </div>

      <div className={collapsed ? "" : "mainMap"}>
        {isLoading ? (
          <div
            className={`d-flex  align-items-center justify-content-center `}
            style={{
              height: "100vh",
              backgroundColor: isLoading && isDarkMode ? "#2c3639" : "",
              color: isLoading && isDarkMode ? "white" : "",
            }}
          >
            <SpinnerLoading />
          </div>
        ) : (
          <MainMap resetMap={resetMap} mainDataLocation={mainDataLocation} />
        )}
      </div>
    </>
  );
}

export default Main;
