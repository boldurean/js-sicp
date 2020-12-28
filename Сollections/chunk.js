const chunk = (coll, piece) => {
  if (coll.length < 1) {
    return coll;
  }
  const firstPart = coll.slice(0, piece);
  const rest = coll.slice(piece);
  return [firstPart, ...chunk(rest, piece)];
};

// alternative

export default (coll, size) => {
  const iter = (iterColl, acc = []) => {
    if (iterColl.length === 0) {
      return acc;
    }
    return iter(
      iterColl.slice(size),
      [...acc, iterColl.slice(0, size)],
    );
  };

  return iter(coll);
};

console.log(chunk(['a', 'b', 'c', 'd'], 2));
// → [['a', 'b'], ['c', 'd']]

console.log(chunk(['a', 'b', 'c', 'd'], 3));
// → [['a', 'b', 'c'], ['d']]
console.log(chunk(['a'], 2));
