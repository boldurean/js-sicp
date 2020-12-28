const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];

const getCarsCountByYear = (coll) => coll
  .reduce((acc, car) => {
    const { year } = car;
    const counter = (acc[year] ?? 0) + 1;
    return { ...acc, [year]: counter };
  }, {});

console.log(getCarsCountByYear(cars));
