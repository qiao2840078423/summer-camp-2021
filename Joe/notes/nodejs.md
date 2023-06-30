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

[http请求头、响应状态码等](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)
