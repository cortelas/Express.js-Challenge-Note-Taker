const router = require("express").Router();

//gets notes
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/notes.html"))
});

//gets index