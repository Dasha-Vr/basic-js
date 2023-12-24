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
  let str = n.toString()
  let strNew = str
  let number = 0
  for (let i = 0; i < str.length; i++){
      strNew = str.replace(str[i], '')
      if (Number(strNew) > number) {
          number = Number(strNew)
      }
    }
    return number
}

module.exports = {
  deleteDigit
};
