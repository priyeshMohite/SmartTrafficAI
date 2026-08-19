import "./DashboardCards.css";


function DashboardCards({ stats }) {

  return (

    <div className="cards">


      {/* ======================================
          VEHICLES
      ====================================== */}

      <div className="card">

        <div className="card-icon">
          🚗
        </div>

        <h2>
          {stats.vehicles.toLocaleString()}
        </h2>

        <p>
          Vehicles
        </p>

      </div>


      {/* ======================================
          CONGESTED ROADS
      ====================================== */}

      <div className="card">

        <div className="card-icon">
          🚦
        </div>

        <h2>
          {stats.congestedRoads}
        </h2>

        <p>
          Congested Roads
        </p>

      </div>


      {/* ======================================
          ACCIDENTS
      ====================================== */}

      <div className="card">

        <div className="card-icon">
          🚨
        </div>

        <h2>
          {stats.accidents}
        </h2>

        <p>
          Accidents
        </p>

      </div>


      {/* ======================================
          EMERGENCY CALLS
      ====================================== */}

      <div className="card">

        <div className="card-icon">
          🚑
        </div>

        <h2>
          {stats.emergencyCalls}
        </h2>

        <p>
          Emergency Calls
        </p>

      </div>


    </div>

  );
}


export default DashboardCards;