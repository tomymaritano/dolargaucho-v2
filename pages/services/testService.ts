import { GetServerSideProps } from 'next';
import styles from '../../styles/Home.module.css';

interface DataItem {
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
  compraAnterior?: number;
  ventaAnterior?: number;
}

interface DolarProps {
  data: DataItem[];
}

const obtenerFechaAnterior = () => {
  const hoy = new Date();
  hoy.setDate(hoy.getDate() - 1); // Resta un día
  return hoy.toISOString().split('T')[0]; // Formato YYYY-MM-DD
};

export const getServerSideProps: GetServerSideProps = async () => {
  const hoy = new Date().toISOString().split('T')[0];
  const ayer = obtenerFechaAnterior();

  // Realiza las llamadas a la API para los datos actuales y del día anterior
  const [resHoy, resAyer] = await Promise.all([
    fetch(`https://dolarapi.com/v1/dolares?fecha=${hoy}`),
    fetch(`https://dolarapi.com/v1/dolares?fecha=${ayer}`),
  ]);

  const dataHoy: DataItem[] = await resHoy.json();
  const dataAyer: DataItem[] = await resAyer.json();

  // Combina los datos actuales con los datos históricos
  const combinedData = dataHoy.map((item) => {
    const historico = dataAyer.find((hist) => hist.nombre === item.nombre);
    return {
      ...item,
      compraAnterior: historico?.compra || null,
      ventaAnterior: historico?.venta || null,
    };
  });

  return {
    props: { data: combinedData },
  };
};