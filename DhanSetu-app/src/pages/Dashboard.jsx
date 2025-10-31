import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { useUser } from "@clerk/clerk-react";

// Dummy data for charts
const trendData = [
  { month: "Apr", investments: 12, liabilities: 4 },
  { month: "May", investments: 12.5, liabilities: 4.1 },
  { month: "Jun", investments: 12.6, liabilities: 4.0 },
  { month: "Jul", investments: 12.8, liabilities: 4.2 },
  { month: "Aug", investments: 13, liabilities: 4.25 },
  { month: "Sep", investments: 13.2, liabilities: 4.3 },
];

const portfolioData = [
  { name: "Stocks", value: 44 },
  { name: "Mutual Funds", value: 28 },
  { name: "Fixed Deposits", value: 16 },
  { name: "Gold", value: 12 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">₹ Pragati-Portal</h1>
        <div className="flex items-center gap-4">
          <span className="font-medium">{user?.fullName || "Guest"}</span>
          <button className="bg-white text-purple-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
            Logout
          </button>
        </div>
      </header>

      <main className="p-8 space-y-8">
        {/* Dashboard Title */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Dashboard Overview
          </h2>
          <p className="text-gray-500">
            Track your financial health in real-time.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-xl p-6">
            <p className="text-gray-500 text-sm">Total Investments</p>
            <h3 className="text-3xl font-bold text-green-600">₹12.45L</h3>
            <p className="text-sm text-green-500 mt-1">↑ 8.5% this month</p>
          </div>
          <div className="bg-white shadow rounded-xl p-6">
            <p className="text-gray-500 text-sm">Total Liabilities</p>
            <h3 className="text-3xl font-bold text-red-500">₹4.25L</h3>
            <p className="text-sm text-red-500 mt-1">↓ 3.2% this month</p>
          </div>
          <div className="bg-white shadow rounded-xl p-6">
            <p className="text-gray-500 text-sm">Net Worth</p>
            <h3 className="text-3xl font-bold text-blue-600">₹8.20L</h3>
            <p className="text-sm text-blue-500 mt-1">↑ 12.8% this month</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Line Chart */}
          <div className="bg-white shadow rounded-xl p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              6-Month Financial Trend
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={trendData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="investments" stroke="#00C49F" strokeWidth={2} />
                <Line type="monotone" dataKey="liabilities" stroke="#FF8042" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-center mt-2 text-sm text-gray-500">
              <p className="mr-4">🟢 Investments</p>
              <p>🔴 Liabilities</p>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Portfolio Mix
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={portfolioData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                  label
                >
                  {portfolioData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Insights Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* AI Insights */}
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              AI Investment Insights
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>💡 Your portfolio is well-diversified across asset classes.</li>
              <li>📈 Net worth increased by 12.8% this quarter.</li>
              <li>🔁 Consider rebalancing — equity allocation is at 68%.</li>
            </ul>
          </div>

          {/* Debt Management */}
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Debt Management Tips
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>💸 Prepay ₹50K on home loan to save ₹8K in interest.</li>
              <li>💳 Clear credit card balance to avoid 36% interest.</li>
              <li>📅 Next EMI due: 15th Nov (₹35,000).</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
