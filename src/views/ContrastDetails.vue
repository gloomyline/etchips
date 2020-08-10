<template lang="html">
  <div class="contrast-details">
    <et-header></et-header>
    <et-nav></et-nav>
    <div class="contrast-content">
      <el-table :data="contrastives" style="width: 80%;margin: 10px auto 0 auto;" border>
        <el-table-column label="物料图片" width="160" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.headPicturePath" width="128" height="128">
          </template>
        </el-table-column>
        <el-table-column label="品牌" min-width="180" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.brand && scope.row.brand.brandName }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="materialNumber" label="物料号" min-width="160" align="center"></el-table-column>
        <el-table-column prop="coo" label="产地" min-width="80" align="center"></el-table-column>
        <el-table-column prop="dc" label="年份" min-width="120" align="center"></el-table-column>
        <el-table-column label="供应商" min-width="120" align="center">
          <template slot-scope="scope"><span>{{ scope.row.supplier && scope.row.supplier.supplierName }}</span></template>
        </el-table-column>
      </el-table>
    </div>
    <et-footer></et-footer>
  </div>
</template>

<script>
export default {
  name: 'ContrastDetails',
  computed: {
    contrastives() {
      return this.$store.state.contrastives;
    },
  },
};
</script>

<style lang="stylus"></style>
