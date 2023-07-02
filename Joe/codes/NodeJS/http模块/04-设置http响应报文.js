const http = require('http')

const server = http.createServer((request, response) => {
    // 1. 设置响应状态码
    response.statusCode = 203

    // 2. 设置响应状态的描述
    response.statusMessage = 'love'

    // 3. 响应头
    response.setHeader('content-type', 'text/html;charset=utf-8')

    // 4. 响应体
    response.write('i ')
    response.write('love ')
    response.write('you')
    response.end()
})

server.listen('9000', () => {
    console.log('启动服务完成...');
})