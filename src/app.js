const yargs = require("yargs")
const { addNote, listNotes } = require("../utils/notes")

const command = process.argv[2];

if (command == "add") {
    console.log("adding a note");
    addNote(yargs.argv.note);   
}else if (command == "remove"){
    console.log("Removing a note")
}else if (command == "list"){
    console.log("Loading all notes")
    listNotes();
}else {
    console.log("command not recognised");
};