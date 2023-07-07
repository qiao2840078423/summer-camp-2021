var express = require('express');
const formidable = require('formidable');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


// 显示网页的（表单）
router.get('/portrait', (req, res) => {
  res.render('portrait');
})

// 处理文件上传
router.post('/portrait', (req, res, next) => {
  // 创建表单对象
  // const form = formidable({
  //   multiples: true,
  //   // 设置上传文件的保存目录
  //   uploadDir: __dirname + '/../public/images',
  //   keepExtensions: true
  // });

  const form = new formidable.IncomingForm({
    multiples: true,
    // 设置上传文件的保存目录
    uploadDir: __dirname + '/../public/images',
    keepExtensions: true
  });

  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    res.json({ fields, files });
  });
})

module.exports = router;
