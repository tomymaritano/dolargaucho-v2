const ContactForm: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 relative" id="contact">
      <div className="absolute inset-0  z-0"></div>
      <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center gap-12">
        {/* Título y Descripción */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Contáctame</h2>
          <p className="text-base sm:text-lg text-gray-400">
            ¿Quieres sumarte al desarrollo de esta App?
          </p>
        </div>

        {/* Formulario */}
        <div className="w-full max-w-md  backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-xl">
          <form className="space-y-6">
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