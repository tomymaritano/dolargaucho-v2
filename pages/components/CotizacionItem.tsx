import React, { useState } from 'react';
import { useCotizaciones } from '../../services/cotizacionService';
import { FaShareAlt, FaStar } from 'react-icons/fa';

export default function CotizacionItem() {
  const { cotizaciones, fechaActualizacion, loading, error } = useCotizaciones();
  const [favoritos, setFavoritos] = useState<string[]>([]);

  const toggleFavorito = (nombre: string) => {
    setFavoritos((prevFavoritos) =>
      prevFavoritos.includes(nombre)
        ? prevFavoritos.filter((fav) => fav !== nombre)
        : [...prevFavoritos, nombre]
    );
  };

  const handleShare = async (cotizacion: {
    nombre: string;
    compra: number;
    venta: number;
  }) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Cotización de ${cotizacion.nombre}`,
          text: `💵 Cotización de ${cotizacion.nombre}\nCompra: $${cotizacion.compra.toFixed(
            2
          )}\nVenta: $${cotizacion.venta.toFixed(2)}`,
        });
        console.log('Compartido con éxito.');
      } catch (err) {
        console.error('Error al compartir:', err);
      }
    } else {
      alert('La función de compartir no está disponible en este navegador.');
    }
  };

  if (loading) {
    return <p className="text-center text-gray-300 text-xl">Cargando cotizaciones...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 text-xl">Error: {error}</p>;
  }

  return (
    <div className="bg-gray-950 text-gray-200 py-16 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-white tracking-wide">
        Otras Divisas
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cotizaciones.map((cotizacion, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300"
          >
            {/* Botón de favoritos */}
            <button
              onClick={() => toggleFavorito(cotizacion.nombre)}
              className="absolute top-4 right-4 text-xl text-yellow-400 hover:text-yellow-300 transition"
              aria-label={`${favoritos.includes(cotizacion.nombre) ? 'Quitar de' : 'Agregar a'} favoritos`}
            >
              <FaStar className={`${favoritos.includes(cotizacion.nombre) ? 'text-yellow-400' : 'text-gray-400 opacity-40'}`} />
            </button>
            {/* Nombre de la divisa */}
            <span className="text-2xl font-bold text-white block mb-4">
              {cotizacion.nombre}
            </span>
            {/* Compra y Venta */}
            <div className="flex justify-between items-center text-lg">
              <div className="text-green-400 font-semibold">
                Compra: <span>${cotizacion.compra.toFixed(2)}</span>
              </div>
              <div className="text-red-400 font-semibold">
                Venta: <span>${cotizacion.venta.toFixed(2)}</span>
              </div>
            </div>
            {/* Fecha de actualización */}
            <span className="block text-right text-sm text-gray-400 mt-4">
              Última actualización: {fechaActualizacion}
            </span>
            {/* Botón Compartir */}
            <button
              onClick={() => handleShare(cotizacion)}
              className="mt-4 flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all transform hover:scale-105"
            >
              <FaShareAlt className="mr-2" />
              Compartir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}