import Image from 'next/image';
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="bg-gray-900 text-gray-200 py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50 z-0"></div>
      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Imagen decorativa
        <div className="flex-1 hidden lg:block relative">
          <Image
            alt="Formulario de contacto"
            src="https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            layout="responsive"
            width={600}
            height={400}
            className="object-cover rounded-2xl"
          />
        </div> */}

        {/* Formulario */}
        <div className="flex-1">
          <h2 className="text-5xl font-extrabold text-white mb-6">Contáctame</h2>
          <p className="text-lg text-gray-400 mb-10">
            ¿Quieres sumarte al desarrollo de esta App?
          </p>
          <form className="bg-gray-800/70 backdrop-blur-md p-10 rounded-2xl shadow-2xl space-y-8">
            {/* Nombre */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-transparent border border-gray-700 text-gray-200 rounded-lg py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 peer placeholder-transparent"
                placeholder="Nombre"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-6 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-500 peer-focus:text-sm"
              >
                Nombre
              </label>
            </div>
            {/* Correo Electrónico */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-transparent border border-gray-700 text-gray-200 rounded-lg py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 peer placeholder-transparent"
                placeholder="Correo Electrónico"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-6 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-500 peer-focus:text-sm"
              >
                Correo Electrónico
              </label>
            </div>
            {/* Mensaje */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                className="w-full bg-transparent border border-gray-700 text-gray-200 rounded-lg py-4 px-6 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 peer placeholder-transparent"
                placeholder="Mensaje"
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-6 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-blue-500 peer-focus:text-sm"
              >
                Mensaje
              </label>
            </div>
            {/* Botón de Enviar */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;