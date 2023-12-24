const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  count = 0
  for (i of matrix){
      for (y of i){
          console.log(y)
          if (y === '^^'){
            count +=1
        }
      }
  }
  return count
}

module.exports = {
  countCats
};
