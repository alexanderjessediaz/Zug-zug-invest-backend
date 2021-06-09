import express from 'express';
const router = express.Router();
import Nexus from 'nexushub-client'
const nexus = new Nexus({})
// import { getFactionQuery, getServerQuery } from '../Controllers/QueryController.js'

router.all("/", async (req, res) => {  
    const nexusQuery = req.body.nQuery
    
    if( !nexusQuery) {
        res.status(400)
        return null
    } else {
    const data = await nexus.get(`/wow-classic/v1/items/${nexusQuery}/13468`)
    res.send({data})
    }
  })



//   router.get("/", async function (req, res) {
    //   const data = await nexus.get(`/wow-classic/v1/items/${selectedServer}-${selectedFaction}/13468`)
    //   const hardCodedData = await nexus.get("/wow-classic/v1/items/kromcrush-horde/13468/prices")
    //   res.send({ hardCodedData})
//   })

 
export default router