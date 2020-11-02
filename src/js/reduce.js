import { getValue, node } from '@hexlet/html-tags';
import { head, isEmpty, tail } from '@hexlet/pairs-data';
import { append, getName, make } from './markup.js';

const reduce = (callbackFn, startingPoit, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }
    const item = head(items);
    const newAcc = callbackFn(item, acc);
    return iter(tail(items), newAcc);
  };
  return iter(elements, startingPoit);
};

const emptyTagsCount = (tagName, html) => reduce((item, acc) => {
  const searchingTag = getName(item);
  const value = getValue(item);
  return value === '' && searchingTag === tagName ? acc + 1 : acc;
}, 0, html);

const html1 = make();
const html2 = append(html1, node('h1', 'scheme'));
const html3 = append(html2, node('p', 'is a lisp'));
const html4 = append(html3, node('blockquote', ''));
const html5 = append(html4, node('blockquote', ''));
const html6 = append(html5, node('blockquote', 'quote'));

console.log(emptyTagsCount('blockquote', html6));
