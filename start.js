const express = require("express")
const app = express()
const cors = require("cors")
const blackLotus = require("./Routes/BlackLotus")
const mooncloth = require("./Routes/MoonCloth")
const arcaniteBar = require("./Routes/ArcaniteBar")
const woolcloth = require("./Routes/WoolCloth")


//Bodyparser
const bodyParser = require("body-parser")
app.use(bodyParser.json())


//bcrypt
const bcrypt = require("bcrypt")

// CORS
app.use(cors())
app.get("/products/:id", function (req, res, next) {
  res.json({msg: "This is CORS-enabled for all origins!"})
})
app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80")
})

const database = require("./database")
const { returning } = require("./database")


const createUser = (req, res) => {
  const { username, password} = req.body

  bcrypt.hash(password, 12)
    .then(hashedPassword => {
     return database("user").insert({
        username, password_digest: hashedPassword
     }).returning("*")
    }).then(users => {
          res.json({user : users[0]})
    })
}

  

  


app.post("/users", createUser)


  // WoW Data
app.use("/BlackLotus", blackLotus)
app.use("/MoonCloth", mooncloth)
app.use("/ArcaniteBar", arcaniteBar)
app.use("/WoolCloth", woolcloth)

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`Listening on ...${PORT}`))

