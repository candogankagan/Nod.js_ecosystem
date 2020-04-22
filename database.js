const fs = require("fs");

const save = function (filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data));
};

const load = function (filename, data) {
  return JSON.parse(fs.readFileSync(filename));
};

module.exports = { save, load };
