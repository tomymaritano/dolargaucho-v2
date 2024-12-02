
import Dolar from './components/DolarItem';
import Hero from './components/Hero';
import Layout from './Layout';
import { fetchDolarData } from '../services/dolarService';
import RiesgoPais from './components/RiesgoPais';
import Rendimientos from './components/Rendimientos';
import GraficoInflacion from './components/graph/graficoinflacion';
import Historia from './components/Historia';


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
      <Historia />
      <Dolar data={data} />
      <GraficoInflacion />
      <Rendimientos />
    </Layout>
  );
}