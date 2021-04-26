const fs = require('fs');
const {
    findById,
    createNewNote,
    validateNotes
} = require('../lib/notes.js');
const { notes } = require("../db/db");
const { TestScheduler } = require('@jest/core');

jest.mock('fs');

test("creates a note", () => {
    const note = createNewNote(
        { title: "Joshua", id: "12345" },
        notes
    );

    expect(note.title).toBe("Joshua");
    expect(note.id).toBe("12345");
});

test("finds by id", () => {
    const startingNotes = [
        {
            id: "3",
            title: "Joshua",
            text: "Hello this is a note",
        },
        {
            id: "4",
            title: "Jordan",
            text: "This is a second note"
        }
    ];

    const result = findById("3", startingNotes);

    expect(result.title).toBe("Joshua");
});