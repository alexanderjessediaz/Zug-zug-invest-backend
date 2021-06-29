import express from 'express';
const router = express.Router();
import Nexus from 'nexushub-client';
const nexus = new Nexus({});

router.get('/', async function (req,res) {
    const newsQuery = '/wow-classic/v1/news?query=4';
    try {
        res.status(200).send(await nexus.get(newsQuery));
    } catch (error) {
        console.error("Error:", error);
    }
})

export default router