import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo e Información */}
        <div className="text-center md:text-left">
          <h3 className="text-xl text-gray-200 font-bold mb-2">Mi App</h3>
          <p className="text-sm">
            La mejor plataforma para tus cotizaciones y estadísticas. <br />
            Hecho con ❤️ para ti.
          </p>
        </div>

        {/* Enlaces */}
        <ul className="flex flex-wrap justify-center md:justify-start gap-6">
          <li>
            <a href="/home" className="hover:text-gray-200 transition">
              Inicio
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-200 transition">
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-gray-200 transition">
              Servicios
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-200 transition">
              Contacto
            </a>
          </li>
        </ul>

        {/* Derechos reservados */}
        <div className="text-center text-sm mt-4 md:mt-0">
          <p>© 2024 Mi App. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;