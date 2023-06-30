fs = require('fs')

// 调用unlink方法
fs.unlink('./images/yoga_copy3.jpg', err => {
    console.log(err);
})

// 调用rm方法
// fs.rm('./images/yoga_copy3.jpg', err => {
//     console.log(err);
// })