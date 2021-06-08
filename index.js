
import express from 'express';
import cors from 'cors';
import Nexus from 'nexushub-client'

const nexus = new Nexus({})
const CLIENTBASEURL = "http://localhost:3001"


// routes
// import blackLotus from './Routes/BlackLotus.js';
import servers from './Routes/Servers.js';
import wowQuery from './Routes/WowQuery.js';
// import factionQuery from './Routes/FactionQuery.js';
// import serverQuery from './Routes/ServerQuery.js';


const app = express();

app.use(express.json({limit: "20mb", extended: true}));
app.use(express.urlencoded({limit: "20mb", extended: true}));

app.use(cors())


app.use("/Servers", servers)
// app.use("/BlackLotus", blackLotus)
app.use("/WowQuery", wowQuery)
// app.use("/FactionQuery", factionQuery)


// app.use("/ServerQuery", serverQuery)

// app.post("/", (req, res) => {
  
//   const selectedFaction = req.body.fQuery
//   app.set("selectedFaction" ,selectedFaction)
// })

// app.get("/", async function (req, res) {
//   const nexusQuery = await nexus.get(`/wow-classic/v1/items/${selectedServer}-${selectedFaction}/13468/prices`);
//   res.send({nexusQuery});
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




