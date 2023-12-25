const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('')
  let count = 1
  let arr2 = []
  arr2.push(count)
  arr2.push(arr[0])
  for (let i = 1; i < arr.length; i++){
      if (arr[i] === arr2[arr2.length - 1]){
          count++
          arr2.pop()
          arr2.pop()
          arr2.push(count)
          arr2.push(arr[i])
      }
      else if (arr[i] !== arr2[arr2.length - 1] && count !== 1) {
          count = 1
          arr2.push(count)
          arr2.push(arr[i])
      }
      else {
          arr2.push(count)
          arr2.push(arr[i])
          count = 1
      }
  }
  
  return arr2.join('').replace(/1/g, '')
}


module.exports = {
  encodeLine
};
