// Help fn
let chalk = require("chalk");
function helpFn() {
  console.log(
    chalk.greenBright(`
    List of All the commands:
                bhuvi tree "directoryPath"
                bhuvi organize "directoryPath"
                bhuvi help
                `)
  );
}
module.exports = {
  helpKey: helpFn,
};
