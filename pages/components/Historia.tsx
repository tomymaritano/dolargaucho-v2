import React from "react";
import Image from "next/image";
import chart from "../../public/chart.jpg";

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
          <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6 tracking-wide">
            Nuestra Historia en el Mundo Web3
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            <span className="text-blue-500 font-semibold">Dólar Gaucho</span> no
            es solo una plataforma, es una puerta hacia un futuro financiero
            más conectado. Nacimos para resolver la necesidad de una herramienta
            confiable en un ecosistema que evoluciona hacia{" "}
            <span className="text-purple-500 font-semibold">Web3</span>.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Nuestra misión es unir la tecnología blockchain y el análisis
            financiero para empoderar a nuestros usuarios con datos claros,
            herramientas innovadoras y un ecosistema que respalde decisiones
            inteligentes en tiempo real.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              Descubre Más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Historia;