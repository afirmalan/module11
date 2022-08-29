const router = require("express").Router()
const { json } = require("body-parser")
const fs = require("fs")
const db = require("../db/db.json")

router.get("/api/notes", (req, res) => {
    res.json(db)
})


router.post("/api/notes", (req, res) => {
    console.log(req.body)
})

router.delete("/api/notes/:id", (req, res) => {
    res.json(db).remove({
        id: req.params.id
    })

})


module.exports = router

