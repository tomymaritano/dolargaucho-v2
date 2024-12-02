import React, { useEffect, useState } from "react";
import Marquesina from "./Marquesina";

interface Rendimiento {
  entidad: string;
  rendimientos: {
    moneda: string;
    apy: number;
    fecha: string;
  }[];
}

const Rendimientos: React.FC = () => {
  const [data, setData] = useState<Rendimiento[] | null>(null);
  const [selectedEntidad, setSelectedEntidad] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.argentinadatos.com/v1/finanzas/rendimientos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("No hay datos disponibles.");
        }

        const orderedData = [...data].sort((a, b) => {
          if (a.entidad.toLowerCase() === "lemoncash") return -1;
          if (b.entidad.toLowerCase() === "lemoncash") return 1;
          return 0;
        });

        setData(orderedData);
        setSelectedEntidad(orderedData[0]?.entidad || null);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <p className="text-2xl font-semibold">Cargando rendimientos...</p>
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

  const handleEntidadChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEntidad(event.target.value);
  };

  const filteredData = data?.find((item) => item.entidad === selectedEntidad);

  const logos = [
    { entidad: "Lemoncash", src: "/lemon.svg" },
    { entidad: "Belo", src: "/belo.png" },
    { entidad: "Letsbit", src: "/letsbit.png" },
    { entidad: "Ripio", src: "/ripio.png" },
    { entidad: "Fiwind", src: "/fiwind.svg" },
  ];

  return (
    <div className="bg-gray-900 text-gray-200 py-10 px-6">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Rendimientos Financieros
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Consulta los rendimientos más recientes y toma decisiones informadas
          sobre tus finanzas.
        </p>
        <div className="mb-6 text-left">
          <label
            htmlFor="entidad-select"
            className="block text-lg font-medium text-gray-400 mb-2"
          >
            Selecciona una entidad:
          </label>
          <select
            id="entidad-select"
            value={selectedEntidad || ""}
            onChange={handleEntidadChange}
            className="w-full bg-gray-800 text-gray-200 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {data?.map((item, index) => (
              <option key={index} value={item.entidad}>
                {item.entidad}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {filteredData?.rendimientos.map((rend, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="mb-4">
                <p className="text-lg font-semibold text-white">{rend.moneda}</p>
                <p className="text-sm text-gray-400">Fecha: {rend.fecha}</p>
              </div>
              <div className="text-2xl font-bold text-green-400">
                {rend.apy.toFixed(2)}%
              </div>
            </div>
          ))}
        </div>
        <Marquesina logos={logos} />
      </div>
    </div>
  );
};

export default Rendimientos;