const fs = require("fs");
const path = require("path");

function filterByQuery(query, notesArray) {
//     //save animalArray as filteredResults
    let filteredResults = notesArray;

    if (query.title) {
        filteredResults = filteredResults.filter(note => note.title === query.title);
    }
    if (query.text) {
        filteredResults = filteredResults.filter(note => note.text === query.text);
    }
    return filteredResults;
};

function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};

// function to handle taking the data from req.body and adding to db.json file
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    // retun finished code to post route for response
    return note;
};

function validateNotes(note) {
    if (!note.title || isNaN(note.title === true)) {
        return false;
    };

    return true;
};

module.exports = {
    filterByQuery,
    findById,
    createNewNote,
    validateNotes
};