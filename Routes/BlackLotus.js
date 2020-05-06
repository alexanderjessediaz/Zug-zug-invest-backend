const express = require("express")
const router = express.Router()
const Nexus = require('nexushub-client');
const nexus = new Nexus({});

router.get("/", async function (req, res) {
    const data = await nexus.get("/wow-classic/v1/items/kromcrush-horde/13468")
    res.send({data})
})

module.exports = router