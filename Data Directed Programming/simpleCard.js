import { cons, car, cdr } from '@hexlet/pairs';
import { attach, contents } from '@hexlet/tagged-types';

export const make = (name, damage) => attach('SimpleCard', cons(name, damage));

export const getName = (self) => car(contents(self));

export const damage = (self) => cdr(contents(self));
