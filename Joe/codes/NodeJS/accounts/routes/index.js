var express = require('express');
var router = express.Router();

//导入 lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../data/db.json');

// 导入shortid
const shortid = require('shortid')

//获取 db 对象
const db = low(adapter);

// 记账本的列表
router.get('/account', function (req, res, next) {
  let accounts = db.get('accounts').value()
  res.render('list', { accounts: accounts })
});

// 添加记录
router.get('/account/create', (req, res, next) => {
  res.render('create')
})

// 新增记录
router.post('/account', (req, res) => {
  // 生成id
  let id = shortid.generate()
  db.get('accounts').unshift({ id: id, ...req.body }).write()
  res.render('success', { msg: '添加成功', url: '/account' })
})

// 删除记录
router.get('/accounts/:id', (req, res) => {
  let id = req.params.id
  db.get('accounts').remove({ id: id }).write()
  res.render('success', { msg: "删除成功", url: "/account" })
})

module.exports = router;
