(function(){
	//首页轮播发送请求
  $.ajax({
    url: "http://127.0.0.1:3000/index/lunbo",
    type: "get",
    dataType: "json"
  })
    .then(function (result) {
      console.log(result);
      //首页轮播
      var html = "";
      html += `<div class="carousel-item active">
  <img class="w-100" src="${result[0].lbimg}"/>
</div>
<div class="carousel-item">
  <img class="w-100" src="${result[1].lbimg}"/>
</div>
<div class="carousel-item">
  <img class="w-100" src="${result[2].lbimg}"/>
</div>
<div class="carousel-item">
  <img class="w-100" src="${result[3].lbimg}"/>
</div>`
      var lunbo = document.querySelector(".carousel-inner");
      lunbo.innerHTML = html;
    });
  
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
  
    //首页酒店服务发送请求
	$.ajax({
		url:"http://127.0.0.1:3000/index/jdfw",
		type:"get",
		dataType:"json"
	})
 	.then(function(result){
		console.log(result);
      var html = "";
      for (var i = 0; i < result.length; i++) {
        var r=result[i];
          html += `<div class="col-lg-4 col-md-6">
          <div class="jdfw_kuang">
              <h4 class="jdfw_h4">
                  <img src="${r.jdfwimg}">
                  <span class="jdfw_span">${r.jdfwtitle}</span>
              </h4>
              <p>${r.jdfwtext}</p>
          </div>
      </div>`
      }
      var jdhj = document.querySelector("#jdfw");
      console.log(jdfw);
      jdfw.innerHTML=html;
    })
  
  //首页酒店环境发送请求
	$.ajax({
		url:"http://127.0.0.1:3000/index/jdhj",
		type:"get",
		dataType:"json"
	})
 	.then(function(result){
		console.log(result);
      var html = "";
      for (var i = 0; i < result.length; i++) {
        var r=result[i];
          html += `<div class="col-lg-4 col-md-6 pb-3">
    <div class="jdhj_img">
        <img class="img-fluid" src="${r.jdhjimg}"/>
        <div class="jdhj_imgzzc">
            <span>${r.jdhjtext}</span>
            <div></div>
        </div>
    </div>
    </div>`
      }
      var jdhj = document.querySelector("#jdhj");
      console.log(jdhj);
      jdhj.innerHTML=html;
    })
  
  //首页酒店新闻发送请求
	$.ajax({
		url:"http://127.0.0.1:3000/index/jdxw",
		type:"get",
		dataType:"json"
	})
 	.then(function(result){
		console.log(result);
      var html = "";
      for (var i = 0; i < result.length; i++) {
        var r=result[i];
          html += `<div class="col-lg-6 col-sm-12 mb-5">
          <div class="row p-0">
              <div class="col-sm-7 text-warning  border-bottom">
                  <h3>${r.jdxwtitle}</h3>
                  <p>${r.jdxwtext}</p>
              </div>
              <div class="col-sm-5">
                  <img class="img-fluid" src="${r.jdxwimg}"/>
              </div>
          </div>
      </div>`
      }
      var jdxw = document.querySelector("#jdxw");
      console.log(jdxw);
      jdxw.innerHTML=html;
    })
})()