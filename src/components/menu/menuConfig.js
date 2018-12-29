/** @format */

/* 菜单数据 */
const menuData = [
  {
    id: '0',
    name: '系统管理',
    icon_class: 'el-icon-menuicon-desktop',
    isSubMenu: true,
    childLists: [
      {
        id: '0-1',
        name: '用户管理',
        icon_class: 'el-icon-menuicon-user',
        route_path: '/main/system/user',
        isSubMenu: false
      },
      {
        id: '0-2',
        name: '节点管理',
        icon_class: 'el-icon-menuicon-tag',
        route_path: '/main/system/node',
        isSubMenu: false
      }
    ]
  },
  {
    id: '1',
    name: '复制管理',
    icon_class: 'el-icon-menuicon-file-copy',
    route_path: '/main/copy',
    isSubMenu: false
  },
  {
    id: '2',
    name: '恢复管理',
    icon_class: 'el-icon-menuicon-sync',
    route_path: '/main/recovery',
    isSubMenu: false
  },
  {
    id: '3',
    name: '保护管理',
    icon_class: 'el-icon-menuicon-insurance',
    isSubMenu: true,
    childLists: [
      {
        id: '3-1',
        name: '迁移管理',
        icon_class: 'el-icon-menuicon-swap',
        route_path: '/main/protection/migration',
        isSubMenu: false
      }
    ]
  }
]

export default {
  MENU_DATA: menuData
}
