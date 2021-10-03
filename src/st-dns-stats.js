import { NotImplementedError } from '../extensions/index.js';

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
 */// for (let i = 0; i < domains.length; i++) {
export default function getDNSStats(domains) {
  let result = {};
  domains.map((el) => el.split('.').reverse().reduce((acc, el) => {
      let temp = `${acc}.${el}`;
      result[temp] = result[temp] + 1 || 1;
      return temp;
    }, ''));
  return result;
}
//   const reducer = (acc, el) => {
//     if (!acc[el.split('.')]) {
//       acc[el.split('.')] = 1;
//     } else {
//       acc[el.split('.')] += 1;
//     }
//     return acc;
//   }, {};
// str.split('.).reverse().reduce()!!!!!!!!!
//   const resultReducer = obj => obj.reduce((acc, el) => {
//     if (!acc[el]) {
//       acc[el] = 1;
//     } else {
//       acc[el] += 1;

//     }
//     return acc;
//   }, {});
//   return domains.reduce(reducer).reduce(resultReducer)

//   }


// reduce((acc, el) => {
//   if (!acc[el]) {
//     acc[el] = 1;
//   } else {
//     acc[el] += 1;

//   }
//   return acc;
// }, {})


