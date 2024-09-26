'use client';

import React from 'react';
import { Bar } from 'react-chartjs-2'; // Chart.js for chart visualization
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'; // Import necessary Chart.js components
import { FaUsers, FaMoneyBillWave, FaDollarSign } from 'react-icons/fa'; // Icons

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard: React.FC = () => {
  // Sample data for total stats
  const totalUsers = 1200;
  const totalDeposits = 25000;
  const totalWithdrawals = 15000;

  // Sample monthly chart data
  const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Deposits',
        data: [2000, 3000, 4000, 2500, 5000, 3000, 4000, 6000, 7000, 8000, 9000, 10000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Withdrawals',
        data: [1500, 2500, 2000, 1500, 3000, 2000, 2500, 4000, 4500, 3000, 2500, 3500],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Total Users Card */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <FaUsers className="text-blue-500 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-2xl font-bold">{totalUsers}</p>
          </div>
        </div>

        {/* Total Deposits Card */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <FaMoneyBillWave className="text-green-500 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Total Deposits</h3>
            <p className="text-2xl font-bold">${totalDeposits.toLocaleString()}</p>
          </div>
        </div>

        {/* Total Withdrawals Card */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <FaDollarSign className="text-red-500 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Total Withdrawals</h3>
            <p className="text-2xl font-bold">${totalWithdrawals.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Monthly Chart */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-6 w-full max-w-5xl">
        <h2 className="text-2xl font-bold mb-4">Monthly Deposits & Withdrawals</h2>
        <Bar data={monthlyData} options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top' as const,
            },
            title: {
              display: true,
              text: 'Monthly Data Overview',
            },
          },
        }} />
      </div>

      {/* Real-time Betting Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-6 w-full max-w-5xl">
        <h2 className="text-2xl font-bold mb-4">Real-Time Betting</h2>
        <p className="text-gray-700">Coming Soon!</p>
      </div>
    </div>
  );
};

export default Dashboard;
