import "./AlertsPanel.css";


function AlertsPanel({
  incidents = [],
  setSelectedIncident,
}) {


  /* ======================================
     GET HIGH PRIORITY ALERTS
  ====================================== */

  const alerts = incidents
    .filter(
      (item) =>
        item.priority === "Critical" ||
        item.priority === "High"
    )
    .slice()
    .reverse()
    .slice(0, 6);


  /* ======================================
     ICON
  ====================================== */

  const getAlertIcon = (type) => {

    switch (type) {

      case "Accident":
        return "🚨";

      case "Ambulance":
        return "🚑";

      case "Traffic":
        return "🚦";

      case "Police":
        return "👮";

      case "Pothole":
        return "🕳️";

      case "Parking":
        return "🅿️";

      default:
        return "⚠️";

    }

  };


  /* ======================================
     SELECT ALERT
  ====================================== */

  const handleAlertClick = (alert) => {

    if (setSelectedIncident) {

      setSelectedIncident(alert);

    }

  };


  return (

    <div className="alerts-panel">


      {/* ======================================
          HEADER
      ====================================== */}

      <div className="alerts-header">

        <div>

          <h2>
            🔔 Live Alerts
          </h2>

          <p>
            Priority traffic incidents
          </p>

        </div>


        <div className="alert-count">

          {alerts.length}

        </div>

      </div>


      {/* ======================================
          ALERT LIST
      ====================================== */}

      <div className="alerts-list">

        {alerts.length === 0 ? (

          <div className="no-alerts">

            <div className="no-alert-icon">
              ✅
            </div>

            <p>
              No high-priority alerts
            </p>

          </div>

        ) : (

          alerts.map((alert) => (

            <div
              className={`alert-item ${
                (alert.priority || "").toLowerCase()
              }`}
              key={alert.id}
              onClick={() =>
                handleAlertClick(alert)
              }
            >


              {/* ICON */}

              <div className="alert-icon">

                {getAlertIcon(alert.type)}

              </div>


              {/* CONTENT */}

              <div className="alert-content">

                <div className="alert-title-row">

                  <strong>
                    {alert.type}
                  </strong>

                  <span
                    className={`alert-priority ${
                      (alert.priority || "").toLowerCase()
                    }`}
                  >
                    {alert.priority}
                  </span>

                </div>


                <p className="alert-location">

                  📍 {alert.location}

                </p>


                <div className="alert-details">

                  <span>
                    ⏱ {alert.eta}
                  </span>

                  <span>
                    🚓 {alert.unit}
                  </span>

                </div>

              </div>

            </div>

          ))

        )}

      </div>


      {/* ======================================
          FOOTER
      ====================================== */}

      <div className="alerts-footer">

        <span className="alert-live-dot"></span>

        Monitoring active

      </div>

    </div>

  );

}


export default AlertsPanel;