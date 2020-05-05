const Nexus = require('nexushub-client')

const express = require("express")
const app = express()
const nexus = require("./routes/nexus")


app.use("/nexus", nexus)
const PORT = process.env.PORT || 9000

app.get("/", (request, response) => {
    response.json({message: "okay"})
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})



