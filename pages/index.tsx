
import Dolar from './components/DolarItem';
import Hero from './components/Hero';
import Layout from './Layout';
import { fetchDolarData } from '../services/dolarService';
import MercadoDinero from './components/ MercadoDinero';
import RiesgoPais from './components/RiesgoPais';
import Rendimientos from './components/Rendimientos';


interface DolarData {
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
}

export async function getServerSideProps() {
  const data: DolarData[] = await fetchDolarData();
  return {
    props: { data },
  };
}

interface HomeProps {
  data: DolarData[];
}

export default function Home({ data }: HomeProps) {
  return (
    <Layout>
      <Hero />
      <RiesgoPais />
      <Dolar data={data} />
      <Rendimientos />
    </Layout>
  );
}