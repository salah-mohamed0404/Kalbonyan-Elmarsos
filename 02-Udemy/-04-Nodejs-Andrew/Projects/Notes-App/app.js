const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  descripe: "Add new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    }, // Challenge to implement the body
    body: {
      describe: "Note description",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  descripe: "Remove note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// Challenge: implement two commands
// Create list command
yargs.command({
  command: "list",
  descripe: "list notes",
  handler: function () {
    console.log("Listing notes");
  },
});
// Create read command
yargs.command({
  command: "read",
  descripe: "read notes",
  handler: function () {
    console.log("Reading notes");
  },
});

yargs.parse();
