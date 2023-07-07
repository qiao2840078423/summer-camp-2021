const express = require('express')
const fs = require('fs')
const path = require('path')


const app = express()

// 声明全局中间件函数
function recordMiddleWare(req, res, next) {
    let { url, ip } = req
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`)
    next()
}

// 声明路由中间件函数
let checkCodeMiddleWare = (req, res, next) => {
    if (req.query.code === '520') {
        next()
    }
    else {
        res.send('暗号错误')
    }
}

app.use(recordMiddleWare)

app.get('/home', checkCodeMiddleWare, (req, res) => {
    res.send('前台页面')
})

app.get('/admin', checkCodeMiddleWare, (req, res) => {
    res.send('后台页面')
})

app.listen(3000, () => {
    console.log('服务已启动...');
})
