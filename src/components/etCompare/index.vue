<template>
<div class="pic_contrast" ref="pic_contrast">
	<!-- <div class="demo">
		<div class="gallery-thumbs">
		    <!--<div class="swiper-wrapper">
                
		        <div class="swiper-slide" planid="001" planname="Picture Information 1">
                    <label for="planid001"><img src="./images/pic.png"></label>
                    <input type="checkbox" id="planid001" onClick="actionplan(this)" name="compareplan" value="001" /> 
					<input type="checkbox" id="planid001" @click="actionplan0" name="compareplan" value="001" />
                </div>
		        <div class="swiper-slide" planid="002" planname="Picture Information 2"><label for="planid002"><img src="./images/pic1.png"></label><input type="checkbox" id="planid002" onClick="actionplan(this)" name="compareplan" value="002"></div>
		        <div class="swiper-slide" planid="003" planname="Picture Information 3"><label for="planid003"><img src="./images/pic2.png"></label><input type="checkbox" id="planid003" onClick="actionplan(this)" name="compareplan" value="003"></div>
		        <div class="swiper-slide" planid="004" planname="Picture Information 4"><label for="planid004"><img src="./images/pic3.png"></label><input type="checkbox" id="planid004" onClick="actionplan(this)" name="compareplan" value="004"></div>	
		        <div class="swiper-slide" planid="005" planname="Picture Information 5"><label for="planid005"><img src="./images/pic.png"></label><input type="checkbox" id="planid005" onClick="actionplan(this)" name="compareplan" value="005"></div>	
		        <div class="swiper-slide" planid="006" planname="Picture Information 6"><label for="planid006"><img src="./images/pic1.png"></label><input type="checkbox" id="planid006" onClick="actionplan(this)" name="compareplan" value="006"></div>
		        <div class="swiper-slide" planid="007" planname="Picture Information 7"><label for="planid007"><img src="./images/pic2.png"></label><input type="checkbox" id="planid007" onClick="actionplan(this)" name="compareplan" value="007"></div>
		        <div class="swiper-slide" planid="008" planname="Picture Information 8"><label for="planid008"><img src="./images/pic3.png"></label><input type="checkbox" id="planid008" onClick="actionplan(this)" name="compareplan" value="008"></div>
		        <div class="swiper-slide" planid="009" planname="Picture Information 9"><label for="planid009"><img src="./images/pic.png"></label><input type="checkbox" id="planid009" onClick="actionplan(this)" name="compareplan" value="009"></div>
		        <div class="swiper-slide" planid="010" planname="Picture Information 10"><label for="planid010"><img src="./images/pic1.png"></label><input type="checkbox" id="planid010" onClick="actionplan(this)" name="compareplan" value="010"></div>
		    </div>
		</div>
	</div> -->
	<div class="close" @click="closeHandler">×</div>
    <!-- <el-button icon="el-icon-close" type="primary" @click="closeHandler"></el-button> -->
	<div class="floatdiv">
		<ul id="picContainer">
			<li style='cursor:pointer;' id="li001" class="part1">
				<!-- <span class='close' style='cursor: hand' ></span> -->
				<div class='mousemove'>
					<img  class='picture1' :src="comparepicUrl"></img>
				</div>
				<div class='positionButtonDiv' style='top:0;right:24px' data-img="li001" >
				<img style='cursor: hand' class='zoomInButton' src='./images/zoomIn.png' title='zoom in' alt='zoom in'>
				<img style='cursor: hand' class='zoomOutButton' src='./images/zoomOut.png' title='zoom out' alt='zoom out'>
				<img style='cursor: hand' class='mask-counterclockwise' src='./images/left_rotat.png' title='左旋转' alt='左旋转'>
				<img style='cursor: hand' class='mask-clockwise' src='./images/right_rotat.png' title='右旋转' alt='右旋转'>
			</div>
			</li>
			<li class="part2">
				<div @click="controlpic">联动</div>
			</li>
			<li style='cursor:pointer;' id="li002" class="part3">
				<!-- <span class='close' style='cursor: hand' ></span> -->
				

				<template v-if="uploadImgUrl">
					<span class='close' style='cursor: hand' @click="closepic"></span>
					<div class='mousemove'>
						<img  class='picture1' :src="uploadImgUrl"></img>
					</div>
					<div class='positionButtonDiv' style='top:0;right:24px' data-img="li002" >
						<img style='cursor: hand' class='zoomInButton' src='./images/zoomIn.png' title='zoom in' alt='zoom in'>
						<img style='cursor: hand' class='zoomOutButton' src='./images/zoomOut.png' title='zoom out' alt='zoom out'>
						<img style='cursor: hand' class='mask-counterclockwise' src='./images/left_rotat.png' title='左旋转' alt='左旋转'>
						<img style='cursor: hand' class='mask-clockwise' src='./images/right_rotat.png' title='右旋转' alt='右旋转'>
					</div>
				</template>
				<template v-else>
					<div class="upload">
						<input ref="fileInput" type="file" name="file" style="visibility: hidden;">
						<i class="icon-upload el-icon-plus" @click="upload"></i>
					</div>
				</template> 

				<!-- <div class='mousemove'>
					<img  class='picture1' src="./images/pic1.png"></img>
				</div>
				<div class='positionButtonDiv' style='top:0;right:24px' data-img="li002" >
					<img style='cursor: hand' class='zoomInButton' src='./images/zoomIn.png' title='zoom in' alt='zoom in'>
					<img style='cursor: hand' class='zoomOutButton' src='./images/zoomOut.png' title='zoom out' alt='zoom out'>
					<img style='cursor: hand' class='mask-counterclockwise' src='./images/left_rotat.png' title='左旋转' alt='左旋转'>
					<img style='cursor: hand' class='mask-clockwise' src='./images/right_rotat.png' title='右旋转' alt='右旋转'>
				</div> -->
			</li>
		</ul> 	
	</div>
	<!--end floatdiv-->
