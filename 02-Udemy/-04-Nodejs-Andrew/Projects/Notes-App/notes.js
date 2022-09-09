const fs = require("fs");
const chalk = require("chalk");

const loadNotes = function () {
  try {
    return JSON.parse(fs.readFileSync("notes.json").toString());
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) =>
  fs.writeFileSync("notes.json", JSON.stringify(notes));

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicate = notes.find((note) => note.title === title);

  if (duplicate) {
    console.log(chalk.red("New title taken!"));
    return;
  }

  notes.push({
    title,
    body,
  });

  saveNotes(notes);
  console.log(chalk.green("New note added!"));
};

// Challenge implement remove function
const removeNote = function (title) {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);

  if (filteredNotes.length === notes.length) {
    console.log(chalk.red("Title not even added"));
    return;
  }

  saveNotes(filteredNotes);
  console.log(chalk.green(`${title}'s note has been removed`));
};

// Challenge
const listNotes = function () {
  console.log(chalk.magentaBright("Your notes"));
  loadNotes().forEach((note, i) => console.log(`${i + 1} - ${note.title}`));
};

// Challenge
const readNotes = function (title) {
  const demanNote = loadNotes().find((note) => note.title === title);

  if (!demanNote) {
    console.log(
      chalk.redBright(
        "Error: can't find the note, Try again with the currect title"
      )
    );
    return;
  }

  console.log(`Title: ${demanNote.title}, body: ${demanNote.body}`);
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNotes,
};
