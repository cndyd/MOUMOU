const express=require("express")
const router=express.Router();
const pool = require("../pool")

/*轮播引入*/
router.get("/lunbo",(req,res)=>{
    var sql=`select lbimg from zy_lunbo`;
pool.query(sql,[],(err,result)=>{
    if(err)throw err;
    res.send(result);
    });
})

/*特价房间引入*/
router.get("/tjfj",(req,res)=>{
    var sql=`select tjfjimg,tjfjtitle,tjfjprice from zy_tjfj`;
pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
res.send(result);
    });
})

/*主页酒店环境引入*/
router.get("/jdfw",(req,res)=>{
    var sql=`select jdfwimg,jdfwtitle,jdfwtext from zy_jdfw`;
pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
res.send(result);
    });
})


/*主页酒店环境引入*/
router.get("/jdhj",(req,res)=>{
    var sql=`select jdhjimg,jdhjtext from zy_jdhj`;
pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
res.send(result);
    });
})

/*主页酒店新闻引入*/
router.get("/jdxw",(req,res)=>{
    var sql=`select jdxwtitle,jdxwtext,jdxwimg from zy_jdxw`;
pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
res.send(result);
    });
})

/*主题房间->所有房间引入*/
router.get("/syfj",(req,res)=>{
    var sql=`select syfjimg,syfjtitle,syfjprice from ztfj_syfj`;
pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
res.send(result);
    });
})

/*酒店历史->客户评论引入*/
router.get("/khpl",(req,res)=>{
    var sql=`select khpltext,khplname from jdls_khpl`;
pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
res.send(result);
    });
})

/*酒店历史->团队人员引入*/
router.get("/tdry",(req,res)=>{
    var sql=`select tdryimg,tdrytitle,tdrytext,tdryQQ,tdryWX,tdryWB,tdryname from jdls_tdry`;
pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
res.send(result);
    });
})

module.exports=router;