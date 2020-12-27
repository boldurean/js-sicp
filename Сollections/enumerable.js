export default class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  select(fn) {
    return this.build((coll) => coll.map(fn));
  }

  orderBy(fn, sortType = 'asc') {
    const compareResult = sortType !== 'desc' ? 1 : -1;
    const comparator = (a, b) => {
      const a1 = fn(a);
      const b1 = fn(b);

      if (a1 > b1) {
        return compareResult;
      }
      if (a1 < b1) {
        return -compareResult;
      }
      return 0;
    };
    return this.build((coll) => [...coll].sort(comparator));
  }

  where(...predicates) {
    const fns = predicates.map((predicate) => {
      if (typeof predicate === 'function') {
        return (coll) => coll.filter(predicate);
      }

      const keys = Object.keys(predicate);
      return (coll) => coll.filter(
        (element) => (keys.every((key) => predicate[key] === element[key])),
      );
    });
    return this.build(fns);
  }

  getProcessedCollection() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
    }

    return this.memo;
  }

  get length() {
    return this.getProcessedCollection().length;
  }

  toArray() {
    return this.getProcessedCollection().slice();
  }
}

const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];
const coll = new Enumerable(cars);

const result = coll
  .where((car) => car.brand === 'kia')
  .where((car) => car.year > 2011);

const result3 = coll.where({ brand: 'kia', model: 'sorento' });

console.log(result.toArray());
console.log(result3.toArray());
