# NodeJs

## fs模块

[Node.js基础 - FS模块](https://juejin.cn/post/7231805092273471543)

### 1-创建buffer

```javascript
// 1. alloc
let buf = Buffer.alloc(10)
console.log(buf);

//2. allocUnsafe
let buf_2 = Buffer.allocUnsafe(10)
console.log(buf_2);

//3. from
let buf_3 = Buffer.from("hello")
let buf_4 = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(buf_3);
console.log(buf_4);
```

### 2-操作buffer

```javascript
// 与字符串的转换
let buf = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
console.log(buf.toString());

console.log(buf[0].toString(2));

buf[1] = 100

// 溢出
buf[2] = 361

console.log(buf);
```

### 3-文件写入

```javascript
// 1. 导入fs模块
const fs = require('fs')

// 2. 写入文件
fs.writeFile('./test.txt', 'HelloWorld!', { flag: 'a' }, err => {
    // err 写入失败：错误对象  写入成功：null
    console.log(err);
})

// 异步执行
console.log("我是主线程");

// 同步写入
fs.writeFileSync('./test2.txt', 'test2')
```

注意：异步写入和同步写入

### 4-追加写入

```javascript
const fs = require('fs')

fs.appendFile('./test.txt', 'add1', err => {
    console.log(err);
})

console.log("我是主线程");

fs.appendFileSync('./test.txt', '\nadd2')
```

### 5-流式写入

```javascript
const fs = require('fs')

const ws = fs.createWriteStream('./test3.txt')

ws.write("第一行\n")
ws.write("第二行\n")

ws.close()
```

### 6-文件读取

```javascript
const fs = require('fs')

fs.readFile('./test3.txt', (err, data) => {
    console.log(err);
    console.log(data);
    console.log(data.toString());
})

// 同步读取
let data = fs.readFileSync("./test3.txt")
console.log(data.toString());
```

### 7-流式读取

```javascript
const fs = require('fs')

const rs = fs.createReadStream('./test3.txt')

rs.on('data', chunk => {
    console.log(chunk.toString());
    console.log(chunk.length);
})

rs.on('end', () => {
    console.log("读取完成");
})
```

### 8-文件重命名与移动

```javascript
fs = require('fs')

// 文件重命名与移动（移动只需修改路径）
fs.rename('./hello.js', './hello_world.js', err => {
    console.log(err);
})
```

### 9-文件删除

```javascript
fs = require('fs')

// 调用unlink方法
fs.unlink('./images/yoga_copy3.jpg', err => {
    console.log(err);
})

// 调用rm方法
// fs.rm('./images/yoga_copy3.jpg', err => {
//     console.log(err);
// })
```

### 10-文件夹操作

[fs文件夹dir操作](https://blog.csdn.net/Elementsboy/article/details/102979389)

### 11-查看资源状态

```javascript
const fs = require('fs')

// __dirname：所在文件的所在目录的绝对路径

fs.stat(__dirname + '/images', (err, data) => {
    console.log(err);
    console.log(data);
    console.log(data.isDirectory());
    console.log(data.isFile());
})
```



## path模块

[Node.js path模块](https://juejin.cn/post/6997799224213504037)



## http模块

[Node.js Http模块](https://juejin.cn/post/6983238709097267236)

[http请求头、响应状态码等](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)

### 1-创建http服务

```javascript
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
```

### 2-提取http报文

```javascript
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
```

### 3-设置http响应报文

```javascript
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
```

### 4-搭建静态资源服务

```javascript
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
```

- html文字格式由meta标签确定，setHeader的优先级更高
- css和js文件格式可以不直接设置响应头，若不设置就按照html的文字格式响应。最然在chrome开发者工具里的预览中会乱码，但在控制台打印的时候字体不会乱码



## 模块化

### 1-暴露数据

```javascript
function eat() {
    console.log('吃饭');
}

function sleep() {
    console.log('睡觉');
}

// 暴露数据
// 方式一
module.exports = {
    eat,
    sleep
}

// 方式二
// exports.eat = eat
// exports.sleep = sleep
```

### 2-导入模块

```javascript
const me = require('./me.js')
me.eat()
me.sleep()
```
