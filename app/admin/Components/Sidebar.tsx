"use client"
import { FC, useState } from "react";
import { Home, Gamepad, Users, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex flex-col h-screen transition-all duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-20"} bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 shadow-xl`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <span className={`text-white text-xl font-extrabold tracking-wider ${!isOpen && "hidden"}`}>
         Admin
        </span>
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          {isOpen ? (
            <ChevronLeft className="transform hover:scale-110 transition-transform duration-200 ease-in-out" />
          ) : (
            <ChevronRight className="transform hover:scale-110 transition-transform duration-200 ease-in-out" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <ul className="mt-6">
        <Link href={'/admin/Dashboard'}>
        <li className="group flex items-center px-4 py-3 text-white hover:bg-gray-600 hover:shadow-lg transition-all duration-300 rounded-lg cursor-pointer">
          <Home className="mr-3 group-hover:scale-125 group-hover:text-blue-400 transition-transform duration-300 ease-in-out" />
          <span className={`${!isOpen && "hidden"} transition-all duration-200 ease-in-out`}>Dashboard</span>
        </li>
        </Link>
         <Link href={'/admin/Game'}>
        <li className="group flex items-center px-4 py-3 text-white hover:bg-gray-600 hover:shadow-lg transition-all duration-300 rounded-lg cursor-pointer">
          <Gamepad className="mr-3 group-hover:scale-125 group-hover:text-green-400 transition-transform duration-300 ease-in-out" />
          <span className={`${!isOpen && "hidden"} transition-all duration-200 ease-in-out`}>Games</span>
        </li>
        </Link>
       

         <Link href={'/admin/user'}>
        <li className="group flex items-center px-4 py-3 text-white hover:bg-gray-600 hover:shadow-lg transition-all duration-300 rounded-lg cursor-pointer">
          <Users className="mr-3 group-hover:scale-125 group-hover:text-pink-400 transition-transform duration-300 ease-in-out" />
          <span className={`${!isOpen && "hidden"} transition-all duration-200 ease-in-out`}>Users</span>
        </li>
        
        </Link>
        <Link href={'/admin/Deposit'}>
        <li className="group flex items-center px-4 py-3 text-white hover:bg-gray-600 hover:shadow-lg transition-all duration-300 rounded-lg cursor-pointer">
          <Users className="mr-3 group-hover:scale-125 group-hover:text-pink-400 transition-transform duration-300 ease-in-out" />
          <span className={`${!isOpen && "hidden"} transition-all duration-200 ease-in-out`}>Deposit</span>
        </li>
        </Link>
        <Link href={'/admin/withdrawal'}>
        <li className="group flex items-center px-4 py-3 text-white hover:bg-gray-600 hover:shadow-lg transition-all duration-300 rounded-lg cursor-pointer">
          <Users className="mr-3 group-hover:scale-125 group-hover:text-pink-400 transition-transform duration-300 ease-in-out" />
          <span className={`${!isOpen && "hidden"} transition-all duration-200 ease-in-out`}>Withdrawal</span>
        </li>
        </Link>
        <Link href={'/admin/Payment'}>  
        <li className="group flex items-center px-4 py-3 text-white hover:bg-gray-600 hover:shadow-lg transition-all duration-300 rounded-lg cursor-pointer">
          <Users className="mr-3 group-hover:scale-125 group-hover:text-pink-400 transition-transform duration-300 ease-in-out" />
          <span className={`${!isOpen && "hidden"} transition-all duration-200 ease-in-out`}>Payment setting</span>
        </li>
        </Link>
        <Link href={'/admin/Setting'}>
        <li className="group flex items-center px-4 py-3 text-white hover:bg-gray-600 hover:shadow-lg transition-all duration-300 rounded-lg cursor-pointer">
          <Settings className="mr-3 group-hover:scale-125 group-hover:text-yellow-400 transition-transform duration-300 ease-in-out" />
          <span className={`${!isOpen && "hidden"} transition-all duration-200 ease-in-out`}>Settings</span>
        </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
