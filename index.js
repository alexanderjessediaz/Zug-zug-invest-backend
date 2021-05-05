
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './Routes/Users.js/index.js'

// routes
import blackLotus from './Routes/BlackLotus';
import mooncloth from './Routes/MoonCloth.js';
import arcaniteBar from './Routes/ArcaniteBar';
import woolcloth from './Routes/WoolCloth';


const app = express();
app.use(express.json({limit: "20mb", extended: true}));
app.use(express.urlencoded({limit: "20mb", extended: true}));

app.use(cors())

app.use('/user', userRoutes);

app.use("/BlackLotus", blackLotus);
app.use("/MoonCloth", mooncloth);
app.use("/ArcaniteBar", arcaniteBar);
app.use("/WoolCloth", woolcloth);

const PORT = process.env.PORT || 5555
        
// Mongoose User DB
const CONNECTION_URL = "mongodb+srv://AJDiaz:hurm!CUSM*scun2ghul@zugzug.qikls.mongodb.net/zug-zug-backend?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => app.listen(PORT, () =>
console.log(`Connection is established and running on port:${PORT}`)
)).catch((err)=> console.log(err.message));

mongoose.set("useFindAndModify", false);

app.get("/products/:id", function (req, res, next) {
  res.json({msg: "This is CORS-enabled for all origins!"})
})
app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80")
})


var server = app.listen(PORT, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})

