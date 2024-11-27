import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-900 text-gray-200 min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Bienvenido a <span className="text-blue-400">Dolar Gaucho</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-6">
        La plataforma con estilo para consultar cotizaciones, estadísticas y mucho más.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <a
          href="#features"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transition"
        >
          Ver Funcionalidades
        </a>
        <a
          href="#contact"
          className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg shadow-md transition"
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
};

export default Hero;