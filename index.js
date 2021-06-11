
import express from 'express';
import cors from 'cors';
import Nexus from 'nexushub-client'

const nexus = new Nexus({})
const CLIENTBASEURL = "http://localhost:3001"


// routes
// import blackLotus from './Routes/BlackLotus.js';
import servers from './Routes/Servers.js';
import wowQuery from './Routes/WowQuery.js';





const app = express();

app.use(express.json({limit: "20mb", extended: true}));
app.use(express.urlencoded({limit: "20mb", extended: true}));

app.use(cors())



app.use("/Servers", servers)
// app.use("/BlackLotus", blackLotus)
// app.use("/WowQuery", wowQuery)

app.post("/", async (req, res, next) => {  
  const nexusQuery = req.body.nQuery
  if(!nexusQuery) {
      console.log("POST: no Query") 
      res.status(400)
      
  } else {
    app.set('clientQuery', nexusQuery)
    // app.get(nexusQuery)
    console.log("query string:" ,app.settings.clientQuery)
    next()
  }
})

console.log("query string set in app:", app.settings.clientQuery)
app.get('/', async(req,res) => {
  if(app.settings.clientQuery === undefined) {
    console.log("GET: no Query") 
    // res.status(400)
    
} else {
  console.log("nexusQuery:", app.settings.clientQuery)
  const data = await nexus.get(app.settings.clientQuery).catch((error) => console.error(error))
  res.send({data})
  console.log(data)
  }
})



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




