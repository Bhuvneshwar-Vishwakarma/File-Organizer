let fs = require("fs");
let path = require("path");
let chalk = require("chalk");
function treeFn(dirPath) {
  // let destPath;
  if (dirPath == undefined) {
    treeHelper(process.cwd(), "");
    return;
  } else {
    let doesExist = fs.existsSync(dirPath);
    if (doesExist) {
      treeHelper(dirPath, "");
    } else {
      console.log(chalk.greenBright("Kindly enter the correct path"));
      return;
    }
  }
}

function treeHelper(dirPath, indent) {
  // is file or folder
  let isFile = fs.lstatSync(dirPath).isFile();
  if (isFile == true) {
    let fileName = path.basename(dirPath);
    console.log(chalk.greenBright(indent + "├──" + fileName));
  } else {
    let dirName = path.basename(dirPath);
    console.log(chalk.blueBright(indent + "└──" + dirName));
    let childrens = fs.readdirSync(dirPath);
    for (let i = 0; i < childrens.length; i++) {
      let childPath = path.join(dirPath, childrens[i]);
      treeHelper(childPath, indent + "\t");
    }
  }
}
module.exports = {
  treeKey: treeFn,
};
