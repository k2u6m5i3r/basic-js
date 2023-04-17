const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  if (arr.length == 0) {
    return [];
  }
  let ans = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (arr[index] == '--discard-prev') {
      if (index == 0) {

      } else {
        ans.push(element);
      }
    }
    if (arr[index] == '--double-prev') {
      if (index == 0) {

      } else {
        ans.push(element);
      }
    }
    if (arr[index] == '--double-next') {
      if (index == arr.length-1) {

      } else {
        ans.push(element);
      }
    }
    if (arr[index] == '--discard-next') {
      if (index == arr.length-1) {

      } else {
        ans.push(element);
      }
    } else {
      ans.push(element);
    }
  }
  return ans;
}

module.exports = {
  transform
};
