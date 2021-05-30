const router = require("express").Router();
const fs = require("fs");
const notes = require("../db/db")

//gets the notes saved in db
router.get("/api/notes", (req, res) => {
    res.json(notes);
});

//posts the notes to db
router.post("/api/notes", (req, res) => {
    const storedNotes = req.body;

    fs.readFile("../db/db", (err, data) => {
        dbData = JSON.parse(data);
        dbData.push(storedNotes);
        let num = 1;
        dbData.forEach((note, index) => {
            note.id = num;
            num++
            return dbData;
        });
        dataString = JSON.stringify(dbData);
    });
});


module.exports = router;