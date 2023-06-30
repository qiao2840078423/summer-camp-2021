const fs = require('fs')

// __dirname：所在文件的所在目录的绝对路径

fs.stat(__dirname + '/images', (err, data) => {
    console.log(__dirname);
    console.log(err);
    console.log(data);
    console.log(data.isDirectory());
    console.log(data.isFile());
})