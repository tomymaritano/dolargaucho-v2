import React from 'react';
import { FaStore, FaDollarSign, FaSyncAlt } from 'react-icons/fa';
import useFetchDolar from '@/hooks/useFetchArgentina';

const CotizacionGrid: React.FC = () => {
  const { data, loading, error } = useFetchDolar();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
        <h1 className="text-3xl font-bold text-blue-600 animate-pulse">Cargando cotizaciones...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-50 to-red-100">
        <h1 className="text-3xl font-bold text-red-500">Error: {error}</h1>
      </div>
    );
  }

  const formatFecha = (fecha: string) => {
    const opciones: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(fecha).toLocaleDateString('es-ES', opciones);
  };

  return (
    <div className="min-h-screen p-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  ">
        {data && data.length > 0 ? (
          data.map((cotizacion, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="flex items-center mb-4">
                <FaStore className="text-blue-500 mr-2" />
                <h3 className="text-2xl font-bold text-gray-900">{cotizacion.nombre}</h3>
              </div>
              <div className="flex items-center mb-2">
                <FaDollarSign className="text-green-500 mr-2" />
                <p className="text-lg text-gray-700">Compra: <span className="font-semibold">{cotizacion.compra}</span></p>
              </div>
              <div className="flex items-center mb-2">
                <FaDollarSign className="text-red-500 mr-2" />
                <p className="text-lg text-gray-700">Venta: <span className="font-semibold">{cotizacion.venta}</span></p>
              </div>
              <div className="flex items-center mt-4">
                <FaSyncAlt className="text-gray-400 mr-2" />
                <p className="text-sm text-gray-500">Actualizado: {formatFecha(cotizacion.fechaActualizacion)}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No hay datos disponibles</p>
        )}
      </div>
    </div>
  );
};

export default CotizacionGrid;