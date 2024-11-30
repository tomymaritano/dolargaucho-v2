import React, { useEffect, useState } from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';

interface RiesgoPaisData {
  fecha: string;
  valor: number;
  descripcion: string;
}

const RiesgoPais: React.FC = () => {
  const [data, setData] = useState<RiesgoPaisData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.argentinadatos.com/v1/finanzas/indices/riesgo-pais/ultimo")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <p className="text-2xl font-semibold">Cargando datos del riesgo país...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <p className="text-2xl font-semibold text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-950 text-white">
      <div className="absolute top-10 right-10 w-48 h-48 bg-green-500 opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500 opacity-10 blur-2xl animate-pulse"></div>

      <div className="rounded-2xl  p-10 max-w-lg w-full text-center">
        <div className="flex flex-col items-center">
          <FaGlobeAmericas className="text-green-400 text-6xl mb-4" />
          <p className="text-7xl md:text-8xl font-extrabold text-green-400 mb-4">
            {data?.valor}
          </p>
          <p className="text-lg text-gray-400 mb-4">
            {data?.descripcion || "Índice de riesgo país actualizado"}
          </p>
          <p className="text-sm text-gray-500">
            Actualizado: {data?.fecha}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiesgoPais;