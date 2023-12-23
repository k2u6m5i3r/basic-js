const { NotImplementedError } = require("../extensions/index.js");

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
//  function deleteDigit( n ) {
//   //throw new NotImplementedError("Not implemented");
//   // remove line with error and write your code here
//   let nToStr = n.toString();
//   let max = 0;
//   for(let i = 0; i< nToStr.length; i++){
//       max = Math.max(max, Number(nToStr.slice(0, i) + nToStr.slice(i+1)));
//   }
//   return max;
// }

function deleteDigit(n) {
  //throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  return n
    .toString()
    .split("")
    .reduce((max, item, i, array) => {
      return Math.max(
        max,
        Number(array.join("").slice(0, i) + array.join("").slice(i + 1))
      );
    }, 0);
}

module.exports = {
  deleteDigit,
};
