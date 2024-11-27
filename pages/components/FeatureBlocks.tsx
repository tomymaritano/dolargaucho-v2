import React from 'react';
import { FaDollarSign, FaSyncAlt, FaLaptop, FaFileExport } from 'react-icons/fa';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FaDollarSign className="text-blue-500 text-3xl" />,
    title: 'Consulta de Cotizaciones',
    description: 'Consulta en tiempo real el valor del dólar y otros indicadores financieros.',
  },
  {
    icon: <FaSyncAlt className="text-green-500 text-3xl" />,
    title: 'Actualización Automática',
    description: 'Mantente informado con datos siempre actualizados directamente desde las fuentes.',
  },
  {
    icon: <FaLaptop className="text-purple-500 text-3xl" />,
    title: 'Multiplataforma',
    description: 'Accede desde cualquier dispositivo con una experiencia optimizada.',
  },
  {
    icon: <FaFileExport className="text-yellow-500 text-3xl" />,
    title: 'Exportación de Datos',
    description: 'Exporta tus consultas en formatos accesibles para mayor comodidad.',
  },
];

const FeaturesBlock: React.FC = () => {
  return (
    <section className="bg-gray-950 text-gray-200 py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-white tracking-wide">
          Funcionalidades de Mi App
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <div className="mb-6 flex justify-center items-center">
                <div className="bg-gray-700 p-4 rounded-full">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBlock;