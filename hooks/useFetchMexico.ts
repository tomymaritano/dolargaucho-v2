import { useEffect, useState } from 'react';

interface CotizacionData {
  // Define the structure of CotizacionData based on the API response
  compra: number;
  venta: number;
  // Add other fields as necessary
}

const useFetchMexico = () => {
  const [data, setData] = useState<CotizacionData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMexicoData = async () => {
      try {
        const response = await fetch('https://mx.dolarapi.com/v1/cotizaciones/usd', {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error('Error fetching data from Mexico API');
        }
        const result: CotizacionData = await response.json();
        setData(result);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchMexicoData();
  }, []);

  return { data, loading, error };
};

export default useFetchMexico;