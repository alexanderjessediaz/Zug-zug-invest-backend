
import express from 'express';
import cors from 'cors';
import Nexus from 'nexushub-client';

const nexus = new Nexus({});

import servers from './Routes/Servers.js';
import itemPrice from './Routes/ItemPrice.js'

const app = express();

app.use(express.json({limit: "20mb", extended: true}));
app.use(express.urlencoded({limit: "20mb", extended: true}));

app.use(cors());

app.use("/Servers", servers);
app.use("/ItemPrice", itemPrice)

// app.post("/", async (req, res) => {  
//   const nexusQuery = req.body.nQuery;
//   if(!nexusQuery) {
//       console.log("POST: no Query");
//       res.status(400).send('bad request')
      
//   } else {
//     app.set('clientQuery', nexusQuery);
//     res.status(200).send(`${nexusQuery}: recieved and set`);
//     console.log("Current Client Query:" , app.settings.clientQuery);
//   }
// });


// app.get('/', async(req,res) => {
  // if(app.settings.clientQuery === undefined) {
  //   // console.log("GET: no Query", req.body);
  //   try {
     
//       app.get(app.settings.clientQuery);
//     } catch(error) {
//       console.error(error);
//     }
// } else {
//     try {
//       app.get(app.settings.clientQuery);
//     } 
//     catch(error) {
//       console.error(error);
//     }
//       const nData = await nexus.get(app.settings.clientQuery).catch((error) => console.error(error));
//       res.send({nData});
//   }
// });



const PORT = process.env.PORT || 5555;
        
const server = app.listen(PORT, () => {
  const host = server.address().address
  const port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
});
app.get("/products/:id", function (req, res, next) {
  res.json({msg: "This is CORS-enabled for all origins!"})
});
app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80")
});




