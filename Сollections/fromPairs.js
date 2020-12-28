const fromPairs = (coll) => coll
  .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), []);

console.log(fromPairs([['cat', 5], ['dog', 6], ['cat', 11]]));
// → { 'dog': 6, 'cat': 11 }
