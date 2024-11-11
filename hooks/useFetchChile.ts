import { useEffect, useState } from 'react';

type CotizacionData = {
  compra: number;
  venta: number;
  nombre: string;
  fecha: string;
};

type UseFetchChileReturn = {
  data: CotizacionData[] | null;
  loading: boolean;
  error: string | null;
};

const useFetchChile = (): UseFetchChileReturn => {
  const [data, setData] = useState<CotizacionData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChileData = async () => {
      try {
        const response = await fetch('https://dolarapi.com/v1/cotizaciones', {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error('Error fetching data from Chile API');
        }
        const result: CotizacionData[] = await response.json();
        setData(result);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchChileData();
  }, []);

  return { data, loading, error };
};

export default useFetchChile;