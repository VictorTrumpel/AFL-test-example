const { uuid } = require("uuidv4");
const path = require("path");
const fs = require("fs");

const directoryPath = "__test__";

if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath);
}

const MAX_TEST_CASE_COUNT = 10;

let count = 0;

module.exports.fuzz = function (data /*: Buffer */) {
  if (count === MAX_TEST_CASE_COUNT) {
    process.exit(0);
  }

  const fuzzerData = data.toString();

  fs.writeFileSync(path.join(directoryPath, uuid()), fuzzerData);

  count += 1;
};
