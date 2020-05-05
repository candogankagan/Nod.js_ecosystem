const Animal = require("./animal.js");
const EatingStyle = require("./eatingStyle.js");
const Database = require("./database");
// const eating = EatingStyle.create(loadedFile);

Database.load("data.json", (err, loadedFile) => {
  console.log("ada");

  console.log(loadedFile.name);
  console.log(loadedFile.attendees);
  const eating = EatingStyle.create(loadedFile);
  eating.printAttendeesName();
});
