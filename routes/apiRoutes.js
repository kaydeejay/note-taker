module.exports = function(app){
    
    const notes = require('../db/db-controller.js');

    // Create a new Note
    app.post('/api/notes', notes.create);

    // Retrieve all Notes
    app.get('/api/notes', notes.findAll);

    // Delete a Note by Id
    app.delete('/api/notes/:id', notes.delete);
}