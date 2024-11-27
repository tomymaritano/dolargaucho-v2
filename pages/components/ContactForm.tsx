import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="bg-gray-900 text-gray-200 py-16 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contáctanos</h2>
        <form className="bg-gray-800/70 backdrop-blur-md p-8 rounded-lg shadow-lg space-y-6">
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-900 text-gray-200 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
          {/* Correo Electrónico */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-900 text-gray-200 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu correo electrónico"
              required
            />
          </div>
          {/* Mensaje */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-900 text-gray-200 border border-gray-700 rounded-lg py-2 px-4 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe tu mensaje"
              required
            />
          </div>
          {/* Botón de Enviar */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md transition"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;