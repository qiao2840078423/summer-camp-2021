// 导入express
const express = require('express')
const router = require('./routers/router')

// 创建应用对象
const app = express()

app.use(router)

app.listen(3000, () => {
    console.log('服务已启动...');
})