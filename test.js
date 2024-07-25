const fs = require("fs")

const currentData = JSON.parse(fs.readFileSync("database/db.json"))
const newBook = { id: 3, name: "Giguens Plumbens" }

fs.writeFileSync("database/db.json", JSON.stringify([...currentData, newBook]))

console.log(JSON.parse(fs.readFileSync("database/db.json")))
