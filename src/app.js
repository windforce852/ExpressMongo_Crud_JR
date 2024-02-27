const express = require('express')
const v1Router = require('./routes')
const config = require("./config")
const getLogger = require('./common/logger')
const mymorgan = require('./common/morgan')

const logger = getLogger(__filename)

const app = express()

app.use(mymorgan)

app.use('/v1', v1Router)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(config.PORT, () => {
    logger.info(`server is listening on port: ${config.PORT}`)
})