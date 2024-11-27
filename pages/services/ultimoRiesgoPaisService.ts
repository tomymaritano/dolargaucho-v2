import { useState, useEffect } from 'react';

interface RiesgoPais {
  fecha: string;
  valor: number;
}

export const useUltimoRiesgoPais = () => {
  const [riesgoPais, setRiesgoPais] = useState<RiesgoPais | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUltimoRiesgoPais = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://api.argentinadatos.com/v1/finanzas/indices/riesgo-pais/ultimo',
          {
            headers: {
                'Access-Control-Allow-Origin': '*', // Algunos servidores requieren encabezados específicos
              },
          }
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();

        setRiesgoPais({
          fecha: data.fecha,
          valor: data.valor,
        });
      } catch (err: any) {
        setError(err.message || 'Error desconocido al cargar el riesgo país');
      } finally {
        setLoading(false);
      }
    };

    fetchUltimoRiesgoPais();
  }, []);

  return { riesgoPais, loading, error };
};