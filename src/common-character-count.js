const { NotImplementedError } = require("../extensions/index.js");

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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //return (s1.split('').filter(x => s2.split('').includes(x))).length;
  s1 = s1.split("");
  s2 = s2.split("");

  let ans = [];

  let map = s1.reduce(function (acc, i) {
    acc[i] = acc[i] ? acc[i] + 1 : 1;
    return acc;
  }, {});

  for (let i = 0; i < s2.length; i++) {
    let current = s2[i];
    let currentMapItem = map[current];

    if (currentMapItem && currentMapItem > 0) {
      ans.push(current);
      map[current] = currentMapItem - 1;
    }
  }

  return ans.length;
}

module.exports = {
  getCommonCharacterCount,
};
