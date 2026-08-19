import { useEffect, useState } from "react";

import trafficData from "../data/trafficData";


function useLiveIncidents() {

  const [incidents, setIncidents] =
    useState(trafficData);


  useEffect(() => {

    const interval = setInterval(() => {

      setIncidents((previousIncidents) => {

        let updatedIncidents = [
          ...previousIncidents,
        ];


        /* ======================================
           RANDOM INCIDENT CREATION
        ====================================== */

        const shouldCreateIncident =
          Math.random() < 0.25;


        if (!shouldCreateIncident) {

          return updatedIncidents;

        }


        /* ======================================
           INCIDENT TYPES
        ====================================== */

        const incidentTypes = [

          "Accident",

          "Traffic",

          "Police",

          "Ambulance",

          "Parking",

          "Pothole",

        ];


        /* ======================================
           MUMBAI LOCATIONS
        ====================================== */

        const locations = [

          {
            name: "Bandra",
            position: [19.0544, 72.8406],
          },

          {
            name: "Andheri",
            position: [19.1136, 72.8697],
          },

          {
            name: "Dadar",
            position: [19.0180, 72.8421],
          },

          {
            name: "Sion",
            position: [19.0434, 72.8610],
          },

          {
            name: "Kurla",
            position: [19.0728, 72.8826],
          },

          {
            name: "Lower Parel",
            position: [18.9940, 72.8256],
          },

          {
            name: "Powai",
            position: [19.1176, 72.9060],
          },

          {
            name: "Worli",
            position: [19.0178, 72.8173],
          },

          {
            name: "Goregaon",
            position: [19.1663, 72.8526],
          },

          {
            name: "Borivali",
            position: [19.2307, 72.8567],
          },

          {
            name: "Vikhroli",
            position: [19.1115, 72.9273],
          },

        ];


        /* ======================================
           PRIORITIES
        ====================================== */

        const priorities = [

          "Low",

          "Medium",

          "High",

          "Critical",

        ];


        /* ======================================
           RESPONSE UNITS
        ====================================== */

        const units = [

          "Traffic Police Unit 5",

          "Traffic Police Unit 7",

          "Traffic Police Unit 9",

          "Ambulance 3",

          "Ambulance 4",

          "Police Unit 2",

          "Road Repair Team",

        ];


        /* ======================================
           ROUTES
        ====================================== */

        const routes = [

          "Western Express Highway",

          "Eastern Express Highway",

          "SV Road",

          "LBS Marg",

          "Dr. Ambedkar Road",

          "Link Road",

          "Jogeshwari-Vikhroli Link Road",

        ];


        /* ======================================
           RANDOM HELPERS
        ====================================== */

        const randomItem = (array) => {

          return array[
            Math.floor(
              Math.random() * array.length
            )
          ];

        };


        const randomType =
          randomItem(incidentTypes);


        const randomLocation =
          randomItem(locations);


        const randomPriority =
          randomItem(priorities);


        const randomUnit =
          randomItem(units);


        const randomRoute =
          randomItem(routes);


        /* ======================================
           ETA
        ====================================== */

        const etaMinutes =
          Math.floor(
            Math.random() * 15
          ) + 2;


        /* ======================================
           AI RECOMMENDATION
        ====================================== */

        let recommendation;


        if (
          randomPriority === "Critical"
        ) {

          recommendation =
            `Immediate emergency response required at ${randomLocation.name} Junction. Dispatch ${randomUnit} immediately and prioritize ${randomRoute} for rapid response.`;

        }

        else if (
          randomPriority === "High"
        ) {

          recommendation =
            `High-priority incident detected at ${randomLocation.name} Junction. Dispatch ${randomUnit} and use ${randomRoute} to minimize response time.`;

        }

        else if (
          randomPriority === "Medium"
        ) {

          recommendation =
            `Monitor the incident at ${randomLocation.name} Junction and deploy ${randomUnit} through ${randomRoute} to maintain traffic flow.`;

        }

        else {

          recommendation =
            `Low-priority incident detected at ${randomLocation.name} Junction. Monitor the situation and dispatch ${randomUnit} if required.`;

        }


        /* ======================================
           COORDINATES
        ====================================== */

        const [
          latitude,
          longitude,
        ] = randomLocation.position;


        /* ======================================
           OPTIMIZED ROUTE
        ====================================== */

        const optimizedRoute = {

          name: randomRoute,

          color: "#ef4444",

          coordinates: [

            [
              latitude,
              longitude,
            ],

            [
              latitude + 0.006,
              longitude + 0.005,
            ],

            [
              latitude + 0.013,
              longitude + 0.010,
            ],

            [
              latitude + 0.020,
              longitude + 0.014,
            ],

          ],

        };


        /* ======================================
           ALTERNATIVE ROUTE 1
        ====================================== */

        const alternativeRoute1 = {

          name:
            routes.find(
              (route) =>
                route !== randomRoute
            ) || "Alternate Route",

          color: "#3b82f6",

          coordinates: [

            [
              latitude,
              longitude,
            ],

            [
              latitude - 0.005,
              longitude + 0.008,
            ],

            [
              latitude - 0.012,
              longitude + 0.014,
            ],

            [
              latitude - 0.018,
              longitude + 0.020,
            ],

          ],

        };


        /* ======================================
           ALTERNATIVE ROUTE 2
        ====================================== */

        const alternativeRoute2 = {

          name:
            routes.find(
              (route) =>
                route !== randomRoute &&
                route !==
                  alternativeRoute1.name
            ) || "Secondary Route",

          color: "#22c55e",

          coordinates: [

            [
              latitude,
              longitude,
            ],

            [
              latitude + 0.004,
              longitude - 0.008,
            ],

            [
              latitude + 0.010,
              longitude - 0.015,
            ],

            [
              latitude + 0.017,
              longitude - 0.021,
            ],

          ],

        };


        /* ======================================
           NEW INCIDENT
        ====================================== */

        const newIncident = {

          id:
            `live-${Date.now()}`,

          type:
            randomType,

          location:
            `${randomLocation.name} Junction`,

          position:
            randomLocation.position,

          priority:
            randomPriority,

          unit:
            randomUnit,

          eta:
            `${etaMinutes} mins`,

          route:
            randomRoute,

          recommendation:
            recommendation,

          optimizedRoute:
            optimizedRoute,

          alternativeRoutes: [

            alternativeRoute1,

            alternativeRoute2,

          ],

        };


        /* ======================================
           ADD INCIDENT
        ====================================== */

        updatedIncidents = [

          ...updatedIncidents,

          newIncident,

        ];


        /* ======================================
           KEEP LAST 12
        ====================================== */

        if (
          updatedIncidents.length > 12
        ) {

          updatedIncidents =
            updatedIncidents.slice(-12);

        }


        return updatedIncidents;

      });

    }, 5000);


    return () => {

      clearInterval(interval);

    };

  }, []);


  return incidents;

}


export default useLiveIncidents;