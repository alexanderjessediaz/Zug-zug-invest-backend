import express from 'express';
const router = express.Router();
// import Nexus from 'nexushub-client'
// const nexus = new Nexus({})
const CLIENTBASEURL = "http://localhost:3001"

router.get(CLIENTBASEURL, async function (req,res) {
    console.log(res.body.sQuery)
    const selectedServer = res.body.sQuery
}) 

export default router