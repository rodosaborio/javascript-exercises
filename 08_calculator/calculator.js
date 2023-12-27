const add = (a, b) => {
	return a + b;
};

const subtract = (a, b) => {
	return a - b;
};

const sum = (array) => {
	return array.reduce((acc, i) => acc + i, 0);
};

const multiply = (array) => {
  return array.reduce((acc, i) => acc * i, 1);
};

const power = (a, b) => {
	return a ** b;
};

const factorial = (a) => {
  if (a === 0) {
    return 1;
  }
  result = a;
	for (let i = a - 1; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
