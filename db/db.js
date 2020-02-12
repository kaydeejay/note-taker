const notes = [];

module.exports = {
    create: (req,res) => {
        const newNote = req.body;
        newNote.id = Object.keys(notes).length + 1;
        notes.push(newNote);
        // console.log(notes);
        // re-assign id's based on position in array
        // notes.forEach(el => console.log(el.id));
        for (let i = 0; i < notes.length; i++) {
            // console.log(notes[i].id);
            notes[i].id = i;
        }
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

//function graveyard

// create: (req,res) => {
//     const newNote = req.body;
//     newNote.id = Object.keys(notes).length + 1;
//     newNote.getId = () => {return this};
//     notes[`note${newNote.getId}`] = newNote;
//     //find the largest id in notes
//     for (note in notes) {
//         let thisId = notes[note].getId();
//         console.log(thisId);
//     }
//     console.log(`Notes after post:\n${JSON.stringify(notes)}`);
//     res.end(`${JSON.stringify(newNote)}`);
// },