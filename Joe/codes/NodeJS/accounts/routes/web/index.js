const express = require('express');

const AccountModel = require('../../models/AccountModel')
// 导入moment
const moment = require('moment')
//导入中间件检测登录
const checkLoginMiddleware = require('../../middlewares/checkLoginMiddleware');

// 创建路由对象
const router = express.Router();

//添加首页路由规则
router.get('/', (req, res) => {
  //重定向 /account
  res.redirect('/account');
})

// 记账本的列表
router.get('/account', checkLoginMiddleware, function (req, res, next) {
  AccountModel.find().sort({ time: -1 }).exec().then((data, err) => {
    if (err) {
      res.status(500).send('读取失败')
      console.log(err);
      return
    }
    res.render('list', { accounts: data, moment: moment })
  })
})

// 添加记录
router.get('/account/create', checkLoginMiddleware, (req, res, next) => {
  res.render('create')
})

// 新增记录
router.post('/account', checkLoginMiddleware, (req, res) => {
  AccountModel.create({
    ...req.body,
    time: moment(req.body.time).toDate()
  }).then((data) => {
    console.log(data);
    res.render('success', { msg: '添加成功', url: '/account' })
  })
})

// 删除记录
router.get('/accounts/:id', checkLoginMiddleware, (req, res) => {
  let id = req.params.id
  AccountModel.deleteOne({ _id: id }).then((data, err) => {
    if (err) {
      res.status(500).send('删除失败')
      console.log(err);
      return
    }
    res.render('success', { msg: "删除成功", url: "/account" })
  })
})

module.exports = router;
