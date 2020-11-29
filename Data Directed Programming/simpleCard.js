const make = (name, damage) => ({
  name,
  // eslint-disable-next-line no-unused-vars
  damage: (health) => damage,
});

export default make;
