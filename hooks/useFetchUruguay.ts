import { useEffect, useState } from 'react';

interface CotizacionData {
  // Define the properties of CotizacionData based on the API response
  compra: number;
  venta: number;
  fecha: string;
}

const useFetchUruguay = () => {
  const [data, setData] = useState<CotizacionData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUruguayData = async () => {
      try {
        const response = await fetch('https://uy.dolarapi.com/v1/cotizaciones/usd', {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error('Error fetching data from Uruguay API');
        }
        const result: CotizacionData = await response.json();
        setData(result);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUruguayData();
  }, []);

  return { data, loading, error };
};

export default useFetchUruguay;