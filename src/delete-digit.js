const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split('');
  let maxNum = 0;
  for (let i = 0; i < digits.length; i++) {
    const num = parseInt(digits.slice(0, i).join('') + digits.slice(i + 1).join(''));
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}


module.exports = {
  deleteDigit
};
