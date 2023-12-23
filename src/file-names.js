const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let ans = [];
  for (let index = 0; index < names.length; index++) {
    const element = names[index];
    if (!ans.includes(element)) {
      ans.push(element);
    } else {
      let j = 0;
      for (let indexInNames = 0; indexInNames < index; indexInNames++) {
        const elementInNames = names[indexInNames];
        if (elementInNames == element) {
          j++;
        }
      }
      if (j == 0) {
        let k = 0;
        for (let indexInAns = 0; indexInAns < ans.length; indexInAns++) {
          const elementInAns = ans[indexInAns];
          if (element == elementInAns) {
            k++;
          }
        }
        if (k != 0) {
          ans.push(`${element}(${k})`);
        }
      } else {
        ans.push(`${element}(${j})`);
      }
    }
  }
  return ans;
}

module.exports = {
  renameFiles,
};
