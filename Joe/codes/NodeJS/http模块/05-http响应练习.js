const http = require('http')

const fs = require('fs')

const server = http.createServer((request, response) => {

    response.setHeader('content-type', 'text/html;charset=utf-8')

    let html = fs.readFileSync(__dirname + '/table.html')

    response.end(html)
})

server.listen('9000', () => {
    console.log('启动服务完成...');
})