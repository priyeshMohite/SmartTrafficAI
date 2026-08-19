import "./LiveStatus.css";


function LiveStatus({ stats = {} }) {

  const vehicles =
    Number(stats.vehicles ?? 0);

  const averageSpeed =
    Number(stats.averageSpeed ?? 0);

  const activeIncidents =
    Number(stats.activeIncidents ?? 0);

  const responseTime =
    Number(stats.responseTime ?? 0);


  return (

    <div className="live-status">


      {/* ======================================
          HEADER
      ====================================== */}

      <div className="live-status-header">

        <div>

          <h2>
            ⚡ Live System Status
          </h2>

          <p>
            Real-time traffic monitoring
          </p>

        </div>


        <div className="system-online">

          <span className="online-dot"></span>

          SYSTEM ONLINE

        </div>

      </div>


      {/* ======================================
          LIVE DATA
      ====================================== */}

      <div className="live-status-grid">


        {/* ====================================
            VEHICLES
        ==================================== */}

        <div className="live-status-card">

          <div className="status-icon vehicle">
            🚗
          </div>

          <div className="status-content">

            <span>
              LIVE VEHICLES
            </span>

            <strong>
              {vehicles.toLocaleString()}
            </strong>

          </div>

        </div>


        {/* ====================================
            SPEED
        ==================================== */}

        <div className="live-status-card">

          <div className="status-icon speed">
            ⚡
          </div>

          <div className="status-content">

            <span>
              AVG SPEED
            </span>

            <strong>

              {averageSpeed}

              <small>
                {" "}km/h
              </small>

            </strong>

          </div>

        </div>


        {/* ====================================
            INCIDENTS
        ==================================== */}

        <div className="live-status-card">

          <div className="status-icon incident">
            🚨
          </div>

          <div className="status-content">

            <span>
              ACTIVE INCIDENTS
            </span>

            <strong>
              {activeIncidents}
            </strong>

          </div>

        </div>


        {/* ====================================
            RESPONSE
        ==================================== */}

        <div className="live-status-card">

          <div className="status-icon response">
            ⏱️
          </div>

          <div className="status-content">

            <span>
              AVG RESPONSE
            </span>

            <strong>

              {responseTime}

              <small>
                {" "}min
              </small>

            </strong>

          </div>

        </div>


      </div>


      {/* ======================================
          FOOTER
      ====================================== */}

      <div className="live-status-footer">

        <div>

          <span className="pulse-dot"></span>

          Data stream active

        </div>


        <span>
          Live monitoring enabled
        </span>

      </div>


    </div>

  );

}


export default LiveStatus;