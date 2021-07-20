const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const server = express()

server.use(express.json({ extended: true }))
server.use('/api/auth', require('./routes/auth.routes'))
server.use('/api/auth', require('./routes/register.routes'))
server.use('/api/link', require('./routes/link.routes'))

const PORT = config.get('port')

async function start() {
    try {
        await mongoose.connect(config.get('mongoURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        server.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()

