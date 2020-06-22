<template lang="html">
  <div class="search-results">
    <div class="padding-top"></div>
    <et-nav></et-nav>
    <el-divider></el-divider>
    <et-search-box></et-search-box>
    <div class="results-list">
      <div class="has-data" v-if="brands.length > 0">
        <div class="brands-filter">
          <h3 class="title">品牌筛选</h3>
          <div class="wrap">
            <el-carousel ref="carousel" trigger="click" arrow="never" :autoplay="false" height="60px" indicator-position="none">
              <el-carousel-item v-for="(item, index) in brands" :key="index">
                <ul class="brand-list"><li class="brand-item" v-for="(it, idx) in item" :key="idx">{{ it.name }}({{ it.count }})</li></ul>
              </el-carousel-item>
            </el-carousel>
            <button class="el-carousel__arrow carousel-previous" @click="previous"><i class="el-icon-caret-left"></i></button>
            <button class="el-carousel__arrow carousel-next" @click="next"><i class="el-icon-caret-right"></i></button>
            <ul class="carousel-indicators">
              <li class="indicator" v-for="item in (brands.length - 1)" :key="item"></li>
            </ul>
          </div>
        </div>
        <div class="product-list">
          <h3 class="title">显示{{ product.totalCount }}产品</h3>
          <el-table :data="product.list" stripe header-row-class-name="product-table-header">
            <el-table-column label="图片" align="center" width="80">
              <template slot-scope="scope"><img :src="scope.row.img" alt="" width="64" height="64"></template>
            </el-table-column>
            <el-table-column label="物料" align="center" min-width="100" prop="name"></el-table-column>
            <el-table-column label="品牌" align="center" min-width="60" prop="brand"></el-table-column>
            <el-table-column label="规格书" align="center" min-width="160" prop="specification"></el-table-column>
            <el-table-column label="图片组数" align="center" min-width="60" prop="pictureGroups"></el-table-column>
            <el-table-column label="是否存在检测类图片" align="center" min-width="180">
              <!-- <template slot-scope="scope">
              </template> -->
            </el-table-column>
          </el-table>
           <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="10"
            layout="prev, pager, next, jumper"
            :total="100"
            hide-on-single-page>
          </el-pagination>
        </div>
      </div>
      <div class="no-data" v-else>
        <p class="no-results">No results were found for ABC.</p>
        <el-button type="primary" @click="clickHandler">提交新增数据申请</el-button>
      </div>
    </div>
    <et-footer></et-footer>
  </div>
</template>

<script>
import productMockData from './product';

export default {
  name: 'SearchResults',
  data() {
    /* simulate brands */
    const brands = [];
    for (let i = 0; i < 4; i += 1) {
      const brandList = [
        {
          name: 'ABC',
          count: '3, 925',
        },
        {
          name: 'EFG',
          count: '4, 925',
        },
        {
          name: 'HIJ',
          count: '5, 925',
        },
        {
          name: 'KLM',
          count: '6, 925',
        },
        {
          name: 'NOP',
          count: '7, 925',
        },
      ];
      brands.push(brandList);
    }
    return {
      brands,
      product: {
        totalCount: '15, 000',
        list: productMockData,
      },
      currentPage: 1,
    };
  },
  methods: {
    previous() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    },
    clickHandler() {
      console.log('apply data uploading!');
    },
    handleCurrentChange(page) {
      console.log(`当前页: ${page}`);
    },
  },
};
</script>

<style lang="stylus">
.search-results
  .padding-top
    height: 30px
    background: $black
  .el-divider--horizontal
    margin: 0
  .brands-filter
    padding: 20px 0
    .title
      width: 80%
      margin: 0 auto
      margin-bottom: 20px
      fonts-size: 32px
    .wrap
      position: relative
      width: 90%
      margin: 0 auto
      .el-carousel
        width: 90%
        margin: 0 auto
        .brand-list
          display: flex
          align-items: center
          justify-content: space-between
          .brand-item
            width: 190px
            height: 60px
            padding: 10px
            color: $blue
            border-radius: 8px
            border: 1px solid $grey2
      .carousel-previous
        absolute: left 1.5% top 20px
      .carousel-next
        absolute: right 2.5% top 20px
      .el-carousel__arrow
        color: $grey2
        font-size: 48px
        background-color: transparent
  .product-list
    .product-table-header > th
      background: #FAFAFA
</style>

<style lang="stylus" scoped>
.search-results
  display: flex
  flex-flow: column
  min-height: 100vh
  .results-list
    flex: 1
    .product-list
      .title
        padding-top: 20px
</style>
