const { Router } = require("express")
const { getBooks, getBook } = require("../controllers/book")

const router = Router()

router.get("/", getBooks)

router.get("/:id", getBook)

router.post("/", (req, res) => {
    res.send("POST method\n")
})

module.exports = router