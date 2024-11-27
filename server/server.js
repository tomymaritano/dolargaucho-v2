const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3003;

// Middleware to handle JSON responses
app.use(express.json());

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch data');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return { error: error.message };
  }
};

app.get('/api/feriados/:year', async (req, res) => {
  const data = await fetchData(`https://api.argentinadatos.com/v1/feriados/${req.params.year}`);
  res.json(data);
});

app.get('/api/eventos/presidenciales', async (req, res) => {
  const data = await fetchData('https://api.argentinadatos.com/v1/eventos/presidenciales');
  res.json(data);
});

app.get('/api/cotizaciones/dolares', async (req, res) => {
  const data = await fetchData('https://api.argentinadatos.com/v1/cotizaciones/dolares');
  res.json(data);
});

app.get('/api/cotizaciones/dolares/:casa', async (req, res) => {
  const data = await fetchData(`https://api.argentinadatos.com/v1/cotizaciones/dolares/${req.params.casa}`);
  res.json(data);
});

app.get('/api/cotizaciones/dolares/:casa/:fecha', async (req, res) => {
  const data = await fetchData(`https://api.argentinadatos.com/v1/cotizaciones/dolares/${req.params.casa}/${req.params.fecha}`);
  res.json(data);
});

app.get('/api/indices/inflacion', async (req, res) => {
  try {
    // Llama a la API externa
    const data = await fetchData('https://api.argentinadatos.com/v1/finanzas/indices/inflacion');
    res.json(data); // Devuelve los datos de inflación
  } catch (error) {
    console.error('Error fetching inflation data:', error);
    res.status(500).json({ error: 'Error al obtener los datos de inflación.' });
  }
});


app.get('/api/indices/inflacionInteranual', async (req, res) => {
  const data = await fetchData('https://api.argentinadatos.com/v1/finanzas/indices/inflacionInteranual');
  res.json(data);
});

app.get('/api/indices/uva', async (req, res) => {
  const data = await fetchData('https://api.argentinadatos.com/v1/finanzas/indices/uva');
  res.json(data);
});

app.get('/api/indices/riesgoPais', async (req, res) => {
  const data = await fetchData('https://api.argentinadatos.com/v1/finanzas/indices/riesgo-pais');
  res.json(data);
});

app.get('/api/indices/riesgoPais/ultimo', async (req, res) => {
  const data = await fetchData('https://api.argentinadatos.com/v1/finanzas/indices/riesgo-pais/ultimo');
  res.json(data);
});

app.get('/api/tasas/plazoFijo', async (req, res) => {
  const data = await fetchData('https://api.argentinadatos.com/v1/finanzas/tasas/plazoFijo');
  res.json(data);
});

app.get('/api/tasas/depositos30Dias', async (req, res) => {
  const data = await fetchData('https://api.argentinadatos.com/v1/finanzas/tasas/depositos30Dias');
  res.json(data);
});

app.get('/api/rendimientos', async (req, res) => {
  const data = await fetchData('https://api.argentinadatos.com/v1/finanzas/rendimientos');
  res.json(data);
});

app.get('/api/rendimientos/:entidad', async (req, res) => {
  const data = await fetchData(`https://api.argentinadatos.com/v1/finanzas/rendimientos/${req.params.entidad}`);
  res.json(data);
});

app.get('/api/fci/:tipo/:fecha', async (req, res) => {
  const { tipo, fecha } = req.params;
  const data = await fetchData(`https://api.argentinadatos.com/v1/finanzas/fci/${tipo}/${fecha}`);
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});