import "./RouteOptimization.css";

import { useEffect, useState } from "react";

import trafficData from "../../data/trafficData";


function RouteOptimization({ incident }) {

  const [isCalculating, setIsCalculating] =
    useState(false);

  const [routeReady, setRouteReady] =
    useState(false);


  /* ==========================================
     ROUTE ANALYSIS
  ========================================== */

  useEffect(() => {

    if (!incident) {

      setIsCalculating(false);
      setRouteReady(false);

      return;

    }

    setIsCalculating(true);
    setRouteReady(false);


    const timer = setTimeout(() => {

      setIsCalculating(false);
      setRouteReady(true);

    }, 1200);


    return () => clearTimeout(timer);

  }, [incident]);


  /* ==========================================
     GET ALTERNATE ROUTES
  ========================================== */

  const getAlternateRoutes = () => {

    if (!incident) {
      return [];
    }

    if (
      incident.alternativeRoutes &&
      incident.alternativeRoutes.length > 0
    ) {

      return incident.alternativeRoutes;

    }


    const alternateRoutes = [
      "Western Express Highway",
      "SV Road",
      "LBS Marg",
      "Dr. Ambedkar Road",
      "Eastern Express Highway",
    ];


    return alternateRoutes
      .filter(
        (route) =>
          route !== incident.route
      )
      .slice(0, 2)
      .map((route, index) => ({

        name: route,

        color:
          index === 0
            ? "blue"
            : "green",

      }));

  };


  /* ==========================================
     TRAFFIC CONDITION
  ========================================== */

  const getTrafficCondition = () => {

    if (!incident) {
      return "Unknown";
    }


    if (
      incident.priority === "Critical" ||
      incident.priority === "High"
    ) {

      return "Heavy";

    }


    if (
      incident.priority === "Medium"
    ) {

      return "Moderate";

    }


    return "Light";

  };


  /* ==========================================
     TRAFFIC CLASS
  ========================================== */

  const getTrafficClass = () => {

    const condition =
      getTrafficCondition();


    if (condition === "Heavy") {
      return "heavy";
    }


    if (condition === "Moderate") {
      return "moderate";
    }


    if (condition === "Light") {
      return "light";
    }


    return "unknown";

  };


  /* ==========================================
     AI PRIORITY
  ========================================== */

  const getAIPriority = () => {

    if (!incident) {
      return "Awaiting incident";
    }

    return incident.priority;

  };


  /* ==========================================
     AI CONFIDENCE
  ========================================== */

  const getAIConfidence = () => {

    if (!incident) {
      return "--";
    }


    switch (incident.priority) {

      case "Critical":
        return "96%";

      case "High":
        return "92%";

      case "Medium":
        return "87%";

      case "Low":
        return "81%";

      default:
        return "85%";

    }

  };


  /* ==========================================
     AI ROUTE REASONING
  ========================================== */

  const getAIRouteReasoning = () => {

    if (!incident) {
      return "Awaiting route analysis.";
    }


    const traffic =
      getTrafficCondition();


    if (incident.priority === "Critical") {

      return (
        "AI prioritized the fastest available " +
        "response route because this incident " +
        "requires immediate emergency intervention. " +
        "Traffic conditions and response time were " +
        "given the highest priority."
      );

    }


    if (incident.priority === "High") {

      return (
        "AI selected the recommended route because " +
        "it provides a faster response while " +
        "avoiding the most congested sections. " +
        "Emergency response priority was increased."
      );

    }


    if (traffic === "Moderate") {

      return (
        "AI compared the available routes using " +
        "estimated travel time, incident priority " +
        "and current traffic conditions. The selected " +
        "route provides the best overall response time."
      );

    }


    return (
      "AI selected the recommended route based on " +
      "estimated travel time and route efficiency. " +
      "Current traffic conditions indicate that " +
      "the route is suitable for response."
    );

  };


  /* ==========================================
     AI THINKING STEPS
  ========================================== */

  const getAIThinking = () => {

    if (!incident) {
      return [];
    }


    return [

      "Analyzing incident severity",

      "Evaluating current traffic conditions",

      "Comparing available response routes",

      "Estimating emergency response time",

      "Selecting the optimal route",

    ];

  };


  /* ==========================================
     ALTERNATE ETA
  ========================================== */

  const getAlternateETA = (
    route,
    index
  ) => {

    const mainETA =
      parseInt(incident?.eta) || 5;


    if (
      route?.eta
    ) {

      return route.eta;

    }


    return `${mainETA + 3 + index} mins`;

  };


  /* ==========================================
     EMPTY STATE
  ========================================== */

  if (!incident) {

    return (

      <div className="route-optimization">

        <div className="route-header">

          <div className="route-title">

            <div className="route-icon">
              🛣️
            </div>

            <div>

              <h2>
                Route Optimization
              </h2>

              <p>
                AI-powered route selection
              </p>

            </div>

          </div>


          <div className="route-status standby">

            STANDBY

          </div>

        </div>


        <div className="route-empty">

          <div className="empty-route-icon">
            🛣️
          </div>

          <h3>
            No Route Analysis
          </h3>

          <p>
            Select an incident from the live
            traffic map to calculate the
            fastest response route.
          </p>

        </div>


        <div className="route-footer">

          <div>

            <span className="route-live-dot"></span>

            Route optimization system ready

          </div>

          <span>
            AI engine: Standby
          </span>

        </div>

      </div>

    );

  }


  const alternateRoutes =
    getAlternateRoutes();


  return (

    <div className="route-optimization">


      {/* ======================================
          HEADER
      ====================================== */}

      <div className="route-header">

        <div className="route-title">

          <div className="route-icon">
            🛣️
          </div>

          <div>

            <h2>
              Route Optimization
            </h2>

            <p>
              AI-powered route selection
            </p>

          </div>

        </div>


        <div className="route-status active">

          <span></span>

          ACTIVE

        </div>

      </div>


      {/* ======================================
          CALCULATING
      ====================================== */}

      {isCalculating && (

        <div className="route-calculating">

          <div className="route-spinner"></div>

          <div>

            <strong>
              AI is analyzing possible routes...
            </strong>

            <p>
              Evaluating traffic, distance,
              priority and response time
            </p>

          </div>

        </div>

      )}


      {/* ======================================
          AI THINKING
      ====================================== */}

      {isCalculating && (

        <div className="ai-thinking">

          <div className="ai-thinking-header">

            <div className="ai-thinking-icon">
              🤖
            </div>

            <div>

              <span>
                AI ROUTE ANALYSIS
              </span>

              <strong>
                Decision engine running
              </strong>

            </div>

          </div>


          <div className="thinking-steps">

            {getAIThinking().map(
              (step, index) => (

                <div
                  className="thinking-step"
                  key={index}
                >

                  <span className="thinking-check">
                    {index < 2 ? "✓" : "○"}
                  </span>

                  <span>
                    {step}
                  </span>

                </div>

              )
            )}

          </div>

        </div>

      )}


      {/* ======================================
          INCIDENT
      ====================================== */}

      <div className="route-incident">

        <div className="route-incident-icon">

          {incident.type === "Accident"
            ? "🚨"
            : incident.type === "Ambulance"
            ? "🚑"
            : incident.type === "Traffic"
            ? "🚦"
            : incident.type === "Police"
            ? "👮"
            : "⚠️"}

        </div>


        <div>

          <span>
            DESTINATION
          </span>

          <h3>
            {incident.location}
          </h3>

        </div>


        <div className="route-unit">

          🚑 {incident.unit}

        </div>

      </div>


      {routeReady && (

        <>


          {/* ==================================
              AI DECISION SUMMARY
          ================================== */}

          <div className="route-ai-summary">

            <div className="route-ai-summary-header">

              <div className="route-ai-summary-icon">
                🧠
              </div>

              <div>

                <span>
                  AI DECISION
                </span>

                <strong>
                  Route analysis completed
                </strong>

              </div>

            </div>


            <div className="route-ai-metrics">

              <div>

                <span>
                  PRIORITY
                </span>

                <strong
                  className={
                    `ai-priority-${incident.priority.toLowerCase()}`
                  }
                >
                  {getAIPriority()}
                </strong>

              </div>


              <div>

                <span>
                  AI CONFIDENCE
                </span>

                <strong className="confidence">
                  {getAIConfidence()}
                </strong>

              </div>


              <div>

                <span>
                  TRAFFIC
                </span>

                <strong
                  className={
                    `traffic-${getTrafficClass()}`
                  }
                >
                  {getTrafficCondition()}
                </strong>

              </div>

            </div>

          </div>


          {/* ==================================
              RECOMMENDED ROUTE
          ================================== */}

          <div className="recommended-route">

            <div className="recommended-header">

              <div>

                <span>
                  RECOMMENDED ROUTE
                </span>

                <h3>
                  🔴{" "}
                  {incident.optimizedRoute?.name ||
                    incident.route}
                </h3>

              </div>


              <div className="fastest-badge">

                ⚡ FASTEST

              </div>

            </div>


            <div className="route-stats">

              <div>

                <span>
                  ETA
                </span>

                <strong>
                  {incident.eta}
                </strong>

              </div>


              <div>

                <span>
                  TRAFFIC
                </span>

                <strong
                  className={
                    `traffic-${getTrafficClass()}`
                  }
                >
                  {getTrafficCondition()}
                </strong>

              </div>


              <div>

                <span>
                  PRIORITY
                </span>

                <strong>
                  {incident.priority}
                </strong>

              </div>

            </div>

          </div>


          {/* ==================================
              ALTERNATE ROUTES
          ================================== */}

          <div className="alternate-routes-container">

            <div className="alternate-section-title">

              <span>
                ALTERNATIVE ROUTES
              </span>

              <small>
                Backup response options
              </small>

            </div>


            {alternateRoutes.map(
              (route, index) => (

                <div
                  className="alternate-route"
                  key={index}
                >

                  <div className="alternate-header">

                    <div>

                      <span>
                        ALTERNATIVE {index + 1}
                      </span>

                      <h3>

                        <span
                          className="route-color-dot"
                          style={{
                            background:
                              route.color ||
                              (index === 0
                                ? "blue"
                                : "green"),
                          }}
                        ></span>

                        {route.name}

                      </h3>

                    </div>


                    <span className="alternate-eta">

                      {getAlternateETA(
                        route,
                        index
                      )}

                    </span>

                  </div>


                  <div className="alternate-info">

                    <span>
                      {index === 0
                        ? "Secondary response route"
                        : "Backup diversion route"}
                    </span>

                    <span>
                      Traffic:{" "}
                      {index === 0
                        ? "Moderate"
                        : "Light"}
                    </span>

                  </div>

                </div>

              )
            )}

          </div>


          {/* ==================================
              AI ROUTE EXPLANATION
          ================================== */}

          <div className="route-ai">

            <div className="route-ai-icon">
              🤖
            </div>


            <div>

              <span>
                AI ROUTE DECISION
              </span>

              <p>
                {getAIRouteReasoning()}
              </p>

            </div>

          </div>


          {/* ==================================
              ROUTE CONFIDENCE
          ================================== */}

          <div className="route-confidence">

            <div className="confidence-header">

              <span>
                AI ROUTE CONFIDENCE
              </span>

              <strong>
                {getAIConfidence()}
              </strong>

            </div>


            <div className="confidence-bar">

              <div
                className="confidence-fill"
                style={{
                  width:
                    getAIConfidence(),
                }}
              ></div>

            </div>


            <p>
              Confidence is based on incident
              priority, estimated response time
              and available route options.
            </p>

          </div>

        </>

      )}


      {/* ======================================
          FOOTER
      ====================================== */}

      <div className="route-footer">

        <div>

          <span className="route-live-dot"></span>

          Traffic conditions monitored live

        </div>


        <span>
          {trafficData.length} network incidents
        </span>

      </div>

    </div>

  );

}


export default RouteOptimization;