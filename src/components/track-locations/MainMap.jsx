import useFetch from "../../hooks/useFetch";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import DraggableMarker from "./DraggableMarker";
import DraggableMarkerSectors from "./DraggableMarkerSectors";
import { useFormikContext } from "formik";

const defaultMarker = "/pins/pins/default.png";
const formsMarker = "/pins/pins/forms.png";
const ithraaMarker = "/pins/pins/ithraa.png";
const albiteGustMarker = "/pins/pins/albiteGust.png";
const ticketMarker = "/pins/pins/ticket.png";
const supportMarker = "/pins/pins/support.png";
const fineMarker = "/pins/pins/fine.png";
const mealsMarker = "/pins/pins/meals.png";

const defaultIcon = new L.Icon({
  iconUrl: defaultMarker,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});
const fineIcon = new L.Icon({
  iconUrl: fineMarker,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});
const supportIcon = new L.Icon({
  iconUrl: supportMarker,
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
const ticketIcon = new L.Icon({
  iconUrl: ticketMarker,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});
const formsIcon = new L.Icon({
  iconUrl: formsMarker,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});
const mealsIcon = new L.Icon({
  iconUrl: mealsMarker,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

function MainMap({ resetMap, mainDataLocation }) {
  const [positions, setPositions] = useState([]);
  const [idMentor, setIdMentor] = useState("");
  const [idSector, setIdSector] = useState("");
  const mapRef = useRef(null);
  const { values } = useFormikContext();

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

  const filterSectors = (sectors) => {
    if (values.locationHajj == "Arfa") {
      return sectors.filter(
        (sector) => sector.arafah_latitude && sector.arafah_longitude
      );
    } else if (values.locationHajj == "Mena") {
      return sectors.filter((sector) => sector.latitude && sector.longitude);
    } else if (values.locationHajj == "All") {
      return sectors.filter(
        (sector) =>
          (sector.latitude && sector.longitude) ||
          (sector.arafah_latitude && sector.arafah_longitude)
      );
    }
    return sectors;
  };

  const sectorsData = filterSectors(mainDataLocation?.sectors_table || []);

  const filterLocationsAndSectors = () => {
    let filteredLocations = mainDataLocation?.locations || [];

    if (values.type_actions) {
      filteredLocations = filteredLocations.filter(
        (location) => location.location_type === values.type_actions
      );
    }

    let showSectors = false;
    let showLocations = false;

    if (values.Actions === "Sectors") {
      showSectors = true;
    } else if (values.Actions === "actionMentors") {
      showLocations = true;
    } else if (values.Actions === "AllActions") {
      showSectors = true;
      showLocations = true;
    }

    return { showSectors, showLocations, filteredLocations };
  };

  const { showSectors, showLocations, filteredLocations } =
    filterLocationsAndSectors();

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
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DraggableMarker
          position={resetMap}
          mentor={null}
          id={"default"}
          icon={defaultIcon}
          setIdMentor={setIdMentor}
          resetMap={resetMap}
          disablePopup={true}
        />
        {showLocations &&
          filteredLocations.map((pos, idx) => (
            <DraggableMarker
              key={idx}
              position={{ lat: pos.latitude, lng: pos.longitude }}
              setPosition={(newPos) => {
                const updatedPositions = [...positions];
                updatedPositions[idx] = {
                  ...updatedPositions[idx],
                  lat: newPos.lng,
                  lng: newPos.lat,
                };
                setPositions(updatedPositions);
              }}
              mentor={mentorData}
              setIdMentor={setIdMentor}
              id={pos.id}
              icon={
                pos.location_type == "Ticket"
                  ? ticketIcon
                  : pos.location_type == "Support" ||
                    pos.location_type == "Assist"
                  ? supportIcon
                  : pos.location_type == "SubmittedSection"
                  ? formsIcon
                  : pos.location_type == "Fine"
                  ? fineIcon
                  : pos.location_type == "MealOrganizationStage"
                  ? mealsIcon
                  : defaultIcon
              }
              LoadingMentor={LoadingMentor}
            />
          ))}
        {showSectors &&
          sectorsData.map((sector, idx) => (
            <React.Fragment key={idx}>
              {(values.locationHajj === "All" ||
                values.locationHajj === "Arfa") && (
                <DraggableMarkerSectors
                  position={{
                    lat: sector.arafah_longitude,
                    lng: sector.arafah_latitude,
                  }}
                  setPosition={(newPos) => {
                    const updatedSectors = [...sectorsData];
                    updatedSectors[idx] = {
                      ...updatedSectors[idx],
                      arafah_lng: newPos.lat,
                      arafah_lat: newPos.lng,
                    };
                    setPositions(updatedSectors);
                  }}
                  DetailsSectorData={DetailsSectorData}
                  setIdSector={setIdSector}
                  id={sector.id}
                  icon={
                    sector.organization_id === 2 ? ithraaIcon : albiteGustIcon
                  }
                  LoadingSector={LoadingSector}
                />
              )}
              {(values.locationHajj === "All" ||
                values.locationHajj === "Mena") && (
                <DraggableMarkerSectors
                  position={{
                    lat: sector.longitude,
                    lng: sector.latitude,
                  }}
                  setPosition={(newPos) => {
                    const updatedSectors = [...sectorsData];
                    updatedSectors[idx] = {
                      ...updatedSectors[idx],
                      lng: newPos.lat,
                      lat: newPos.lng,
                    };
                    setPositions(updatedSectors);
                  }}
                  DetailsSectorData={DetailsSectorData}
                  setIdSector={setIdSector}
                  id={sector.id}
                  icon={
                    sector.organization_id === 2 ? ithraaIcon : albiteGustIcon
                  }
                  LoadingSector={LoadingSector}
                />
              )}
            </React.Fragment>
          ))}
      </MapContainer>
    </div>
  );
}

export default MainMap;
