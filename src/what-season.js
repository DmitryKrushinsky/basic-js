import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || Object.keys(date).length) throw new Error('Invalid date!');
  let month = date.getMonth() + 1;
  return (month === 1 || month === 2 || month === 12) ? 'winter' : 
    (month >= 9 && month <= 11) ? 'autumn' : 
      (month >= 3 && month <= 5) ? 'spring' : 
        (month >= 6 && month <= 8) ? 'summer' : 
          false;
}
