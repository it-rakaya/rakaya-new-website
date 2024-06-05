import React, { useState } from "react";
import { IoFilter } from "react-icons/io5";
import SelectMonitors from "../form/SelectMonitors";
import { IoMdClose } from "react-icons/io";
import { IoReload } from "react-icons/io5";
import SelectOrganization from "../form/SelectOrganization";
import SelectSector from "../form/SelectSector";
import DatePickerComp from "../form/DatePickerComp";
import { useFormikContext } from "formik";

function Filter({ setResetMap, mainDataLocation }) {
  const monitors_table = mainDataLocation?.data?.monitors_table;
  const sectors_table = mainDataLocation?.data?.sectors_table;
  const { values, setFieldValue } = useFormikContext("");
  const [show, setShow] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const handleResetFilters = () => {
    setResetKey((prevKey) => prevKey + 1);
    setFieldValue("monitor_id", "");
    setFieldValue("date", "");
    setFieldValue("sector_id", "");
    setFieldValue("organization_id", "");
  };
  const showFilter =
    values?.monitor_id ||
    values?.date ||
    values?.sector_id ||
    values?.organization_id;

  return (
    <div
      className=" bg-white rounded-4 bg-dark "
      style={{
        boxShadow: "0 3px 6px rgba(0, 0, 0, 0.19), 0 3px 6px rgba(0, 0, 0, 0)",
        width: show ? "290px" : "80px",
        transition: " width 0.3s ease",
      }}
    >
      <div
        className="d-flex gap-1 align-items-center justify-content-between p-2  "
        style={{
          cursor: "pointer",
        }}
      >
        <div
          className={`d-flex gap-1 align-items-center ${
            show ? "justify-content-between" : "m-auto"
          } `}
          onClick={() => setShow(true)}
        >
          <IoFilter />
          <button className="bg-transparent text_Dark">فلترة</button>
        </div>
        {show && (
          <div className="fs-6" onClick={() => setShow(false)}>
            <IoMdClose />
          </div>
        )}
      </div>
      <div
        className="filter-container"
        style={{
          height: show ? "400px" : "0px",
          padding: "0 10px 0 10px",
        }}
      >
        <div>
          {show && (
            <div className="mt-3 mx-2">
              {showFilter && (
                <div
                  className="d-flex align-items-center gap-1 border justify-content-center p-1 rounded-2 m-auto mb-2  reloadMap"
                  style={{ cursor: "pointer" }}
                  onClick={handleResetFilters}
                >
                  <IoReload
                    style={{ fontSize: "12px" }}
                    color="rgb(201, 177, 113)"
                  />
                  <p
                    className="p-0 m-0 "
                    style={{
                      fontSize: "12px",
                      color: "rgb(201, 177, 113)",
                      fontWeight: "bold",
                    }}
                  >
                     اعادة تعيين
                  </p>
                </div>
              )}
              <div
                className="d-flex align-items-center gap-1 border justify-content-center p-1 rounded-2 m-auto mb-2  reloadMap"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setResetMap({
                    lat: 21.42251,
                    lng: 39.826168,
                  })
                }
              >
                <IoReload
                  style={{ fontSize: "12px" }}
                  color="rgb(201, 177, 113)"
                />
                <p
                  className="p-0 m-0 "
                  style={{
                    fontSize: "12px",
                    color: "rgb(201, 177, 113)",
                    fontWeight: "bold",
                  }}
                >
                  تحديث الخريطة
                </p>
              </div>
              <div className="">
                <SelectOrganization
                  key={`organization-${resetKey}`}
                  label={"اختر المنظمة"}
                  labelClassName={"label_track"}
                />
              </div>
              <div className="">
                <SelectSector
                  key={`sector-${resetKey}`}
                  label={"اختر مركز الخدمة"}
                  labelClassName={"label_track"}
                  sectors_table={sectors_table}
                />
              </div>
              <div className="">
                <SelectMonitors
                  key={`monitors-${resetKey}`}
                  label={"اختر المراقب"}
                  labelClassName={"label_track"}
                  monitors_table={monitors_table}
                />
              </div>
              <div>
                <DatePickerComp
                  key={`date-${resetKey}`}
                  label={"التاريخ"}
                  name={"date"}
                  labelClassName={"label_track"}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Filter;
