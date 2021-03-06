const router = require("express").Router();
const path = require("path");

//gets notes
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/notes.html"))
});

//gets index
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/index.html"))
});

module.exports = router;