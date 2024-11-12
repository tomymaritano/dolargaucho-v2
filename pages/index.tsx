import React from 'react';
import MainLayout from '../layouts/MainLayout';
import CotizacionGrid from '@/components/CotizacionArgentina';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <CotizacionGrid />
    </MainLayout>
  );
};

export default Home;