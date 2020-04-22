module.exports = class Animal {
  constructor(name, lifespan, fly) {
    this.name = name;
    this.lifespan = lifespan;
    this.isFlying = fly;
  }
  eatingStyle(style) {
    this.style = style.name;
    style.attendees.push(this);
  }
};
