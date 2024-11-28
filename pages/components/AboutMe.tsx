import React from 'react';

const AboutMe = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-8 overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-purple-600 opacity-10 blur-2xl animate-pulse"></div>
        <div className="absolute top-10 right-10 w-48 h-48 bg-pink-500 opacity-5 blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-12">
        {/* Imagen con Efecto */}
        <div className="relative group flex-shrink-0">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEsQs3eeu1QLQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730203258535?e=1738195200&v=beta&t=m1-eqRbZpRM8RJwFdskeT5Xtv9Lm-kww2GJWVuQKYac"
            alt="Tomás Maritano"
            className="w-60 h-60 rounded-full object-cover border-4 border-blue-500 shadow-lg group-hover:shadow-2xl transition-all duration-300"
          />
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
        </div>

        {/* Contenido */}
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-extrabold text-blue-400 mb-6 tracking-wide">
            ¿Por qué <span className="text-blue-500">Dólar Gaucho</span>?
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Hola, soy <span className="text-blue-400 font-bold">Tomy Maritano</span>, un creador de productos digitales apasionado por la tecnología y las soluciones innovadoras. 
            Mi objetivo con <span className="text-blue-500 font-semibold">Dólar Gaucho</span> es proporcionar una plataforma confiable y moderna para que los argentinos puedan monitorear el tipo de cambio y tomar decisiones informadas.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            En un entorno económico desafiante, mi misión es simplificar la experiencia del usuario, 
            ofreciendo una herramienta intuitiva, funcional y accesible para todos.
          </p>

          {/* Botones */}
          <div className="flex justify-center md:justify-start mt-8 gap-4">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg shadow-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Sobre el Proyecto
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-8 rounded-lg shadow-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Contáctame
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;