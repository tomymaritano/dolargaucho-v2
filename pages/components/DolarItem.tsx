import React, { useState } from 'react';
import { FaShareAlt, FaStar, FaCopy } from 'react-icons/fa';

interface DataItem {
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
  tendencia?: number[];
}

interface DolarProps {
  data: DataItem[];
}

export async function getServerSideProps() {
  const res = await fetch('https://dolarapi.com/v1/dolares');
  const data = await res.json();

  const modifiedData = data.map((item: DataItem) => ({
    ...item,
    nombre: item.nombre === 'Contado con liquidación' ? 'CCL' : item.nombre,
    tendencia: Array.from({ length: 10 }, () => Math.random() * 100), // Simula datos de tendencia
  }));

  return {
    props: { data: modifiedData },
  };
}
export default function Dolar({ data }: DolarProps) {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (nombre: string) => {
    setFavorites((prev) =>
      prev.includes(nombre)
        ? prev.filter((fav) => fav !== nombre)
        : [...prev, nombre]
    );
  };

  const handleShare = (item: DataItem) => {
    const shareData = {
      title: `Cotización de ${item.nombre}`,
      text: `Compra: $${item.compra.toFixed(
        2
      )}\nVenta: $${item.venta.toFixed(2)}\nÚltima actualización: ${
        item.fechaActualizacion
      }`,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("Compartido con éxito"))
        .catch((err) => console.error("Error al compartir:", err));
    } else {
      const fallbackText = `${shareData.title}\n${shareData.text}\n${shareData.url}`;
      navigator.clipboard
        .writeText(fallbackText)
        .then(() => {
          alert("El contenido ha sido copiado al portapapeles.");
        })
        .catch(() => {
          alert("No se pudo copiar al portapapeles. Intenta manualmente.");
        });
    }
  };

  const handleCopy = (item: DataItem) => {
    const textToCopy = `Cotización de ${item.nombre}\nCompra: $${item.compra.toFixed(
      2
    )}\nVenta: $${item.venta.toFixed(2)}\nÚltima actualización: ${
      item.fechaActualizacion
    }`;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Texto copiado al portapapeles.");
      })
      .catch(() => {
        alert("No se pudo copiar el texto. Intenta nuevamente.");
      });
  };

  return (
    <div className="bg-gray-950 text-gray-200 py-16 px-6">
      {/* Título y Bajada */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Cotización del Dólar
        </h1>
        <p className="text-lg text-gray-400">
          Accede a las últimas cotizaciones del dólar en diferentes tipos de cambio. 
          Mantente informado y toma decisiones financieras acertadas.
        </p>
      </div>

      {/* Tarjetas de Cotización */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            {/* Favoritos */}
            <button
              aria-label="Agregar a favoritos"
              onClick={() => toggleFavorite(item.nombre)}
              className="absolute top-4 right-4 text-xl text-yellow-400 hover:text-yellow-300 transition"
            >
              {favorites.includes(item.nombre) ? (
                <FaStar className="text-yellow-400" />
              ) : (
                <FaStar className="text-gray-500 opacity-40" />
              )}
            </button>

            {/* Nombre */}
            <span className="text-2xl font-bold text-white block mb-4">
              {item.nombre}
            </span>

            {/* Compra y Venta */}
            <div className="flex justify-between items-center text-lg">
              <div className="text-green-400 font-semibold">
                Compra: <span>${item.compra.toFixed(2)}</span>
              </div>
              <div className="text-red-400 font-semibold">
                Venta: <span>${item.venta.toFixed(2)}</span>
              </div>
            </div>

            {/* Última Actualización */}
            <span className="block text-right text-sm text-gray-400 mt-4">
              Última actualización: {item.fechaActualizacion}
            </span>

            {/* Botones Compartir y Copiar */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={() => handleShare(item)}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition-all transform hover:scale-105"
              >
                <FaShareAlt />
                Compartir
              </button>
              <button
                onClick={() => handleCopy(item)}
                className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition-all transform hover:scale-105"
              >
                <FaCopy />
                Copiar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}