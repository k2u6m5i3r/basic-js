const { NotImplementedError } = require("../extensions/index.js");

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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  return domains
    .map((item) => item.split(".").reverse())
    .reduce((acc, item) => {
      let temp = item.map((item, index, array) => {
        return "." + array.slice(0, index + 1).join(".");
      });
      acc.push(...temp);
      return acc;
    }, [])
    .reduce((acc, item) => {
      if (acc[item] == undefined) {
        acc[item] = 1;
      } else {
        acc[item] += 1;
      }
      return acc;
    }, {});
}

module.exports = {
  getDNSStats,
};
