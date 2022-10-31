function calculateGrade(marks) {
  let sum = 0;
  let average;
  let length = marks.length;
  for (let i = 0; i < length; i++) {
    sum += marks[i];
    average = Math.round(sum / marks.length);
  }
  if (average <= 100 && average >= 90) {
    return "A";
  } else if (average <= 89 && average >= 80) {
    return "B";
  } else if (average <= 79 && average >= 70) {
    return "C";
  } else if (average <= 69 && average >= 60) {
    return "D";
  } else if (average <= 59 && average >= 50) {
    return "E";
  } else {
    return "F";
  }
}

module.exports = calculateGrade;
