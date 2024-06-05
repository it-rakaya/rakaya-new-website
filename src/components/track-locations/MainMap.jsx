import useFetch from "@/hooks/useFetch";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import DraggableMarker from "./DraggableMarker";
import DraggableMarkerSectors from "./DraggableMarkerSectors";

const defaultMarker = "/pins/pins/default.png";
const otherMarker = "/pins/pins/support.png";
const ithraaMarker = "/pins/pins/ithraa.png";
const albiteGustMarker = "/pins/pins/albiteGust.png";

const defaultIcon = new L.Icon({
  iconUrl: defaultMarker,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});
const otherIcon = new L.Icon({
  iconUrl: otherMarker,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});
const ithraaIcon = new L.Icon({
  iconUrl: ithraaMarker,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});
const albiteGustIcon = new L.Icon({
  iconUrl: albiteGustMarker,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

function MainMap({ resetMap, mainDataLocation }) {
  const [positions, setPositions] = useState([]);
  const [idMentor, setIdMentor] = useState("");
  console.log("🚀 ~ MainMap ~ idMentor:", idMentor);
  const [idSector, setIdSector] = useState("");
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(resetMap);
    }
  }, [resetMap]);

  const { data: mentorData, isLoading: LoadingMentor } = useFetch({
    endpoint: `location/${idMentor}`,
    queryKey: [`location/${idMentor}`],
    enabled: !!idMentor,
  });
  const { data: DetailsSectorData, isLoading: LoadingSector } = useFetch({
    endpoint: `sector/${idSector}`,
    queryKey: [`sector/${idSector}`],
    enabled: !!idSector,
  });

  const sectorsData = mainDataLocation?.data?.sectors_table;

  return (
    <div>
      <MapContainer
        center={resetMap}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "100%" }}
        whenCreated={(mapInstance) => {
          mapRef.current = mapInstance;
        }}
      >
        {/* <TileLayer
          attribution="Google Maps"
          url={`https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}&key=AAIzaSyBcCQLlfO8grWwpqZZenQasqV4jFw8dO2I`}
          errorTileUrl="/path/to/your/fallback/tile.png"
        /> */}
        <TileLayer
          attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
          url={`https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}&key=AAIzaSyBcCQLlfO8grWwpqZZenQasqV4jFw8dO2I`}
          errorTileUrl="/path/to/your/fallback/tile.png"
        />

        {/* <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
        <DraggableMarker
          position={resetMap}
          mentor={null}
          // id={"default"}
          icon={defaultIcon}
          setIdMentor={setIdMentor}
          resetMap={resetMap}
          disablePopup={true}
        />
        {mainDataLocation?.data?.locations.map((pos, idx) => (
          <DraggableMarker
            key={idx}
            position={{ lat: pos.latitude, lng: pos.longitude }}
            setPosition={(newPos) => {
              const updatedPositions = [...positions];
              updatedPositions[idx] = {
                ...updatedPositions[idx],
                lat: newPos.lat,
                lng: newPos.lng,
              };
              setPositions(updatedPositions);
            }}
            mentor={mentorData}
            setIdMentor={setIdMentor}
            id={pos.id}
            icon={otherIcon}
            LoadingMentor={LoadingMentor}
          />
        ))}
        {sectorsData?.map(
          (sector, idx) =>
            sector.organization_id == 2 && (
              <DraggableMarkerSectors
                key={idx}
                position={{ lat: sector.longitude, lng: sector.latitude }}
                setPosition={(newPos) => {
                  const updatedSectors = sectorsData.filter(
                    (sec) => sec.organization_id == 2
                  );
                  updatedSectors[idx] = {
                    ...updatedSectors[idx],
                    lat: newPos.latitude,
                    lng: newPos.longitude,
                  };
                  setPositions(updatedSectors);
                }}
                DetailsSectorData={DetailsSectorData}
                setIdSector={setIdSector}
                id={sector.id}
                icon={ithraaIcon}
                LoadingSector={LoadingSector}
              />
            )
        )}
        {sectorsData?.map(
          (sector, idx) =>
            sector.organization_id == 1 && (
              <DraggableMarkerSectors
                key={idx}
                position={{ lat: sector.longitude, lng: sector.latitude }}
                setPosition={(newPos) => {
                  const updatedSectors = sectorsData.filter(
                    (sec) => sec.organization_id == 1
                  );
                  updatedSectors[idx] = {
                    ...updatedSectors[idx],
                    lat: newPos.latitude,
                    lng: newPos.longitude,
                  };
                  setPositions(updatedSectors);
                }}
                DetailsSectorData={DetailsSectorData}
                setIdSector={setIdSector}
                id={sector.id}
                icon={albiteGustIcon}
                LoadingSector={LoadingSector}
              />
            )
        )}
      </MapContainer>
    </div>
  );
}

export default MainMap;
