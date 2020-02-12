const notes = {
    note1: {
        title:"My First Note!",
        text:"It's so small.",
        id:1
    },
    note2: {
        title:"That First Note",
        text:"Wasn't it great?",
        id:2
    },
    note3: {
        title:"Note III",
        text:"Should I use Roman Numerals?",
        id:3
    },
    note4: {
        title:"Nah",
        text:"Nevermind.",
        id:4
    }
};

module.exports = {
    create: (req,res) => {
        const newNote = req.body;
        notes[`note${newNote.id}`] = newNote;
        console.log(`Notes after post:\n${JSON.stringify(notes)}`);
        res.end(`${JSON.stringify(newNote)}`);
    },
    findAll: (req,res) => {
        console.log(`All Notes:\n${JSON.stringify(notes)}`);
        res.end(`${JSON.stringify(notes)}`);
    }
};