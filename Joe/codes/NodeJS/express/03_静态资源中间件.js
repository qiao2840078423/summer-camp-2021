const express = require('express')

const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/home', (req, res) => {
    res.send('前台页面')
})

app.listen(3000, () => {
    console.log('服务已启动...');
})