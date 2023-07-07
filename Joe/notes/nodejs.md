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



## 包管理工具

https://www.npmjs.com/

[30 个有用的 Node.js NPM 包](https://juejin.cn/post/7002054481252728869)

### 1-npm初始化包

```
npm init
```

​	生成package.json配置文件

### 2-npm下载安装包

```
npm install xxx
```

### 3-require导入npm包的基本流程

1. 在当前文件夹下的node_modules中寻找同名的文件夹
2. 在上级目录中下的node_modules中寻找同名的文件夹，直至找到磁盘根目录

### 4-生产依赖和开发依赖

- 生产依赖（默认选项）（开发和生产阶段都会被使用）

  - ```javascript
    npm i -S xxx
    npm i --save xxx
    ```

- 开发依赖（仅在开发阶段使用）

  - ```javascript
    npm i -D less
    npm i --save-dev less
    ```

    

## express框架

### 1-基本使用-框架流程、获得请求参数、响应设置

```javascript
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
```

### 2-中间件

```javascript
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
```

### 3-静态资源中间件

```javascript
const express = require('express')

const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/home', (req, res) => {
    res.send('前台页面')
})

app.listen(3000, () => {
    console.log('服务已启动...');
})
```

### 4-获取请求体

```javascript
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
```

### 5-路由模块化

```javascript
const express = require('express')
const router = require('./routers/router')

// 创建应用对象
const app = express()

app.use(router)

app.listen(3000, () => {
    console.log('服务已启动...');
})
```

`router.js`

```javascript
const express = require('express')

const router = express.Router()

router.post('/login', (req, res) => {
    res.end('login')
})

router.get('/home', (req, res) => {
    res.end("Hello express!")
})

module.exports = router
```

### 6-express-generator工具

1. 首先下载全局包express-generator：`npm install -g express-generator`

2. 下载之后，会暴露出`express`命令，使用`express -e xxx` 快速生成express骨架，其中-e表示支持ejs模板引擎，xxx为文件夹名

3. 在文件夹路径下，`npm install` 下载 `node_modules` 文件夹
