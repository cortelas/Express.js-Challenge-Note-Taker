const router = require("express").Router();
const fs = require("fs");
const notes = require("../db/db")

router.get("/api/notes", (req, res) => {
    res.json(notes);
});


module.exports = router;