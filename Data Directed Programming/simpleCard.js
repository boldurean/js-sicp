export default class SimpleCard {
  constructor(name, damagePoints) {
    this.name = name;
    this.damagePoints = damagePoints;
  }

  damage() {
    return this.damagePoints;
  }
}
