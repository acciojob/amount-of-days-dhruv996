function daysOfAYear(year) {
  // Check if the year is a leap year
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  // Return the number of days based on whether it's a leap year or not
  return isLeapYear ? 366 : 365;
}

// Example usage
function calculateDays() {
  const yearInput = document.getElementById('year').value;
  const result = daysOfAYear(parseInt(yearInput));
  alert(`The number of days in the year ${yearInput} is: ${result}`);
}

