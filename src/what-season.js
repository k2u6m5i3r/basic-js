const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date = undefined) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (date == undefined) {
    return "Unable to determine the time of year!";
  }
  
  if (
    !(date instanceof Date) ||
    Object.prototype.toString.call(date) !== "[object Date]" ||
    Object.getOwnPropertySymbols(date).length !== 0
  ) {
    throw new Error("Invalid date!");
  }

  switch (date.getMonth() + 1) {
    case 1:
    case 2:
      return "winter";
    case 3:
    case 4:
    case 5:
      return "spring";
    case 6:
    case 7:
    case 8:
      return "summer";
    case 9:
    case 10:
    case 11:
      return "autumn";
    case 12:
      return "winter";
    default:
      return "Invalid date!";
      break;
  }
}

module.exports = {
  getSeason,
};
