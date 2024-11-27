// Define los tipos de los datos que manejará el componente.
interface DataItem {
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
}

interface DolarProps {
  data: DataItem[];
}

// Función para obtener los datos del servidor antes de renderizar la página.
export async function getServerSideProps() {
  const res = await fetch('https://dolarapi.com/v1/dolares');
  const data = await res.json();

  // Modifica el nombre de "Contado con liquidación" a "CCL"
  const modifiedData = data.map((item: DataItem) => {
    if (item.nombre === 'Contado con liquidación') {
      return { ...item, nombre: 'CCL' };
    }
    return item;
  });

  return {
    props: { data: modifiedData },
  };
}

// Componente principal que muestra los datos.
export default function Dolar({ data }: DolarProps) {
  return (
    <div className=" bg-gray-950 text-gray-200 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Cotización del Dólar
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg shadow-lg p-6 hover:bg-gray-800 transition transform hover:scale-105"
          >
            <span className="text-xl font-semibold text-white block">
              {item.nombre}
            </span>
            <div className="flex justify-between mt-4 text-sm">
              <span className="text-green-400">Compra: ${item.compra.toFixed(2)}</span>
              <span className="text-red-400">Venta: ${item.venta.toFixed(2)}</span>
            </div>
            <span className="block text-right text-xs text-gray-400 mt-4">
              Última actualización: {item.fechaActualizacion}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}