</div>
</template>
<script>
import {picto} from './js/script.js'
// import Swiper from'./js/swiper.min.js'
export default {
	props:["scrollT","comparepicUrl"],
	data(){
		return {
			isControl:false,
			comparepic:"",
			uploadImgUrl:"",
			isopen:false
		}
	},
	created(){
		console.log("我是etcompare")
	},
	updated(){
		console.log("update我执行了吗")
		var pp2='#li002'
		picto($("#li002 .picture1"),pp2)

		
	},
  mounted(){
    /*顶部小图左右滑动生成*/
    // this.childScrollTop = this.scrollT
    console.log("this.$refs.pic_contrast所有",this.$refs.pic_contrast.scrollTop)
	console.log("this=--------",this)

	
	var pp='#li001'
	picto($("#li001 .picture1"),pp)
	// var pp2='#li002'
	// picto($("#li002 .picture1"),pp2)
  },
	destroyed(){
		this.$emit('click-compare',false)
	},
	watch:{
    scrollT(newValue,oldVal){
	  console.log("我是子组件top",newValue)
      this.$refs.pic_contrast.$el.style.top = newValue;
    },
	uploadImgUrl(newValue,oldValue){
		// console.log("newValue",newValue,"oldValue",oldValue)
		// if(newValue){
			
		// }
	},
	isControl(newValue,oldVal){
		if(newValue){
			console.log("我要控制了呀")
			console.log(" 有吗#li002 .positionButtonDiv-----",$("#li002>.positionButtonDiv").length)
			if($("#li002 .positionButtonDiv").length>0){
				console.log("哈哈哈全全合")
				document.onclick = function(event)
				{ 
					var obj = event.srcElement; 
					console.log("event.srcElement; ",obj)
					if(obj.type == "img"){ 
						alert("obj.class"); 
					} 
										
				} 
			}		 


			}
			

		}
	
	
	},
	methods:{
		// actionplan0(e) {
		// var str=`#${e.target.id}`;
		// console.log("actionplan",actionplan)
		// // debugger
		// // actionplan(e.target);
		// // actionplan
		// },
	closepic(){
		this.uploadImgUrl=""
	},
    closeHandler() {
      this.$emit('close');
	},
	controlpic(){
		this.isControl=!this.isControl
	},
	
	 upload() {
      const { fileInput } = this.$refs;
      fileInput.click();
      fileInput.addEventListener('change', (e) => {
        let targetImgUrl = '';
        const uploadedFile = fileInput.files[0];
        if (window.URL.createObjectURL) {
          targetImgUrl = window.URL.createObjectURL(uploadedFile);
        }
		this.uploadImgUrl = targetImgUrl;
		console.log("图片地址",this.uploadImgUrl)
	
      });
    },
		// actionplan(e){
		// 	console.log("e",e.target.value) 
		// 	var planid=e.target.id 
		// 	// var planname=e.target.name; 
		// 	// if(this.isopen==false){
		// 	// 	showdiv();//这个功能暂未用到，如果用到该功能弹窗展示，则需用的
		// 	// }
		// 	// this.addplan(planid,planname);
		// 	var str=`#${e.target.id}`
		// 	console.log(str)
	
		// 	// $(str).get(0).click(function(){
		// 	// 	//$("p").slideToggle();
		// 	// 	actionplan(this);
		// 	// });
		// 	$(str).get(0).onclick=function(){
		// 		  console.log('box被点击了')
		// 		  debugger
		// 		  actionplan(this);
		// 	};
		// 	$(str).get(0).onclick();	
		// 	// on("click",function(e){
		// 	// 	debugger;
		// 	// 	return false;
		// 	// }).dispatchEvent(new Event('onclick')) //jQuery触发自定义事件		
		// },
		// actionplan(e){
		// 	console.log("e",e)
		// }
	}
}
</script>
<style scoped>
* {
	margin:0;
	padding:0;
	list-style-type:none;
}
a, img {
	border:0;
}
.upload{
	position:relative;
	height:100%;
	width:100%;
}
.icon-upload.el-icon-plus{
	font-size:120px;
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
	
}
body{ height: 100%;}
html{height: 100%;}
table {
	empty-cells:show;
	border-collapse:collapse;
	border-spacing:0;
}
.pic_contrast{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index:200000;
  overflow-y:auto;
  background:#252525;
}
.pic_contrast .close{
	position:absolute;
	top:3%;
	right:3%;
	font-size:30px;
	line-height: 50px;
	text-align: center;
	background:#999;
	height:50px;
	width:50px;
  	z-index: inherit;
}

