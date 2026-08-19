import "./EmergencyResponse.css";

import { useEffect, useState } from "react";


function EmergencyResponse({
  incident,
  status = "detected",
  onResponding,
  onArrived
}) {

  const [remainingSeconds, setRemainingSeconds] =
    useState(null);


  /* ==========================================
     RESET WHEN INCIDENT CHANGES
  ========================================== */

  useEffect(() => {

    if (!incident) {

      setRemainingSeconds(null);

      return;

    }

    setRemainingSeconds(null);

  }, [incident]);


  /* ==========================================
     START RESPONSE AFTER DISPATCH
  ========================================== */

  useEffect(() => {

    if (
      !incident ||
      (
        status !== "dispatched" &&
        status !== "responding"
      )
    ) {

      return;

    }


    const minutes =
      parseInt(incident.eta) || 5;


    setRemainingSeconds(
      minutes * 60
    );


    if (status === "dispatched") {

      onResponding?.();

    }

  }, [incident, status]);


  /* ==========================================
     COUNTDOWN
  ========================================== */

  useEffect(() => {

    if (
      status !== "responding" ||
      remainingSeconds === null ||
      remainingSeconds <= 0
    ) {

      return;

    }


    const timer = setInterval(() => {

      setRemainingSeconds((previous) => {

        if (previous <= 1) {

          clearInterval(timer);

          onArrived?.();

          return 0;

        }


        return previous - 1;

      });

    }, 1000);


    return () => clearInterval(timer);

  }, [
    status,
    remainingSeconds,
    onArrived
  ]);


  /* ==========================================
     FORMAT TIME
  ========================================== */

  const formatTime = (seconds) => {

    if (seconds === null) {
      return "--:--";
    }


    const minutes =
      Math.floor(seconds / 60);


    const secs =
      seconds % 60;


    return `${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;

  };


  /* ==========================================
     PROGRESS
  ========================================== */

  const getProgress = () => {

    if (
      !incident ||
      remainingSeconds === null
    ) {

      return 0;

    }


    const totalSeconds =
      (parseInt(incident.eta) || 5) * 60;


    if (status === "arrived") {
      return 100;
    }


    return Math.max(
      0,
      Math.min(
        100,
        (
          (totalSeconds - remainingSeconds) /
          totalSeconds
        ) * 100
      )
    );

  };


  /* ==========================================
     EMPTY STATE
  ========================================== */

  if (!incident) {

    return (

      <div className="emergency-response">

        <div className="emergency-header">

          <div className="emergency-title">

            <div className="emergency-icon">
              🚑
            </div>

            <div>

              <h2>
                Emergency Response
              </h2>

              <p>
                Emergency unit coordination
              </p>

            </div>

          </div>


          <span className="response-status standby">
            STANDBY
          </span>

        </div>


        <div className="emergency-empty">

          <div className="empty-response-icon">
            🚑
          </div>

          <h3>
            No Active Emergency
          </h3>

          <p>
            Select an accident or emergency
            incident from the map to activate
            emergency response tracking.
          </p>

        </div>

      </div>

    );

  }


  /* ==========================================
     STATUS
  ========================================== */

  const statusLabels = {

    detected: "AWAITING DISPATCH",

    dispatched: "DISPATCHED",

    responding: "RESPONDING",

    arrived: "ARRIVED",

    resolved: "RESOLVED"

  };


  const displayStatus =
    statusLabels[status] ||
    "STANDBY";


  /* ==========================================
     INCIDENT ICON
  ========================================== */

  const getIncidentIcon = () => {

    if (incident.type === "Accident") {
      return "🚨";
    }

    if (incident.type === "Ambulance") {
      return "🚑";
    }

    return "⚠️";

  };


  return (

    <div className="emergency-response">


      {/* ======================================
          HEADER
      ====================================== */}

      <div className="emergency-header">

        <div className="emergency-title">

          <div className="emergency-icon">
            🚑
          </div>

          <div>

            <h2>
              Emergency Response
            </h2>

            <p>
              Emergency unit coordination
            </p>

          </div>

        </div>


        <span
          className={`response-status ${status}`}
        >

          {displayStatus}

        </span>

      </div>


      {/* ======================================
          INCIDENT
      ====================================== */}

      <div className="response-incident">

        <div className="incident-response-icon">

          {getIncidentIcon()}

        </div>


        <div>

          <span>
            ACTIVE INCIDENT
          </span>

          <h3>
            {incident.type}
          </h3>

          <p>
            📍 {incident.location}
          </p>

        </div>


        <div
          className={`response-priority ${
            incident.priority?.toLowerCase()
          }`}
        >

          {incident.priority}

        </div>

      </div>


      {/* ======================================
          RESPONSE DETAILS
      ====================================== */}

      <div className="response-details">

        <div className="response-detail">

          <span className="response-detail-icon">
            🚑
          </span>

          <div>

            <span>
              ASSIGNED UNIT
            </span>

            <strong>
              {incident.unit || "Not assigned"}
            </strong>

          </div>

        </div>


        <div className="response-detail">

          <span className="response-detail-icon">
            🛣️
          </span>

          <div>

            <span>
              ROUTE
            </span>

            <strong>
              {incident.route || "Calculating..."}
            </strong>

          </div>

        </div>

      </div>


      {/* ======================================
          WAITING FOR DISPATCH
      ====================================== */}

      {status === "detected" && (

        <div className="response-waiting">

          <div className="waiting-icon">
            ⏳
          </div>

          <div>

            <strong>
              Awaiting Dispatch
            </strong>

            <p>
              Emergency response will begin
              after the unit is dispatched from
              Incident Management.
            </p>

          </div>

        </div>

      )}


      {/* ======================================
          ETA
      ====================================== */}

      {(
        status === "dispatched" ||
        status === "responding" ||
        status === "arrived"
      ) && (

        <div className="eta-section">

          <div className="eta-header">

            <div>

              <span>
                ESTIMATED ARRIVAL
              </span>

              <strong>

                {status === "arrived"
                  ? "00:00"
                  : formatTime(
                      remainingSeconds
                    )}

              </strong>

            </div>


            <div className="eta-live">

              <span></span>

              {status === "arrived"
                ? "ARRIVED"
                : "LIVE"}

            </div>

          </div>


          <div className="progress-container">

            <div
              className="progress-bar"
              style={{
                width: `${getProgress()}%`
              }}
            ></div>

          </div>


          <div className="progress-labels">

            <span>
              Dispatched
            </span>

            <span>

              {status === "arrived"
                ? "Arrived"
                : "En route"}

            </span>

          </div>

        </div>

      )}


      {/* ======================================
          RESPONSE MESSAGE
      ====================================== */}

      <div className="response-message">

        {status === "detected" && (
          <>
            ⚠️ Emergency unit has not yet
            been dispatched.
          </>
        )}

        {status === "dispatched" && (
          <>
            🚑 Unit dispatched. Initializing
            response tracking...
          </>
        )}

        {status === "responding" && (
          <>
            🛣️ Emergency unit is currently
            travelling to the incident.
          </>
        )}

        {status === "arrived" && (
          <>
            📍 Emergency unit has arrived at
            the incident location.
          </>
        )}

        {status === "resolved" && (
          <>
            ✅ Incident response completed.
          </>
        )}

      </div>


      {/* ======================================
          FOOTER
      ====================================== */}

      <div className="response-footer">

        <div>

          <span className="footer-dot"></span>

          Emergency response monitoring

        </div>


        <span>

          {status === "detected"
            ? "Awaiting dispatch"
            : status === "arrived"
            ? "Unit on scene"
            : status === "resolved"
            ? "Response complete"
            : "Monitoring unit location"}

        </span>

      </div>


    </div>

  );

}


export default EmergencyResponse;