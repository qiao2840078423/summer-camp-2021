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