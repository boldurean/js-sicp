const without = (coll, ...elements) => coll.filter((element) => !elements.includes(element));

// alternative

const without2 = (coll, ...rest) => {
  const set = new Set(rest);
  return coll.filter((value) => !set.has(value));
};

console.log(without([2, 1, 2, 3], 1, 2, 5));
console.log(without2([2, 1, 2, 3], 1, 2, 5));
// → [3]
