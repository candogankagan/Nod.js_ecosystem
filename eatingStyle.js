const chalk = require("chalk");
module.exports = class EatingStyle {
  constructor(name, attendees = []) {
    this.name = name;
    this.attendees = attendees;
  }
  static create({ name, attendees }) {
    return new EatingStyle(name, attendees);
  }

  printAttendees() {
    this.attendees.forEach((name) => console.log(name));
  }
  printAttendeesName() {
    this.attendees.forEach((name) =>
      console.log(chalk.yellow.bgBlack.bold(name.name))
    );
  }
};
