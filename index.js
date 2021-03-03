const express = require("express")
const cors = require("cors")
const blackLotus = require("./Routes/BlackLotus")
const mooncloth = require("./Routes/MoonCloth")
const arcaniteBar = require("./Routes/ArcaniteBar")
const woolcloth = require("./Routes/WoolCloth")
const mongoose = require('mongoose')
const User = require('./models/user');
const app = express()

// connect to mongodb
const dbURI = "mongodb+srv://user-1:zugzug!&@cluster0.gwwmq.mongodb.net/Cluster0?retryWrites=true&w=majority"
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology:true})
  .then((result)=> app.listen(PORT))
  .catch((err)=> console.log(err));

  app.get('/add-user', (req,res)=> {
    const user = new User({
      username: 'user1'
    });
    user.save()
      .then((result)=> {
        res,send(result)
      })
      .catch((err)=> {
        console.log(err)
      });
  })



const bodyParser = require("body-parser")
const PORT = process.env.PORT || 9000
app.use(bodyParser.json())

// const createUser = (req, res) => {
//   response.json({
//     user: "Added user"
//   })
// }
// app.post("/users", createUser)

// CORS
app.use(cors())
app.get("/products/:id", function (req, res, next) {
  res.json({msg: "This is CORS-enabled for all origins!"})
})
app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80")
})

// WoW Data
app.use("/BlackLotus", blackLotus)
app.use("/MoonCloth", mooncloth)
app.use("/ArcaniteBar", arcaniteBar)
app.use("/WoolCloth", woolcloth)

app.set("port", PORT)
var server = app.listen(PORT, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
