fs = require('fs')

// 文件重命名与移动（移动只需修改路径）
fs.rename('./hello.js', './hello_world.js', err => {
    console.log(err);
})