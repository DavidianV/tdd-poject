function returnsThree() {
  // Your code here
  return 3
}

function reciprocal(n) {
  // Your code here
  if (n > 1000000 || n < 1) {
    throw new RangeError('This is a range error');
  }
  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal
};