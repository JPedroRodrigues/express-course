const express = require("express")
const bookRouter = require("./routes/book")
 
const app = express()

const port = 8000

app.use("/books", bookRouter)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})