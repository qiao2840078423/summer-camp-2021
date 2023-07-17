// 导入mongoose
const mongoose = require('mongoose')

// 连接mongodb服务
mongoose.connect('mongodb://127.0.0.1:27017/test')

// 设置回调
// 连接成功的回调
mongoose.connection.once('open', () => {
    // 创建文档的结构对象
    let BooKSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    })

    // 创建模型对象
    let BookModel = mongoose.model('books', BooKSchema)

    // 新增
    BookModel.create({
        name: '西游记',
        author: '吴承恩',
        price: 20
    }).then((err, data) => {
        if (err) {
            console.log(err);
            return
        }
        else {
            console.log(data);
        }
    })
})
// 连接错误的回调
mongoose.connection.once('error', () => {
    console.log('连接失败');
})
// 连接关闭的回调
mongoose.connection.once('close', () => {
    console.log('连接关闭');
})

setTimeout(()=>{
    mongoose.disconnect()
}, 2000)