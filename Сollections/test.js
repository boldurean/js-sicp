export default class Enumerable {
  constructor(fn, operations) {
    this.fn = fn;
    this.operations = operations || [];
  }

  build(fn) {
    const newOps = [...this.operations, fn];
    return new Enumerable(this.fn, newOps);
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

  where(fn) {
    return this.build((coll) => coll.filter(fn));
  }

  toArray(length) {
    const dataColl = [...new Array(length)].map((item) => this.fn(item));
    return this.operations.reduce((coll, fn) => fn(coll), dataColl);
  }
}

const coll = new Enumerable(() => Math.floor(Math.random() * 1000));

coll.select((x) => x + 2).where((x) => x % 2 !== 0).toArray(10);

console.log(coll.select((x) => x + 2).where((x) => x % 2 !== 0).toArray(300));
