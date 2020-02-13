const notes = [];

module.exports = {
    create: (req,res) => {
        const newNote = req.body;
        newNote.id = Object.keys(notes).length + 1;
        notes.push(newNote);
        // auto-increment ids
        for (let i = 0; i < notes.length; i++) {
            notes[i].id = i;
        }
        console.log(notes);
        res.end(JSON.stringify(notes));
    },
    findAll: (req,res) => {
        console.log(`All Notes:\n${JSON.stringify(notes)}`);
        res.end(JSON.stringify(notes));
    },
    delete: (req,res) => {
        const deleteNote = notes[req.params.id];
        notes.splice(req.params.id, 1);
        // re-assign the id's for the notes
        for (let i = 0; i < notes.length; i++) {
            notes[i].id = i;
        }
        console.log(`Deleted Note\n${JSON.stringify(deleteNote)}`);
        res.end(`Deleted Note\n${JSON.stringify(deleteNote)}\nNotes Remaining:\n${JSON.stringify(notes)}`);
    }
};