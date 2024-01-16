const express = require('express');
const { calculateScores } = require('./scoring');

const app = express();
const PORT = 3000;

app.get('/scores', (req, res) => {
  const scores = calculateScores();
  res.json(scores);
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
