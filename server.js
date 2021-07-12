const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const server = express()

const authRoute = require('./routes/routes')
// applicationCache.use('/api/auth', authRoute)

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        server.listen(PORT, () => console.log('Server has been started on port ' + PORT))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()

