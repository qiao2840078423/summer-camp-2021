// 导入express
const express = require('express')

// 创建应用对象
const app = express()

// 创建路由
app.get('/home', (req, res) => {
    res.end("Hello express!")

    // 获取请求报文参数
    // 请求路径
    let path = req.path
    // 查询字符串
    let query = req.query
    // ip
    let ip = req.ip
    // 请求头
    let host = req.get('host')

    // test
    // console.log(path);
    // console.log(query);
    // console.log(ip);
    // console.log(host);
})

app.get('/', (req, res) => {
    res.end('home')
})

app.post('/login', (req, res) => {
    res.end('login')
})

app.all('/all', (req, res) => {
    res.end('all')
})

app.get('/:id.html', (req, res) => {
    // 获取路由参数
    let id = req.params.id
    // console.log(id);
    res.end('goods')
})

// 响应设置
app.get('/response', (req, res) => {
    // 可链式调用
    res.status(200)
    res.set("key", "value")
    res.send("response 可以链式调用")

    // 重定向
    // res.redirect('http://bing.com')

    // 下载响应
    // res.download(__dirname + '/package.json')

    // JSON响应
    // res.json({
    //     name: 'Joe',
    //     age: 20
    // })

    // 响应文件内容
    // res.sendFile(__dirname + '/package.json')
})

app.all('*', (req, res) => {
    res.end('404 Not Found')
})

// 监听端口
app.listen(3000, () => {
    console.log('服务已启动...');
})
