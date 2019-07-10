'use strict';

// function choose_even(collection) {
//
//   //implement here
//   var result = [];
//   for (let i = 0; i < collection.length; i++) {
//     if (collection[i] % 2 == 0) {
//       result.push(collection[i]);
//     }
//   }
//
//   return result;
// }

const choose_even = (numbers) => {
  const condition = (number) => {return number % 2 === 0};

  return numbers.filter(condition);

};

module.exports = choose_even;
