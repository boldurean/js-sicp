const intersection = (array1, array2) => {
  const filtered = array1.filter((value) => array2.includes(value));
  return [...new Set(filtered)];
};

console.log(intersection([2, 1], [2, 3]));
// → [2]

console.log(intersection([3, 1, 3], [3, 3, 2]));
// → [3]

console.log(intersection(
  ['kirill', 'rakhim', 'alex', 'dima', 'dzhamshut'],
  ['ippolit', 'rakhim', 'dima', 'schtirlitz', 'kirill', 'alex', 'alibaba'],
));
// → ['kirill', 'rakhim', 'alex', 'dima']
