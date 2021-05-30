const router = require("express").Router();
const fs = require("fs");
const notes = require("../db/db.json")

//gets the notes saved in db
router.get("/api/notes", (req, res) => {
    fs.readFile("../db/db.json", (err, data) => {
        if (err) throw err;
        dbData = JSON.parse(data);
        res.send(dbData);
    })
});

//posts the notes to db
router.post("/api/notes", (req, res) => {
    const storedNotes = req.body;

    fs.readFile("../db/db.json", (err, data) => {
        if (err) throw err;
        dbData = JSON.parse(data);
        dbData.push(storedNotes);
        let num = 1;
        dbData.forEach((note, index) => {
            note.id = num;
            num++
            return dbData;
        });

        dataString = JSON.stringify(dbData);

        fs.writeFile("../db/db.json", dataString, (err, data) => {
            if (err) throw err;
        });
    });
});


module.exports = router;