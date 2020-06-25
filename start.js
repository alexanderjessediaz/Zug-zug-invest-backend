const express = require("express")
const app = express()
const cors = require("cors")
const blackLotus = require("./app/routes/BlackLotus")
const mooncloth = require("./app/routes/MoonCloth")
const arcaniteBar = require("./app/routes/ArcaniteBar")
const woolcloth = require("./app/routes/WoolCloth")


//jwt
const jwt = require("jsonwebtoken")


//Bodyparser
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


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
// const { returning } = require("./database")


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



const login = (req, res) => {
  const { username, password} = req.body

  // look up user
  database("user").select().where({username}).first()
    .then(user => {
      if (!user) throw new Error("no user by that name")

      // auth password
      return bcrypt.compare(password, user.password_digest)
        .then(passwordDidMatch => {
          if (!passwordDidMatch) throw new Error("Incorrect username or password")
          return user
        })
      }).then(user => {
        //generate token
        const secret = "token"
        jwt.sign(user, secret, (error, token) => {
          if (error) throw new Error("problem signing jwt")
          // return token to user
          res.json({ token })
        })
      }).catch(error => {
      res.status(401).json({
        error: error.message
      })
    })
}

// const { getUser, } = require("./data")

function authenticateUser(req, res, next){
  if(!req.headers.authorization){
    return res.status(401).json({error: "Unauthorized"})
  }
  const token = req.headers.authorization.split("")[1]
  jwt.verify(token, process.env.SECRET_KEY, (error, token) => {
    if (error) throw new Error("Invalid token")
    getUser(token.username).then(user => {
      if (user){
        req.user = user
        next(null)
      } else{
        next({
          error: "User doesn't match"
        })
      }
    }).catch(error => {
      console.error(error.message)
      next({
        error: "problem authenticating user"
      })
    })
  }
  )}

app.post("/login", login)
app.get("/users/:username", authenticateUser)
app.post("/users", authenticateUser)

  // WoW Data
app.use("/BlackLotus", blackLotus)
app.use("/MoonCloth", mooncloth)
app.use("/ArcaniteBar", arcaniteBar)
app.use("/WoolCloth", woolcloth)

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`Listening on ...${PORT}`))

