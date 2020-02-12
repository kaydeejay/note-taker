module.exports = function(app){
    
    const notes = require('../db/db.js');

    // Create a new Note
    app.post('/api/notes', notes.create);

    // Retrieve all Notes
    app.get('/api/notes', notes.findAll);

    // // ======== GET routes ========
    // app.get("/api/notes", (req,res) => {
    //     res.json(notes);
    // });

    // // ======== POST routes ========
    // app.post('/api/notes', (req,res) => {
    //     console.log(JSON.stringify(req.body));
    // });
}