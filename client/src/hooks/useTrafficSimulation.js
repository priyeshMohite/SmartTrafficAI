import { useEffect, useState } from "react";

function useTrafficSimulation() {
  const [stats, setStats] = useState({
    vehicles: 1200,
    congestedRoads: 18,
    accidents: 7,
    emergencyCalls: 5,

    // New live values
    averageSpeed: 42,
    activeIncidents: 6,
    responseTime: 6,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((previous) => {

        /* ==============================
           VEHICLES
        ============================== */

        const vehicleChange =
          Math.floor(Math.random() * 41) - 20;


        /* ==============================
           CONGESTED ROADS
        ============================== */

        const congestionChange =
          Math.floor(Math.random() * 5) - 2;


        /* ==============================
           ACCIDENTS
        ============================== */

        const accidentChange =
          Math.random() > 0.85
            ? 1
            : Math.random() < 0.1
              ? -1
              : 0;


        /* ==============================
           EMERGENCY CALLS
        ============================== */

        const emergencyChange =
          Math.random() > 0.8
            ? 1
            : Math.random() < 0.1
              ? -1
              : 0;


        /* ==============================
           AVERAGE SPEED
        ============================== */

        const speedChange =
          Math.floor(Math.random() * 7) - 3;


        /* ==============================
           RESPONSE TIME
        ============================== */

        const responseChange =
          Math.random() > 0.5 ? 1 : -1;


        /* ==============================
           RETURN UPDATED STATS
        ============================== */

        return {

          vehicles: Math.max(
            800,
            previous.vehicles + vehicleChange
          ),

          congestedRoads: Math.max(
            5,
            previous.congestedRoads + congestionChange
          ),

          accidents: Math.max(
            0,
            previous.accidents + accidentChange
          ),

          emergencyCalls: Math.max(
            0,
            previous.emergencyCalls + emergencyChange
          ),

          averageSpeed: Math.min(
            60,
            Math.max(
              20,
              previous.averageSpeed + speedChange
            )
          ),

          activeIncidents: Math.max(
            0,
            previous.activeIncidents + accidentChange
          ),

          responseTime: Math.min(
            15,
            Math.max(
              2,
              previous.responseTime + responseChange
            )
          ),
        };
      });
    }, 3000);


    /* ==============================
       CLEANUP
    ============================== */

    return () => {
      clearInterval(interval);
    };

  }, []);


  return stats;
}

export default useTrafficSimulation;