import "./RecentIncidents.css";


function RecentIncidents({
  incidents = [],
  setSelectedIncident,
}) {


  /* ======================================
     SHOW MOST RECENT INCIDENTS
  ====================================== */

  const recentIncidents =
    incidents
      .slice()
      .reverse()
      .slice(0, 8);


  /* ======================================
     SELECT INCIDENT
  ====================================== */

  const handleIncidentClick = (incident) => {

    if (setSelectedIncident) {

      setSelectedIncident(incident);

    }

  };


  /* ======================================
     ICON
  ====================================== */

  const getIncidentIcon = (type) => {

    switch (type) {

      case "Accident":
        return "🚨";

      case "Traffic":
        return "🚦";

      case "Police":
        return "👮";

      case "Ambulance":
        return "🚑";

      case "Parking":
        return "🅿️";

      case "Pothole":
        return "🕳️";

      default:
        return "⚠️";

    }

  };


  return (

    <div className="recent-incidents">


      {/* ======================================
          HEADER
      ====================================== */}

      <div className="recent-header">

        <div>

          <h2>
            📋 Recent Incidents
          </h2>

          <p>
            Latest traffic activity
          </p>

        </div>

        <span className="recent-count">
          {recentIncidents.length}
        </span>

      </div>


      {/* ======================================
          INCIDENT LIST
      ====================================== */}

      <div className="recent-list">

        {recentIncidents.length === 0 ? (

          <div className="recent-empty">

            <span>
              ✅
            </span>

            <p>
              No recent incidents
            </p>

          </div>

        ) : (

          recentIncidents.map(
            (incident) => (

              <div
                className="incident-card"
                key={incident.id}
                onClick={() =>
                  handleIncidentClick(incident)
                }
              >


                {/* ICON */}

                <div className="incident-icon">

                  {getIncidentIcon(
                    incident.type
                  )}

                </div>


                {/* DETAILS */}

                <div className="incident-main">

                  <div className="incident-title-row">

                    <h3>
                      {incident.type}
                    </h3>

                    <span
                      className={`status ${
                        (incident.priority || "")
                          .toLowerCase()
                      }`}
                    >
                      {incident.priority}
                    </span>

                  </div>


                  <p className="incident-location">

                    📍 {incident.location}

                  </p>


                  <div className="incident-meta">

                    <span>
                      🚓 {incident.unit}
                    </span>

                    <span>
                      ⏱ {incident.eta}
                    </span>

                  </div>

                </div>

              </div>

            )
          )

        )}

      </div>

    </div>

  );

}


export default RecentIncidents;