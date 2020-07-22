import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

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
];

const router = new VueRouter({
  // use hash instead of history to avoid accessing route with relative path
  // https://cli.vuejs.org/zh/config/#publicpath
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const predefinedRoutes = router.options.routes;
  const routeNames = predefinedRoutes.map((route) => route.name);
  if (routeNames.indexOf(to.name) < 0) {
    next({ path: from.path });
  } else {
    next();
  }
});

export default router;
