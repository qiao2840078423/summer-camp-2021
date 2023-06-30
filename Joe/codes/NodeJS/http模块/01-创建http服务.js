// 1. 导入http模块
const http = require('http');

// 2. 创建服务对象
server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.end("Hello HTTP Server! 你好") // 设置响应体
})

// 3. 监听端口，开启服务
server.listen(9000, () => {
    console.log("服务启动...");
})