<template lang="html">
  <div class="et-search-box">
    <div class="wrap">
      <img src="@/components/etNav/icon-et-logo.png" alt="" class="et-logo">
      <el-input placeholder="请输入后回车搜索" v-model="searchContent" class="search" @keyup.enter=""  v-on="$listeners">
        <el-button slot="append" icon="el-icon-search" @click="onSearchClick($event)"></el-button>
      </el-input>
      <div class="hot-search-labels">
        <span class="label">热门搜索：</span>
        <ul class="hots">
          <li class="hot" v-for="(item, index) in hots" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EtSearchBox',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
  },
  data() {
    return {
      searchContent: '',
      selected: '0',
      hots: ['DM7404M', 'MBR20100CT-G1'],
    };
  },
  watch: {
    value(val) {
      this.searchContent = val;
    },
    searchContent(val) {
      this.$emit('input', val);
    },
  },
  methods: {
    onSearchClick(e) {
      this.$emit('search', this.value, e);
    },
  },
};
</script>

<style lang="stylus">
.et-search-box
  width: 100%
  background: $black
  .wrap
    display: flex
    align-items: center
    justify-content: space-between
    width: 80%
    height: 120px
    margin: 0 auto
    img
      width: 200px
    .search
      width: 48%
      .el-input--suffix > input
        width: 120px
    .hot-search-labels
      font-size: 0
      .label
        display: inline-block
        vertical-align: middle
        margin-right: 10px
        font-size: 16px
        color: $white
      .hots
        display: inline-block
        vertical-align: middle
        .hot
          display: inline-block
          vertical-align: top
          padding: 4px 6px
          font-size: 14px
          color: $blue
          border-radius: 4px
          background-color: $grey4
          &:first-child
            margin-right: 10px
</style>
