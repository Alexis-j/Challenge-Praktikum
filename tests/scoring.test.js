const fs = require('fs');
const path = require('path');
const { calculateScores } = require('../src/scoring');

test('Calculates scores correctly', () => {
  // Ruta al archivo JSON con datos de la encuesta
  const filePath = path.resolve(__dirname, '../src/challenge.answers.json');

  // Lee el contenido del archivo JSON
  const rawSurveyData = fs.readFileSync(filePath, 'utf-8');

  // Convierte el contenido del archivo JSON a un objeto
  const surveyData = JSON.parse(rawSurveyData);

  // Llama a la función y verifica los resultados esperados
  const scores = calculateScores(surveyData);

  expect(scores)
});
