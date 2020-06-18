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
    path: '/details',
    name: 'GoodDetails',
    component: () => import('@/views/GoodDetails'),
  },
  {
    path: '/detect',
    name: 'Detect',
    component: () => import('@/views/Detect.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
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
