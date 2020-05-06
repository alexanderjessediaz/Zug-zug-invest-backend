const Nexus = require('nexushub-client');
const nexus = new Nexus({});


async function currentWowCurrentContent() {
     const res = await nexus.get('/wow-classic/v1/content/active')
     console.log(res)
}

currentWowCurrentContent()
// const express = require("express")


// const router = express.Router()

// router.get("/",(req, res) => {
//     res.json()
// })

// async function (request, response, next)
// const res = await nexus.get('/foo') 



// module.exports = router