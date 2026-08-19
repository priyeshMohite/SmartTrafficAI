import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function IncidentPieChart() {
  const data = {
    labels: [
      "Accidents",
      "Traffic",
      "Police",
      "Ambulance",
      "Parking",
      "Potholes",
    ],

    datasets: [
      {
        data: [7, 18, 5, 3, 12, 9],

        backgroundColor: [
          "#ef4444",
          "#f97316",
          "#3b82f6",
          "#22c55e",
          "#eab308",
          "#8b5cf6",
        ],

        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "bottom",

        labels: {
          color: "#ffffff",
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
}

export default IncidentPieChart;