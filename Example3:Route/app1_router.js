const express = require('express');
const router = express.Router();

router.get('/del_user', (req, res, next) => {
    console.log('开始页面请求');
    next();
})

router.get('/', (req, res) => {
    console.log('主页GET请求');
    res.send('HELLO GET');
})

router.post('/', (req, res) => {
    console.log('主页POST请求');
    res.send('HELLO POST');
})

router.get('/del_user', (req, res) => {
    console.log('/del_user 响应DELETE请求');
    res.send('删除页面');
})

router.get('/list_user', (req, res) => {
    console.log('/list_user 响应GET请求');
    res.send('用户列表页面');
})

router.get('/ab*cd', (req, res) => {
    console.log('/ab*cd 响应GET请求');
    res.send('正则匹配');
})

module.exports = router;