const http = require('http')

const fs = require('fs')

const server = http.createServer((request, response) => {

    // response.setHeader('content-type', 'text/html;charset=utf-8')

    let { pathname } = new URL(request.url, 'http://127.0.0.1')
    // 网站根目录
    let root = __dirname + '/pages'
    // 拼接文件路径
    let filePath = root + pathname
    // 读取文件
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.end('文件读取失败')
            return;
        }
        // 响应文件内容
        response.end(data)
    })
})

server.listen('9000', () => {
    console.log('启动服务完成...');
})