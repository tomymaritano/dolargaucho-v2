import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

let zoomPlugin: any;

// Importar el plugin dinámicamente para evitar errores en SSR
if (typeof window !== 'undefined') {
  zoomPlugin = require('chartjs-plugin-zoom');
  ChartJS.register(zoomPlugin);
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const InterAnualChart = () => {
  const [labels, setLabels] = useState<string[]>([]);
  const [dataValues, setDataValues] = useState<number[]>([]);
  const [filteredLabels, setFilteredLabels] = useState<string[]>([]);
  const [filteredDataValues, setFilteredDataValues] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [yearFilter, setYearFilter] = useState<string>('last12'); // Filtro por defecto: últimos 12 meses

  // Define the years array
  const years = Array.from(new Set(labels.map(label => label.split('-')[0]))).sort((a, b) => parseInt(b) - parseInt(a));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.argentinadatos.com/v1/finanzas/indices/inflacionInteranual');
        if (!response.ok) {
          throw new Error('Error al obtener los datos de inflación');
        }
        const data = await response.json();

        const labels = data.map((item: { fecha: string }) => item.fecha);
        const values = data.map((item: { valor: number }) => item.valor);

        setLabels(labels);
        setDataValues(values);

        // Filtrar por defecto los últimos 12 meses
        const last12MonthsLabels = labels.slice(-12);
        const last12MonthsData = values.slice(-12);

        setFilteredLabels(last12MonthsLabels);
        setFilteredDataValues(last12MonthsData);
      } catch (err: any) {
        setError(err.message || 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filtrar datos según el rango seleccionado
  useEffect(() => {
    if (yearFilter === 'last12') {
      setFilteredLabels(labels.slice(-12));
      setFilteredDataValues(dataValues.slice(-12));
    } else {
      const yearData = labels.filter((label) => label.startsWith(yearFilter));
      const indexStart = labels.indexOf(yearData[0]);
      const indexEnd = labels.indexOf(yearData[yearData.length - 1]) + 1;

      setFilteredLabels(labels.slice(indexStart, indexEnd));
      setFilteredDataValues(dataValues.slice(indexStart, indexEnd));
    }
  }, [yearFilter, labels, dataValues]);

  const chartData = {
    labels: filteredLabels,
    datasets: [
      {
        label: 'Inflación Mensual (%)',
        data: filteredDataValues,
        borderColor: (ctx: any) => {
          const value = ctx.raw;
          if (value > 20) return '#e53935'; // Rojo si supera 20%
          if (value > 10) return '#ffa726'; // Naranja si supera 10%
          return '#4caf50'; // Verde si está por debajo de 10%
        },
        segment: {
          borderColor: (ctx: any) => {
            const prevValue = ctx.p0?.parsed.y; // Valor previo
            const currentValue = ctx.p1?.parsed.y; // Valor actual
            if (currentValue > 20) return '#e53935';
            if (currentValue > 10) return '#ffa726';
            return '#4caf50';
          },
        },
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        tension: 0.4,
        pointBackgroundColor: (ctx: any) => {
          const value = ctx.raw;
          if (value > 20) return '#e53935';
          if (value > 10) return '#ffa726';
          return '#4caf50';
        },
        pointBorderColor: '#fff',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.dataset.label}: ${context.raw.toFixed(2)}%`,
        },
      },
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          color: '#fff',
        },
      },
      zoom: {
        pan: {
          enabled: true,
          mode: 'x',
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: 'x',
        },
      },
    },
    scales: {
      x: {
        ticks: { color: '#ccc' },
        grid: { display: false },
      },
      y: {
        ticks: {
          color: '#ccc',
          callback: (value: string | number) => {
            if (typeof value === 'number') {
              return `${value}%`;
            }
            return value;
          },
        },
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
      },
    },
  };

  if (loading) {
    return <p className="text-center text-gray-300">Cargando datos...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Inflación Interanuakl</h2>
<select
      value={yearFilter}
      onChange={(e) => setYearFilter(e.target.value)}
      className="bg-gray-800 text-white py-2 px-4 rounded-lg"
    >
      <option value="last12">Últimos 12 meses</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
      </div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default InterAnualChart;