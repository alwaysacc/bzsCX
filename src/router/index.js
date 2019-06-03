import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/login'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  /*  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },*/
  {
    path: '/',
    component: Layout,
    redirect: '/user',
    name: '',
    hidden: true,
    meta: { title: '', icon: 'user' }
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/addQuote',
    name: '客户',
    meta: { title: '客户', icon: 'user' },
    children: [
      {
        path: 'addQuote',
        name: '新增报价',
        component: () => import('@/views/user/addQuote'),
        meta: { title: '新增报价' }
      },
      {
        path: 'addQuote2',
        name: '完善行驶证信息',
        hidden: true,
        component: () => import('@/views/user/addQuote2'),
        meta: { title: '完善行驶证信息' }
      },
      {
        path: 'selectInsurance',
        name: '选择险种',
        hidden: true,
        component: () => import('@/views/user/selectInsurance'),
        meta: { title: '选择险种' }
      },
      {
        path: 'submitQuote',
        name: '精准比价',
        hidden: true,
        component: () => import('@/views/user/submitQuote'),
        meta: { title: '精准比价' }
      },
      {
        path: 'updateCar',
        name: '完善行驶证信息',
        hidden: true,
        component: () => import('@/views/user/updateCar'),
        meta: { title: '完善行驶证信息' }
      },
      {
        path: 'userList',
        name: '客户列表',
        component: () => import('@/views/user/userList'),
        meta: { title: '客户列表' }
      },
      {
        path: 'batchRenewal',
        name: '批量续保',
        hidden: true,
        component: () => import('@/views/user/batchRenewal'),
        meta: { title: '批量续保' }
      },
      {
        path: 'orderList',
        name: '订单列表',
        component: () => import('@/views/user/orderList'),
        meta: { title: '订单列表' }
      },
      {
        path: 'orderDetail',
        name: '订单详情',
        hidden: true,
        component: () => import('@/views/user/orderDetail'),
        meta: { title: '订单详情' }
      },
      {
        path: 'warranty',
        name: '已出保单',
        component: () => import('@/views/user/warranty'),
        meta: { title: '已出保单' }
      },
      {
        path: 'defeatedList',
        name: '战败列表',
        hidden: true,
        component: () => import('@/views/user/defeatedList'),
        meta: { title: '战败列表' }
      },
      {
        path: 'retrieveList',
        name: '回收站',
        component: () => import('@/views/user/retrieveList'),
        meta: { title: '回收站' }
      },
      {
        path: 'userDetail',
        name: '客户详情',
        hidden: true,
        component: () => import('@/views/user/userDetail'),
        meta: { title: '客户详情' }
      },
      {
        path: 'createOrder',
        name: '完善订单',
        hidden: true,
        component: () => import('@/views/user/createOrder'),
        meta: { title: '完善订单' }
      },
      {
        path: 'insuranceInfo',
        name: '投保详情',
        hidden: true,
        component: () => import('@/views/user/insuranceInfo'),
        meta: { title: '投保详情' }
      }
    ]
  },

  {
    path: '/organ',
    component: Layout,
    redirect: '/organ/roleManage',
    name: '组织',
    meta: { title: '组织', icon: 'tree' },
    children: [
      {
        path: 'roleManage',
        name: '角色管理',
        component: () => import('@/views/organization/roleManage'),
        meta: { title: '角色管理' }
      },
      {
        path: 'salesmanList',
        name: '业务员列表',
        component: () => import('@/views/organization/salesmanList'),
        meta: { title: '业务员列表' }
      },
      {
        path: 'salesmanRegister',
        name: '业务员注册',
        component: () => import('@/views/organization/salesmanRegister'),
        meta: { title: '业务员注册' }
      }
    ]
  },
  {
    path: '/account',
    component: Layout,
    redirect: '/account/oneEntry',
    name: '台账',
    meta: { title: '台账', icon: 'taizhang' },
    children: [
      {
        path: 'oneEntry',
        name: '单个录入',
        component: () => import('@/views/account/oneEntry'),
        meta: { title: '单个录入', role: ['admin'] }
      },
      {
        path: 'batchCapture',
        name: '批量抓单',
        component: () => import('@/views/account/batchCapture'),
        meta: { title: '批量抓单' }
      },
      {
        path: 'accountList',
        name: '台账列表',
        component: () => import('@/views/account/accountList'),
        meta: { title: '台账列表' }
      },
      {
        path: 'correctionCarNo',
        name: '批改车牌',
        component: () => import('@/views/account/correctionCarNo'),
        meta: { title: '批改车牌' }
      }
    ]
  },
  /*  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },*/

  /*  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },*/

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
