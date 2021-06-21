import express from 'express';
const router = express.Router();
import Nexus from 'nexushub-client';
const nexus = new Nexus({});

router.get('/', async function (req,res) {
    const userServer = req.query.server
    const userFaction = req.query.faction
    const priceQuery = `/wow-classic/v1/items/${userServer}-${userFaction}/21884/prices`
    
    // await nexus.get(priceQuery)
    res.send(await nexus.get(priceQuery))
    // if(userServer === undefined || userFaction === undefined){
    //     try {
    //         res.status(400).send('bad request')
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // } else {
    //     try {
    //         await nexus.get(priceQuery)
    //         res.send({res})
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // }
})


export default router