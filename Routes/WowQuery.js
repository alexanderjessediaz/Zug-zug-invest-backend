import express from 'express';
const router = express.Router();
import Nexus from 'nexushub-client'
const nexus = new Nexus({})


router.all("/", async (req, res) => {  
    const nexusQuery = req.body.nQuery
    
    if(!nexusQuery) {
        res.status(400)
        return null
    } else {
    const data = await nexus.get(`${nexusQuery}`)
    res.send({data})
    }
  })

 
export default router