const notes = require('../db/db.js');

module.exports = function(app){

    // ======== GET routes ========
    app.get("/api/notes", (req,res) => {
        res.json(notes);
    });

    // ======== POST routes ========
    app.post('/api/notes', (req,res) => {
        const newNote = req.body;
        newNote.id = notes.length;
        notes.push(newNote);
        console.log(notes);
        res.json(notes);
    });
}