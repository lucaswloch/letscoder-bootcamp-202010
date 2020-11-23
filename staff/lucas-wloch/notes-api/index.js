require('dotenv').config()
const express = require('express')
const { MongoClient } = require('mongodb')

const logger = require('./utils/logger')
const { cors } = require('./middlewares')
const { context } = require('./logic')
debugger
const { env: { PORT, MONGODB_URL }, argv: [, , port = PORT || 8080] } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

logger.log('starting server', 'info')

client.connect((error, connection) => {
    if (error)
        return logger.log(error, 'error', error => {
            if (error) console.error(error)

            shutDown()
        })

    context.connection = connection

    const app = express()

    app.use(cors)

    const { api } = require('./routes')

    app.use(api)

    app.get('/*', (req, res) => res.status(404).send('Not found :('))

    app.listen(port, () => {
        console.log(`server running on port ${port}`)
        logger.log(`server running on port ${port}`)
    })
})

const shutDown = () => {
    console.log(`stopping server`)
    logger.log(`stopping server`, 'info', error => {
        if (error) console.error(error)

        if (client)
            return client.close(error => {
                if (error) console.error(error)
                process.exit(0)

            })

        process.exit(0)
    })
}

process.on('SIGINT', shutDown)