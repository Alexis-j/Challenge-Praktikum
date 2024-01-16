// 1. Import the required modules:
//   a. fs module for file system operations.

// 2. Define a function roundToOneDecimal:
//    a. Take a numerical value.
//    b. Return the value rounded to one decimal place.

// 3. Define a function readSurveyData:
//    a. Read the survey data from the 'src/challenge.answers.json' file.
//    b. Parse the JSON data.
//    c. Return the parsed data.

// 4. Define a function calculateScores:
//    a. Read survey data using readSurveyData.
//    b. Define a function filterResponsesByGender:
//       i. Take a gender parameter.
//       ii. Filter responses based on gender.
//    c. Define a function calculateAverage:
//       i. Take an array of responses.
//       ii. Calculate the average rating.
//       iii. Filter out responses without a numeric 'rating'.
//       iv. Handle cases where there are not enough valid responses.
//    d. Filter responses by gender (female, male, diverse).
//    e. Calculate average scores for each gender using calculateAverage.
//    f. Check for null scores and log a message if needed.
//    g. Return an object with the calculated scores.

// 5. Export the calculateScores function for external use.
