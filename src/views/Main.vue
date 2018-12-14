/* eslint-disable vue/no-unused-components */
<template>
  <div class="main-wrap">
    <nav-bar></nav-bar>
    <menu-bar></menu-bar>
    <el-scrollbar class="content-wrap">
      <div class="content">
        <router-view></router-view>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import navBar from 'components/head/Header'
import menuBar from 'components/menu/LeftMenu'
export default {
  components: { navBar, menuBar }
}
</script>

<style lang="scss">
.main-wrap {
  height: 100%;
  .content-wrap {
    position: fixed;
    left: $menu-width;
    top: 61px;
    bottom: 0;
    @include content-width;
    overflow-x: hidden;
    .content {
      padding: 25px;
      min-width: 1100px;
    }
  }
}

@media (max-width: 768px) {
  .main-wrap {
    .content-wrap {
      left: $media-menu-width;
      @include media-content-width;
    }
  }
}
</style>
