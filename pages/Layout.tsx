import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#121212', color: 'var(--text-color)', minHeight: '100vh' }}>
      <Navbar />
      <main>
        {children}
      </main>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Layout;