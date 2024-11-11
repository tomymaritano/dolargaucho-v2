import { useEffect, useState } from 'react';

interface CotizacionData {
  // Define the properties of CotizacionData based on the API response
  compra: number;
  venta: number;
  // Add other properties as needed
}

const useFetchBolivia = () => {
  const [data, setData] = useState<CotizacionData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBoliviaData = async () => {
      try {
        const response = await fetch('https://bo.dolarapi.com/v1/dolares/oficial', {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error('Error fetching data from Bolivia API');
        }
        const result: CotizacionData = await response.json();
        setData(result);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchBoliviaData();
  }, []);

  return { data, loading, error };
};

export default useFetchBolivia;