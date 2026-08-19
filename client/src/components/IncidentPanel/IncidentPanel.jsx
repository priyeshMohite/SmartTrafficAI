import "./IncidentPanel.css";


function IncidentPanel({
  incident,
  status = "detected",
  onDispatch,
  onResolve
}) {


  /* ==========================================
     EMPTY STATE
  ========================================== */

  if (!incident) {

    return (

      <div className="incident-panel">

        <div className="incident-header">

          <div className="incident-heading">

            <div className="incident-icon">
              🚨
            </div>

            <div>

              <h2>
                Incident Management
              </h2>

              <p>
                Select an incident to manage
                response
              </p>

            </div>

          </div>


          <div className="incident-status standby">

            <span></span>

            STANDBY

          </div>

        </div>


        <div className="incident-empty">

          <div className="incident-empty-icon">
            🛰️
          </div>

          <h3>
            No Incident Selected
          </h3>

          <p>
            Select an incident from the live
            traffic map or alerts panel to
            view incident details and manage
            emergency response.
          </p>

        </div>

      </div>

    );

  }


  /* ==========================================
     STATUS CONFIGURATION
  ========================================== */

  const statusConfig = {

    detected: {
      label: "DETECTED",
      className: "detected"
    },

    dispatched: {
      label: "DISPATCHED",
      className: "dispatching"
    },

    responding: {
      label: "RESPONDING",
      className: "responding"
    },

    arrived: {
      label: "ARRIVED",
      className: "arrived"
    },

    resolved: {
      label: "RESOLVED",
      className: "resolved"
    }

  };


  const currentStatus =
    statusConfig[status] ||
    statusConfig.detected;


  /* ==========================================
     STATUS CONDITIONS
  ========================================== */

  const canDispatch =
    status === "detected";

  const canResolve =
    status === "arrived";


  /* ==========================================
     INCIDENT ICON
  ========================================== */

  const getIncidentIcon = () => {

    switch (incident.type) {

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


  /* ==========================================
     AI RECOMMENDATION
  ========================================== */

  const getRecommendation = () => {

    if (status === "resolved") {

      return "Incident has been resolved and emergency response has been completed.";

    }

    if (status === "arrived") {

      return "Response unit has arrived at the incident location. Verify the situation and resolve the incident when cleared.";

    }

    if (
      status === "dispatched" ||
      status === "responding"
    ) {

      return `Unit ${incident.unit || "response team"} is responding to ${incident.location}. Continue monitoring the route and incident status.`;

    }

    if (
      incident.priority === "Critical"
    ) {

      return `Critical incident detected at ${incident.location}. Dispatch ${incident.unit || "the nearest emergency unit"} immediately.`;

    }

    if (
      incident.priority === "High"
    ) {

      return `High-priority incident detected. Dispatch ${incident.unit || "the nearest available unit"} and monitor the situation.`;

    }

    return `Monitor the incident at ${incident.location} and dispatch an appropriate response unit if required.`;

  };


  return (

    <div className="incident-panel">


      {/* ======================================
          HEADER
      ====================================== */}

      <div className="incident-header">

        <div className="incident-heading">

          <div className="incident-icon">
            🚨
          </div>

          <div>

            <h2>
              Incident Management
            </h2>

            <p>
              Incident response coordination
            </p>

          </div>

        </div>


        <div
          className={`incident-status ${currentStatus.className}`}
        >

          <span></span>

          {currentStatus.label}

        </div>

      </div>


      {/* ======================================
          INCIDENT SUMMARY
      ====================================== */}

      <div className="incident-summary">

        <div className="incident-main">

          <div className="incident-type-icon">

            {getIncidentIcon()}

          </div>


          <div>

            <span className="incident-label">
              ACTIVE INCIDENT
            </span>

            <h3>
              {incident.type}
            </h3>

            <p>
              📍 {incident.location}
            </p>

          </div>

        </div>


        <div
          className={`priority-badge ${
            incident.priority?.toLowerCase()
          }`}
        >
          {incident.priority}
        </div>

      </div>


      {/* ======================================
          INFORMATION GRID
      ====================================== */}

      <div className="incident-grid">


        <div className="incident-info">

          <span>
            ASSIGNED UNIT
          </span>

          <strong>
            {incident.unit || "Not assigned"}
          </strong>

        </div>


        <div className="incident-info">

          <span>
            ETA
          </span>

          <strong>
            {incident.eta || "--"}
          </strong>

        </div>


        <div className="incident-info">

          <span>
            ROUTE
          </span>

          <strong>
            {incident.route || "Calculating..."}
          </strong>

        </div>


        <div className="incident-info">

          <span>
            STATUS
          </span>

          <strong className={currentStatus.className}>
            {currentStatus.label}
          </strong>

        </div>

      </div>


      {/* ======================================
          AI RECOMMENDATION
      ====================================== */}

      <div className="ai-recommendation">

        <div className="ai-recommendation-icon">
          🤖
        </div>

        <div>

          <span>
            AI RECOMMENDATION
          </span>

          <p>
            {getRecommendation()}
          </p>

        </div>

      </div>


      {/* ======================================
          ACTION BUTTONS
      ====================================== */}

      <div className="incident-actions">


        {/* DISPATCH */}

        <button
          className="dispatch-button"
          onClick={onDispatch}
          disabled={!canDispatch}
        >

          🚑{" "}

          {status === "detected"
            ? "Dispatch Unit"
            : status === "dispatched"
            ? "Unit Dispatched"
            : status === "responding"
            ? "Unit Responding"
            : status === "arrived"
            ? "Unit Arrived"
            : "Response Complete"}

        </button>


        {/* RESOLVE */}

        <button
          className="resolve-button"
          onClick={onResolve}
          disabled={!canResolve}
        >

          ✓{" "}

          {status === "resolved"
            ? "Issue Resolved"
            : "Resolve Issue"}

        </button>

      </div>


      {/* ======================================
          ACTION MESSAGE
      ====================================== */}

      <div className="incident-action-message">

        {status === "detected" && (
          <>
            ⚠️ Incident detected. Dispatch
            the assigned unit to begin response.
          </>
        )}

        {status === "dispatched" && (
          <>
            🚑 Unit dispatched. Waiting for
            response tracking to begin.
          </>
        )}

        {status === "responding" && (
          <>
            🛣️ Response unit is currently
            travelling to the incident location.
          </>
        )}

        {status === "arrived" && (
          <>
            📍 Unit has arrived. Verify the
            situation before resolving the issue.
          </>
        )}

        {status === "resolved" && (
          <>
            ✅ Incident successfully resolved.
            Response operation completed.
          </>
        )}

      </div>


      {/* ======================================
          FOOTER
      ====================================== */}

      <div className="incident-footer">

        <div>

          <span className="incident-live-dot"></span>

          Incident monitoring active

        </div>


        <span>
          {status === "resolved"
            ? "Case closed"
            : "Real-time response tracking"}
        </span>

      </div>


    </div>

  );

}


export default IncidentPanel;