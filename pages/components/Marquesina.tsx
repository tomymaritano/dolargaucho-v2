import React from "react";

interface MarquesinaProps {
  logos: { entidad: string; src: string }[];
}

const Marquesina: React.FC<MarquesinaProps> = ({ logos }) => {
  return (
    <div className="py-6 mb-8 overflow-hidden relative bg-gray-900">
      <div className="flex space-x-16 animate-marquee"> {/* Aumentar el espaciado */}
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 h-32"
          >
            <img
              src={logo.src}
              alt={logo.entidad}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquesina;