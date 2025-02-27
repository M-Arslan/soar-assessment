import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';


const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />

      <div className="flex-1 bg-gray-100 overflow-y-auto">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
