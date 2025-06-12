import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
     <Navbar />
        <main className="flex-1 p-6 bg-white">{children}
          <div className="container mt-5">
            <h1 className="text-primary">Welcome to Bootstrap in React!</h1>
            <button className="btn btn-success">Click Me</button>
          </div>

        </main>
      <Footer />
    </div>
  );
};

export default Layout;
