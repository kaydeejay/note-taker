const notes = require('../db/db.js');

module.exports = function(app){
    app.get("/api/notes", (req,res) => {
        res.json(notes);
    });

    app.post('/api/notes', (req,res) => {
        const newNote = req.body;
        notes.push(newNote);
        console.log(notes);
    });
}