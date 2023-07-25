const db = require('./db/db')
const mongoose = require('mongoose')
const BookModel = require('./models/BookModel')

db(() => {
    // 新增
    BookModel.create({
        name: '红楼梦',
        author: '曹雪芹',
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