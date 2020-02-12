const notes = {};

module.exports = {
    create: (req,res) => {
        const newNote = req.body;
        newNote.id = Object.keys(notes).length + 1;
        newNote.getId = () => {return this.id};
        notes[`note${newNote.id}`] = newNote;
        console.log(`Notes after post:\n${JSON.stringify(notes)}`);
        res.end(`${JSON.stringify(newNote)}`);
    },
    findAll: (req,res) => {
        console.log(`All Notes:\n${JSON.stringify(notes)}`);
        res.end(`${JSON.stringify(notes)}`);
    },
    delete: (req,res) => {
        const deleteNote = notes[`note${req.params.id}`];
        delete notes[`note${req.params.id}`];
        console.log(`Deleted Note\n${JSON.stringify(deleteNote)}`);
        res.end(`Deleted Note\n${JSON.stringify(deleteNote)}\nNotes Remaining:\n${JSON.stringify(notes)}`);
    }
};