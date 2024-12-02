import React from "react";

const GraficoInflacion: React.FC = () => {
  return (
    <div id="inflacion" className="bg-gray-900 text-gray-200 py-10 px-6">
      {/* Contenedor del título y bajada */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Histórico de Inflación en Argentina
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Visualiza la evolución de la inflación en Argentina a través de datos interactivos. 
          Explora los últimos 6 meses o amplía el rango para analizar períodos más largos.
        </p>
      </div>

      {/* Contenedor del gráfico */}
      <div className="overflow-hidden">
        <iframe
          src="/grafico_inflacion.html"
          title="Gráfico de Inflación"
          width="100%"
          height="700px"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
};

export default GraficoInflacion;