const mongoose = require('mongoose')

let BooKSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number
})

// 创建模型对象
let BookModel = mongoose.model('books', BooKSchema)

module.exports = BookModel