function sum(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    throw new TypeError('Ошибка - Переданы не числа');
  }
}

module.exports = sum;
