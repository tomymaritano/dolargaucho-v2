import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-400 py-8 px-6">
      <div className="container mx-auto text-center flex flex-col gap-6">
        {/* Branding */}
        <div>
          <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
            Dólar Gaucho
          </h3>
          <p className="text-sm text-gray-400 mt-2">
            La plataforma Web3 para cotizaciones y estadísticas financieras confiables. Simplificamos el acceso al dólar en Argentina.
          </p>
        </div>

        {/* Enlaces */}
        <ul className="flex justify-center gap-8 text-sm">
          <li>
            <a href="/home" className="hover:text-blue-400 transition">
              Inicio
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-400 transition">
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-blue-400 transition">
              Servicios
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-400 transition">
              Contacto
            </a>
          </li>
        </ul>

        {/* Derechos Reservados */}
        <p className="text-xs text-gray-500">
          © 2024 Dólar Gaucho. Construido con tecnología Web3 para un futuro financiero descentralizado.
        </p>

        {/* Slogan Web3 */}
        <div className="text-center text-sm mt-4">
          <p className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text font-semibold">
            Potencia tus finanzas con la descentralización. 🚀
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;