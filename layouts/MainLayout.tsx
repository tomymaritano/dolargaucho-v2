import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;