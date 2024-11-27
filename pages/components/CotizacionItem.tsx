import { useCotizaciones } from '../../services/cotizacionService';

export default function CotizacionItem() {
  const { cotizaciones, fechaActualizacion, loading, error } = useCotizaciones();

  if (loading) {
    return <p className="text-center text-gray-300">Cargando cotizaciones...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className=" bg-gray-950 text-gray-200 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Otras divisas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cotizaciones.map((cotizacion, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg shadow-lg p-6 hover:bg-gray-800 transition transform hover:scale-105"
          >
            <span className="text-xl font-semibold text-white block">
              {cotizacion.nombre}
            </span>
            <div className="flex justify-between mt-4 text-sm">
              <span className="text-green-400">Compra: ${cotizacion.compra.toFixed(2)}</span>
              <span className="text-red-400">Venta: ${cotizacion.venta.toFixed(2)}</span>
            </div>
            <span className="block text-right text-xs text-gray-400 mt-4">
              Última actualización: {fechaActualizacion}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}