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
import menuConfig from 'components/menu/menuConfig'
export default {
  components: { menuTree },
  data() {
    return {
      menuData: [],
      isCollapse: null
    }
  },
  mounted() {
    this.menuData = menuConfig.MENU_DATA
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  methods: {
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
  width: $menu-width;
  position: fixed;
  top: 61px;
  bottom: 0;
  left: 0;
  z-index: 999;
  border-right: 1px solid $border-1;
  background-color: $border-4;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  .menu-title {
    padding: 30px 0 0 20px;
    color: $grey;
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
          color: $blue;
        }
      }
      i {
        color: $text-2;
      }
    }
  }
}
@media (max-width: 768px) {
  .menu-wrap {
    width: $media-menu-width;
    .el-submenu__title span {
      display: none;
    }
  }
}
</style>
