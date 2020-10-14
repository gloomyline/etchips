<template>
<div id="zoom-visualizer">
  <div class="lightbox-ofertas-bg"></div>
  <div class="lightbox">
    <div class="header">
      <div class="inside">
        <div id="wrapper-fechar" class="tooltip-content">
          <div class="tooltip">
            <p>Close</p>
            <span></span> </div>
          <a href="" class="fechar tooltip-caller"></a>
          <div class="clear"></div>
        </div>
        <div id="zoom">
          <div>
            <div class="tooltip-content">
              <div class="tooltip">
                <p>Zoom Out</p>
                <span></span> </div>
              <a href="#" class="zoom-out tooltip-caller"></a></div>
            <div id="wrapper-barra-zoom" class="tooltip-content">
              <div class="tooltip">
                <p>Zoom</p>
                <span></span> </div>
              <div class="tooltip-caller wrapper-barra"> <span id="barra"> <strong id="scroll" class="ui-draggable" style="position: relative; left: 0px;"> </strong> </span> </div>
            </div>
            <div class="tooltip-content">
              <div class="tooltip">
                <p>Zoom In</p>
                <span></span> </div>
              <a href="#" class="zoom-in tooltip-caller"></a> </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
    
    <div class="content"> <a href="" id="next"></a>
      <div class="wrapper" >
      	<img  :src="picturesA[0].path" class="dragme" id="imgurl" >
      </div>
      <a href="" id="before"></a>
    </div>
    
    <div class="footer">
      <a href="#" id="aba-lista"><span>折叠缩略图</span></a>
      <div id="compare" @click="openCompare">对比图片</div>
      <div id="listagem-imagens">
        <div>
            <a class="item-zoom-image" v-for="item in picturesA" :href="item.path" alt="0" :key="item.name">
              <img :src="item.path"> 
            </a>
            <!-- <a class="item-zoom-image " href="./img/camiseta_hombre_jackknife_negra.jpg" alt="99"><img src="./img/camiseta_hombre_jackknife_negra-thumb.jpg"> </a> -->
            <!-- <a class="item-zoom-image" href="./img/design.png" alt="1"><img src="./img/design-thumb.png"> </a>
            <a class="item-zoom-image" href="./img/camiseta_hombre_lumberjack_blanca.jpg" alt="2"> <img src="./img/camiseta_hombre_lumberjack_blanca-thumb.jpg"> </a>
            <a class="item-zoom-image" href="./img/camiseta_hombre_mr-speed_blanca1.jpg" alt="3"> <img src="./img/camiseta_hombre_mr-speed_blanca1-thumb.jpg"> </a> -->
            <div class="clear"></div>
        </div>
      </div>      
    </div>
    
  </div>
</div>  
</template>
<script>
import "./js/jquery-ui.min.js"
import "./js/ZoomVisualizer.js"
import api from '@/api';
export default {
    props:['picturesList','isopenAlbum'],
    data(){
      return {
        materials:[],  
              
      }
    },
    
    created(){
      debugger;
      console.log("picturesList",this.picturesList)
    },
    methods:{
      openCompare(){

        console.log(".item-zoom-image打开对比图片",$(".item-zoom-image.ativo")[0].href)
        let comparepicUrl= $(".item-zoom-image.ativo")[0].href
        this.$emit('click-compare',true,comparepicUrl)
        
        
      }
      
    },
    mounted(){
        console.log("$222222222222子组件",$)
        console.log("$(window)",$(window))
      
        // console.log("this",this)
        console.log("isopenAlbum",this.isopenAlbum)
        console.log("isopenAlbum1111",this)
        console.log('etPhoto的this 我是vue吗',this)
        var _this = this
      
      jQuery(document).ready(function() {
          $(window).ZoomVisualizer({
              added: added,
              removed: removed,
              object: '#zoom-visualizer',
              resizeInitial: true,
              centerThumbs: true,
              loader: "img/ajax-loader-overlay.gif",
              sliderOrientation: "vertical",
              positionZoom: {
                  left: 10,
                  right: 10,
                  top:10,
                  bottom:10
              }
          });

          function added() {
              console.log("相册打开了！");
              console.log("etPhoto·················",_this)
              console.log("etPhoto·················",_this.picturesList)
          }

          function removed() {
              console.log("相册关闭了！");

              // console.log("isopenAlbumData",isopenAlbumData)
              

              // console.log("_this.$parent",_this.$parent)
          }
      });
    },
    

}
</script>>
<style>
.clear {
	clear: both !important;
	float: none !important;
	margin: 0px !important;
	padding: 0px !important;
	height: 0px !important;
	width: 0px !important
}
.clearfix:after {
	content: ".";
	display: block;
	clear: both;
	visibility: hidden;
	line-height: 0;
	height: 0;
}
.clearfix {
	display: inline-block;
}
html[xmlns] .clearfix {
	display: block;
}
* html .clearfix {
	height: 1%;
}
img {
	display: block;
}
input, textarea {
	color: #999999;
}
select {
	color: #999999;
}
.oldBrowser {
	display: none !important
}
.center {
	width: 1000px;
	margin: 0 auto;
	text-align: left
}
body {
	background: #f7f6f6;
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	line-height: 20px;
	color: #555;
	font-weight: 100;
}

