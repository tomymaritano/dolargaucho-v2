import React from 'react';
import Image from 'next/image';
import chart from '../../public/chart.jpg';

const Historia: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-8 overflow-hidden">
      {/* Decoraciones de Fondo */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-2xl -z-10"></div>
      <div className="absolute top-20 right-40 w-48 h-48 bg-pink-500 opacity-10 rounded-full blur-2xl animate-pulse -z-10"></div>

      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-16">
        {/* Imagen Representativa */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-2xl rounded-xl -z-10"></div>
          <Image
            src={chart}
            alt="Ilustración de la historia"
            width={500}
            height={500}
            className="relative rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Contenido de Texto */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-5xl font-extrabold text-blue-400 mb-6 tracking-wide">
            Nuestra Historia
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            <span className="text-blue-500 font-semibold">Dólar Gaucho</span> nació en respuesta a la necesidad de una herramienta confiable y moderna para monitorear el tipo de cambio en Argentina. 
            Nuestro objetivo siempre ha sido simplificar el acceso a la información financiera, brindando una experiencia amigable para todos los usuarios.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hoy en día, somos más que una aplicación; somos un recurso clave para miles de argentinos que buscan tomar decisiones informadas 
            en un entorno económico cambiante.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              Leer Más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Historia;