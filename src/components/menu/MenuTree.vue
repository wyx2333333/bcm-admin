<template>
    <div>
        <template v-for="menu in this.menuData">
            <el-submenu :index="menu.id"
                        :key="menu.id"
                        v-if="menu.isSubMenu">
                <template slot="title">
                    <i :class="menu.icon_class"></i>
                    <span slot="title"
                          class="menu-font">{{menu.name}}</span>
                </template>
                <menu-tree :menuData="menu.childLists"></menu-tree>
            </el-submenu>
            <el-menu-item :index="menu.route_path"
                          :key="menu.id"
                          v-else>
                <i :class="menu.icon_class"></i>
                <span slot="title"
                      class="menu-font">{{menu.name}}</span>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
export default {
  name: 'menuTree',
  props: { menuData: Array }
}
</script>
<style lang="scss">
</style>
