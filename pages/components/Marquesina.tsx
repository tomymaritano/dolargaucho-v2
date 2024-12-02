import React from "react";

interface MarquesinaProps {
  logos: { entidad: string; src: string }[];
}

const Marquesina: React.FC<MarquesinaProps> = ({ logos = [] }) => {
  if (!logos || logos.length === 0) {
    // Mostrar mensaje de carga o placeholder si no hay logos
    return <div className="text-gray-400">Cargando logos...</div>;
  }

  return (
    <div className="overflow-hidden py-4">
      <div className="flex space-x-8 animate-marquee">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 h-32 rounded-full p-2"
          >
            <img
              src={logo.src}
              alt={logo.entidad}
              className="object-contain w-full h-full rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquesina;