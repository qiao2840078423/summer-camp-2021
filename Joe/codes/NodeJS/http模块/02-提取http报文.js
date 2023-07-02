// 1. 导入http模块
const http = require('http');

// 导入url模块
const url = require('url')

// 2. 创建服务对象
server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')

    // 获取请求方法
    let method = request.method;

    // 获取请求url
    let myUrl = request.url;
    // 解析url
    res = url.parse(request.url, true); // true参数使query字段对应对象
    // 路径
    pathname = res.pathname
    // 查询字符串
    let keyword = res.query.key

    // 获取http协议的版本号
    let version = request.httpVersion;

    // 获取http的请求头
    let header = request.headers;

    // 获取http的请求体
    let body = ''
    request.on("data", chunk => {
        body += chunk
    })
    request.on("end", () => {
        console.log(body);
    })

    response.end("Hello HTTP Server! 你好") // 设置响应体
})

// 3. 监听端口，开启服务
server.listen(9000, () => {
    console.log("服务启动...");
})