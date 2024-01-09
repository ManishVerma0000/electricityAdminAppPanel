const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000;
const con = require("./db/conn")
const router = require('./routes/routes')


app.use(express.json())

app.use(cors())

app.use(router)

const ipaddress = '10.61.36.211'

app.listen(port, ipaddress, () => {
    console.log(`server is running on the port on http://${ipaddress}:${port}`)
})

//10.61.36.211