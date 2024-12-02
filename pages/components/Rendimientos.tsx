import React, { useEffect, useState } from "react";
import Marquesina from "./Marquesina";
import { FaShareAlt, FaCopy } from "react-icons/fa";

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

  const handleCopy = (rend: { moneda: string; apy: number; fecha: string }) => {
    const textToCopy = `Rendimiento de ${selectedEntidad}\nMoneda: ${rend.moneda}\nAPY: ${rend.apy.toFixed(
      2
    )}%\nFecha: ${rend.fecha}\nConsulta más en: https://dolargaucho.com.ar/#rendimientos`;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => alert("Texto copiado al portapapeles."))
      .catch(() => alert("Error al copiar el texto."));
  };

  const handleShare = (rend: { moneda: string; apy: number; fecha: string }) => {
    const shareData = {
      title: `Rendimiento de ${selectedEntidad}`,
      text: `Moneda: ${rend.moneda}\nAPY: ${rend.apy.toFixed(
        2
      )}%\nFecha: ${rend.fecha}\nConsulta más en: https://dolargaucho.com.ar/#rendimientos`,
      url: "https://dolargaucho.com.ar/#rendimientos",
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("Compartido con éxito"))
        .catch(() => alert("Error al compartir."));
    } else {
      alert(
        "Tu navegador no soporta compartir. Intenta copiar el texto manualmente."
      );
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <p className="text-2xl font-semibold animate-pulse">Cargando rendimientos...</p>
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

  const filteredData = data?.find((item) => item.entidad === selectedEntidad);

  const logos = [
    { entidad: "Lemoncash", src: "/lemon.svg" },
    { entidad: "Belo", src: "/belo.png" },
    { entidad: "Letsbit", src: "/letsbit.png" },
    { entidad: "Ripio", src: "/ripio.png" },
    { entidad: "Fiwind", src: "/fiwind.svg" },
  ];

  return (
    <div className="bg-gray-950 text-gray-200 py-10 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
          Rendimientos Financieros
        </h2>
        <p className="text-base sm:text-lg text-gray-400 mb-8">
          Explora los rendimientos más recientes y toma decisiones inteligentes con estilo Web3.
        </p>
        <div className="mb-6 text-left">
          <label
            htmlFor="entidad-select"
            className="block text-sm sm:text-lg font-medium text-gray-400 mb-2"
          >
            Selecciona una entidad:
          </label>
          <select
            id="entidad-select"
            value={selectedEntidad || ""}
            onChange={(e) => setSelectedEntidad(e.target.value)}
            className="w-full bg-gray-800 text-gray-200 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            {data?.map((item, index) => (
              <option key={index} value={item.entidad}>
                {item.entidad}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {filteredData?.rendimientos.map((rend, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-xl p-4 sm:p-6 hover:scale-105 transform transition"
            >
              <div className="text-center mb-4">
                <p className="text-lg font-semibold text-white">{rend.moneda}</p>
                <p className="text-xs text-gray-400">Fecha: {rend.fecha}</p>
              </div>
              <div className="text-center text-xl font-bold text-green-400 mb-4">
                {rend.apy.toFixed(2)}%
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleShare(rend)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-3 rounded-lg shadow-md flex items-center gap-2 justify-center"
                >
                  <FaShareAlt />
                  Compartir
                </button>
                <button
                  onClick={() => handleCopy(rend)}
                  className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-3 rounded-lg shadow-md flex items-center gap-2 justify-center"
                >
                  <FaCopy />
                  Copiar
                </button>
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