/*---------------------LIGHTBOX OFERTAS------------------------------------*/
#zoom-visualizer{ display:none; position:fixed; z-index:90000; top:0; left:0; width:100%; height:100%;bottom:0}
#zoom-visualizer .lightbox{ display:block; z-index:6000;}

#zoom-visualizer .header{height: 72px; position: fixed; width: 100%; z-index: 7000;}

#zoom-visualizer .header .inside div .fechar { display:block; height: 26px; width: 28px; background: url(img/bt-fechar-zoomvisualizer.png) no-repeat 0 0 #313131;}

#zoom-visualizer .header .inside p{float: left; font-weight: 400; font-size: 18px; color: #034ea2; margin-top: 29px;}

#zoom-visualizer .header .inside #zoom .zoom-out {width: 28px; height: 26px; display:block; background: url(img/zoom-out.png) no-repeat 0 0 #313131;}
#zoom-visualizer .header .inside #zoom .zoom-in  {width: 28px; height: 26px; display:block; background: url(img/zoom-in.png) no-repeat 0 0 #313131;}
#zoom-visualizer .header .inside #zoom #barra { position: relative; width:5px; height:115px ; background-color: #212121; position: relative; display:block}
#zoom-visualizer .header .inside #zoom #wrapper-barra-zoom{ background-color:#313131;}
#zoom-visualizer .header .inside #zoom #scroll {display:block; left:0; top:0; background-color: #999479;}

/*zoom horizontal*/
#zoom-visualizer.horizontal .header .inside #zoom{ margin:0 0 0 0; float:left;}
#zoom-visualizer.horizontal .header .inside #zoom > div > div{ float:left;}
#zoom-visualizer.horizontal .header .inside #wrapper-fechar{ float:left;}
#zoom-visualizer.horizontal .header .inside #zoom .zoom-out { margin: 0 0 0 0;}
#zoom-visualizer.horizontal .header .inside #zoom .zoom-in  { margin: 0 0 0 0;}
#zoom-visualizer.horizontal .header .inside #zoom #barra {  height:4px; width:115px ;}
#zoom-visualizer.horizontal .header .inside #zoom #scroll {display:block; height:5px; width:25px;}
#zoom-visualizer.horizontal .header .inside #zoom img {float: left; margin-left:20px; display: none;}
#zoom-visualizer.horizontal .header{ height: 30px; position: fixed; width: 252px; z-index: 7000; right:10px; top:10px; border:none;}
#zoom-visualizer.horizontal .header .inside #wrapper-fechar{ border:none; float:right;}
#zoom-visualizer.horizontal .header .inside #zoom #wrapper-barra-zoom{ float:left; height:26px; margin:0 3px;}
#zoom-visualizer.horizontal .header .inside #zoom #wrapper-barra-zoom > div{ padding:12px 12px 5px 12px;}
/*--------------------------*/

