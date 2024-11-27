const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-gray-200 min-h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 to-blue-700 animate-gradient-x">
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay para mejorar legibilidad */}
      </div>

      {/* Contenido del Hero */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-gray-100">
        La Herramienta Financiera para <span className="text-blue-500">Decisiones Inteligentes</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
        Accede a cotizaciones actualizadas, análisis de tendencias y herramientas clave para gestionar tus finanzas personales y empresariales con confianza.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <a href="#features" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transform transition hover:scale-105">
          Ver Funcionalidades
        </a>
        <a href="#contact" className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg shadow-md transform transition hover:scale-105">
          Contáctanos
        </a>
      </div>
    </section>
  );
};

export default Hero;