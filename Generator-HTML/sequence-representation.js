import {
  l, cons as consList, head, tail, isEmpty, toString as listToString,
} from '@hexlet/pairs-data';

const has = (list, number) => {
  if (head(list) === number) {
    return true;
  }
  if (tail(list) === null) {
    return false;
  }
  return has(tail(list), number);
};

console.log(listToString(has(l(3, 5, 8, 4), 8)));

const reverse = (list) => {
  const iter = (newList, acc) => {
    if (isEmpty(newList)) {
      return acc;
    }
    return iter(tail(newList), consList(head(newList), acc));
  };
  return iter(list, l());
};

console.log(listToString(reverse(l(3, 5, 8, 4))));

const concat = (list1, list2) => {
  const iter = (newList, acc) => {
    if (isEmpty(newList)) {
      return acc;
    }
    return consList(head(newList), iter(tail(newList), acc));
  };
  return iter(list1, list2);
};

console.log(listToString(concat(l(3, 5, 8, 4), l(2, 9, 7))));

/*

export const has = (list, element) => {
  if (isEmpty(list)) {
    return false;
  }
  if (head(list) === element) {
    return true;
  }

  return has(tail(list), element);
};

export const reverse = (list) => {
  const iter = (items, acc) => (
    isEmpty(items) ? acc : iter(tail(items), consList(head(items), acc))
  );

  return iter(list, l());
};

export const concat = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }

  return consList(head(list1), concat(tail(list1), list2));
};

*/
