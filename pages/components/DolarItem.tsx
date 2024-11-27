import React, { useState } from 'react';
import { FaShareAlt, FaStar } from 'react-icons/fa';
import { Sparklines, SparklinesLine } from 'react-sparklines';

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
        .then(() => console.log('Compartido con éxito'))
        .catch((err) => console.error('Error al compartir:', err));
    } else {
      alert('Tu navegador no soporta la funcionalidad de compartir.');
    }
  };

  return (
    <div className="bg-gray-950 text-gray-200 py-16 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-white tracking-wide">
        Cotización del Dólar
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
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
            <span className="text-2xl font-bold text-white block mb-4">{item.nombre}</span>

            {/* Compra y Venta */}
            <div className="flex justify-between items-center text-lg">
              <div className="text-green-400 font-semibold">
                Compra: <span>${item.compra.toFixed(2)}</span>
              </div>
              <div className="text-red-400 font-semibold">
                Venta: <span>${item.venta.toFixed(2)}</span>
              </div>
            </div>

            {/* Tendencia */}
            <div className="mt-4">
              <Sparklines data={item.tendencia} limit={10}>
                <SparklinesLine color="blue" />
              </Sparklines>
            </div>

            {/* Última Actualización */}
            <span className="block text-right text-sm text-gray-400 mt-4">
              Última actualización: {item.fechaActualizacion}
            </span>

            {/* Botón Compartir */}
            <button
              onClick={() => handleShare(item)}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all transform hover:scale-105"
            >
              <FaShareAlt />
              Compartir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}