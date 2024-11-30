const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-gray-200 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 text-center overflow-hidden">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 to-blue-700 animate-gradient-x">
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay para mejorar legibilidad */}
      </div>

      {/* Contenido del Hero */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 text-gray-100 leading-tight">
        La Herramienta Financiera para{' '}
        <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Decisiones Inteligentes
        </span>{' '}
        🚀
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-3xl mb-8 leading-relaxed">
        Accede a cotizaciones actualizadas, análisis de tendencias y herramientas clave para gestionar tus finanzas personales y empresariales con confianza.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
        <a
          href="#features"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 sm:px-6 rounded-lg shadow-md transform transition hover:scale-105 text-sm sm:text-base"
        >
          Ver Funcionalidades
        </a>
        <a
          href="#contact"
          className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 sm:px-6 rounded-lg shadow-md transform transition hover:scale-105 text-sm sm:text-base"
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
};

export default Hero;