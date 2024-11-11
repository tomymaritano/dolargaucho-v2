import React from 'react';
import useFetchDolar from '../hooks/useFetchDolar';

const HookTester: React.FC = () => {
  const { data, loading, error } = useFetchDolar();

  return (
    <div className="min-h-screen text-black bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Estado del Hook useFetchDolar</h1>

      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Estado Actual</h2>

        <div className="mb-4">
          <strong>Loading:</strong> {loading ? "true" : "false"}
        </div>

        <div className="mb-4">
          <strong>Error:</strong> {error ? error : "No hay error"}
        </div>

        <div className="mb-4">
          <strong>Data:</strong>
          <pre className="bg-gray-200 p-4 rounded-md mt-2">
            {data && data.length > 0 ? JSON.stringify(data, null, 2) : "No hay datos disponibles"}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default HookTester;