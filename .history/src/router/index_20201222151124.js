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
    path: '/NewsDetail/:id',
    name: 'NewsDetail',
    component: () => import('@/views/NewsDetail.vue'),
  },
  {
    path: '/zone',
    name: 'Zone',
    component: () => import('@/views/zone/'),
  },
  //个人中心
  {
    path: '/zone',
    name: 'Zone',
    component: () => import('@/views/zone/'),
  },
];

const router = new VueRouter({
  // use hash instead of history to avoid accessing route with relative path
  // https://cli.vuejs.org/zh/config/#publicpath
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});



router.beforeEach((to, from, next) => {
  console.log("tototototo",to)
  console.log("fromfromfromfromfrom",from)

  const predefinedRoutes = router.options.routes;
  const routeNames = predefinedRoutes.map((route) => route.name);
  // this.$message({
  //   type: 'warning',
  //   message: '请先登录！',
  //   onClose() {
  //     self.$router.go(-1);
  //   },
  // });
  // if (routeNames.indexOf(to.name) < 0) {
  //   console.log("我跳转的吗")
  //   next({ path: from.path });
  // } else {
  //   next();
  // }
  next()
});

export default router;
