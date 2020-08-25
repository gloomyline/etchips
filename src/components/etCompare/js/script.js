export let isopen=false;//这个功能暂未用到，如果用到该功能弹窗展示，则需用的
//关闭div层，这个功能暂未用到，如果用到该功能弹窗展示，则需用的
export function hidediv(){
	$('.pic_contrast').hide();
	var isopen=false;
}

//显示div层，这个功能暂未用到，如果用到该功能弹窗展示，则需用的
export function showdiv(){
	$('.pic_contrast').show(); 
	isopen=true;
}

//点击图标删除此行
export function delplan(obj){
	var parent=obj.parentNode;
	var id=parent.id; 
	parent.parentNode.removeChild(parent); 
	//去除选中的
	var checkid="planid"+id.substr(2,id.length);
	document.getElementById(checkid).checked=false;
}

//checkbox的点击
export function actionplan(obj){
	// console.log("actionplanobj",obj)
	// console.log("obj.parentNode.parentNode",obj.parentNode.parentNode)
	// console.log("obj.parentNode.parentNode.getAttribute",obj.parentNode.parentNode.getAttribute("planid"))
	var planid=obj.parentNode.parentNode.getAttribute("planid"); 
	var planname=obj.parentNode.parentNode.getAttribute("planname"); 
	if(isopen==false){
		showdiv();//这个功能暂未用到，如果用到该功能弹窗展示，则需用的
	}
	addplan(planid,planname);
}

