const express = require("express")
const Nexus = require('nexushub-client')
const nexus = new Nexus({
  user_key,
  user_secret
})
const res = await nexus.get('/foo') 

const router = express.Router()

// const nexus = [{
//     item: "black lotus"
// },{
//     item: "arcanite crystal"
// }]

router.get("/",(request, response) => {
    response.json({res})
})

module.exports = router