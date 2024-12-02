import React, { useState, useEffect } from "react";
import { FaCopy, FaShareAlt } from "react-icons/fa";

interface DolarType {
  nombre: string;
  valor: number;
}

const CurrencyConverter: React.FC = () => {
  const [dolarTypes, setDolarTypes] = useState<DolarType[]>([]);
  const [selectedDolar, setSelectedDolar] = useState<DolarType | null>(null);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const [isPesoToDolar, setIsPesoToDolar] = useState(true);

  useEffect(() => {
    const fetchDolarData = async () => {
      try {
        const response = await fetch("https://dolarapi.com/v1/dolares");
        const data: Array<{ nombre: string; venta: number }> = await response.json();

        const simplifiedData = data.map((item) => ({
          nombre: item.nombre,
          valor: item.venta,
        }));

        setDolarTypes(simplifiedData);
        setSelectedDolar(simplifiedData[0]);
      } catch (error) {
        console.error("Error al obtener los datos del dólar:", error);
      }
    };

    fetchDolarData();
  }, []);

  const handleConvert = () => {
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || !selectedDolar) {
      setResult("Input inválido");
      return;
    }

    const conversion = isPesoToDolar
      ? (numericAmount / selectedDolar.valor).toFixed(2) + " USD"
      : (numericAmount * selectedDolar.valor).toFixed(2) + " ARS";

    setResult(conversion);
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      alert("Resultado copiado al portapapeles");
    }
  };

  const handleShare = () => {
    const shareData = {
      title: "Conversión de Divisas",
      text: `Conversión de ${isPesoToDolar ? "ARS a USD" : "USD a ARS"}:\nMonto: ${
        amount || "0"
      }\nResultado: ${result}`,
      url: "https://dolargaucho.com.ar/#conversor",
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("Compartido con éxito"))
        .catch((err) => console.error("Error al compartir:", err));
    } else {
      alert("Tu navegador no soporta la funcionalidad de compartir.");
    }
  };

  const toggleConversion = () => {
    setIsPesoToDolar((prev) => !prev);
    setResult("");
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        Conversor Web3
      </h2>

      {/* Selector de Tipo de Cambio */}
      <div className="mb-6">
        <label htmlFor="dolarType" className="block text-sm font-medium mb-2 text-gray-400">
          Tipo de cambio:
        </label>
        <select
          id="dolarType"
          className="w-full p-3 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedDolar?.nombre || ""}
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

      {/* Botón de Conversión */}
      <div className="mb-6">
        <button
          className={`w-full py-3 rounded-lg font-semibold transition-all ${
            isPesoToDolar
              ? "bg-gradient-to-r from-blue-500 to-green-500 text-white"
              : "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
          }`}
          onClick={toggleConversion}
        >
          {isPesoToDolar ? "Peso a Dólar" : "Dólar a Peso"}
        </button>
      </div>

      {/* Input y Botón de Convertir */}
      <input
        type="number"
        placeholder="Ingresa la cantidad"
        className="w-full px-4 py-3 mb-4 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white font-semibold py-2 px-4 rounded-lg transition-all"
        onClick={handleConvert}
      >
        Convertir
      </button>

      {/* Resultado */}
      {result && (
        <div className="mt-6 space-y-4">
          <div className="text-center bg-gray-800 p-4 rounded-lg text-lg font-semibold">
            Resultado: {result} 🤑
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleCopy}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg transition-all"
            >
              <FaCopy />
              Copiar
            </button>
            <button
              onClick={handleShare}
              className="flex-1 flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-400 text-white font-semibold py-2 px-4 rounded-lg transition-all"
            >
              <FaShareAlt />
              Compartir
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;