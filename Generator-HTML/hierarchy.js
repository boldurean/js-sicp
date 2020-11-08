import {
  append, children, hasChildren, is, make, node,
} from '@hexlet/html-tags';
import {
  head, isEmpty, l, tail,
} from '@hexlet/pairs-data';

const select = (tagName, html) => {
  if (isEmpty(html)) {
    return l();
  }
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }
    const currentNode = head(items);
    const restNodes = tail(items);
    const acc2 = hasChildren(currentNode) ? iter(children(currentNode), acc) : acc;
    const newAcc = is(tagName, currentNode) ? append(acc2, currentNode) : acc2;
    return iter(restNodes, newAcc);
  };
  return iter(html, l());
};

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

const children1 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom4 = append(dom3, node('ul', children1));
const children2 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom5 = append(dom4, node('ol', children2));
const dom6 = append(dom5, node('p', 'is a functional language'));
const children3 = l(node('li', 'item'));
const dom7 = append(dom6, node('ul', children3));
const dom8 = append(dom7, node('div', l(node('p', 'text'))));
const dom9 = append(dom8, node('div', l(node('div', l(node('p', 'text'))))));

const dom10 = append(dom9, node('h1', 'prolog'));
const dom = append(dom10, node('p', 'is about logic'));

console.log(select('li', dom));
