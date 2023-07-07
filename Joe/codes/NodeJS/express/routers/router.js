const express = require('express')

const router = express.Router()

router.post('/login', (req, res) => {
    res.end('login')
})

router.get('/home', (req, res) => {
    res.end("Hello express!")
})

module.exports = router