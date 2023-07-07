const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// 解析JSON格式的请求体的中间件
const jsonParser = bodyParser.json()

// 请求querystring格式的请求体的中间件
const urlencodeParser = bodyParser.urlencoded({ extended: false })

app.post('/home', urlencodeParser, (req, res) => {
    // 当添加中间件后，会自动在req对象上添加body属性
    console.log(req.body);
    res.send('前台页面')
})

app.listen(3000, () => {
    console.log('服务已启动...');
})