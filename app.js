//中间件
const express=require('express');
//引入路由器
const bodyParser=require('body-parser');
const lxwm= require('./routes/post.js');
//引入user.js
const index= require('./routes/user.js');

//创建web服务器
var server=express();
server.listen(3000);//监听
//托管静态资源到public
server.use(express.static('public'));
//托管资源img
server.use(express.static('./public/img'));
//配置中间件
server.use(bodyParser.urlencoded({
    entended:false
}))
server.use("/lxwm", lxwm); 
server.use("/index", index);
