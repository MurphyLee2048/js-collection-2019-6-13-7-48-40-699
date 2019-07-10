'use strict';

// function grouping_count(collection) {
//
//   //implement here
//   var map = new Map();
//   var count = 0;
//   for (let i = 0; i < collection.length; i++) {
//     if (map.has(collection[i])) {
//       count = map.get(collection[i]);
//       map.set(collection[i], ++count);
//     }
//   }
// }

const grouping_count = (collection) => {
  const condition1 = (number) => {return number === 1;};
  const condition2 = (number) => {return number === 2;};
  const condition3 = (number) => {return number === 3;};
  const condition4 = (number) => {return number === 4;};

  let l1 = collection.filter(condition1).length;
  let l2 = collection.filter(condition2).length;
  let l3 = collection.filter(condition3).length;
  let l4 = collection.filter(condition4).length;

  return {'1':l1, '2':l2, '3':l3, '4':l4};

};

module.exports = grouping_count;
