const fs = require("fs");
const path = require("path");

// function filterByQuery(query, notesArray) {
//     let personalityTraitsArray = [];
//     //save animalArray as filteredResults
//     let filteredResults = notesArray;
//     if (query.personalityTraits) {
//         // Save personalityTraits as a dedicated array
//         // If personalityTraits is a string, place it into a new array and save.
//         if (typeof query.personalityTraits ==='string') {
//             personalityTraitsArray = [query.personalityTraits];
//         } else {
//             personalityTraitsArray = query.personalityTraits;
//         }

//         // Loop through each trait in the personalityTraits array:
//         personalityTraitsArray.forEach(trait => {
//             // Check the trait agaist each animal in the filteredResults array
//             filteredResults = filteredResults.filter(
//                 animal => animal.personalityTraits.indexOf(trait) !== -1
//             );
//         });
//     }
//     if (query.diet) {
//         filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
//     }
//     if (query.species) {
//         filteredResults = filteredResults.filter(animal => animal.species === query.species);
//     }
//     if (query.name) {
//         filteredResults = filteredResults.filter(animal => animal.name === query.name);
//     }
//     return filteredResults;
// };

function findById(id, notesArray) {
    const result = notesArray.filter(animal => animal.id === id)[0];
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
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    return true;
};

module.exports = {
    // filterByQuery,
    findById,
    createNewNote,
    validateNotes
};