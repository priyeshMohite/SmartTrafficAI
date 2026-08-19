import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function WeeklyTrafficChart() {
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],

    datasets: [
      {
        label: "Incidents Reported",
        data: [12, 18, 15, 22, 30, 25, 16],

        backgroundColor: [
          "#38bdf8",
          "#38bdf8",
          "#38bdf8",
          "#38bdf8",
          "#38bdf8",
          "#38bdf8",
          "#38bdf8",
        ],

        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
    },

    scales: {
      x: {
        ticks: {
          color: "#ffffff",
        },

        grid: {
          color: "#334155",
        },
      },

      y: {
        ticks: {
          color: "#ffffff",
        },

        grid: {
          color: "#334155",
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default WeeklyTrafficChart;