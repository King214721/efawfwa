const { readFileSync, writeFileSync } = require("fs");

function checkConfig() {
  const configFile = readFileSync("./config.json", { encoding: "utf-8", flag: "a+" });
  if (!configFile.length) {
    writeFileSync(
      "./config.json",
      JSON.stringify({ TOKEN: "MTE3MTQyODczMDQ5NzkzNzQ1OQ.GomoNG.ea0cBTpGy-kASvGsGLXGhYT0lnWOrVJyZQAguA" }, undefined, 2)
    );

  }
  return true;
}

module.exports = {
  checkConfig,
};
