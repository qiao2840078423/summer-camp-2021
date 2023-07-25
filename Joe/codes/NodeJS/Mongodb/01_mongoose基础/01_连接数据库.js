// 导入mongoose
const mongoose = require('mongoose')

// 连接mongodb服务
mongoose.connect('mongodb://127.0.0.1:27017/test')

// 设置回调
// 连接成功的回调
mongoose.connection.once('open', () => {
    console.log('连接成功');
})
// 连接错误的回调
mongoose.connection.once('error', () => {
    console.log('连接失败');
})
// 连接关闭的回调
mongoose.connection.once('close', () => {
    console.log('连接关闭');
})

setTimeout(() => {
    mongoose.disconnect()
}, 2000)