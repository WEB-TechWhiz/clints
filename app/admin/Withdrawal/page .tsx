'use client';

import React, { useState } from 'react';

// Type for Withdrawal Request
interface WithdrawalRequest {
  id: number;
  username: string;
  email: string;
  withdrawalAmount: number;
  withdrawalDate: string;
  gameName: string;
}

// Sample data for withdrawal requests (In a real application, this could come from an API)
const sampleRequests: WithdrawalRequest[] = [
  {
    id: 1,
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    withdrawalAmount: 100.50,
    withdrawalDate: new Date().toLocaleString(),
    gameName: 'Amazing Game',
  },
  {
    id: 2,
    username: 'JaneSmith',
    email: 'jane.smith@example.com',
    withdrawalAmount: 250.75,
    withdrawalDate: new Date().toLocaleString(),
    gameName: 'Epic Adventure',
  },
];

const Withdrawal: React.FC = () => {
  const [requests, setRequests] = useState<WithdrawalRequest[]>(sampleRequests);

  const handleAcceptRequest = (id: number) => {
    // Logic to handle the acceptance of the withdrawal request
    setRequests(requests.filter(request => request.id !== id)); // Remove accepted request from the list
    alert(`Withdrawal request from ${id} has been accepted.`);
  };

  const handleRejectRequest = (id: number) => {
    // Logic to handle the rejection of the withdrawal request
    setRequests(requests.filter(request => request.id !== id)); // Remove rejected request from the list
    alert(`Withdrawal request from ${id} has been rejected.`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Withdrawal Requests</h2>

        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">Username</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Withdrawal Amount</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Withdrawal Date & Time</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Game Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td className="border border-gray-300 px-4 py-2">{request.username}</td>
                <td className="border border-gray-300 px-4 py-2">{request.email}</td>
                <td className="border border-gray-300 px-4 py-2">${request.withdrawalAmount.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2">{request.withdrawalDate}</td>
                <td className="border border-gray-300 px-4 py-2">{request.gameName}</td>
                <td className="border border-gray-300 px-4 py-2 flex space-x-2">
                  <button 
                    onClick={() => handleAcceptRequest(request.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition duration-300"
                  >
                    Accept
                  </button>
                  <button 
                    onClick={() => handleRejectRequest(request.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Withdrawal;
