import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 5001;

app.use(cors());

app.get('/api/dolares', async (req, res) => {
  try {
    const response = await fetch('https://dolarapi.com/v1/dolares');
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos de la API' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor proxy ejecutándose en http://localhost:${PORT}`);
});