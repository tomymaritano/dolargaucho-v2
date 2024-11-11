import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <h2 className="text-2xl text-black font-bold mb-4">Bienvenido a la Página Principal</h2>
      <p>Esta es la página principal de tu aplicación. Aquí puedes ver el contenido general.</p>
    </MainLayout>
  );
};

export default Home;