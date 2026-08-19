import { useEffect, useState } from "react";

import "./Dashboard.css";

import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

import DashboardCards from "../../components/DashboardCards/DashboardCards";
import LiveStatus from "../../components/LiveStatus/LiveStatus";

import MapPanel from "../../components/MapPanel/MapPanel";
import AlertsPanel from "../../components/AlertsPanel/AlertsPanel";

import RecentIncidents from "../../components/RecentIncidents/RecentIncidents";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import Analytics from "../../components/Analytics/Analytics";

import IncidentPanel from "../../components/IncidentPanel/IncidentPanel";
import RouteOptimization from "../../components/RouteOptimization/RouteOptimization";
import EmergencyResponse from "../../components/EmergencyResponse/EmergencyResponse";

import useTrafficSimulation from "../../hooks/useTrafficSimulation";
import useLiveIncidents from "../../hooks/useLiveIncidents";


function Dashboard() {

  /* ==========================================
     SELECTED INCIDENT
  ========================================== */

  const [selectedIncident, setSelectedIncident] =
    useState(null);


  /* ==========================================
     INCIDENT RESPONSE STATUS

     DETECTED
     DISPATCHED
     RESPONDING
     ARRIVED
     RESOLVED
  ========================================== */

  const [incidentStatus, setIncidentStatus] =
    useState("detected");


  /* ==========================================
     LIVE TRAFFIC STATISTICS
  ========================================== */

  const stats = useTrafficSimulation();


  /* ==========================================
     LIVE INCIDENT DATA
  ========================================== */

  const incidents = useLiveIncidents();


  /* ==========================================
     RESET STATUS WHEN INCIDENT CHANGES
  ========================================== */

  useEffect(() => {

    if (selectedIncident) {
      setIncidentStatus("detected");
    }

  }, [selectedIncident]);


  /* ==========================================
     DISPATCH UNIT
  ========================================== */

  const handleDispatch = () => {

    if (!selectedIncident) {
      return;
    }

    setIncidentStatus("dispatched");

  };


  /* ==========================================
     UNIT STARTS RESPONDING
  ========================================== */

  const handleResponding = () => {

    setIncidentStatus("responding");

  };


  /* ==========================================
     UNIT ARRIVED
  ========================================== */

  const handleArrived = () => {

    setIncidentStatus("arrived");

  };


  /* ==========================================
     RESOLVE INCIDENT
  ========================================== */

  const handleResolve = () => {

    if (!selectedIncident) {
      return;
    }

    setIncidentStatus("resolved");

  };


  return (
    <>
      {/* ======================================
          NAVBAR
      ====================================== */}

      <Navbar />


      <div className="dashboard-container">


        {/* ====================================
            SIDEBAR
        ==================================== */}

        <Sidebar />


        {/* ====================================
            MAIN CONTENT
        ==================================== */}

        <div className="content">


          {/* ==================================
              PAGE HEADER
          ================================== */}

          <h1>
            Welcome Back, Admin 👋
          </h1>

          <p>
            Traffic Monitoring Command Center
          </p>


          {/* ==================================
              DASHBOARD CARDS
          ================================== */}

          <DashboardCards
            stats={stats}
          />


          {/* ==================================
              LIVE SYSTEM STATUS
          ================================== */}

          <LiveStatus
            stats={stats}
          />


          {/* ==================================
              MAP + ALERTS
          ================================== */}

          <div className="middle-section">

            <MapPanel
              incidents={incidents}
              setSelectedIncident={
                setSelectedIncident
              }
            />


            <AlertsPanel
              incidents={incidents}
              setSelectedIncident={
                setSelectedIncident
              }
            />

          </div>


          {/* ==================================
              INCIDENT MANAGEMENT
          ================================== */}

          <IncidentPanel
            incident={selectedIncident}
            status={incidentStatus}
            onDispatch={handleDispatch}
            onResolve={handleResolve}
          />


          {/* ==================================
              ROUTE OPTIMIZATION
          ================================== */}

          <RouteOptimization
            incident={selectedIncident}
          />


          {/* ==================================
              EMERGENCY RESPONSE
          ================================== */}

          <EmergencyResponse
            incident={selectedIncident}
            status={incidentStatus}
            onResponding={handleResponding}
            onArrived={handleArrived}
          />


          {/* ==================================
              RECENT INCIDENTS + WEATHER
          ================================== */}

          <div className="bottom-section">

            <RecentIncidents
              incidents={incidents}
              setSelectedIncident={
                setSelectedIncident
              }
            />

            <WeatherCard />

          </div>


          {/* ==================================
              ANALYTICS
          ================================== */}

          <Analytics
            stats={stats}
          />


        </div>

      </div>
    </>
  );
}


export default Dashboard;