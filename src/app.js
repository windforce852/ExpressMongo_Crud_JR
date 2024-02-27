const express = require('express')
const v1Router = require('./routes')
const config = require("./config")

const app = express()

app.use('/v1', v1Router)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(config.PORT, () => {
    console.log(`server is listening on port: ${config.PORT}`)
})