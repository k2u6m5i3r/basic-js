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
 function encodeLine(str ) {
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  let ans = [];
  let strToArray = str.split('');
  let kolLiter = 1;
  for(let i=0;i< strToArray.length; i++){
      if(strToArray[i] != strToArray[i+1]){
          if(kolLiter>=2){
              ans.push(kolLiter);
              kolLiter= 1;
          }
          ans.push(strToArray[i]);
      } else {
          kolLiter++;
      }
  }
  return ans.join('');
}

module.exports = {
  encodeLine
};
