const make = (name, damage) => (message) => {
  switch (message) {
    case 'getName':
      return name;
    case 'damage':
      return damage;
    default:
      return 'undefined method';
  }
};

export default make;
