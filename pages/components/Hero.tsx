import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-gray-200 min-h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-500 rounded-full opacity-10 blur-2xl animate-pulse"></div>
      </div>

      {/* Hero Content */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
        Bienvenido a <span className="text-blue-400">Dolar Gaucho</span>
      </h1>
      <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mb-8">
        Consulta cotizaciones, estadísticas y todo lo que necesitas en una experiencia optimizada y moderna.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <a
          href="#features"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transform transition hover:scale-105"
        >
          Ver Funcionalidades
        </a>
        <a
          href="#contact"
          className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg shadow-md transform transition hover:scale-105"
        >
          Contáctanos
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 w-full flex justify-center space-x-4 opacity-50">
        <span className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></span>
        <span className="w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-100"></span>
        <span className="w-4 h-4 bg-pink-500 rounded-full animate-bounce delay-200"></span>
      </div>
    </section>
  );
};

export default Hero;