import React, { useEffect, useState } from 'react';

interface MercadoDineroData {
  fecha: string;
  moneda: string;
  valor: number;
  descripcion: string;
}

const MercadoDinero: React.FC = () => {
  const [data, setData] = useState<MercadoDineroData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.argentinadatos.com/v1/finanzas/fci/mercadoDinero/ultimo")
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
    return <p className="text-center text-gray-500">Cargando datos...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <section className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-6 text-blue-500">Mercado de Dinero</h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">{data?.descripcion}</h3>
          <p className="text-lg text-gray-400">
            <span className="font-bold text-white">Fecha:</span> {data?.fecha}
          </p>
          <p className="text-lg text-gray-400">
            <span className="font-bold text-white">Moneda:</span> {data?.moneda}
          </p>
          <p className="text-lg text-gray-400">
            <span className="font-bold text-white">Valor:</span> ${data?.valor}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MercadoDinero;