/*zoom vertical*/
#zoom-visualizer.vertical .header .inside #zoom{ margin:0 0 0 0;  height: 172px;}
#zoom-visualizer.vertical .header .inside #zoom .zoom-out { margin: 2px 0 2px 0;}
#zoom-visualizer.vertical .header .inside #zoom .zoom-in  { margin: 2px 0 0 0;}
#zoom-visualizer.vertical .header .inside #zoom #barra { width:4px; height:115px ; margin-left:12px;}
#zoom-visualizer.vertical .header .inside #zoom #scroll {display:block; width:5px; height:25px;}
#zoom-visualizer.vertical .header .inside #zoom img {float: left; margin-left:20px; display: none;}
#zoom-visualizer.vertical .header{ height: 252px; position: fixed; width: 30px; z-index: 7000; right:10px; top:10px; border:none;}
#zoom-visualizer.vertical .header .inside #wrapper-fechar{ border:none;}
#zoom-visualizer.vertical .header .inside #zoom #wrapper-barra-zoom { width: 28px;}
#zoom-visualizer.vertical .header .inside #zoom #wrapper-barra-zoom .wrapper-barra{ padding:5px 0 5px 0;}
/*--------------------------*/

#zoom-visualizer .content {position: fixed;}
#zoom-visualizer .wrapper{ overflow:hidden; position:relative;}
#zoom-visualizer .content img{ display:none; position:relative; left:0; top:0;}
#zoom-visualizer .content #next{display: block; width: 28px; height: 28px; position: absolute; background: url(img/icon-next.png) no-repeat 2px 0 #313131; top: 50%; right: 50px; z-index:9999;}
#zoom-visualizer .content #before{display: block;width:28px ;height:28px ;position: absolute;background: url(img/icon-before.png) no-repeat 0 0 #313131; top: 50%; left:50px; z-index:9999;}

#zoom-visualizer .footer {background-color: #303030; height: 135px; position: fixed; width: 100%; bottom: 0;}
#zoom-visualizer .footer div a {float: left;width: 200px;height: 104px; margin: 4px 5px 5px 0;position: relative; opacity:.3;}
#zoom-visualizer .footer div a span {width: 100px;height: 104px;position: absolute;top: 0}
#zoom-visualizer .footer div a.ativo,#zoom-visualizer .footer a:hover{ opacity:1;}  
#zoom-visualizer .footer #listagem-imagens > div { margin-top:13px;}
#zoom-visualizer .footer #listagem-imagens .item-zoom-imag {padding-right:20px;}
#zoom-visualizer .footer #listagem-imagens .item-zoom-image img{width:200px;}

#zoom-visualizer .lightbox-ofertas-bg{position:fixed;background:#252525; width: 100%; height: 100%; z-index: 5000;}
#zoom-visualizer .lightbox{ position: absolute;}
#zoom-visualizer .galeria-fotos{display:none;}

#zoom-visualizer #aba-lista{ position:absolute; height:30px; width:140px; left:50%; top:-30px; margin-left:-70px; background-color:#303030; text-decoration:none;}
#zoom-visualizer #aba-lista span{ color:#999999; display:block; text-align:center; padding-top:5px; font-weight:400; font-size:12px;}
#zoom-visualizer #aba-lista span:hover{ color:#ffffff;}

#zoom-visualizer #compare{ position:absolute;width:90px; left:100%; top:-30px; margin-left:-100px; background:#409EFF; text-decoration:none;border-radius: 20px;text-align: center;color:#fff;height:25px;line-height:25px;}
#zoom-visualizer #compare span{ color:#999999; display:block; text-align:center;  font-weight:400; font-size:12px;color:#fff;}
#zoom-visualizer #compare span:hover{ color:#ffffff;}

.loader_overlay{position:fixed; width:31px; height:31px; display:block; left:50%; top:50%; margin:-15px 0 0 -15px; z-index:999999; background-color:#ffffff; padding:10px; border-radius:10px;}

#zoom-visualizer.vertical .tooltip-content{ position:relative;}
#zoom-visualizer.vertical .tooltip-content .tooltip{ position:absolute; top:50%; display:none; margin-top:-13px; width:300px;}
#zoom-visualizer.vertical .tooltip-content .tooltip p{ background-color:#313131; padding:3px 15px; color:#89856d; font-size:14px; margin:0;}
#zoom-visualizer.vertical .tooltip-content .tooltip span{ right:-6px; top:5px; position:absolute; background:url(img/aba-tooltip.png) no-repeat 0 0; width:7px; height:14px; display:block;}

#zoom-visualizer.horizontal .tooltip-content .tooltip{ display:none;}

</style>