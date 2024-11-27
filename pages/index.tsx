import CotizacionItem from './components/CotizacionItem';
import Dolar from './components/DolarItem';
import FeaturesBlock from './components/FeatureBlocks';
import Hero from './components/Hero';

import Layout from './Layout';
import { fetchDolarData } from '../services/dolarService';
import InflationChart from './components/graph/InflationChart';
import InterAnualChart from './components/graph/InteranualChart';


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
      <FeaturesBlock />
      <InflationChart />

      <InterAnualChart />
      <Dolar data={data} />
      <CotizacionItem />
    </Layout>
  );
}