const notes = require('../db/db.json');

module.exports = function(app){
    app.get("/api/notes", (req,res) => {
        res.json(notes);
    });
}