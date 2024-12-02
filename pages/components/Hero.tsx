const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 text-center overflow-hidden"
    >
      {/* Fondo dinámico */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-tr from-blue-500 via-green-400 to-purple-500 rounded-full blur-[80px] sm:blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-green-400 via-blue-500 to-teal-500 rounded-full blur-[100px] sm:blur-[140px] opacity-40 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-800/70 to-transparent"></div>
      </div>

      {/* Contenido principal */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-100 leading-tight tracking-wide max-w-xl sm:max-w-3xl">
        La Plataforma Ideal para Consultar{' '}
        <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          el Dólar en Argentina
        </span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xs sm:max-w-md md:max-w-xl mb-8 leading-relaxed">
        Consulta las cotizaciones más recientes del dólar en tiempo real y accede a herramientas avanzadas de análisis financiero adaptadas a tus necesidades.
      </p>

      {/* Botones de acción */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
        <a
          href="#cotizaciones"
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-6 rounded-lg shadow-lg text-sm sm:text-base font-semibold transform transition hover:scale-105 hover:shadow-xl text-center"
        >
          Ver Cotizaciones
        </a>
        <a
          href="#contacto"
          className="bg-gray-800 border border-gray-700 text-white py-3 px-6 rounded-lg shadow-lg text-sm sm:text-base font-semibold transform transition hover:scale-105 hover:bg-gray-700 text-center"
        >
          Contáctanos
        </a>
      </div>

      {/* Características rápidas */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 text-sm sm:text-base text-gray-300 max-w-xs sm:max-w-4xl">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-blue-400 rounded-full shadow-md"></div>
          <p>Actualizaciones diarias</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-green-400 rounded-full shadow-md"></div>
          <p>Cotizaciones del Dólar</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-purple-400 rounded-full shadow-md"></div>
          <p>Análisis Financiero Personalizado</p>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-10 w-full flex justify-center space-x-2">
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-green-500 to-blue-400 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-green-500 to-blue-400 rounded-full animate-bounce delay-150"></div>
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-green-500 to-blue-400 rounded-full animate-bounce delay-300"></div>
      </div>
    </section>
  );
};

export default Hero;