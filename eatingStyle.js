const chalk = require("chalk");
module.exports = class EatingStyle {
  constructor(name) {
    this.name = name;
    this.attendees = [];
  }
  printAttendees() {
    this.attendees.forEach((name) => console.log(name));
  }
  printAttendeesName() {
    this.attendees.forEach((name) =>
      console.log(chalk.yellow.bgRed.bold(name.name))
    );
  }
};
