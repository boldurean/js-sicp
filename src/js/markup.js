import {
  cons, car, cdr,
} from '@hexlet/pairs';
// eslint-disable-next-line
import {
  l, isEmpty, cons as consList,
} from '@hexlet/pairs-data';

export const make = () => l();

export const node = (a, b) => cons(a, b);

export const getName = (pair) => car(pair);

export const getValue = (pair) => cdr(pair);

export const append = (list, pair) => consList(pair, list);

export const toString = (list) => {
  const iter = (item, acc) => {
    if (isEmpty(item)) {
      return acc;
    }
    const nextElement = getValue(item);
    const currentElement = getName(item);
    return iter(nextElement, `<${getName(currentElement)}>${getValue(currentElement)}</${getName(currentElement)}>${acc}`);
  };
  return iter(list, '');
};

// teachers alternative toString:
/*  export const toString = (html) => {
  if (isEmpty(html)) {
    return '';
  }
  const element = getName(html);
  const tag = getName(element);
  const value = getValue(element);
  const restOfHtml = toString(tail(html));
  return `${restOfHtml}<${tag}>${value}</${tag}>`;

};  */

const dom1 = make();
const dom2 = append(dom1, node('h1', 'hello, world'));
// Еще раз
const dom3 = append(dom2, node('h2', 'header2'));
// Создаем новый тег
const tag = node('h3', 'header3');
// Добавляем созданный тег в html-список
const dom = append(dom3, tag);

// Преобразуем html-список в строчку
console.log(toString(dom));
