const { Router } = require(ëxpress)
const router = new Router()

router.get("/", (req, res) => {
    res.send("Olá, mundo da Alura do Brasil!")
})

module.exports