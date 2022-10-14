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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(Array.isArray(members)){
    return members.filter(function (item) {
      if (typeof (item) == 'string') {
          return true;
      }
  }
  ).map(function (item){
    return item.toUpperCase().trim();
  }
  ).sort().reduce(function (sum, current) {
      return sum + current[0];
  }, "");
  }else{
    return false;
  }

}

module.exports = {
  createDreamTeam
};
