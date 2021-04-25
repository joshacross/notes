const router = require('express').Router();

const { 
    filterByQuery,
    findById,
    createNewNote
} = require('../../lib/notes');

const { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    };
    res.json(results);
  });

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
    res.send(404);
    };
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(notes);

});

// router.delete('/notes/:id', (req, res) => {
//     const noteIndex = findById(req.params.id, notes);

//     if (noteIndex === -1) return res.status(404).json({})

//     notes.splice(noteIndex, 1)
//     res.json(notes)
// });

module.exports = router;