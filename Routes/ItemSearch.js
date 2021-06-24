import express from 'express';
const router = express.Router();
import Nexus from 'nexushub-client';
const nexus = new Nexus({});

router.get('/', async function (req,res) {
    const userItemQuery = req.query.itemSearch
    const searchQuery = `/wow-classic/v1/search?query=${userItemQuery}`;
    try {
        res.status(200).send(await nexus.get(searchQuery));
    } catch (error) {
        console.error("Error:", error);
    }
})

export default router
