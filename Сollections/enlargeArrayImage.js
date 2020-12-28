const enlargeArrayImage = (coll) => coll
  .reduce((acc, row) => {
    const doubleRow = row.reduce((newAcc, symbol) => [...newAcc, symbol, symbol], []);
    return [...acc, doubleRow, doubleRow];
  }, []);

// alternative

const duplicateValues = (items) => items.flatMap((item) => [item, item]);

const enlargeArrayImage2 = (items) => {
  const horizontallyStretched = items.map(duplicateValues);
  return duplicateValues(horizontallyStretched);
};

const arr = [
  ['*', '*', '*', '*'],
  ['*', ' ', ' ', '*'],
  ['*', ' ', ' ', '*'],
  ['*', '*', '*', '*'],
];
// ****
// *  *
// *  *
// ****

console.log(enlargeArrayImage(arr));
// ********
// ********
// **    **
// **    **
// **    **
// **    **
// ********
// ********
const arr1Enlarged = [
  ['*', '*', '*', '*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', '*', '*', '*', '*'],
  ['*', '*', ' ', ' ', ' ', ' ', '*', '*'],
  ['*', '*', ' ', ' ', ' ', ' ', '*', '*'],
  ['*', '*', ' ', ' ', ' ', ' ', '*', '*'],
  ['*', '*', ' ', ' ', ' ', ' ', '*', '*'],
  ['*', '*', '*', '*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', '*', '*', '*', '*'],
];

console.log(enlargeArrayImage(arr1Enlarged));
console.log(enlargeArrayImage2(arr1Enlarged));
