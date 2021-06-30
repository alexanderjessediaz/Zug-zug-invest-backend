import express from 'express';
import cors from 'cors';
import servers from './Routes/Servers.js';
import itemPrice from './Routes/ItemPrice.js';
import itemSearch from './Routes/ItemSearch.js';
import newsQuery from './Routes/News.js';

const app = express();

app.use(express.json({limit: "20mb", extended: true}));
app.use(express.urlencoded({limit: "20mb", extended: true}));

app.use(cors());


app.use("/Servers", servers);
app.use("/ItemPrice", itemPrice);
app.use("/ItemSearch", itemSearch);
app.use("/News", newsQuery);


const PORT = process.env.PORT || 5555;
        
const server = app.listen(PORT, () => {
  const host = server.address().address
  const port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
});
app.get("/products/:id", function (req, res, next) {
  res.json({msg: "This is CORS-enabled for all origins!"})
});
app.listen(8000, function () {
  console.log(`CORS-enabled web server listening on port 8000`)
});