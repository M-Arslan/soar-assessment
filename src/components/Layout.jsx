import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-white">
      <aside className="w-64 flex flex-col">
        <div className="flex items-center p-4 border-b border-gray-700">
        <svg
                  className="h-5 w-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 20a1 1 0 0 1-1-1v-6H6a1 1 0 0 1-1-1V7.414L9.293 3.12a1 1 0 0 1 1.414 0l4.293 4.293V12a1 1 0 0 1-1 1h-3v6a1 1 0 0 1-1 1Z" />
                </svg>
          <span className="ml-2 text-xl font-bold">Soar Task</span>
        </div>


        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="h-5 w-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 20a1 1 0 0 1-1-1v-6H6a1 1 0 0 1-1-1V7.414L9.293 3.12a1 1 0 0 1 1.414 0l4.293 4.293V12a1 1 0 0 1-1 1h-3v6a1 1 0 0 1-1 1Z" />
                </svg>
                
                <span>Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                to="/transactions"
                className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="h-5 w-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 5a2 2 0 0 1 2-2h14a1 1 0 1 1 0 2H4v9a2 2 0 0 1-2-2V5Zm16 4H6a2 2 0 0 0-2 2v5a1 1 0 1 0 2 0v-5h12a1 1 0 1 0 0-2Z" />
                </svg>
                <span className='font-bold text-muted'>Transactions</span>
              </Link>
            </li>

            <li>
              <Link
                to="/accounts"
                className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="h-5 w-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm4 11h-8a4 4 0 0 0-4 4v1h16v-1a4 4 0 0 0-4-4Z" />
                </svg>
                <span>Accounts</span>
              </Link>
            </li>

            <li>
              <Link
                to="/investments"
                className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="h-5 w-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 0 1 8 8 7.978 7.978 0 0 1-1.128 4.049l2.4 2.4a1 1 0 1 1-1.414 1.414l-2.4-2.4A7.978 7.978 0 0 1 10 18a8 8 0 1 1 0-16Zm3 8a3 3 0 1 0-3 3 3 3 0 0 0 3-3Z" />
                </svg>
                <span>Investments</span>
              </Link>
            </li>

            <li>
              <Link
                to="/credit-cards"
                className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="h-5 w-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 5h16a2 2 0 0 1 2 2v3H0V7a2 2 0 0 1 2-2Zm-2 8v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2H0Z" />
                </svg>
                <span>Credit Cards</span>
              </Link>
            </li>

            <li>
              <Link
                to="/loans"
                className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="h-5 w-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5ZM7 4h10a3 3 0 0 1 3 3v2H4V7a3 3 0 0 1 3-3Zm10 16H7a3 3 0 0 1-3-3v-6h16v6a3 3 0 0 1-3 3Z" />
                </svg>
                <span>Loans</span>
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="h-5 w-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049.435a1 1 0 0 1 1.902 0l1.117 3.437a1 1 0 0 0 .949.69h3.62a1 1 0 0 1 .592 1.807l-2.928 2.13a1 1 0 0 0-.364 1.118l1.118 3.437a1 1 0 0 1-1.537 1.118L10 12.347l-2.518 1.825a1 1 0 0 1-1.537-1.118l1.118-3.437a1 1 0 0 0-.364-1.118L3.77 6.369A1 1 0 0 1 4.363 4.562h3.62a1 1 0 0 0 .949-.69L10 0Z" />
                </svg>
                <span>Services</span>
              </Link>
            </li>

            <li>
              <Link
                to="/privileges"
                className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="h-5 w-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m10 1 2.39 4.847 5.359.778-3.873 3.775.915 5.336L10 13.75l-4.79 2.516.914-5.336L2.25 6.625l5.36-.778L10 1Z" />
                </svg>
                <span>My Privileges</span>
              </Link>
            </li>

            <li>
              <Link
                to="/settings"
                className="flex items-center p-2 rounded hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="h-5 w-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M19.434 9.011 17.59 7.83l.348-1.62a1 1 0 0 0-.272-.87l-1.135-1.135a1 1 0 0 0-.87-.273l-1.62.349-1.181-1.845A1 1 0 0 0 10.564 3h-1.128a1 1 0 0 0-.85.46L7.405 5.305l-1.62-.349a1 1 0 0 0-.87.272L3.78 6.363a1 1 0 0 0-.273.87l.349 1.62-1.845 1.181A1 1 0 0 0 2 10.564v1.128a1 1 0 0 0 .46.85l1.845 1.181-.349 1.62a1 1 0 0 0 .272.87l1.135 1.135a1 1 0 0 0 .87.273l1.62-.349 1.181 1.845a1 1 0 0 0 .85.46h1.128a1 1 0 0 0 .85-.46l1.181-1.845 1.62.349a1 1 0 0 0 .87-.272l1.135-1.135a1 1 0 0 0 .273-.87l-.349-1.62 1.845-1.181A1 1 0 0 0 20 11.436v-1.128a1 1 0 0 0-.566-.9ZM10 13a3 3 0 1 1 3-3 3.01 3.01 0 0 1-3 3Z" />
                </svg>
                <span>Setting</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>


      <div className="flex-1 bg-gray-100 overflow-y-auto">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
