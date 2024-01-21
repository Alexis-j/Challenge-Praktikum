const fs = require('fs');
const path = require('path');
const { readSurveyData, calculateScores, calculateAverage, roundToOneDecimal } = require('../src/scoring');

test('readSurveyData reads survey data correctly', () => {
  const surveyData = readSurveyData();

  expect(surveyData).toEqual(expect.any(Array));
  expect(surveyData.length).toBeGreaterThan(0);
});

// Use roundToOneDecimal from the exported object
test('roundToOneDecimal rounds to one decimal place correctly', () => {
  const result = roundToOneDecimal(5.678);

  expect(result).toBe(5.7);
});

test('calculateAverage returns null when responses length is less than 3 and no valid responses', () => {
  const result = calculateAverage([{ rating: 5 }, { rating: 10 }]);

  expect(result).toBeNull();
});

test('calculateAverage calculates the average correctly', () => {
  const result = calculateAverage([{ rating: 5 }, { rating: 10 }, { rating: 15 }]);

  expect(result).toBe(10);
});

test('Calculates scores correctly', () => {
  // Path to the JSON file with survey data
  const filePath = path.resolve(__dirname, '../src/challenge.answers.json');

  // Read the content of the JSON file
  const rawSurveyData = fs.readFileSync(filePath, 'utf-8');

  // Convert the content of the JSON file to an object
  const surveyData = JSON.parse(rawSurveyData);

  // Call the function and check the expected results
  const scores = calculateScores(surveyData);

  // Check that the returned scores are truthy (not undefined or null)
  expect(scores).toBeTruthy();
});
