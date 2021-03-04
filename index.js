const express = require("express")
const cors = require("cors")
const blackLotus = require("./Routes/BlackLotus")
const mooncloth = require("./Routes/MoonCloth")
const arcaniteBar = require("./Routes/ArcaniteBar")
const woolcloth = require("./Routes/WoolCloth")
const app = express()
var StatsD = require('hot-shots')
var dogstatsd = new StatsD()

var dd_options = {
  'response_code':true,
  'tags': ['app:my_app']
    }

var connect_datadog = require('connect-datadog')(dd_options);

dogstatsd.increment('page.views')
app.use(cors())

const PORT = 5555
DD_TRACE_AGENT_PORT=PORT
app.use("/BlackLotus", blackLotus)
app.use("/MoonCloth", mooncloth)
app.use("/ArcaniteBar", arcaniteBar)
app.use("/WoolCloth", woolcloth)
app.use(connect_datadog)
const tracer = require('dd-trace').init()

        
app.get("/products/:id", function (req, res, next) {
  res.json({msg: "This is CORS-enabled for all origins!"})
})
app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80")
})

app.use(router)

var server = app.listen(PORT, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})

