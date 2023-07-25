module.exports = function (success, error) {
    // 为error设置默认值
    if (typeof error !== 'function') {
        error = () => {
            console.log('连接失败');
        }
    }

    // 导入mongoose
    const mongoose = require('mongoose')
    const {DBHOST, DBPORT, DBNAME} = require('../config/config')

    // 连接mongodb服务
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)

    // 设置回调
    // 连接成功的回调
    mongoose.connection.once('open', () => {
        success()
    })

    // 连接错误的回调
    mongoose.connection.once('error', () => {
        error()
    })
    // 连接关闭的回调
    mongoose.connection.once('close', () => {
        console.log('连接关闭');
    })

    setTimeout(() => {
        mongoose.disconnect()
    }, 2000)
}