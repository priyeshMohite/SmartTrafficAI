const dashboardData = {
  stats: {
    vehicles: 1250,
    congestedRoads: 18,
    accidents: 7,
    emergencyCalls: 5,
  },

  incidents: [
    {
      id: 1,
      type: "Accident",
      location: "Dadar Circle",
      position: [19.0180, 72.8421],
      priority: "High",
      unit: "Ambulance 4",
      eta: "6 mins",
      route: "Eastern Express Highway",
      status: "Active",
    },

    {
      id: 2,
      type: "Traffic",
      location: "Bandra Flyover",
      position: [19.0544, 72.8406],
      priority: "Medium",
      unit: "Traffic Police Unit 7",
      eta: "5 mins",
      route: "Western Express Highway",
      status: "Active",
    },

    {
      id: 3,
      type: "Police",
      location: "Andheri Junction",
      position: [19.1136, 72.8697],
      priority: "Medium",
      unit: "Police Unit 3",
      eta: "4 mins",
      route: "SV Road",
      status: "Active",
    },

    {
      id: 4,
      type: "Ambulance",
      location: "Sion Hospital",
      position: [19.0434, 72.8610],
      priority: "Critical",
      unit: "Ambulance 2",
      eta: "3 mins",
      route: "Dr. Ambedkar Road",
      status: "Active",
    },

    {
      id: 5,
      type: "Parking",
      location: "Phoenix Mall Lower Parel",
      position: [18.9940, 72.8256],
      priority: "Low",
      unit: "Parking Team",
      eta: "2 mins",
      route: "Senapati Bapat Marg",
      status: "Available",
    },

    {
      id: 6,
      type: "Pothole",
      location: "Kurla Station Road",
      position: [19.0728, 72.8826],
      priority: "Medium",
      unit: "Road Repair Team",
      eta: "18 mins",
      route: "LBS Marg",
      status: "Pending",
    },
  ],
};

export default dashboardData;