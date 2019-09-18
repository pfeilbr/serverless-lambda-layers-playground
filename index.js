const fs = require("fs");
const handler = async event => {
  const fileContents = fs.readFileSync("/opt/msg.txt", "utf8");
  const directoryContents = fs.readdirSync("/opt");
  console.log({ directoryContents, fileContents });
};

module.exports = {
  handler
};
