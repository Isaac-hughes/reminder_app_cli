const yargs = require("yargs")
const { addNote, loadNotes } = require("../utils/notes")

const command = process.argv[2];

if (command == "add") {
    console.log("adding a note");
    addNote(yargs.argv.note);
}else if (command == "remove"){
    console.log("Removing a note")
}else if (command == "load"){
    console.log("Loading all notes")
    loadNotes()
}else {
    console.log("command not recognised");
};