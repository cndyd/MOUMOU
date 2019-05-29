/*导航栏下拉菜单*/ 
  //1. 查找data-toggle属性为"dropdown"的父元素li
  var $li=$("[data-toggle=dropdown]").parent();
  //2. 为li绑定鼠标进入事件: 
  $li.on("mouseover",function(){
	//获得当前li
	var $li=$(this);
	//3. 查找当前li下的最后一个孩子    
	//4. 让其显示
	$li.children(":last")
		  .show();
			//.css("display","block");
    })
  $li.on("mouseout",function(){
	//获得当前li
	var $li=$(this);
	//3. 查找当前li下的最后一个孩子
	//4. 让其隐藏
	$li.children(":last")
			.hide();
			//.css("display","none");
    })