const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let count = 0
    let arr = []
    y = 0
    
    while(y !== matrix[0].length) {
        for (i = 0; i < matrix.length; i++){
            if(matrix[i][y] === 0){
                break
            }
        arr.push(matrix[i][y]) 
  }
  y++
    }
  
  for (i of arr){
      count = count + i
  }  
 
  return count
}

module.exports = {
  getMatrixElementsSum
};
