<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  height: 100%;
  .el-scrollbar__wrap {
    overflow-x: hidden !important;
  }
}
.el-loading-spinner {
  .path {
    stroke: #eee;
  }
  .el-loading-text {
    color: #eee;
  }
}
</style>
