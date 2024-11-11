import { useEffect, useState } from 'react';

interface CotizacionData {
  // Define the properties of CotizacionData here
  // For example:
  rate: number;
  date: string;
}

const useFetchVenezuela = () => {
  const [data, setData] = useState<CotizacionData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVenezuelaData = async () => {
      try {
        const response = await fetch('https://ve.dolarapi.com/v1/dolares', {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error('Error fetching data from Venezuela API');
        }
        const result: CotizacionData[] = await response.json();
        setData(result);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchVenezuelaData();
  }, []);

  return { data, loading, error };
};

export default useFetchVenezuela;