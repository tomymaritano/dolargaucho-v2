import { useState, useEffect } from 'react';

interface Cotizacion {
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
}

export const useCotizaciones = () => {
  const [cotizaciones, setCotizaciones] = useState<Cotizacion[]>([]);
  const [fechaActualizacion, setFechaActualizacion] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCotizaciones = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dolarapi.com/v1/cotizaciones');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();

        // Formateo de la fecha
        const formatFecha = (fechaISO: string): string => {
          const fecha = new Date(fechaISO);
          const dia = String(fecha.getDate()).padStart(2, '0');
          const mes = String(fecha.getMonth() + 1).padStart(2, '0');
          const anio = String(fecha.getFullYear()).slice(-2); // Solo últimos dos dígitos
          const hora = String(fecha.getHours()).padStart(2, '0');
          const minutos = String(fecha.getMinutes()).padStart(2, '0');
          return `${dia}/${mes}/${anio} a las ${hora}:${minutos}`;
        };

        // Captura y formateo de la fecha de actualización
        const fecha = data.length > 0 ? formatFecha(data[0].fechaActualizacion) : null;

        // Filtrar "Dólar" de los resultados
        const filteredData = data.filter(
          (cotizacion: Cotizacion) => cotizacion.nombre !== 'Dólar'
        );

        setCotizaciones(filteredData);
        setFechaActualizacion(fecha);
      } catch (err: any) {
        setError(err.message || 'Error desconocido al cargar las cotizaciones');
      } finally {
        setLoading(false);
      }
    };

    fetchCotizaciones();
  }, []);

  return { cotizaciones, fechaActualizacion, loading, error };
};