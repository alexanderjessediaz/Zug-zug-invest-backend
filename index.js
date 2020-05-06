const express = require("express");
const app = express();
const cors = require('cors');
const Nexus = require('nexushub-client');
const nexus = new Nexus({});

app.use(cors())

app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })
   
  app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })

app.get("/", async function (req, res){
    const data = await nexus.get("/wow-classic/v1/content")
    res.send({data})
})

var server = app.listen(9000, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)

})

// async function currentWowCurrentContent() {
//      const res = await nexus.get('/wow-classic/v1/content/active')
//      console.log(res)
// }

// currentWowCurrentContent()
