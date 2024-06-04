import "leaflet/dist/leaflet.css";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import SpinnerLoading from "../SpinnerLoading";
import { useFormikContext } from "formik";

function DraggableMarkerSectors({
  position,
  setPosition,
  DetailsSectorData,
  setIdSector,
  id,
  icon,
  LoadingSector,
}) {
  const [draggable, setDraggable] = useState(false);
  const markerRef = useRef(null);
  const map = useMap();
  const { values } = useFormikContext();

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
      popupopen() {
        setIdSector(id);
      },
    }),
    [setPosition, id, setIdSector]
  );

  useEffect(() => {
    map.setView(position, 15);
  }, [values?.organization_id]);

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
      icon={icon}
    >
      <Popup minWidth={180}>
        {LoadingSector ? (
          <div className="d-flex  align-items-center justify-content-center">
            <SpinnerLoading />
          </div>
        ) : (
          <div className="d-flex flex-column items-center w-100" dir="">
            <div className="d-flex align-items-center justify-content-center text-center gap-2 mt-2">
              <p className="fw-bolder fs-6" style={{ color: "#C9B171" }}>
                {DetailsSectorData?.data?.sector?.label} -{" "}
                {DetailsSectorData?.data?.sector?.facility_name}
              </p>
            </div>
            <div className="d-flex align-items-center gap-2 mt-2">
              <p className="" style={{ color: "#C9B171" }}>
                المنظمة:
              </p>

              <p className="">
                {DetailsSectorData?.data?.sector?.organization?.name}
              </p>
            </div>
            <div className="d-flex align-items-center gap-2 mt-2">
              <p className="" style={{ color: "#C9B171" }}>
                اسم رئيس المركز:
              </p>

              <p className="">{DetailsSectorData?.data?.sector?.manager_id}</p>
            </div>
            <div className="d-flex align-items-center gap-2 mt-2">
              <p className="" style={{ color: "#C9B171" }}>
                {" "}
                رئيس جودة وتشغيل:
              </p>

              <p className="">{DetailsSectorData?.data?.sector?.boss_name}</p>
            </div>
            <div className="d-flex align-items-center gap-2 mt-2">
              <p className="" style={{ color: "#C9B171" }}>
                مشرف جودة وتشغيل:
              </p>

              <p className="">
                {DetailsSectorData?.data?.sector?.supervisor_name}
              </p>
            </div>

            <div className="d-flex align-items-center gap-2 mt-2">
              <p className="" style={{ color: "#C9B171" }}>
                جنسية الحجاج:
              </p>

              <p className="">{DetailsSectorData?.data?.sector?.nationality}</p>
            </div>
            <div className="d-flex align-items-center gap-2 mt-2">
              <p className="" style={{ color: "#C9B171" }}>
                عدد الحجاج:
              </p>

              <p className="">
                {DetailsSectorData?.data?.sector?.guest_quantity}
              </p>
            </div>
            <div className="d-flex align-items-center gap-2 mt-2">
              <p className="" style={{ color: "#C9B171" }}>
                رقم الشاخص:
              </p>

              <p className="">{DetailsSectorData?.data?.sector?.sight}</p>
            </div>
          </div>
        )}
      </Popup>
    </Marker>
  );
}

export default DraggableMarkerSectors;
