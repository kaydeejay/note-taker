const fs = require('fs');
const notes = require('../db/db.json');

module.exports = function(app){
    app.get("/api/notes", (req,res) => {
        res.json(notes);
    });

    app.post('/api/notes', (req,res) => {
        const newNote = req.body;
        // console.log(JSON.stringify(newNote));
        return new Promise((resolve) => {
            let notePad = '';
            fs.readFile(__dirname + "/../db/db.json", (err,data) => {
                if (err) console.log(err);
                notePad = data;
            });
            resolve(notePad);
        }).then(function(result){
            console.log(result);
        });
    });
}