'use strict';

// function choose_multiples_of_three(collection) {
//
//   //implement here
//   var result = [];
//   for (let i = 0; i < collection.length; i++) {
//     if (collection[i] % 3 == 0) {
//       result.push(collection[i]);
//     }
//   }
//
//   return result;
// }

const choose_multiples_of_three = (numbers) => {
  const condition = (number) => {return number % 3 === 0};

  return numbers.filter(condition);

};


module.exports = choose_multiples_of_three;
