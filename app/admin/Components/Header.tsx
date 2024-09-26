import { FC } from "react";
import { Search, Bell, User } from "lucide-react";

interface UserProfile {
  email: string;
  name: string;
}

const Header: FC = () => {
  // Simulated user data (replace with dynamic data from your backend/auth system)
  const currentUser: UserProfile = {
    email: "john.doe@example.com",
    name: "John Doe"
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4 h-16">
        {/* Logo / Title */}
        <div className="text-white text-2xl font-bold tracking-wide">
          Game Admin Panel
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search games, users..."
            className="bg-gray-800 text-white rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
        </div>

        {/* Icons (Notifications and Profile) */}
        <div className="flex items-center space-x-4">
          {/* Notification Bell */}
          <div className="relative">
            <Bell className="text-white hover:text-blue-400 transition duration-200 cursor-pointer" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </div>

          {/* User Profile with Email */}
          <div className="relative group">
            <User className="text-white hover:text-blue-400 transition duration-200 cursor-pointer" />
            {/* Dropdown (hidden until hover or click) */}
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg hidden group-hover:block">
              <div className="px-4 py-2">
                <p className="text-sm font-semibold">Welcome, {currentUser.name}</p>
                <p className="text-xs text-gray-400">{currentUser.email}</p>
              </div>
              <hr className="border-gray-700" />
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Settings
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
