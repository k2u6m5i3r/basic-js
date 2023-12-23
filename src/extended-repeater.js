const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', * {
 * repeatTimes: 3,
 * separator: '**',
 * addition: 'PLUS',
 * additionRepeatTimes: 3,
 * additionSeparator: '00' })
 * =>
 *  'STRING PLUS 00 PLUS 00 PLUS
 * **STRING PLUS 00 PLUS 00 PLUS
 * **STRING PLUS 00 PLUS 00 PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  // console.log(str);
  if ("repeatTimes" in options) {
    //console.log(" repeatTimes ", options["repeatTimes"]);
  }
  if ("separator" in options) {
    //console.log(" separator ", options["separator"]);
  } else {
    options["separator"] = "+";
    //console.log(" separator ", options["separator"]);
  }
  if ("addition" in options) {
    //console.log(" addition ", options["addition"]);
  } else {
    options["addition"] = "";
  }
  if ("additionRepeatTimes" in options) {
    //console.log(" additionRepeatTimes ", options["additionRepeatTimes"]);
  }
  if ("additionSeparator" in options) {
    //console.log(" additionSeparator ", options["additionSeparator"]);
  } else {
    options["additionSeparator"] = "|";
    //console.log(" additionSeparator ", options["additionSeparator"]);
  }
  let ans = "";
  let addatioStr = "";
  for (let i = 0; i < options["additionRepeatTimes"] - 1; i++) {
    addatioStr += options["addition"] + options["additionSeparator"];
  }
  addatioStr += options["addition"];
  //console.log(addatioStr);
  for (let i = 0; i < options["repeatTimes"] - 1; i++) {
    ans += str + addatioStr + options["separator"];
  }
  ans += str + addatioStr;
  //console.log(ans);
  return ans;
}

module.exports = {
  repeater,
};
