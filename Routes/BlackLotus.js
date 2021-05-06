import express from 'express';
const router = express.Router()
import Nexus from 'nexushub-client'
const nexus = new Nexus({})

router.get("/", async function (req, res) {
    const data = await nexus.get("/wow-classic/v1/items/kromcrush-horde/13468")
    const BLPriceData = await nexus.get("/wow-classic/v1/items/kromcrush-horde/13468/prices")
    res.send({data, BLPriceData})
})

// module.exports = router
export default router