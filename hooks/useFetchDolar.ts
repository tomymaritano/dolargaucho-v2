import { useEffect, useState } from 'react';
import { DolarData, UseFetchDolarReturn } from 'hooks/useFetchDolar';

const useFetchDolar = (): UseFetchDolarReturn => {
  const [data, setData] = useState<DolarData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDolarData = async () => {
      try {
        const response = await fetch("https://dolarapi.com/v1/dolares");
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const result: DolarData[] = await response.json();
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

export default useFetchDolar;