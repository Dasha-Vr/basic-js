const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arrNew = []
    let arrNew2 = []
    let i2 = 0
    let obj = {}
    let obj2 = {}
    string1 = ''
    for (i of domains){
        arr = i.split('.')
        str = (arr.reverse().join(' '))
        arrNew.push(str)
    }
    for (i of arrNew){
        i2 = i.split(' ')
        for (y of i2){
            arrNew2.push(y)
        }
    }
    for (let x = 0; x < arrNew2.length; x++){
      if (obj[arrNew2[x]]) {
        obj[arrNew2[x]]++
      }
      else {
        obj[arrNew2[x]] = 1
      }
    }
      for (key in obj){
          string1 = `${string1}.${key}`
          obj2[`${string1}`] = obj[key]
      }
  return obj2
}


module.exports = {
  getDNSStats
};
