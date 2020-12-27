export default class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable([...this.collection], [...this.operations, fn]);
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