export function picto(obj){
	var zoom_n = 1;
	//旋转
	var spin_n = 0;
	obj.parent(".mousemove").css({
		"transform":"rotate("+ spin_n +"deg)",
		"-moz-transform":"rotate("+ spin_n +"deg)",
		"-ms-transform":"rotate("+ spin_n +"deg)",
		"-o-transform":"rotate("+ spin_n +"deg)",
		"-webkit-transform":"rotate("+ spin_n +"deg)"
	});
	
	//缩放 放大
	
	obj.css({
		"transform": "scale(" + zoom_n + ")",
		"-moz-transform": "scale(" + zoom_n + ")",
		"-ms-transform": "scale(" + zoom_n + ")",
		"-o-transform": "scale(" + zoom_n + ")",
		"-webkit-transform": "scale(" + zoom_n + ")"
	});
	
	
	$(pp +" .positionButtonDiv").find(".zoomInButton").click(function (e) {
		var target = e.target.offsetParent.getAttribute("data-img");
		if(zoom_n < 6){
			zoom_n += 0.2;
		}
	   
		$('#'+target +" .picture1").css({
			"transform": "scale(" + zoom_n + ")",
			"-moz-transform": "scale(" + zoom_n + ")",
			"-ms-transform": "scale(" + zoom_n + ")",
			"-o-transform": "scale(" + zoom_n + ")",
			"-webkit-transform": "scale(" + zoom_n + ")"
		});
		
	});
	//缩放 缩小

	$(pp +" .positionButtonDiv").find(".zoomOutButton").click(function (e) {
		var target = e.target.offsetParent.getAttribute("data-img");
		if(zoom_n>1){
			zoom_n -= 0.2;
		}
		$('#'+target +" .picture1").css({
			"transform": "scale(" + zoom_n + ")",
			"-moz-transform": "scale(" + zoom_n + ")",
			"-ms-transform": "scale(" + zoom_n + ")",
			"-o-transform": "scale(" + zoom_n + ")",
			"-webkit-transform": "scale(" + zoom_n + ")"
		});
		
	});
	$(pp +" .positionButtonDiv").find(".mask-clockwise").click(function (e) {
		var target = e.target.offsetParent.getAttribute("data-img");
		spin_n += 90;
		$('#'+target +" .picture1").parent(".mousemove").css({
			"transform":"rotate("+ spin_n +"deg)",
			"-moz-transform":"rotate("+ spin_n +"deg)",
			"-ms-transform":"rotate("+ spin_n +"deg)",
			"-o-transform":"rotate("+ spin_n +"deg)",
			"-webkit-transform":"rotate("+ spin_n +"deg)"
		});
	});
	$(pp +" .positionButtonDiv").find(".mask-counterclockwise").click(function (e) {
		var target = e.target.offsetParent.getAttribute("data-img");
		spin_n -= 90;
		$('#'+target +" .picture1").parent(".mousemove").css({
			"transform":"rotate("+ spin_n +"deg)",
			"-moz-transform":"rotate("+ spin_n +"deg)",
			"-ms-transform":"rotate("+ spin_n +"deg)",
			"-o-transform":"rotate("+ spin_n +"deg)",
			"-webkit-transform":"rotate("+ spin_n +"deg)"
		});
	});

	
	//图片拖拽
	   var $div_img = obj.parent(".mousemove");
	   //绑定鼠标左键按住事件
	   $div_img.bind("mousedown", function (event) {
		   event.preventDefault && event.preventDefault(); //去掉图片拖动响应
		   //获取需要拖动节点的坐标
		   var offset_x = $(this)[0].offsetLeft;//x坐标
		   var offset_y = $(this)[0].offsetTop;//y坐标
		   //获取当前鼠标的坐标
		   var mouse_x = event.pageX;
		   var mouse_y = event.pageY;
		   //绑定拖动事件
		   $div_img.parent("li").bind("mousemove", function (ev) {
			   // 计算鼠标移动了的位置
			   var _x = ev.pageX - mouse_x;
			   var _y = ev.pageY - mouse_y;
			   //设置移动后的元素坐标
			   var now_x = (offset_x + _x ) + "px";
			   var now_y = (offset_y + _y ) + "px";
			   //改变目标元素的位置
			   $div_img.css({
				   top: now_y,
				   left: now_x
			   });
		   });	   
	   });
	   
	   //当鼠标左键松开，接触事件绑定
	   $div_img.parent("li").bind("mouseup", function () {
		   $(this).unbind("mousemove");
	   });
	 

}
//选中一个元素添加到对比
export function addplan(planid,planname){
	
	if(document.getElementById("planid"+planid).checked){
		
		if($("#picContainer li").length>3){
			document.getElementById("planid"+planid).checked=false;
			alert("最多只能选择4张图片");
			return false;
		}
		/*获取小图路径*/
		var picUrl = $("#planid"+planid).prev('img').attr('src');
		$("#picContainer").append(
			"<li style='cursor:pointer;' id=li"+planid+"><span class='close' style='cursor: hand' onclick=delplan(this)></span><div class='mousemove'><img title="+planname+" class='picture1' src="+picUrl+"></img></div>"+
			"<div class='positionButtonDiv' style='top:0;right:24px' data-img=li"+planid+">"+
			"<img style='cursor: hand' class='zoomInButton' src='images/zoomIn.png' title='zoom in' alt='zoom in'>"+
			"<img style='cursor: hand' class='zoomOutButton' src='images/zoomOut.png' title='zoom out' alt='zoom out'>"+
			"<img style='cursor: hand' class='mask-counterclockwise' src='images/left_rotat.png' title='左旋转' alt='左旋转'>"+
	    	"<img style='cursor: hand' class='mask-clockwise' src='images/right_rotat.png' title='右旋转' alt='右旋转'>"+
			"</div></li>"
			);
		/*对比图片高度等于获取的li的高度*/
		var picheight=$(".floatdiv ul li").height();
		$('#picContainer .picture1').height(picheight);
		var pp='#li'+planid;
		picto($(pp + " .picture1"));
		function picto(obj){
			var zoom_n = 1;
			//旋转
			var spin_n = 0;
			obj.parent(".mousemove").css({
		        "transform":"rotate("+ spin_n +"deg)",
		        "-moz-transform":"rotate("+ spin_n +"deg)",
		        "-ms-transform":"rotate("+ spin_n +"deg)",
		        "-o-transform":"rotate("+ spin_n +"deg)",
		        "-webkit-transform":"rotate("+ spin_n +"deg)"
		    });
			
			//缩放 放大
			
			obj.css({
			    "transform": "scale(" + zoom_n + ")",
			    "-moz-transform": "scale(" + zoom_n + ")",
			    "-ms-transform": "scale(" + zoom_n + ")",
			    "-o-transform": "scale(" + zoom_n + ")",
			    "-webkit-transform": "scale(" + zoom_n + ")"
			});
			
			
			$(pp +" .positionButtonDiv").find(".zoomInButton").click(function (e) {
				var target = e.target.offsetParent.getAttribute("data-img");
			    if(zoom_n < 6){
			    	zoom_n += 0.2;
			    }
			   
			    $('#'+target +" .picture1").css({
			        "transform": "scale(" + zoom_n + ")",
			        "-moz-transform": "scale(" + zoom_n + ")",
			        "-ms-transform": "scale(" + zoom_n + ")",
			        "-o-transform": "scale(" + zoom_n + ")",
			        "-webkit-transform": "scale(" + zoom_n + ")"
			    });
			    
			});
			//缩放 缩小
		
			$(pp +" .positionButtonDiv").find(".zoomOutButton").click(function (e) {
			    var target = e.target.offsetParent.getAttribute("data-img");
			    if(zoom_n>1){
			    	zoom_n -= 0.2;
			    }
			    $('#'+target +" .picture1").css({
			        "transform": "scale(" + zoom_n + ")",
			        "-moz-transform": "scale(" + zoom_n + ")",
			        "-ms-transform": "scale(" + zoom_n + ")",
			        "-o-transform": "scale(" + zoom_n + ")",
			        "-webkit-transform": "scale(" + zoom_n + ")"
			    });
			    
			});
			$(pp +" .positionButtonDiv").find(".mask-clockwise").click(function (e) {
				var target = e.target.offsetParent.getAttribute("data-img");
			    spin_n += 90;
			    $('#'+target +" .picture1").parent(".mousemove").css({
			        "transform":"rotate("+ spin_n +"deg)",
			        "-moz-transform":"rotate("+ spin_n +"deg)",
			        "-ms-transform":"rotate("+ spin_n +"deg)",
			        "-o-transform":"rotate("+ spin_n +"deg)",
			        "-webkit-transform":"rotate("+ spin_n +"deg)"
			    });
			});
			$(pp +" .positionButtonDiv").find(".mask-counterclockwise").click(function (e) {
				var target = e.target.offsetParent.getAttribute("data-img");
			    spin_n -= 90;
			    $('#'+target +" .picture1").parent(".mousemove").css({
			        "transform":"rotate("+ spin_n +"deg)",
			        "-moz-transform":"rotate("+ spin_n +"deg)",
			        "-ms-transform":"rotate("+ spin_n +"deg)",
			        "-o-transform":"rotate("+ spin_n +"deg)",
			        "-webkit-transform":"rotate("+ spin_n +"deg)"
			    });
			});
		
			
			//图片拖拽
		       var $div_img = obj.parent(".mousemove");
		       //绑定鼠标左键按住事件
		       $div_img.bind("mousedown", function (event) {
		           event.preventDefault && event.preventDefault(); //去掉图片拖动响应
		           //获取需要拖动节点的坐标
		           var offset_x = $(this)[0].offsetLeft;//x坐标
		           var offset_y = $(this)[0].offsetTop;//y坐标
		           //获取当前鼠标的坐标
		           var mouse_x = event.pageX;
		           var mouse_y = event.pageY;
		           //绑定拖动事件
		           $div_img.parent("li").bind("mousemove", function (ev) {
		               // 计算鼠标移动了的位置
		               var _x = ev.pageX - mouse_x;
		               var _y = ev.pageY - mouse_y;
		               //设置移动后的元素坐标
		               var now_x = (offset_x + _x ) + "px";
		               var now_y = (offset_y + _y ) + "px";
		               //改变目标元素的位置
		               $div_img.css({
		                   top: now_y,
		                   left: now_x
		               });
		           });
		           
		       });
		       
		       //当鼠标左键松开，接触事件绑定
		       $div_img.parent("li").bind("mouseup", function () {
		           $(this).unbind("mousemove");
		       });
		     
		
		}
	}else{
		var obj=document.getElementById("li"+planid);
		obj.parentNode.removeChild(obj);
	}

}

