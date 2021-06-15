
import express from 'express';
import cors from 'cors';

import nexusQueries from './Routes/NexusQueries.js';

const app = express();

app.use(express.json({limit: "20mb", extended: true}));
app.use(express.urlencoded({limit: "20mb", extended: true}));

app.use(cors())

app.use("/NexusQueries", nexusQueries)

// app.post("/", async (req, res) => {  
//   const regionQuery = req.body.nQuery
  
//   if(!regionQuery) {
//       res.status(400).send('bad request')      
//   } else {
//     app.set('clientQuery', regionQuery)
//     res.status(200).send(`${regionQuery}: recieved and set`)
//   }
// })


// app.get('/', async(req,res) => {
//   if(app.settings.clientQuery === undefined) {
//     try {
//       app.get(app.settings.clientQuery)
//     } catch(error) {
//       console.error(error)
//     }
// } else {
//     try {
//       app.get(app.settings.clientQuery)
//       const nData = await nexus.get(app.settings.clientQuery).catch((error) => console.error(error))
//       res.status(200).send({nData})
//     } 
//     catch(error) {
//       console.error(error)
//     }
//   }
// })


const PORT = process.env.PORT || 5555
        
const server = app.listen(PORT, () => {
  const host = server.address().address
  const port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
app.get("/products/:id", function (req, res, next) {
  res.json({msg: "This is CORS-enabled for all origins!"})
})
app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80")
})




