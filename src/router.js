/** @format */

import Vue from 'vue'
import Router from 'vue-router'
import Login from 'views/Login'
import Main from 'views/Main'
import UserManage from 'components/content/system-manage/UserManage'
import NodeManage from 'components/content/system-manage/NodeManage'
import CopyManage from 'components/content/copy-manage/CopyManage'
import ClusterManage from 'components/content/cluster-manage/ClusterManage'
import RecoveryManage from 'components/content/recovery-manage/RecoveryManage'
import FullServerMigration from 'components/content/full-server-protection/FullServerMigration'
import Tools from 'components/content/tool/Tools'
import Logs from 'components/content/log/Logs'

Vue.use(Router)
const router = new Router({
  mode: 'history', // 该模式下没有#前缀，而且可以使用pushState和replaceState来管理记录
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/main',
      component: Main,
      meta: {
        requiresLogin: true
      },
      children: [
        {
          name: '用户管理',
          path: 'system/user',
          component: UserManage
        },
        {
          name: '节点管理',
          path: 'system/node',
          component: NodeManage
        },
        {
          name: '复制管理',
          path: 'copy',
          component: CopyManage
        },
        {
          name: '集群管理',
          path: 'cluster',
          component: ClusterManage
        },
        {
          name: '恢复管理',
          path: 'recovery',
          component: RecoveryManage
        },
        {
          name: '全服务器迁移',
          path: 'protection/migration',
          component: FullServerMigration
        },
        {
          name: '实用工具',
          path: 'tool',
          component: Tools
        },
        {
          name: '日志管理',
          path: 'log',
          component: Logs
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin)) {
    if (sessionStorage.getItem('user') && sessionStorage.getItem('password')) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
export default router
