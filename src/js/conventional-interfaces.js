import {
  append, getName, getValue, make, node, reduce, toString as htmlToString,
} from '@hexlet/html-tags';
import { filter } from './filter.js';
import { map } from './map.js';
import { wc } from './utils.js';

const getSpecialTagsInHTML = (tag, html) => filter((element) => getName(element) === tag, html);

const extractHeaders = (elements) => {
  const filteredHeadersList = getSpecialTagsInHTML('h2', elements);
  return map((element) => {
    const value = getValue(element);
    return node('p', value);
  }, filteredHeadersList);
};

const wordsCount = (tagName, searchWord, html) => {
  const filteredHTML = getSpecialTagsInHTML(tagName, html);
  return reduce((element, acc) => {
    const value = getValue(element);
    const wordsInString = wc(searchWord, value);
    return acc + wordsInString;
  }, 0, filteredHTML);
};

const html1 = append(make(), node('h2', 'header1 lisp'));
const html2 = append(html1, node('p', 'content'));
const html3 = append(html2, node('h2', 'lisp header2 lisp'));
const html4 = append(html3, node('p', 'content lisp'));

console.log(htmlToString(extractHeaders(html4)));

console.log(wordsCount('h2', 'lisp', html4));
