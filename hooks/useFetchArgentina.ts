import { useEffect, useState } from 'react';

type CotizacionData = {
  compra: number;
  venta: number;
  casa: string;
  nombre: string;
  moneda: string;
  fechaActualizacion: string;
};

type UseFetchDolarReturn = {
  data: CotizacionData[] | null;
  loading: boolean;
  error: string | null;
};

const useFetchArgentina = (): UseFetchDolarReturn => {
  const [data, setData] = useState<CotizacionData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDolarData = async () => {
      try {
        // Corregir la URL de la API
        const response = await fetch('http://localhost:5001/api/dolares', {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error('Error al obtener los datos de la API');
        }

        const result: CotizacionData[] = await response.json();
        setData(result);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchDolarData();
  }, []);

  return { data, loading, error };
};

export default useFetchArgentina;