const fs = require("fs");

const fileTestCasePath = process.argv[2];
const fileTestTargetPath = process.argv[3];
const fileCopyTestTargetPath = process.argv[4];

const fileTestCaseContent = fs.readFileSync(fileTestCasePath, "utf8");

const fileTestTargetContent = fs
  .readFileSync(fileCopyTestTargetPath, "utf8")
  .replace(/%__AFL_DATA__%/, fileTestCaseContent);

fs.writeFileSync(fileTestTargetPath, fileTestTargetContent);
