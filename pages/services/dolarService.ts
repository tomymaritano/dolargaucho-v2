// services/dolarService.js
export const fetchDolarData = async () => {
  try {
    const response = await fetch('https://dolarapi.com/v1/dolares');
    if (!response.ok) {
      throw new Error('Failed to fetch dolar data');
    }
    const data = await response.json();

    // Mapea los datos para incluir un formato de fecha y hora más legible
    return data.map((item: { nombre: string; fechaActualizacion: string }) => {
      const formatearFecha = (fechaISO: string): string => {
        const fecha = new Date(fechaISO);
        const dia = String(fecha.getDate()).padStart(2, '0'); // Día con dos dígitos
        const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Mes con dos dígitos
        const anio = fecha.getFullYear();
        const hora = String(fecha.getHours()).padStart(2, '0'); // Hora con dos dígitos
        const minutos = String(fecha.getMinutes()).padStart(2, '0'); // Minutos con dos dígitos
        return `${dia}/${mes}/${anio} a las ${hora}:${minutos}`;
      };

      return {
        ...item,
        nombre: item.nombre === 'Contado con liquidación' ? 'CCL' : item.nombre,
        fechaActualizacion: formatearFecha(item.fechaActualizacion), // Formatea fecha y hora
      };
    });
  } catch (error) {
    console.error('Error fetching dolar data:', error);
    return []; // Retorna un arreglo vacío en caso de error
  }
};