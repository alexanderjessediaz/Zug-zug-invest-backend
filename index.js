const Nexus = require('nexushub-client')
// const app = express()

const nexus = new Nexus({})


async function nexusAPICall() {
    const res = await nexus.get('/foo')
    console.log(res)
}


const PORT = process.env.PORT || 9000
nexusAPICall()
  
// nexus.get("/", (request, response) => {
//     response.json({message: "okay"})
// })

// app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`)
// })

// const express = require("express")
// const nexus = require("./routes/nexus")


// app.use("/nexus", nexus)





