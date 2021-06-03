
import express from 'express';
import cors from 'cors';


// routes
// import blackLotus from './Routes/BlackLotus.js';
// import mooncloth from './Routes/MoonCloth.js';
// import arcaniteBar from './Routes/ArcaniteBar.js';
// import woolcloth from './Routes/WoolCloth.js';
import servers from './Routes/Servers.js';

const app = express();
app.use(express.json({limit: "20mb", extended: true}));
app.use(express.urlencoded({limit: "20mb", extended: true}));

app.use(cors())


// app.use("/BlackLotus", blackLotus);
// app.use("/MoonCloth", mooncloth);
// app.use("/ArcaniteBar", arcaniteBar);
// app.use("/WoolCloth", woolcloth);
app.use("/Servers", servers)

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




