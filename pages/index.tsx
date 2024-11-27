import CotizacionItem from './components/CotizacionItem';
import Dolar from './components/DolarItem';
import FeaturesBlock from './components/FeatureBlocks';
import Hero from './components/Hero';
import NewsSlider from './components/ImageSlider';
import Layout from './Layout';
import { fetchDolarData } from './services/dolarService';

export async function getServerSideProps() {
  const data = await fetchDolarData();
  return {
    props: { data }, // Asegúrate que 'data' siempre esté presente
  };
}

interface HomeProps {
  data: any; // Reemplaza 'any' con el tipo correcto si lo conoces
}

export default function Home({ data }: HomeProps) {
  return (
    <Layout>
      <Hero />
      <NewsSlider />
      <FeaturesBlock />
      <Dolar data={data} />
      <CotizacionItem />
    </Layout>
  );
}