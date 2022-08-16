const chalk = require("chalk");
const getNotes = require("./notes.js");

console.log(chalk.bold.green("Success"));

const notes = getNotes();
console.log(notes);

console.log(process.argv);
