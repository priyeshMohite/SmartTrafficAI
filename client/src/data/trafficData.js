const trafficData = [

  /* ==========================================
     ACCIDENT
  ========================================== */

  {
    id: 1,

    type: "Accident",

    location: "Dadar Circle",

    position: [
      19.0180,
      72.8421,
    ],

    priority: "High",

    unit: "Ambulance 4",

    eta: "6 mins",

    route: "Eastern Express Highway",

    recommendation:
      "Immediately dispatch Ambulance 4 to the accident location. Clear the affected lane and divert traffic through the alternate route to reduce congestion.",

    optimizedRoute: {

      name: "Eastern Express Highway",

      color: "#ef4444",

      coordinates: [

        [19.0180, 72.8421],

        [19.0250, 72.8500],

        [19.0400, 72.8650],

        [19.0550, 72.8780],

      ],

    },

    alternativeRoutes: [

      {

        name: "Dr. Ambedkar Road",

        color: "#3b82f6",

        coordinates: [

          [19.0180, 72.8421],

          [19.0120, 72.8520],

          [19.0250, 72.8660],

          [19.0434, 72.8610],

        ],

      },

      {

        name: "Senapati Bapat Marg",

        color: "#22c55e",

        coordinates: [

          [19.0180, 72.8421],

          [19.0080, 72.8320],

          [18.9940, 72.8256],

        ],

      },

    ],

  },


  /* ==========================================
     TRAFFIC
  ========================================== */

  {
    id: 2,

    type: "Traffic",

    location: "Bandra Flyover",

    position: [
      19.0544,
      72.8406,
    ],

    priority: "Medium",

    unit: "Traffic Police Unit 7",

    eta: "5 mins",

    route: "Western Express Highway",

    recommendation:
      "Deploy Traffic Police Unit 7 to regulate traffic near Bandra Flyover. Use the alternate route to distribute traffic and reduce congestion around the flyover.",

    optimizedRoute: {

      name: "Western Express Highway",

      color: "#ef4444",

      coordinates: [

        [19.0544, 72.8406],

        [19.0700, 72.8350],

        [19.0900, 72.8400],

        [19.1100, 72.8500],

      ],

    },

    alternativeRoutes: [

      {

        name: "SV Road",

        color: "#3b82f6",

        coordinates: [

          [19.0544, 72.8406],

          [19.0600, 72.8500],

          [19.0750, 72.8550],

          [19.0900, 72.8600],

        ],

      },

      {

        name: "Linking Road",

        color: "#22c55e",

        coordinates: [

          [19.0544, 72.8406],

          [19.0600, 72.8250],

          [19.0750, 72.8200],

          [19.0900, 72.8250],

        ],

      },

    ],

  },


  /* ==========================================
     POLICE
  ========================================== */

  {
    id: 3,

    type: "Police",

    location: "Andheri Junction",

    position: [
      19.1136,
      72.8697,
    ],

    priority: "Medium",

    unit: "Police Unit 3",

    eta: "4 mins",

    route: "SV Road",

    recommendation:
      "Police Unit 3 should be dispatched to Andheri Junction to manage the incident and maintain traffic flow. Use SV Road as the primary response route.",

    optimizedRoute: {

      name: "SV Road",

      color: "#ef4444",

      coordinates: [

        [19.1136, 72.8697],

        [19.1050, 72.8600],

        [19.0950, 72.8500],

        [19.0850, 72.8400],

      ],

    },

    alternativeRoutes: [

      {

        name: "Western Express Highway",

        color: "#3b82f6",

        coordinates: [

          [19.1136, 72.8697],

          [19.1200, 72.8550],

          [19.1250, 72.8400],

          [19.1300, 72.8250],

        ],

      },

      {

        name: "Jogeshwari-Vikhroli Link Road",

        color: "#22c55e",

        coordinates: [

          [19.1136, 72.8697],

          [19.1200, 72.8850],

          [19.1150, 72.9000],

          [19.1050, 72.9150],

        ],

      },

    ],

  },


  /* ==========================================
     AMBULANCE
  ========================================== */

  {
    id: 4,

    type: "Ambulance",

    location: "Sion Hospital",

    position: [
      19.0434,
      72.8610,
    ],

    priority: "Critical",

    unit: "Ambulance 2",

    eta: "3 mins",

    route: "Dr. Ambedkar Road",

    recommendation:
      "This is a critical emergency. Ambulance 2 should be given priority access through Dr. Ambedkar Road. Traffic signals along the response route should be cleared where possible.",

    optimizedRoute: {

      name: "Dr. Ambedkar Road",

      color: "#ef4444",

      coordinates: [

        [19.0434, 72.8610],

        [19.0550, 72.8650],

        [19.0700, 72.8700],

        [19.0850, 72.8750],

      ],

    },

    alternativeRoutes: [

      {

        name: "Eastern Express Highway",

        color: "#3b82f6",

        coordinates: [

          [19.0434, 72.8610],

          [19.0500, 72.8750],

          [19.0650, 72.8850],

          [19.0800, 72.8950],

        ],

      },

      {

        name: "LBS Marg",

        color: "#22c55e",

        coordinates: [

          [19.0434, 72.8610],

          [19.0550, 72.8500],

          [19.0700, 72.8450],

          [19.0850, 72.8400],

        ],

      },

    ],

  },


  /* ==========================================
     PARKING
  ========================================== */

  {
    id: 5,

    type: "Parking",

    location: "Phoenix Mall Lower Parel",

    position: [
      18.9940,
      72.8256,
    ],

    priority: "Low",

    unit: "Parking Team",

    eta: "2 mins",

    route: "Senapati Bapat Marg",

    recommendation:
      "Parking Team should monitor parking availability around Phoenix Mall and redirect incoming vehicles toward available parking areas to prevent roadside congestion.",

    optimizedRoute: {

      name: "Senapati Bapat Marg",

      color: "#ef4444",

      coordinates: [

        [18.9940, 72.8256],

        [19.0000, 72.8350],

        [19.0100, 72.8450],

        [19.0200, 72.8550],

      ],

    },

    alternativeRoutes: [

      {

        name: "Tulsi Pipe Road",

        color: "#3b82f6",

        coordinates: [

          [18.9940, 72.8256],

          [18.9980, 72.8150],

          [19.0100, 72.8100],

          [19.0200, 72.8050],

        ],

      },

      {

        name: "Dr. Annie Besant Road",

        color: "#22c55e",

        coordinates: [

          [18.9940, 72.8256],

          [18.9850, 72.8300],

          [18.9750, 72.8350],

          [18.9650, 72.8400],

        ],

      },

    ],

  },


  /* ==========================================
     POTHOLE
  ========================================== */

  {
    id: 6,

    type: "Pothole",

    location: "Kurla Station Road",

    position: [
      19.0728,
      72.8826,
    ],

    priority: "Medium",

    unit: "Road Repair Team",

    eta: "18 mins",

    route: "LBS Marg",

    recommendation:
      "Road Repair Team should inspect and repair the pothole on Kurla Station Road. Until repairs are completed, traffic should be diverted through LBS Marg to reduce the risk of accidents.",

    optimizedRoute: {

      name: "LBS Marg",

      color: "#ef4444",

      coordinates: [

        [19.0728, 72.8826],

        [19.0800, 72.8750],

        [19.0900, 72.8700],

        [19.1000, 72.8650],

      ],

    },

    alternativeRoutes: [

      {

        name: "Eastern Express Highway",

        color: "#3b82f6",

        coordinates: [

          [19.0728, 72.8826],

          [19.0650, 72.8950],

          [19.0750, 72.9050],

          [19.0900, 72.9150],

        ],

      },

      {

        name: "Santacruz-Chembur Link Road",

        color: "#22c55e",

        coordinates: [

          [19.0728, 72.8826],

          [19.0650, 72.8950],

          [19.0550, 72.9100],

          [19.0450, 72.9250],

        ],

      },

    ],

  },

];


export default trafficData;