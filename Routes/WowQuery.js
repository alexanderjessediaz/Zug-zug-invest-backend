import express from 'express';
const router = express.Router();
import Nexus from 'nexushub-client'
const nexus = new Nexus({})



router.get('/', async(req,res) => {
    const data = await nexus.get(`${nexusQuery}`).catch((error) => console.error(error))
    res.send({data})
    console.log(data)
    
})

 
export default router