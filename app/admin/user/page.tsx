'use clint'
import { FC } from 'react';

const User: FC = () => {
  // Simulated user data
  const users = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      deposit: 1000,
      withdrawal: 200,
      favoriteGame: "Aviator",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      deposit: 500,
      withdrawal: 100,
      favoriteGame: "Poker",
    },
    {
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      deposit: 1500,
      withdrawal: 300,
      favoriteGame: "Blackjack",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          User Details
        </h1>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto shadow-lg">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-3 px-6 text-left">User Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Deposit Amount</th>
              <th className="py-3 px-6 text-left">Withdrawal</th>
              <th className="py-3 px-6 text-left">Favorite Game</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-4 px-6">{user.name}</td>
                <td className="py-4 px-6">{user.email}</td>
                <td className="py-4 px-6">${user.deposit}</td>
                <td className="py-4 px-6">${user.withdrawal}</td>
                <td className="py-4 px-6">{user.favoriteGame}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Logo Section */}
      <div className="mt-10 text-center">
        <img
          src="/logo.png" // Replace with your actual logo path
          alt="Gaming Admin Logo"
          className="mx-auto h-20 w-auto"
        />
      </div>
    </div>
  );
};

export default User;
