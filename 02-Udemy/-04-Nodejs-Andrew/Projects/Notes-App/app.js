const fs = require("fs");

fs.writeFileSync("notes.txt", "My name is Salah.");

// Challenge
fs.appendFileSync("notes.txt", "Iam 18 years old");
