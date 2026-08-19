import "./MapPanel.css";

import { useEffect, useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";


/* ==========================================
   MARKER SHADOW
========================================== */

const markerShadow =
  "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png";


/* ==========================================
   MARKER ICONS
========================================== */

const accidentIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const policeIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const ambulanceIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const parkingIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const potholeIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png",
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const trafficIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});


/* ==========================================
   MAP FOCUS COMPONENT
========================================== */

function MapFocus({ incident }) {

  const map = useMap();

  useEffect(() => {

    if (
      incident &&
      Array.isArray(incident.position) &&
      incident.position.length === 2
    ) {

      map.flyTo(
        incident.position,
        14,
        {
          duration: 1.2,
        }
      );

    }

  }, [incident, map]);

  return null;
}


/* ==========================================
   MAP PANEL
========================================== */

function MapPanel({
  incidents = [],
  setSelectedIncident,
}) {

  const mumbai = [
    19.076,
    72.8777,
  ];


  /* ========================================
     FILTER
  ======================================== */

  const [filter, setFilter] =
    useState("All");


  /* ========================================
     SEARCH
  ======================================== */

  const [search, setSearch] =
    useState("");


  /* ========================================
     SELECTED INCIDENT
  ======================================== */

  const [selectedRouteIncident, setSelectedRouteIncident] =
    useState(null);


  /* ========================================
     GET ICON
  ======================================== */

  const getIcon = (type) => {

    switch (type) {

      case "Accident":
        return accidentIcon;

      case "Traffic":
        return trafficIcon;

      case "Police":
        return policeIcon;

      case "Ambulance":
        return ambulanceIcon;

      case "Parking":
        return parkingIcon;

      case "Pothole":
        return potholeIcon;

      default:
        return accidentIcon;

    }

  };


  /* ========================================
     FILTER + SEARCH
  ======================================== */

  const filteredData =
    incidents.filter((item) => {

      const matchesFilter =
        filter === "All" ||
        item.type === filter;

      const location =
        item.location || "";

      const matchesSearch =
        location
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      return (
        matchesFilter &&
        matchesSearch
      );

    });


  /* ========================================
     SELECT INCIDENT
  ======================================== */

  const handleIncidentClick = (item) => {

    setSelectedIncident(item);

    setSelectedRouteIncident(item);

  };


  return (

    <div className="map-panel">


      {/* ====================================
          HEADER
      ==================================== */}

      <div className="map-header">

        <div className="map-title">

          <h2>
            🗺️ Live Traffic Map
          </h2>

          <span className="map-live-status">

            <span className="map-live-dot"></span>

            LIVE

          </span>

        </div>


        {/* ==================================
            CONTROLS
        ================================== */}

        <div className="controls">

          <select
            className="filter-dropdown"
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value)
            }
          >

            <option value="All">
              All
            </option>

            <option value="Accident">
              Accident
            </option>

            <option value="Traffic">
              Traffic
            </option>

            <option value="Police">
              Police
            </option>

            <option value="Ambulance">
              Ambulance
            </option>

            <option value="Parking">
              Parking
            </option>

            <option value="Pothole">
              Pothole
            </option>

          </select>


          <input
            className="search-box"
            type="text"
            placeholder="Search Location..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

      </div>


      {/* ====================================
          MAP
      ==================================== */}

      <MapContainer
        center={mumbai}
        zoom={12}
        scrollWheelZoom={true}
        className="traffic-map"
      >

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />


        {/* ==================================
            FOCUS SELECTED INCIDENT
        ================================== */}

        <MapFocus
          incident={selectedRouteIncident}
        />


        {/* ==================================
            OPTIMIZED ROUTE
        ================================== */}

        {
          selectedRouteIncident
            ?.optimizedRoute
            ?.coordinates
            ?.length > 1 && (

            <Polyline
              positions={
                selectedRouteIncident
                  .optimizedRoute
                  .coordinates
              }

              pathOptions={{
                color:
                  selectedRouteIncident
                    .optimizedRoute
                    .color ||
                  "#ef4444",

                weight: 7,

                opacity: 0.9,

                lineCap: "round",

                lineJoin: "round",
              }}
            />

          )
        }


        {/* ==================================
            ALTERNATIVE ROUTES
        ================================== */}

        {
          selectedRouteIncident
            ?.alternativeRoutes
            ?.map(
              (route, index) => (

                route?.coordinates?.length > 1 && (

                  <Polyline
                    key={
                      `${selectedRouteIncident.id}-alternative-${index}`
                    }

                    positions={
                      route.coordinates
                    }

                    pathOptions={{
                      color:
                        route.color ||
                        (
                          index === 0
                            ? "#3b82f6"
                            : "#22c55e"
                        ),

                      weight: 5,

                      opacity: 0.75,

                      dashArray: "10, 8",

                      lineCap: "round",

                      lineJoin: "round",
                    }}
                  />

                )

              )
            )
        }


        {/* ==================================
            LIVE MARKERS
        ================================== */}

        {
          filteredData.map(
            (item) => (

              <Marker
                key={item.id}
                position={item.position}
                icon={getIcon(item.type)}

                eventHandlers={{
                  click: () => {
                    handleIncidentClick(item);
                  },
                }}
              >

                <Popup>

                  <div className="incident-popup">

                    <div className="popup-title">
                      {item.type}
                    </div>

                    <div className="popup-location">
                      📍 {item.location}
                    </div>

                    <div className="popup-info">

                      <strong>
                        Priority:
                      </strong>

                      {" "}

                      <span
                        className={`priority-${(
                          item.priority || ""
                        ).toLowerCase()}`}
                      >
                        {item.priority}
                      </span>

                    </div>

                    <div className="popup-info">

                      <strong>
                        Unit:
                      </strong>

                      {" "}

                      {item.unit}

                    </div>

                    <div className="popup-info">

                      <strong>
                        ETA:
                      </strong>

                      {" "}

                      {item.eta}

                    </div>

                    <div className="popup-info">

                      <strong>
                        Route:
                      </strong>

                      {" "}

                      {item.route}

                    </div>


                    <button
                      className="popup-action"
                      onClick={() =>
                        handleIncidentClick(item)
                      }
                    >
                      View Incident
                    </button>

                  </div>

                </Popup>

              </Marker>

            )
          )
        }

      </MapContainer>


      {/* ====================================
          ROUTE LEGEND
      ==================================== */}

      {
        selectedRouteIncident && (

          <div className="route-legend">

            <div className="legend-title">
              Route Display
            </div>

            <div className="legend-item">

              <span
                className="legend-line optimized"
              ></span>

              Optimized Route

            </div>

            <div className="legend-item">

              <span
                className="legend-line alternative-blue"
              ></span>

              Alternative Route 1

            </div>

            <div className="legend-item">

              <span
                className="legend-line alternative-green"
              ></span>

              Alternative Route 2

            </div>

          </div>

        )
      }


      {/* ====================================
          MAP FOOTER
      ==================================== */}

      <div className="map-footer">

        <span>

          <span className="map-footer-dot"></span>

          {filteredData.length} active incidents

        </span>

        <span>
          Live updates every 5 seconds
        </span>

      </div>

    </div>

  );

}


export default MapPanel;