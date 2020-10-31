import {
  make, append, node, getValue, getName, is, toString as htmlToString,
} from '@hexlet/html-tags';
import {
  cons as consList, head, isEmpty, l, tail,
} from '@hexlet/pairs-data';

import {
  reverse as reverseStr,
} from './strings.js';

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

export const map = (func, elements) => {
  if (isEmpty(elements)) {
    return l();
  }
  const iter = (element, acc) => {
    if (isEmpty(element)) {
      return acc;
    }
    const newElement = func(head(element));
    return consList(newElement, map(func, tail(elements)));
  };
  return iter(elements, '');
};

const processedDom = map((element) => {
  if (is('h1', element)) {
    return node('h2', getValue(element));
  }
  return element;
}, dom3);

console.log(htmlToString(processedDom));

export const mirror = (html) => {
  if (isEmpty(html)) {
    return '';
  }
  return map((element) => {
    const tag = getName(element);
    const value = getValue(element);
    return node(tag, reverseStr(value));
  }, html);
};

console.log(htmlToString(mirror(dom3)));
