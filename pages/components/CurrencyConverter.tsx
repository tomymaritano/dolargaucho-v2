import React, { useState, useEffect } from 'react';
import { FaSyncAlt, FaCopy, FaShareAlt } from 'react-icons/fa';

interface DolarType {
  nombre: string;
  valor: number; // Tipo de cambio (valor único)
}

const CurrencyConverter = () => {
  const [dolarTypes, setDolarTypes] = useState<DolarType[]>([]);
  const [selectedDolar, setSelectedDolar] = useState<DolarType | null>(null);
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');
  const [isPesoToDolar, setIsPesoToDolar] = useState(true); // Controla el switch

  useEffect(() => {
    const fetchDolarData = async () => {
      try {
        const response = await fetch('https://dolarapi.com/v1/dolares');
        const data: Array<{ nombre: string; venta: number }> = await response.json();

        // Mapear datos para simplificar al tipo de cambio único
        const simplifiedData = data.map((item) => ({
          nombre: item.nombre,
          valor: item.venta, // Usamos el precio de venta como el tipo de cambio único
        }));

        setDolarTypes(simplifiedData);
        setSelectedDolar(simplifiedData[0]); // Primer dólar como predeterminado
      } catch (error) {
        console.error('Error al obtener los datos del dólar:', error);
      }
    };

    fetchDolarData();
  }, []);

  const handleConvert = () => {
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || !selectedDolar) {
      setResult('Input inválido');
      return;
    }

    if (isPesoToDolar) {
      setResult((numericAmount / selectedDolar.valor).toFixed(2) + ' USD');
    } else {
      setResult((numericAmount * selectedDolar.valor).toFixed(2) + ' ARS');
    }
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      alert('Resultado copiado al portapapeles');
    }
  };

  const handleShare = () => {
    const shareData = {
      title: 'Conversión de Divisas',
      text: `Resultado de la conversión: ${result}`,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log('Compartido con éxito'))
        .catch((err) => console.error('Error al compartir:', err));
    } else {
      alert('Tu navegador no soporta la funcionalidad de compartir.');
    }
  };

  const toggleConversion = () => {
    setIsPesoToDolar((prev) => !prev);
    setResult(''); // Reseteamos el resultado al cambiar el modo
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Calculadora de Conversión</h2>

      {/* Tipo de dólar */}
      <div className="mb-4">
        <label htmlFor="dolarType" className="block text-sm font-medium mb-2">
          Tipo de cambio:
        </label>
        <select
          id="dolarType"
          className="w-full p-2 rounded-lg text-gray-900"
          value={selectedDolar?.nombre || ''}
          onChange={(e) =>
            setSelectedDolar(dolarTypes.find((dolar) => dolar.nombre === e.target.value) || null)
          }
        >
          {dolarTypes.map((dolar, index) => (
            <option key={index} value={dolar.nombre}>
              {dolar.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Botón de switch */}
      <div className="flex justify-center items-center mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${
            isPesoToDolar ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
          }`}
          onClick={toggleConversion}
        >
          {isPesoToDolar ? 'Peso a Dólar' : 'Dólar a Peso'}
        </button>
        <FaSyncAlt className="text-xl text-gray-400 mx-4" />
        <span className="text-lg">
          {isPesoToDolar ? 'Convertir a USD' : 'Convertir a ARS'}
        </span>
      </div>

      {/* Input */}
      <input
        type="number"
        placeholder="Ingresa la cantidad"
        className="w-full px-4 py-2 mb-4 text-gray-900 rounded-lg focus:outline-none"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {/* Botón de convertir */}
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all"
        onClick={handleConvert}
      >
        Convertir
      </button>

      {/* Resultado */}
      {result && (
        <div className="mt-6">
          <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg text-lg font-semibold">
            <div className="flex items-center gap-2">
              <span>Resultado: {result}</span>
              🤑
            </div>
            <button onClick={handleCopy} className="text-blue-500 hover:text-blue-400 transition">
              <FaCopy />
            </button>
          </div>
          <button
            onClick={handleShare}
            className="w-full mt-4 flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all"
          >
            <FaShareAlt />
            Compartir
          </button>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;