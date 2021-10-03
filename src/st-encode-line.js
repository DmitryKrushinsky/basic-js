import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 * 
 * let countLetters = str.split('').reduce((acc, el) => {
    if (!acc[el]) {
      acc[el] = 1;
    }else {
      acc[el] += 1;
    }
    return acc;
  }, {});
  return Object.entries(countLetters).map(el => (el[1] === 1 ? '' : el[1]) + el[0]).join('')
 *
 */
export default function encodeLine(str) {
  let result = '';
  let countLetters = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      countLetters++;
    } else if (str[i] !== str[i + 1]) {
        result += countLetters !== 1 ? countLetters + str[i] : str[i];
        countLetters = 1;
      }
}
return result;
}
