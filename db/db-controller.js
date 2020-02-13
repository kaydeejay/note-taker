const fs = require('fs');

const autoInc = (arr) => {
    for (let i = 0; i < arr.length; i++){
        arr[i].id = i;
    }
};

module.exports = {
    create: (req,res) => {
        const notes = JSON.parse(fs.readFileSync(__dirname+'/db.json', 'utf8'));
        const newNote = req.body;
        newNote.id = Object.keys(notes).length + 1;
        notes.push(newNote);
        // auto-increment ids
        autoInc(notes);
        fs.writeFileSync(__dirname+'/db.json', JSON.stringify(notes), (err) => {
            if (err) throw err;
        });
        res.end(JSON.stringify(notes));
    },
    findAll: (req,res) => {
        const notes = fs.readFileSync(__dirname+'/db.json', 'utf8');
        console.log(`All Notes:\n${notes}`);
        res.end(notes);
    },
    delete: (req,res) => {
        const notes = JSON.parse(fs.readFileSync(__dirname+'/db.json', 'utf8'));
        const deleteNote = notes[req.params.id];
        notes.splice(req.params.id, 1);
        // re-assign the id's for the notes
        autoInc(notes);
        console.log(`Deleted Note\n${JSON.stringify(deleteNote)}`);
        fs.writeFileSync(__dirname+'/db.json', JSON.stringify(notes), (err) => {
            if (err) throw err;
        });
        res.end(`Deleted Note\n${JSON.stringify(deleteNote)}\nNotes Remaining:\n${JSON.stringify(notes)}`);
    },
};