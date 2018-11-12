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
    left: 210px;
    top: 61px;
    bottom: 0;
    width: calc(100% - 210px);
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
      left: 63px;
      width: calc(100% - 63px);
    }
  }
}
</style>
