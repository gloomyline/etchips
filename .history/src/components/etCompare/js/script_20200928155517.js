export function picto(obj,pp){
	var zoom_n = 1;
	//旋转
  var spin_n = 0;
  console.log("obj,pp",obj,pp)
	obj.parent(".mousemove").css({
		"transform":"rotate("+ spin_n +"deg)",
		"-moz-transform":"rotate("+ spin_n +"deg)",
		"-ms-transform":"rotate("+ spin_n +"deg)",
		"-o-transform":"rotate("+ spin_n +"deg)",
		"-webkit-transform":"rotate("+ spin_n +"deg)"
	});
	
	//缩放 放大
	console.log('scale');
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

		const $btnLink = $('.part2 div')
		if($btnLink.hasClass('is-linked')) {
			const otherTarget = target === 'li001' ? 'li002' : 'li001';
			$('#' + otherTarget +" .picture1").css({
				"transform": "scale(" + zoom_n + ")",
				"-moz-transform": "scale(" + zoom_n + ")",
				"-ms-transform": "scale(" + zoom_n + ")",
				"-o-transform": "scale(" + zoom_n + ")",
				"-webkit-transform": "scale(" + zoom_n + ")"
			});
		}
	});
	//缩放 缩小
	console.log('shrink')
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
		
		const $btnLink = $('.part2 div')
		if($btnLink.hasClass('is-linked')) {
			const otherTarget = target === 'li001' ? 'li002' : 'li001';
			$('#' + otherTarget +" .picture1").css({
				"transform": "scale(" + zoom_n + ")",
				"-moz-transform": "scale(" + zoom_n + ")",
				"-ms-transform": "scale(" + zoom_n + ")",
				"-o-transform": "scale(" + zoom_n + ")",
				"-webkit-transform": "scale(" + zoom_n + ")"
			});
		}
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
		const $btnLink = $('.part2 div')
		if($btnLink.hasClass('is-linked')) {
			const otherTarget = target === 'li001' ? 'li002' : 'li001';
			$('#'+otherTarget +" .picture1").parent(".mousemove").css({
				"transform":"rotate("+ spin_n +"deg)",
				"-moz-transform":"rotate("+ spin_n +"deg)",
				"-ms-transform":"rotate("+ spin_n +"deg)",
				"-o-transform":"rotate("+ spin_n +"deg)",
				"-webkit-transform":"rotate("+ spin_n +"deg)"
			});
		}
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
		const $btnLink = $('.part2 div')
		if($btnLink.hasClass('is-linked')) {
			const otherTarget = target === 'li001' ? 'li002' : 'li001';
			$('#'+otherTarget +" .picture1").parent(".mousemove").css({
				"transform":"rotate("+ spin_n +"deg)",
				"-moz-transform":"rotate("+ spin_n +"deg)",
				"-ms-transform":"rotate("+ spin_n +"deg)",
				"-o-transform":"rotate("+ spin_n +"deg)",
				"-webkit-transform":"rotate("+ spin_n +"deg)"
			});
		}
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

			const $btnLink = $('.part2 div')
			if($btnLink.hasClass('is-linked')) {
				console.log(1, $div_img.parent('li')[0].className);
				const otherTarget = $div_img.parent('li')[0].className === 'part1' ? 'li002' : 'li001';
				$('#'+otherTarget +" .mousemove").css({
					left: now_x,
					top: now_y,
				});
			}
		});	   
	});

	//当鼠标左键松开，接触事件绑定
	$div_img.parent("li").bind("mouseup", function () {
	 $(this).unbind("mousemove");
	});
}
