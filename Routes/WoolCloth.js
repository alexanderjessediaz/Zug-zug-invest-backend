import express from 'express';
const router = express.Router()
import Nexus from 'nexushub-client'
const nexus = new Nexus({})

router.get("/", async function (req, res) {
    const data = await nexus.get("/wow-classic/v1/items/kromcrush-horde/2592")
    res.send({data})
})

// module.exports = router
export default router