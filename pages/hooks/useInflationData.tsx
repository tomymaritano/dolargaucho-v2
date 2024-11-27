import { useState, useEffect } from 'react';

interface InflationData {
  fecha: string;
  valor: number;
}

export const useInflationData = () => {
  const [data, setData] = useState<InflationData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInflation = async () => {
      try {
        const response = await fetch(
          'https://api.argentinadatos.com/v1/finanzas/indices/inflacion',
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();
        setData(result); // Almacena los datos en el estado
      } catch (err: any) {
        setError(err.message || 'Error al obtener los datos de inflación');
      } finally {
        setLoading(false);
      }
    };

    fetchInflation();
  }, []);

  return { data, loading, error };
};