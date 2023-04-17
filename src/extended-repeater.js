const { NotImplementedError } = require('../extensions/index.js');

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
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.addition !== undefined ? options.addition : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  const stringify = value => {
    if (value === null) {
      return 'null';
    } else if (value === undefined) {
      return '';
    } else if (typeof value === 'symbol') {
      return value.toString();
    } else if (typeof value === 'object') {
      return value.valueOf();
    } else {
      return value;
    }
  };

  const additionStr = Array(additionRepeatTimes).fill(stringify(addition)).join(additionSeparator);

  return Array(repeatTimes)
    .fill(stringify(str) + additionStr)
    .join(separator);
}

module.exports = {
  repeater
};
