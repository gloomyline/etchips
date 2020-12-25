<template>
  <div class="container">
    <eheader ></eheader>
    <div class="wrapper">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>搜索</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="content">
        <div class="searchInfo" v-if="searchContent.length != 0 ">
          您搜索的<span> “{{searchContent}}” </span>查询结果如下
        </div>
        <div class="data"  v-if="brandList.length > 0">
          <div class="brandSelect">
            <div class="title">品牌筛选</div>
            <div :class="isBrandMore?'tags unfold':'tags'">
              <ul ref="brand">
                <li class="brand-item" 
                  :id="'brand'+idx"
                  :class="{active: selectedBrandId === it.id}"
                  v-for="(it, idx) in displayList"
                  :key="idx" @click="selectBrand(it.id)"
                  v-trigger>
                {{ it.brandName }}({{ it.level }})
                </li>
              </ul> 
            </div>
            <div class="fold">
              <el-button type="text" @click="isBrandMore = !isBrandMore">
                {{ isBrandMore ? '收起品牌' : '更多品牌>>' }}
                <!-- {{isBrandMore}} -->

              </el-button>
            </div>
          </div>
          <!-- ```` -->
          <div class="product-list">
          <template v-if="product.totalCount">
            <h3 class="title" > 显示 {{ product.totalCount }} 记录</h3>
          </template>
          
          <el-table :data="product.list" stripe border header-row-class-name="product-table-header" v-loading="tableLoading">
            <el-table-column label="图片" align="center" width="80">
              <template slot-scope="scope"><img :src="scope.row.headPicturePath" @click="preview" alt="" width="64" height="64" style="cursor: pointer;"></template>
            </el-table-column>
            <el-table-column label="物料" align="center" min-width="100">
              <template slot-scope="scope"><a href="##" @click.stop="gotoGoodDetails(scope.row.brandName, scope.row.materialNumber)" >{{ scope.row.materialNumber }}</a></template>
            </el-table-column>
            <el-table-column label="品牌" align="center" min-width="80">
              <template slot-scope="scope"><span>{{ scope.row.brandName }}</span></template>
            </el-table-column>
            <!-- <el-table-column label="规格书" align="center" min-width="160" prop="classification"></el-table-column> -->
            <el-table-column label="图片组数" align="center" width="160" prop="picGroups"></el-table-column>
            <el-table-column label="是否存在检测类图片" align="center" width="160">
              <template slot-scope="scope">
                <i class="el-icon-success" v-if="scope.row.checkPicExist"></i>
                <i class="el-icon-error" v-else></i>
              </template>
            </el-table-column>
            <el-table-column label="操作" align="center" >
              <template slot-scope="scope">
                <!-- <a  style="cursor: pointer;">{{ scope.row.materialNumber }}</a> -->
                <el-button type="primary" size="mini" @click="gotoGoodDetails(scope.row.brandName, scope.row.materialNumber)">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
           <el-pagination
            class="align-center"
            @current-change="handleCurrentChange"
            :current-page.sync="pageConfig.current"
            :page-size="pageConfig.pageSize"
            layout="prev, pager, next, jumper"
            :total="pageConfig.total"
            style="padding-top: 10px;"
            hide-on-single-page>
          </el-pagination>
        </div>
        <!-- ``````   -->

        </div>
        <div class="noData" v-show="noData">
          <div class="icon">
            <span class="iconfont icon-nanguo"></span>
            
          </div>
          <div class="tips">
            很抱歉，没有找到 <span> “{{searchContent}}”　</span> 相关内容
          </div>
          <div class="btn">
            <el-button type="primary" round>提交数据申请</el-button>
          </div>
          <div class="hotsearch">
            <div class="title">最近热门搜索</div>
            <div class="search">
              <ul>
                <li class="item">哈哈全</li>
                <li class="item">meartue</li>
                <li class="item">meartue</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <efooter></efooter>
  </div> 
</template>

<script>
import api from '@/api';

