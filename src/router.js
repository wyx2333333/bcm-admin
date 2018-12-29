/** @format */

import Vue from 'vue'
import Router from 'vue-router'

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
      component: () => import('views/Login')
    },
    {
      path: '/main',
      component: () => import('views/Main'),
      meta: {
        requiresLogin: true
      },
      children: [
        {
          name: '用户管理',
          path: 'system/user',
          component: () => import('components/content/system-manage/UserManage')
        },
        {
          name: '节点管理',
          path: 'system/node',
          component: () => import('components/content/system-manage/NodeManage')
        },
        {
          name: '复制管理',
          path: 'copy',
          component: () => import('components/content/copy-manage/CopyManage')
        },
        {
          name: '恢复管理',
          path: 'recovery',
          component: () =>
            import('components/content/recovery-manage/RecoveryManage')
        },
        {
          name: '迁移管理',
          path: 'protection/migration',
          component: () =>
            import('components/content/full-server-protection/FullServerMigration')
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
