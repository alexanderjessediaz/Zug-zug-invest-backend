const express = require("express")
const app = express()
const cors = require("cors")
const blackLotus = require("./Routes/BlackLotus")
const mooncloth = require("./Routes/MoonCloth")
const arcaniteBar = require("./Routes/ArcaniteBar")
const woolcloth = require("./Routes/WoolCloth")

const bodyParser = require("body-parser")
app.use(bodyParser.json())

const createUser = (req, res) => {
  response.json({
    user: "Added user"
  })
}
app.post("/users", createUser)

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

var server = app.listen(process.env.PORT || 9000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})

