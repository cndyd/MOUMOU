(function(){
  //酒店历史->用户评论发送请求
	$.ajax({
		url:"http://127.0.0.1:3000/index/khpl",
		type:"get",
		dataType:"json"
	})
 	.then(function(result){
		console.log(result);
      var html = "";
        html += `<div class="carousel-item active">
        <p>"${result[0].khpltext}"
        <span>—${result[0].khplname}</span>
        </p>
    </div>
    <div class="carousel-item">
        <p>"${result[1].khpltext}"
        <span>—${result[1].khplname}</span>
        </p>
    </div>
    <div class="carousel-item">
        <p>"${result[2].khpltext}"
        <span>—${result[2].khplname}</span>
        </p>
    </div>
    <div class="carousel-item">
        <p>"${result[3].khpltext}"
        <span>—${result[3].khplname}</span>
        </p>
    </div>`
      var khpl = document.querySelector("#demo");
      console.log(khpl);
      khpl.innerHTML=html;
    })
  
  //酒店历史->团队人员发送请求
	$.ajax({
		url:"http://127.0.0.1:3000/index/tdry",
		type:"get",
		dataType:"json"
	})
 	.then(function(result){
		console.log(result);
      var html = "";
      for (var i = 0; i < result.length; i++) {
        var r=result[i];
          html += `<div class="col-lg-3 col-md-6 mb-5">
          <div class="jdls_img">
              <img class="img_ren" src="${r.tdryimg}"/>
              <div class="jdls_imgzzc">
                  <h4 class="jdls_zzc_h4">${r.tdrytitle}</h4>
                  <p class="jdls_zzc_p pt-4 mb-0">${r.tdrytext}</p>
                  <ul class="list-unstyled ul_li mt-4">
                      <li class="float-left">
                          <a href="">
                              <img src="${r.tdryQQ}"/>
                          </a>
                      </li>
                      <li class="float-left ml-3 mr-3">
                          <a href="">
                              <img src="${r.tdryWX}"/>
                          </a>
                      </li>
                      <li class="float-left">
                          <a href="">
                              <img src="${r.tdryWB}"/>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
          <p class="ren_h3">${r.tdryname}</p>
      </div>`
      }
      var tdry = document.querySelector("#tdry");
      console.log(tdry);
      tdry.innerHTML=html;
    })  
  
})()