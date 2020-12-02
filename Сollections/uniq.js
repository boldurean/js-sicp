// const uniq = (coll) => coll.filter((num, index) => coll.indexOf(num) === index);

const predicate = (el, index, collection) => index === collection.indexOf(el);
const uniq = (coll) => coll.filter(predicate);

console.log(uniq([2, 1, 2, 3]));
