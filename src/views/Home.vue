<template>
  <div class="home">
    <et-header></et-header>
    <et-nav has-prefix></et-nav>
    <et-carousel></et-carousel>
    <div class="et-module-nav">
      <ul class="modules">
        <li class="module">
          <img src="@/assets/icon-detect.png" class="icon" width="64" height="64">
          <p class="label">物料验真</p>
        </li>
        <li class="module">
          <img src="@/assets/icon-files-download.png" alt="" class="icon" width="64" height="64">
          <p class="label">报告下载</p>
        </li>
        <li class="module">
          <img src="@/assets/icon-customer-define.png" alt="" class="icon" width="64">
          <p class="label">用户定制</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import EtCarousel from '@/components/etCarousel/EtCarousel';

export default {
  name: 'Home',
  components: { EtCarousel },
};
</script>

<style lang="stylus">
</style>
