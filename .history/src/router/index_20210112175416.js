import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home'),
  },
  {
    path: '/results',
    name: 'SearchResults',
    component: () => import('@/views/SearchResults'),
  },
  {
    path: '/details/:goodId?',
    name: 'GoodDetails',
    props: true,
    component: () => import('@/views/GoodDetails'),
  },
  {
    path: '/detect',
    name: 'Detect',
    component: () => import('@/views/Detect.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/data-apply',
    name: 'DataApply',
    component: () => import('@/views/DataApply.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/report-download',
    name: 'ReportDownload',
    component: () => import('@/views/ReportDownload.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/contrast-details',
    name: 'ContrastDetails',
    component: () => import('@/views/ContrastDetails.vue'),
  },
  {
    path: '/dataApply',
    name: 'DataApply',
    component: () => import('@/views/DataApply.vue'),
  },
  // 数据申请
  {
    path: '/NewsDetail/:id',
    name: 'NewsDetail',
    component: () => import('@/views/NewsDetail.vue'),
  },
  //个人中心
  {
    path: '/zone/UserInfo',
    name: 'Zone',
    meta: { requireAuth: true },
    component: () => import('@/views/zone/index.vue'),
    children:[
      {
        path: '/zone/UserInfo',
        name: 'UserInfo',
        meta: { requireAuth: true },
        component: () => import('@/views/zone/UserInfo.vue'),
      },
      {
        path: '/zone/vip',
        name: 'Vip',
        meta: { requireAuth: true },
        component: () => import('@/views/zone/Vip.vue'),
      },
      {
        path: '/zone/Password',
        name: 'Password',
        meta: { requireAuth: true },
        component: () => import('@/views/zone/Password.vue'),
      },
      {
        path: '/zone/pwdset',
        name: 'PwdSet',
        meta: { requireAuth: true },
        component: () => import('@/views/zone/PwdSet.vue'),
      },
      {
        path: '/zone/realnameauth',
        name: 'RealNameAuth',
        meta: { requireAuth: true },
        component: () => import('@/views/zone/RealNameAuth.vue'),
      },
      {
        path: '/zone/entrustorder',
        name: 'EntrustOrder',
        meta: { requireAuth: true },
        component: () => import('@/views/zone/EntrustOrder.vue'),
      },
      {
        path: '/zone/viewinvoice',
        name: 'ViewInvoice',
        meta: { requireAuth: true },
        component: () => import('@/views/zone/ViewInvoice.vue'),
      },
      {
        path: '/zone/applyinvoice',
        name: 'ApplyInvoice',
        meta: { requireAuth: true },
        component: () => import('@/views/zone/ApplyInvoice.vue'),
      },
      {
        path: '/zone/addresslist',
        name: 'AddressList',
        meta: { requireAuth: true },
        component: () => import('@/views/zone/AddressList.vue'),
      },
      {
        path: '/zone/dataapply',
        name: 'AddressList',
        meta: { requireAuth: true },
        component: () => import('@/views/zone/DataApply.vue'),
      },
      //发票抬头
      {
        path: '/zone/invoicetitle',
        name: 'InvoiceTitle',
        meta: { requireAuth: true },
        component: () => import('@/views/zone/InvoiceTitle.vue'),
      }
      
     
    ]

  },
  
  
];

const router = new VueRouter({
  // use hash instead of history to avoid accessing route with relative path
  // https://cli.vuejs.org/zh/config/#publicpath
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

//全局路由守卫
// router.beforeEach((to,from,next)=>{
//   console.log('navligation.guards');
//   // to:Route:即将要进入的目标，路由对象
//   // from:Route
// })

// router.beforeEach((to, from, next) => {
//   console.log("tototototo",to)
//   console.log("fromfromfromfromfrom",from)

//   const predefinedRoutes = router.options.routes;
//   const routeNames = predefinedRoutes.map((route) => route.name);
//   // this.$message({
//   //   type: 'warning',
//   //   message: '请先登录！',
//   //   onClose() {
//   //     self.$router.go(-1);
//   //   },
//   // });
//   // if (routeNames.indexOf(to.name) < 0) {
//   //   console.log("我跳转的吗")
//   //   next({ path: from.path });
//   // } else {
//   //   next();
//   // }
//   next()
// });

export default router;
