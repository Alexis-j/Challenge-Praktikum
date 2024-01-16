const fs = require('fs');

// Agrega la función roundToOneDecimal para redondear los puntajes a una decimal
function roundToOneDecimal(value) {
  return parseFloat(value.toFixed(1));
}

function readSurveyData() {
  const data = fs.readFileSync('src/challenge.answers.json', 'utf-8');
  return JSON.parse(data);
}

function calculateScores() {
  const surveyData = readSurveyData();

  const filterResponsesByGender = (gender) => surveyData.filter((response) => response.gender === gender);

  const calculateAverage = (responses) => {
    if (responses.length < 3) {
      return null;
    }

    // Filtra solo las respuestas con un valor numérico en la propiedad 'rating'
    const validResponses = responses.filter(response => typeof response.rating === 'number');

    // Verifica si no hay respuestas válidas después del filtrado
    if (validResponses.length === 0) {
      console.error('No hay respuestas válidas con valor numérico para calcular el promedio.');
      return null;
    }

    // Realiza el cálculo solo con respuestas válidas
    const totalRating = validResponses.reduce((sum, response) => sum + response.rating, 0);

    return roundToOneDecimal(totalRating / validResponses.length);
  };

  const femaleResponses = filterResponsesByGender('female');
  const maleResponses = filterResponsesByGender('male');
  const diverseResponses = filterResponsesByGender('diverse');

  const femaleScore = calculateAverage(femaleResponses);
  const maleScore = calculateAverage(maleResponses);
  const diverseScore = calculateAverage(diverseResponses);

  // Verifica si algún puntaje es null y ajusta según tus necesidades
  if (femaleScore === null || maleScore === null || diverseScore === null) {
    console.error('Not enough responses for some genders.');
  }

  return {
    femaleScore,
    maleScore,
    diverseScore,
  };
}

module.exports = { calculateScores };
