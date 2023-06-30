const fs = require('fs')

const rs = fs.createReadStream('./test3.txt')

rs.on('data', chunk => {
    console.log(chunk.toString());
    console.log(chunk.length);
})

rs.on('end', () => {
    console.log("读取完成");
})