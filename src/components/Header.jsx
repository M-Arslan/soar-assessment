import React from 'react';

function Header() {
  return (
    <header className="flex items-center justify-between p-[10px] bg-white shadow">
      <h2 className="text-xl font-semibold">Overview</h2>
      <div className="flex items-center space-x-4 gap-5 pr-5">
        <div className="relative">
          <svg
            className="absolute left-3 top-2 h-4 w-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19a8 8 0 1 1 6.32-3.2l4.31 4.31a1 1 0 0 1-1.42 1.42l-4.31-4.31A8 8 0 0 1 11 19z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search for something"
            className="pl-9 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <svg
            className="h-6 w-6 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405C18.79 14.79 18 13.695 18 12.5v-3A6.5 6.5 0 0 0 5 9.5v3c0 1.195-.79 2.29-1.595 3.095L2 17h5m7 0a3 3 0 1 1-6 0h6z"
            />
          </svg>
        </button>

        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <svg
            className="h-6 w-6 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.434 9.011 17.59 7.83l.348-1.62a1 1 0 0 0-.272-.87l-1.135-1.135a1 1 0 0 0-.87-.273l-1.62.349-1.181-1.845A1 1 0 0 0 10.564 3h-1.128a1 1 0 0 0-.85.46L7.405 5.305l-1.62-.349a1 1 0 0 0-.87.272L3.78 6.363a1 1 0 0 0-.273.87l.349 1.62-1.845 1.181A1 1 0 0 0 2 10.564v1.128a1 1 0 0 0 .46.85l1.845 1.181-.349 1.62a1 1 0 0 0 .272.87l1.135 1.135a1 1 0 0 0 .87.273l1.62-.349 1.181 1.845a1 1 0 0 0 .85.46h1.128a1 1 0 0 0 .85-.46l1.181-1.845 1.62.349a1 1 0 0 0 .87-.272l1.135-1.135a1 1 0 0 0 .273-.87l-.349-1.62 1.845-1.181A1 1 0 0 0 20 11.436v-1.128a1 1 0 0 0-.566-.9ZM10 13a3 3 0 1 1 3-3 3.01 3.01 0 0 1-3 3Z"
            />
          </svg>
        </button>

        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
}

export default Header;
