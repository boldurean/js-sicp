export default class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    const selected = this.collection.map(fn);
    return new Enumerable(selected);
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
    const ordered = [...this.collection].sort(comparator);
    return new Enumerable(ordered);
  }

  where(fn) {
    const filtered = this.collection.filter(fn);
    return new Enumerable(filtered);
  }

  toArray() {
    return this.collection.slice();
  }
}
