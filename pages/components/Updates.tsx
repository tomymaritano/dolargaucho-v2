import React from "react";
import { FaCheckCircle, FaClock } from "react-icons/fa";

interface Update {
  title: string;
  description: string;
  comingDate: string; // Fecha estimada de llegada
}

const updates: Update[] = [
  {
    title: "Soporte para múltiples monedas",
    description: "Añadiremos soporte para monitorear más monedas y activos financieros.",
    comingDate: "Próximamente",
  },
  {
    title: "Notificaciones personalizadas",
    description: "Recibe alertas cuando el tipo de cambio alcance un valor específico.",
    comingDate: "Diciembre 2024",
  },
  {
    title: "Historial de precios interactivo",
    description: "Podrás explorar y analizar el historial de precios de manera interactiva.",
    comingDate: "Enero 2025",
  },
];

const ComingSoon: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-200 py-10 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">Próximas Actualizaciones</h2>
        <p className="text-lg text-gray-400 mb-8">
          Estas son algunas de las funcionalidades emocionantes que estamos desarrollando para ti. ¡Mantente atento!
        </p>
        <ul className="space-y-6">
          {updates.map((update, index) => (
            <li
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="flex-shrink-0 text-blue-500 text-4xl mb-4 md:mb-0 md:mr-6">
                <FaClock />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white">{update.title}</h3>
                <p className="text-gray-400 mb-2">{update.description}</p>
                <span className="text-green-400 font-semibold">{update.comingDate}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComingSoon;