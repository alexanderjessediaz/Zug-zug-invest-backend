import express from 'express';
const router = express.Router();
import Nexus from 'nexushub-client'
const nexus = new Nexus({})

// router.get('/', async(req,res) => {
//     const searchObj = await nexus.get(`/wow-classic/v1/search/suggestions?query=${}`).catch((error) => console.error(error))
//     res.send({searchObj})
// })

export default router