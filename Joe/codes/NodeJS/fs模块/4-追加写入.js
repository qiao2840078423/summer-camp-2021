const fs = require('fs')

fs.appendFile('./test.txt', 'add1', err => {
    console.log(err);
})

console.log("我是主线程");

fs.appendFileSync('./test.txt', '\nadd2')