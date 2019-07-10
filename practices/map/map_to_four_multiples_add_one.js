'use strict';
var map_to_four_multiples_add_one = function(collection){
  const result = collection.map(x => x*4 + 1);
  return result;
};

module.exports = map_to_four_multiples_add_one;
