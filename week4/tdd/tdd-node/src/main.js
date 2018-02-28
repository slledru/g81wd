function longDivision(dividend, divisor) {
  if (divisor === 0) {
    return 'Cannot divide by zero!';
  }
  return {
    quotient: Math.floor(dividend / divisor),
    remainder: dividend % divisor
  };
}

module.exports = { longDivision }
