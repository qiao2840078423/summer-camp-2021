const fs = require('fs')

fs.readFile('./test3.txt', (err, data) => {
    console.log(err);
    console.log(data);
    console.log(data.toString());
})

// 同步读取
let data = fs.readFileSync("./test3.txt")
console.log(data.toString());