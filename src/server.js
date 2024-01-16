const express = require('express');
const { calculateScores } = require('./scoring');

const app = express();
const PORT = 3000;

// Ruta para la raíz, sirve una página HTML con un botón
app.get('/', (req, res) => {
  const html = `
    <html>
      <head>
        <title>Score Page</title>
      </head>
      <body>
        <h1>Bienvenido a la página de puntajes</h1>
        <form action="/scores" method="get">
          <button type="submit">Ver Puntajes</button>
        </form>
      </body>
    </html>
  `;
  res.send(html);
});

// Ruta para /scores
app.get('/scores', (req, res) => {
  const scores = calculateScores();
  res.json(scores);
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
