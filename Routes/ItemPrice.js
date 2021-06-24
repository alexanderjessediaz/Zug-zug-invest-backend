import express from 'express';
const router = express.Router();
import Nexus from 'nexushub-client';
const nexus = new Nexus({});

router.get('/', async function (req,res) {
    const userServer = req.query.server;
    const userFaction = req.query.faction;
    const userItem = req.query.item;
    const priceQuery = `/wow-classic/v1/items/${userServer}-${userFaction}/${userItem}/prices`;
    try {
        res.status(200).send(await nexus.get(priceQuery));
    } catch (error) {
        console.error("Error:", error);
    }
})


export default router