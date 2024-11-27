import React from 'react';
import { FaDollarSign, FaSyncAlt, FaLaptop, FaFileExport } from 'react-icons/fa';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FaDollarSign className="text-blue-400 text-2xl" />,
    title: 'Consulta de Cotizaciones',
    description: 'Consulta en tiempo real el valor del dólar y otros indicadores financieros.',
  },
  {
    icon: <FaSyncAlt className="text-green-400 text-2xl" />,
    title: 'Actualización Automática',
    description: 'Mantente informado con datos siempre actualizados directamente desde las fuentes.',
  },
  {
    icon: <FaLaptop className="text-purple-400 text-2xl" />,
    title: 'Multiplataforma',
    description: 'Accede desde cualquier dispositivo con una experiencia optimizada.',
  },
  {
    icon: <FaFileExport className="text-yellow-400 text-2xl" />,
    title: 'Exportación de Datos',
    description: 'Exporta tus consultas en formatos accesibles para mayor comodidad.',
  },
];

const FeaturesBlock: React.FC = () => {
  return (
    <section className="bg-gray-950 text-gray-200 py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Funcionalidades de Mi App</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/70 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBlock;