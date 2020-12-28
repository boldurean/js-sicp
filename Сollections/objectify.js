const cars = [
  { brand: 'bmw', model: 'm3', year: 2013 },
  { brand: 'opel', model: 'astra', year: 2014 },
  { brand: 'hyundai', model: 'accent', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2013 },
  { brand: 'kia', model: 'sportage', year: 2015 },
];

const objectify = (coll, fn) => coll
  .reduce((acc, element) => {
    const value = fn(element);
    const [obj] = coll.filter((item) => fn(item) === value);
    return { ...acc, [value]: obj };
  }, {});

// alternative

const objectify2 = (coll, fn) => coll
  .reduce((acc, element) => ({ ...acc, [fn(element)]: element }), {});

console.log(objectify(cars, (car) => car.model));
console.log(objectify2(cars, (car) => car.model));
