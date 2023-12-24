const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let team = []
  if (!Array.isArray(members)){
      return false
  }
  for (i of members){
      if (typeof i === 'string'){
          i = i.replace(/\s/g, '')
          team.push(i[0].toUpperCase())
      }
      }
  if (team.length < 1){
      return false
  }
  return team.sort().join('')
}

module.exports = {
  createDreamTeam
};
