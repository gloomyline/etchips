<template lang="html">
  <div class="search-results">
    <div class="padding-top"></div>
    <et-nav></et-nav>
    <el-divider></el-divider>
    <et-search-box></et-search-box>
  </div>
</template>

<script>
export default {
  name: 'SearchResults',
};
</script>

<style lang="stylus">
.search-results
  .padding-top
    height: 30px
    background: $black
  .el-divider--horizontal
    margin: 0
</style>
