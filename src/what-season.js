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


function getSeason(date) {

  const SEASONS = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
  };
  
  let current_season;
  function isValidDate(date) {
    try {
      if (Object.getOwnPropertyNames(date).length !== 0) {
        return false;
      }
      if (!(date instanceof Date)) {
        return false;
      }
      if (isNaN(date.getTime())) {
        return false;
      }
      if (Object.getOwnPropertyNames(date).length > 0 || Object.getOwnPropertySymbols(date).length > 1) {
        return false;
      }
      if (!(date instanceof Date && Object.getPrototypeOf(date) === Date.prototype)) {
        return false;
      }
      if (!(date.constructor && date.constructor.name === 'Date')) {
        return false;
      }
      if (date.toDateString() === 'Invalid Date') {
        return false;
      }
      return true;
    } catch (err) {
      alert(`Возникла ошибка!`);
      return false;
    }
  }
  
  if (date) {
    if (!isValidDate(date)) {
      throw new Error('Invalid date!');
    } else {
      for (const season in SEASONS) {
        const INCLUDE_SEASON = SEASONS[season].includes(date.getMonth());
        if (INCLUDE_SEASON) {
          current_season = season;
          break;
        }
      }
      return current_season;
    }
  } else {
    return "Unable to determine the time of year!";
  }
}

module.exports = {
  getSeason,
};
