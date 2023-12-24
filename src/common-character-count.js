const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let i = 0;
  let count = 0;
  let s1new = s1;
  let s2new = s2;
  while (s1new.length != 0) {
      if (s2new.includes(s1new[i])) {
          count +=1
          s2new = s2new.replace(s1new[i], '')
          }
    s1new = s1new.replace(s1new[i], '')
}
return count
}

module.exports = {
  getCommonCharacterCount
};
