const Animal = require("./animal.js");
const EatingStyle = require("./eatingStyle.js");
const Chalk = require("chalk");
const Database = require("./database");

lion = new Animal("Lion", 8, false);
eagle = new Animal("Eagle", 30, true);
buffalo = new Animal("Buffalo", 11, false);
bat = new Animal("Bat", 30, true);

carnivorous = new EatingStyle("carnivorous");
herbivorous = new EatingStyle("herbivorous");

lion.eatingStyle(carnivorous);
eagle.eatingStyle(carnivorous);
buffalo.eatingStyle(herbivorous);
bat.eatingStyle(herbivorous);
bat.eatingStyle(carnivorous);

carnivorous.printAttendees();
herbivorous.printAttendeesName();
Database.save("data.json", carnivorous);
Database.save("animal.json", bat);
const loadedFile = Database.load("data.json");
console.log(loadedFile.name);
