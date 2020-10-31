import {
  node, append, make, getValue, is,
} from '@hexlet/html-tags';
import {
  cons as consList,
} from '@hexlet/pairs';
import {
  head, isEmpty, l, tail, toString as listToString,
} from '@hexlet/pairs-data';
import {
  map,
} from './map.js';
import {
  reverse,
} from './strings.js';

export const filter = (func, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }
    const item = head(items);
    const newAcc = func(item) ? consList(item, acc) : acc;
    return iter(tail(items), newAcc);
  };

  return iter(elements, l());
};

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));
const dom4 = append(dom3, node('blockquote', 'live is life'));
const dom5 = append(dom4, node('blockquote', 'i am sexy, and i know it'));

export const quotes = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }
  const filtredHTML = filter((element) => is('blockquote', element), dom5);
  return map(getValue, filtredHTML);
};

console.log(listToString(quotes(dom5)));
