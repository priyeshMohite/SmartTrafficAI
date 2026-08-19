import "./Analytics.css";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
} from "recharts";

function Analytics() {
  const pieData = [
    { name: "Traffic", value: 42 },
    { name: "Accidents", value: 18 },
    { name: "Parking", value: 15 },
    { name: "Police", value: 10 },
    { name: "Ambulance", value: 8 },
    { name: "Potholes", value: 7 },
  ];

  const priorityData = [
    { name: "Low", value: 18 },
    { name: "Medium", value: 33 },
    { name: "High", value: 21 },
    { name: "Critical", value: 11 },
  ];

  const etaData = [
    { name: "8 AM", eta: 3 },
    { name: "10 AM", eta: 5 },
    { name: "12 PM", eta: 8 },
    { name: "2 PM", eta: 7 },
    { name: "4 PM", eta: 10 },
    { name: "6 PM", eta: 13 },
    { name: "8 PM", eta: 6 },
  ];

  const COLORS = [
    "#3b82f6",
    "#ef4444",
    "#f59e0b",
    "#22c55e",
    "#8b5cf6",
    "#06b6d4",
  ];

  return (
    <div className="analytics">

      <h2>📊 Traffic Analytics</h2>

      <div className="charts">

        {/* Pie Chart */}

        <div className="chart-card">

          <h3>Incident Distribution</h3>

          <ResponsiveContainer width="100%" height={280}>

            <PieChart>

              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={95}
                paddingAngle={4}
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

        {/* Bar Chart */}

        <div className="chart-card">

          <h3>Priority Distribution</h3>

          <ResponsiveContainer width="100%" height={280}>

            <BarChart data={priorityData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="value"
                fill="#38bdf8"
                radius={[8, 8, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* Line Chart */}

        <div className="chart-card">

          <h3>Average Response Time</h3>

          <ResponsiveContainer width="100%" height={280}>

            <LineChart data={etaData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Line
                type="monotone"
                dataKey="eta"
                stroke="#22c55e"
                strokeWidth={4}
                dot={{ r: 6 }}
                activeDot={{ r: 8 }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

export default Analytics;