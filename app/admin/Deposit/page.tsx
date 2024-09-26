'use client';

import React, { useState } from 'react';

// Type for Deposit Request
interface DepositRequest {
  id: number;
  username: string;
  email: string;
  depositAmount: number;
  depositDate: string;
  gameName: string;
}

// Sample data for deposit requests (In a real application, this could come from an API)
const sampleRequests: DepositRequest[] = [
  {
    id: 1,
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    depositAmount: 150.75,
    depositDate: new Date().toLocaleString(),
    gameName: 'Awesome Game',
  },
  {
    id: 2,
    username: 'JaneSmith',
    email: 'jane.smith@example.com',
    depositAmount: 200.50,
    depositDate: new Date().toLocaleString(),
    gameName: 'Exciting Adventure',
  },
];

const DepositRequests: React.FC = () => {
  const [requests, setRequests] = useState<DepositRequest[]>(sampleRequests);

  const handleAcceptRequest = (id: number) => {
    // Logic to handle the acceptance of the deposit request
    setRequests(requests.filter(request => request.id !== id)); // Remove accepted request from the list
    alert(`Deposit request from ${id} has been accepted.`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Deposit Requests</h2>

        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">Username</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Deposit Amount</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Deposit Date & Time</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Game Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td className="border border-gray-300 px-4 py-2">{request.username}</td>
                <td className="border border-gray-300 px-4 py-2">{request.email}</td>
                <td className="border border-gray-300 px-4 py-2">${request.depositAmount.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2">{request.depositDate}</td>
                <td className="border border-gray-300 px-4 py-2">{request.gameName}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button 
                    onClick={() => handleAcceptRequest(request.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition duration-300"
                  >
                    Accept
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

export default DepositRequests;
