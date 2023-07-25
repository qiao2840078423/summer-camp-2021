var express = require('express');
var router = express.Router();

const AccountModel = require('../../models/AccountModel')

// 导入moment
const moment = require('moment')

// 记账本的列表
router.get('/account', function (req, res, next) {
    AccountModel.find().sort({ time: -1 }).exec().then((data, err) => {
        if (err) {
            res.json({
                code: '1001',
                msg: '读取失败~~',
                data: null
            })
            return;
        }
        //响应成功的提示
        res.json({
            //响应编号
            code: '0000',
            //响应的信息
            msg: '读取成功',
            //响应的数据
            data: data
        });
    })
})

// 新增记录
router.post('/account', (req, res) => {
    AccountModel.create({
        ...req.body,
        time: moment(req.body.time).toDate()
    }).then((data, err) => {
        if (err) {
            res.json({
                code: '1002',
                msg: '创建失败~~',
                data: null
            })
            return
        }
        res.json({
            code: '0000',
            msg: '创建成功',
            data: data
        })
    })
})

// 删除记录
router.delete('/account/:id', (req, res) => {
    let id = req.params.id
    AccountModel.deleteOne({ _id: id }).then((data, err) => {
        if (err) {
            res.json({
                code: '1003',
                msg: '删除账单失败',
                data: null
            })
            return;
        }
        //提醒
        res.json({
            code: '0000',
            msg: '删除成功',
            data: {}
        })
    })
})

//获取单个账单信息
router.get('/account/:id', (req, res) => {
    //获取 id 参数
    let { id } = req.params;
    //查询数据库
    AccountModel.findById(id).then((data, err) => {
        if (err) {
            return res.json({
                code: '1004',
                msg: '读取失败~~',
                data: null
            })
        }
        //成功响应
        res.json({
            code: '0000',
            msg: '读取成功',
            data: data
        })
    })
});

//更新单个账单信息
router.patch('/account/:id', (req, res) => {
    //获取 id 参数值
    let { id } = req.params;
    //更新数据库
    AccountModel.updateOne({ _id: id }, req.body).then((data, err) => {
        if (err) {
            return res.json({
                code: '1005',
                msg: '更新失败~~',
                data: null
            })
        }
        //再次查询数据库 获取单条数据
        AccountModel.findById(id).then((data, err) => {
            if (err) {
                return res.json({
                    code: '1004',
                    msg: '读取失败~~',
                    data: null
                })
            }
            //成功响应
            res.json({
                code: '0000',
                msg: '更新成功',
                data: data
            })
        })
    });
});

module.exports = router;
