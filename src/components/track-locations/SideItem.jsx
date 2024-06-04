import Image from "next/image";
import Pusher from "pusher-js";
import * as React from "react";
import Filter from "./Filter";
import MainDataCharts from "./MainDataCharts";
import SpinnerLoading from "../SpinnerLoading";

export default function SideItem({
  setResetMap,
  isDarkMode,
  mainDataLocation,
  isLoading,
  setCollapsed
}) {
  React.useEffect(() => {
    const pusher = new Pusher("dd4472371972ca1c31dd", {
      cluster: "mt1",
      encrypted: true,
      // auth:"https://admin-dev.rmcc.sa/api",
      forceTLS: true,
    });

    const channel = pusher.subscribe(`ModelCRUD_changes`);

    return () => {
      // channel.unbind("Order-changes", handleEvent);
      pusher.unsubscribe(`ModelCRUD_changes`);
    };
  }, []);
  // setChartData(data);

  const numberOfPilgrims = mainDataLocation?.data?.pilgrams;
  const numberOfMentors = mainDataLocation?.data?.monitors;
  const numberOfSectors = mainDataLocation?.data?.sectors;
  const numberOfPilgrimsNationality =
    mainDataLocation?.data?.pilgrams_nationalities;
  const tickets_by_reason = mainDataLocation?.data?.tickets_by_reason;
  const tickets_by_danger = mainDataLocation?.data?.tickets_by_danger;
  const tickets_by_status = mainDataLocation?.data?.tickets_by_status;
  const supports_food_by_day = mainDataLocation?.data?.supports_food_by_day;
  const supports_water_by_day = mainDataLocation?.data?.supports_water_by_day;
  const meals_by_day = mainDataLocation?.data?.meals_by_day;
  const meals_by_status = mainDataLocation?.data?.meals_by_status;
  const monitors_table = mainDataLocation?.data?.monitors_table;
  const sectors_table = mainDataLocation?.data?.sectors_table;

  return (
    <div className={isLoading ?"hide-on-mobile" :""}>
      {/* <PusherComponent onData={setChartData}/> */}
      <div
        className=" bg-white h-[100vh] position-relative sidebar-track"
        style={{ marginTop: "5px" }}
      >
        <div
          className={`   d-flex justify-content-between align-items-center track-logos py-3 px-2`}
          style={{ backgroundColor: "#E9DFC6" }}
        >
          <div className="px-3 ">
            <Image
              src={"/track/Logo.png"}
              width={180}
              height={100}
              alt="logo"
            />
          </div>
          <div className="px-md-3 ">
            <Image
              src={"/track/HajjLogo.png"}
              width={180}
              height={60}
              alt="logo"
            />
          </div>
        </div>
        {!isLoading ? (
          <div className="">
            <MainDataCharts
              meals_by_day={meals_by_day}
              meals_by_status={meals_by_status}
              monitors_table={monitors_table}
              numberOfMentors={numberOfMentors}
              numberOfPilgrims={numberOfPilgrims}
              numberOfPilgrimsNationality={numberOfPilgrimsNationality}
              numberOfSectors={numberOfSectors}
              sectors_table={sectors_table}
              supports_food_by_day={supports_food_by_day}
              supports_water_by_day={supports_water_by_day}
              tickets_by_danger={tickets_by_danger}
              tickets_by_status={tickets_by_status}
              tickets_by_reason={tickets_by_reason}
              isDarkMode={isDarkMode}
            />
          </div>
        ) : (
          <div
            className="d-flex  align-items-center justify-content-center"
            style={{
              height: "72vh",
            }}
          >
            <SpinnerLoading />
          </div>
        )}
        <div
          className="position-absolute MainFilter"
        >
          <Filter
            setResetMap={setResetMap}
            mainDataLocation={mainDataLocation}
            
          />
        </div>
      </div>
    </div>
  );
}