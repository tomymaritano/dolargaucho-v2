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

        // Validación del formato de los datos
        const isCotizacionArray = (data: any): data is Cotizacion[] => {
          return Array.isArray(data) && data.every(item =>
            typeof item.nombre === 'string' &&
            typeof item.compra === 'number' &&
            typeof item.venta === 'number' &&
            typeof item.fechaActualizacion === 'string'
          );
        };

        if (!isCotizacionArray(data)) {
          throw new Error('La respuesta de la API no tiene el formato esperado');
        }

        // Formateo de la fecha
        const formatFecha = (fechaISO: string): string => {
          const fecha = new Date(fechaISO);
          const dia = String(fecha.getDate()).padStart(2, '0');
          const mes = String(fecha.getMonth() + 1).padStart(2, '0');
          const anio = String(fecha.getFullYear()).slice(-2);
          const hora = String(fecha.getHours()).padStart(2, '0');
          const minutos = String(fecha.getMinutes()).padStart(2, '0');
          return `${dia}/${mes}/${anio} a las ${hora}:${minutos}`;
        };

        const fecha = data.length > 0 ? formatFecha(data[0].fechaActualizacion) : null;

        const filteredData = data.filter(cotizacion => cotizacion.nombre !== 'Dólar');

        setCotizaciones(filteredData);
        setFechaActualizacion(fecha);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || 'Error desconocido al cargar las cotizaciones');
        } else {
          setError('Error desconocido al cargar las cotizaciones');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCotizaciones();
  }, []);

  return { cotizaciones, fechaActualizacion, loading, error };
};