#picContainer {
	height:100%;
	width:1380px;
	margin:0 auto;
}
#picContainer li .mousemove img{
   width: 600px;
}
.demo {
	width:100%;
	margin:0 auto;
	height: 94px;
	overflow: hidden;
	position: fixed;
	top:0;
	left:0;
	right:0;
	z-index: 20008;
}
.demo table th {
	background:#eeeeee;
}
.demo table th, .demo table td {
	border:solid 1px #ddd;
	text-align:center;
	padding:10px 0;
	font-size:12px;
	line-height:20px;
}
/* floatdiv */
.floatdiv {
	position:relative;
	z-index:9999;
	width:100%;
}
*html, *html body /* 修正IE6振动bug */ {
	background-image:url(about:blank);
	background-attachment:fixed;
}
*html .floatdiv {
	position:absolute;
	/* top:expression(eval(document.documentElement.scrollTop)); */
}
.floatdiv {
    width: 100%;
    height: 100%;
    overflow: hidden;
	padding: 92px auto 0 auto;
	box-sizing:content-box;
}
.floatdiv h5 {
	color:#fff;
	font-size:12px;
	height:30px;
	line-height:30px;
	padding:0 0 0 10px;
}
.floatdiv h5 a {
	float:right;
	margin:1px 0 0 0;
	display:inline;
}
.floatdiv h5 a img{ height: 30px;}
.floatdiv ul {
	height:auto;
	overflow:hidden;
	padding:10px 10px 100px 20px;
}
.floatdiv ul li {
	background:#333;
	display: inline-block;
	font-size:12px;
	position: relative;
	height:500px;
	overflow: hidden;
	margin:10% 0 0 0;
	text-align: center;
}
.floatdiv ul li.part1{
	width:600px;
	box-sizing:border-box;
}
.floatdiv ul li.part2{
	width:140px;
	box-sizing:border-box;
	padding-top:200px;
	background:#252525;
}
.floatdiv ul li.part2 div{
	width:100px;

	height:40px;
	background:#666;
	margin: 0 auto;
	line-height:40px;
	color:#fff;
}
.floatdiv ul li.part3{
	width:600px;
	box-sizing:border-box;
}
.floatdiv ul li img {
	margin:0 3px 0 0;
	height:90%;
}

.floatdiv ul li .close{
	display: block;
	position: absolute;
	width:27px;
	height: 24px;
	right:5px;
	top:7px;
	background:url(./images/close.png) center center no-repeat;
	z-index: 999;
	padding: 7px 0;
}

.positionButtonDiv {
	display:flex;
	color: #FFFFFF;
	padding: 8px;
	text-align: left;
	position: absolute;
	right:0;
	top:0;
	z-index: 20004;
}
.positionButtonDiv img{
	border: 0;
	margin: 0;
	padding: 0;
}
.floatdiv ul li > .mousemove{
    position: absolute;
    cursor: move;
    transform-origin: center;
    -webkit-transform-origin: center;
    -moz-transform-origin: center;
    -ms-transform-origin: center;
    -o-transform-origin: center;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    left: 0;
    top: 0;
    right:0; 
    margin: 0 auto;
    display: list-item;
    list-style-type: none;
}

.floatdiv ul li > .mousemove > img{
    display: inline-block;
   vertical-align:middle;
    cursor: move;
}
.gallery-thumbs .swiper-slide input{
    position: absolute;
    width: 16px;
    height: 16px;
    right:2px;
    bottom:2px;
    background-clip: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    vertical-align: text-bottom;
    -webkit-transition: background-color .25s;
    transition: background-color .25s;
    background-color: rgba(255,255,255,0);
    border: none;
    border-radius: 50%;
    outline:none; 
}
.gallery-thumbs .swiper-slide input:checked{
	background-color: #5868D9;
    border-color: #5868D9;
}
.gallery-thumbs .swiper-slide input:checked:after{
	content: '';
    display: block;
    height: 4px;
    width: 7px;
    border: 0 solid #333;
    border-width: 0 0 2px 2px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    position: absolute;
    top: 3px;
    left: 3px;
    border-color: #fff;
}
.gallery-thumbs .swiper-slide label{
	cursor: pointer;
    display: block;
}
.gallery-thumbs .swiper-slide label:checked{
	border:1px #5868D9 solid;
}

.gallery-thumbs {
    box-sizing: border-box;
    padding: 10px 15px;
    background: white;
}
.gallery-thumbs .swiper-slide {
    width: auto;
    background: white;
    border:1px #ddd solid;
    cursor: pointer;
}
.gallery-thumbs .swiper-slide img{
	height: 70px;
	padding: 0;
	margin: 0;
	display: block;
}
.materialList .not-vip{
	position:static !important;
}
</style>
