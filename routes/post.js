const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建空的路由器
var router = express.Router();
//联系我们post请求
router.post('/lxwm',(req,res)=>{
	var obj=req.body;
	var $jdname=req.body.jdname;
	var $jdphone=req.body.jdphone;
  var $jdemail = req.body.jdemail;
  var $jdcomment=req.body.jdcomment;
	var sql='insert into jd_lxwm set ?';
	console.log(obj);
	pool.query(sql,[obj],(err,result)=>{
		if(err)throw err;
		console.log(result);
		//res.addHeader("Access-Control-Allow-Origin":"*");
		console.log(result.affectedRows);
		if(result.affectedRows>0){
			res.send('1');
		}
		
	});
});

router.post('/jdyd',(req,res)=>{
	var obj=req.body;
	var $ydrz=req.body.ydrz;
	var $ydtf=req.body.ydtf;
  var $ydxm= req.body.ydxm;
	var $yddh = req.body.yddh;
	var $ydlx = req.body.ydlx;
	var sql='insert into jd_jdyd set ?';
	console.log(obj);
	pool.query(sql,[obj],(err,result)=>{
		if(err)throw err;
		console.log(result);
		//res.addHeader("Access-Control-Allow-Origin":"*");
		console.log(result.affectedRows);
		if(result.affectedRows>0){
			res.send('1');
		}
		
	});
});

module.exports=router;