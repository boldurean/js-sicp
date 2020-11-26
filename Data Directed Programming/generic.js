import { cons, car, cdr } from '@hexlet/pairs';
import {
  cons as consList, isEmpty, l, tail, head,
} from '@hexlet/pairs-data';
import { attach, typeTag, contents } from '@hexlet/tagged-types';

let methods = l();

export const getMethod = (obj, methodName) => {
  const iter = (items) => {
    if (isEmpty(methods)) {
      return null;
    }
    const method = head(items);
    if (typeTag(method) === typeTag(obj)) {
      if (car(contents(obj) === methodName)) {
        return cdr(contents(method));
      }
    }
    return iter(tail(items));
  };
  return iter(methods);
};

export const definer = (type) => (methodName, f) => {
  methods = consList(attach(type, cons(methodName, f)), methods);
};
