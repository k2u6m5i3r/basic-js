const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  function inMatrix(j, i, maxSizeJ, maxSizeI) {
    if (i >= 0 && i < maxSizeI && j >= 0 && j < maxSizeJ) {
      return true;
    } else {
      return false;
    }
  }

  let ans = [];
  let ansStroka = [];
  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[j].length; i++) {
      let temp = 0;
      if (inMatrix(j - 1, i - 1, matrix.length, matrix[j].length)) {
        temp += matrix[j - 1][i - 1];
      }
      if (inMatrix(j - 1, i, matrix.length, matrix[j].length)) {
        temp += matrix[j - 1][i];
      }
      if (inMatrix(j - 1, i + 1, matrix.length, matrix[j].length)) {
        temp += matrix[j - 1][i + 1];
      }
      if (inMatrix(j, i + 1, matrix.length, matrix[j].length)) {
        temp += matrix[j][i + 1];
      }
      if (inMatrix(j + 1, i + 1, matrix.length, matrix[j].length)) {
        temp += matrix[j + 1][i + 1];
      }
      if (inMatrix(j + 1, i, matrix.length, matrix[j].length)) {
        temp += matrix[j + 1][i];
      }
      if (inMatrix(j + 1, i - 1, matrix.length, matrix[j].length)) {
        temp += matrix[j + 1][i - 1];
      }
      if (inMatrix(j, i - 1, matrix.length, matrix[j].length)) {
        temp += matrix[j][i - 1];
      }
      ansStroka.push(temp);
    }
    ans.push(ansStroka);
    ansStroka = [];
  }
  return ans;
}

module.exports = {
  minesweeper,
};
