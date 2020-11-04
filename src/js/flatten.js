import {
  l, isEmpty, cons, reduce, head, tail, toString as listToString, concat, isList, reverse,
} from '@hexlet/pairs-data';

const flatten = (list) => {
  if (isEmpty(list)) {
    return l();
  }
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }
    const currentNode = head(items);
    const restNodes = tail(items);
    const newAcc = isList(currentNode) ? iter(currentNode, acc) : concat(l(currentNode), acc);
    return iter(restNodes, newAcc);
  };
  return reverse(iter(list, l()));
};

const flatten2 = (list) => (
  reduce(
    (item, acc) => (
      isList(item) ? concat(flatten(item), acc) : cons(item, acc)),
    l(),
    reverse(list),
  )
);

const list = l(1, 2, l(3, 5), l(l(4, 3), 2));

console.log(listToString(flatten(list)));
console.log(listToString(flatten2(list)));

// (1, 2, 3, 5, 4, 3, 2)
