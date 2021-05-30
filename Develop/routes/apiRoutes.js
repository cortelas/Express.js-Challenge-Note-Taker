const router = require("express").Router();
const fs = require("fs");
const notes = require("../db/db")

//gets the notes saved in db
router.get("/api/notes", (req, res) => {
    res.json(notes);
});

//posts the notes to db
router.post("/api/notes", (req, res) => {
    res.json(notes);
});


module.exports = router;