export default {
  name: 'SearchResults',
  data() {
    return {
      selectedBrandId: null,
      product: {
        totalCount: 0,
        list: [],
      },
      noData:false,
      searchContent: '',
      tableLoading: false,
      pageConfig: {
        current: 1,
        pageSize: 10,
        total: 0,
      },
      defaultDisplay: 6,
      brandList: [],
      displayList: [],
      isdisplayList:false,
      moreBrands: [],
      isBrandMore: false,
    };
  },

   directives:{
    trigger:{
     inserted(el, binging){
        console.log("el.id```````",el.id,el)
        el.id == "brand0" ? el.click() : null // 只点击第一个，id是在循环中手动添加的
       // $(el).trigger('click')  // 所有都触发一次,然后就是最后一个
      }
    }
  },
  watch: {
  //   selectedBrandId() {
  //     this.search();
  //   },
    searchContent(newValue,oldValue){
      if(newValue != oldValue ){
        this.fetchBrands()
        // this.search()
      }
    },
    $route(to,from){
    console.log("to",to.query.searchContent);
    this.search()
  }
    
    // displayList(newValue,oldValue){
    //   if(newValue == []){
    //     this.isdisplayList = false
    //   }else {
    //     this.isdisplayList = true
    //   }
    // }
    

  },
  async created() {
    
    this.searchContent = this.$route.query.searchContent;
    await this.fetchBrands();
    // await this.search();
  },
  mounted(){
    console.log("this.$refs.first",this.$refs.first)
  },
  updated(){
    console.log("updated",this.$refs.brand)
  },
  methods: {
    cancelRequest() {
      if (typeof this.source === 'function') {
        this.source()
      }
    },
    async fetchBrands() {
      // const brandList = (await api.home.fetchBrands(this.searchContent)).filter((brand) => brand.level > 0);
      // console.log(brandList)
      // this.brandList = []
      
      const brandList = await api.home.fetchBrands(this.searchContent)
      // const brandList = await axios.get('/chi/homePage/free/findAllBrands',{ params: { material: this.searchContent } })
      // debugger
      console.log("brandList``````",brandList)
      // if(brandList.length == 0){
      //   console.log("asdf")
      //   this.displayList = []
      // }
      console.log("brandList.length",brandList.length)
      // if (brandList.length == 0) {
      //   console.log("没有品牌")
      // }
      if(brandList.length == 0){
        this.noData = true
      }else{
        this.noData = false
      }
      this.brandList = brandList;
      // this.displayList = brandList.splice(0, this.defaultDisplay);
      this.displayList = brandList

      console.log("displayList.length",this.displayList.length)
      // this.moreBrands = brandList;
      await this.search()
    },
    async search() {
      // await this.fetchBrands();
      // console.log("data1111111111",data)
      // this.product.list = []
      this.searchContent = this.$route.query.searchContent;
      this.tableLoading = true;
      // this.searchContent= data
      const payload = {
        material: this.searchContent,
        brandIds: this.selectedBrandId,
        page: this.pageConfig.current,
        limit: this.pageConfig.pageSize,
      };
      console.log("payload",payload)
      const response = await api.home.search(payload);
      console.log("res``````",response)
      this.pageConfig.total = response.count;
      this.product.totalCount = String(response.count);
      this.product.list = response.data;
      this.tableLoading = false;
    },
    previous() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    },
    preview() {
    },
    clickHandler() {
      console.log('apply data uploading!');
    },
    handleCurrentChange(page) {
      console.log(`当前页: ${page}`);
      this.pageConfig.current = page
      this.search()
      
    },
    gotoGoodDetails(brandName, materialNumber) {
      this.$router.push({ name: 'GoodDetails', query: { brandName, materialNumber } });
    },
    selectBrand(brandId) {
      this.selectedBrandId = brandId;
      this.search()

    },
    contrast(imgUrl, brandName, materialNumber) {
      this.$store.commit('addContrast', { imgUrl, brandName, materialNumber });
      this.$store.commit('showContrastBar');
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .product-table-header th{
  background:#ececec
}
.container {
  background:#f7f7f7;
  position: relative;
  .wrapper{
    min-height: 700px;
    padding:20px 0;
    position: relative;
    width:1164px;
    left:0;
    right:0;
    margin:0 auto;
    .content {
      min-height: 700px;
      margin:20px 0;
      padding:50px;
      background:#fff;
      border:1px solid #e9e9e9;
      
    }
  }

}
  
</style>


