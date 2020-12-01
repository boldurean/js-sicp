import { map, toString as listToString, l } from '@hexlet/pairs-data';
import { getAttribute, getName, make } from './tags.js';

const mapping = {
  img: (t) => getAttribute('src', t),
  a: (t) => getAttribute('href', t),
  link: (t) => getAttribute('href', t),

};
const extract = (tags) => map((tag) => mapping[getName(tag)](tag), tags);

const sampleTags = l(
  make('a', { href: '/about', title: 'about company' }),
  make('img', { src: '/avatar.jpeg', alt: 'my avatar' }),
  make('link', { href: '/favicon.ico', 'data-test': 'custom attribute' }),
);

console.log(listToString(extract(sampleTags)));
