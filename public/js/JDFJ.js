(function(){
  //首页特价房间发送请求
	$.ajax({
		url:"http://127.0.0.1:3000/index/tjfj",
		type:"get",
		dataType:"json"
	})
 	.then(function(result){
		console.log(result);
      var html = "";
        html += `<div class="col-lg-3 col-sm-6 mb-4">
  <div class="card border-0 rounded-0 ztfj_imgfd">
      <img class="w-100 ztfj_img" src="${result[0].tjfjimg}"/>
  </div>
  <a class="text-success" href="#"><h4>${result[0].tjfjtitle}</h4></a>
  <h5>"¥${result[0].tjfjprice}"
      <small>/night</small>
  </h5>
  <button class="btn btn-outline-success">立即预订</button>
</div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card border-0 rounded-0 ztfj_imgfd">
                <img class="w-100 ztfj_img" src="${result[1].tjfjimg}"/>
            </div>
            <a class="text-info" href="#"><h4>${result[1].tjfjtitle}</h4></a>
            <h5>"¥${result[1].tjfjprice}"
                <small>/night</small>
            </h5>
            <button class="btn btn-outline-info">立即预订</button>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card border-0 rounded-0 ztfj_imgfd">
                <img class="w-100 ztfj_img" src="${result[2].tjfjimg}"/>
            </div>
            <a class="text-warning" href="#"><h4>${result[2].tjfjtitle}</h4></a>
            <h5>"¥${result[2].tjfjprice}"
                <small>/night</small>
            </h5>
            <button class="btn btn-outline-warning">立即预订</button>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card border-0 rounded-0 ztfj_imgfd">
                <img class="w-100 ztfj_img" src="${result[3].tjfjimg}"/>
            </div>
            <a class="text-danger" href="#"><h4>${result[3].tjfjtitle}</h4></a>
            <h5>"¥${result[3].tjfjprice}"
                <small>/night</small>
            </h5>
            <button class="btn btn-outline-danger">立即预订</button>
        </div>`
      var tjfj = document.querySelector("#tjfj");
      console.log(tjfj);
      tjfj.innerHTML=html;
    })
  
    //主题酒店->所有房间发送请求
	$.ajax({
		url:"http://127.0.0.1:3000/index/syfj",
		type:"get",
		dataType:"json"
	})
 	.then(function(result){
		console.log(result);
      var html = "";
        html += `<div class="col-lg-3 col-sm-6 mb-4">
        <div class="card border-0 rounded-0 ztfj_imgfd">
            <img class="w-100 ztfj_img" src="${result[0].syfjimg}"/>
        </div>
        <a class="text-success" href="#"><h4>${result[0].syfjtitle}</h4></a>
        <h5>"¥${result[0].syfjprice}"
            <small>/night</small>
        </h5>
        <button class="btn btn-outline-success">立即预订</button>
    </div>
    <div class="col-lg-3 col-sm-6 mb-4">
        <div class="card border-0 rounded-0 ztfj_imgfd">
            <img class="w-100 ztfj_img" src="${result[1].syfjimg}"/>
        </div>
        <a class="text-info" href="#"><h4>${result[1].syfjtitle}</h4></a>
        <h5>"¥${result[1].syfjprice}"
            <small>/night</small>
        </h5>
        <button class="btn btn-outline-info">立即预订</button>
    </div>
    <div class="col-lg-3 col-sm-6 mb-4">
        <div class="card border-0 rounded-0 ztfj_imgfd">
            <img class="w-100 ztfj_img" src="${result[2].syfjimg}"/>
        </div>
        <a class="text-warning" href="#"><h4>${result[2].syfjtitle}</h4></a>
        <h5>"¥${result[2].syfjprice}"
            <small>/night</small>
        </h5>
        <button class="btn btn-outline-warning">立即预订</button>
    </div>
    <div class="col-lg-3 col-sm-6 mb-4">
        <div class="card border-0 rounded-0 ztfj_imgfd">
            <img class="w-100 ztfj_img" src="${result[3].syfjimg}"/>
        </div>
        <a class="text-danger" href="#"><h4>${result[3].syfjtitle}</h4></a>
        <h5>"¥${result[3].syfjprice}"
            <small>/night</small>
        </h5>
        <button class="btn btn-outline-danger">立即预订</button>
    </div>
    <div class="col-lg-3 col-sm-6 mb-4">
        <div class="card border-0 rounded-0 ztfj_imgfd">
            <img class="w-100 ztfj_img" src="${result[4].syfjimg}"/>
        </div>
        <a class="text-primary" href="#"><h4>${result[4].syfjtitle}</h4></a>
        <h5>"¥${result[4].syfjprice}"
            <small>/night</small>
        </h5>
        <button class="btn btn-outline-primary">立即预订</button>
    </div>
    <div class="col-lg-3 col-sm-6 mb-4">
        <div class="card border-0 rounded-0 ztfj_imgfd">
            <img class="w-100 ztfj_img" src="${result[5].syfjimg}"/>
        </div>
        <a class="text-dark" href="#"><h4>${result[5].syfjtitle}</h4></a>
        <h5>"¥${result[5].syfjprice}"
            <small>/night</small>
        </h5>
        <button class="btn btn-outline-dark">立即预订</button>
    </div>
    <div class="col-lg-3 col-sm-6 mb-4">
        <div class="card border-0 rounded-0 ztfj_imgfd">
            <img class="w-100 ztfj_img" src="${result[6].syfjimg}"/>
        </div>
        <a class="text-secondary" href="#"><h4>${result[6].syfjtitle}</h4></a>
        <h5>"¥${result[6].syfjprice}"
            <small>/night</small>
        </h5>
        <button class="btn btn-outline-secondary">立即预订</button>
    </div>
    <div class="col-lg-3 col-sm-6 mb-4">
        <div class="card border-0 rounded-0 ztfj_imgfd">
            <img class="w-100 ztfj_img" src="${result[7].syfjimg}"/>
        </div>
        <a class="text-danger" href="#"><h4>${result[7].syfjtitle}</h4></a>
        <h5>"${result[7].syfjprice}"
            <small>/night</small>
        </h5>
        <button class="btn btn-outline-danger">立即预订</button>
    </div>`
      var syfj = document.querySelector("#syfj");
      console.log(syfj);
      syfj.innerHTML=html;
      })
    
})()