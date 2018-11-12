/* eslint-disable vue/no-unused-components */
<template>
  <el-scrollbar class="menu-wrap">
    <div class="menu-title menu-font">菜单</div>
    <el-menu router
             :default-active="$route.path"
             :collapse="isCollapse"
             text-color="#606266"
             background-color="#F2F6FC">
      <menu-tree :menuData="this.menuData"></menu-tree>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import menuTree from 'components/menu/MenuTree'
export default {
  components: { menuTree },
  data() {
    return {
      menuData: [],
      isCollapse: null
    }
  },
  mounted() {
    this.getMenuDate()
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  methods: {
    getMenuDate() {
      this.$service
        .getMenuData()
        .then(result => {
          this.menuData = result.MENU_DATA
        })
        .catch(reason => {
          console.error(reason)
        })
    },
    handleResize() {
      document.body.clientWidth < 768
        ? (this.isCollapse = true)
        : (this.isCollapse = false)
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>
<style lang="scss">
.menu-wrap {
  width: 210px;
  position: fixed;
  top: 61px;
  bottom: 0;
  left: 0;
  z-index: 999;
  border-right: 1px solid #dcdfe6;
  background-color: #f2f6fc;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  .menu-title {
    padding: 30px 0 0 20px;
    color: #909399;
    line-height: 30px;
    font-size: 13px;
  }
  .el-menu {
    border-right: none;
    .el-submenu__title i,
    .el-menu-item {
      &.is-active {
        border-right: 2px solid;
        i {
          color: #409eff;
        }
      }
      i {
        color: #606266;
      }
    }
  }
}
@media (max-width: 768px) {
  .menu-wrap {
    width: 63px;
    .el-submenu__title span {
      display: none;
    }
  }
}
</style>
