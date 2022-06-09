import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../app/App.vue'
Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => App,
    meta: { title: "Home" }
  },
  { path: '*', redirect: '/' }
]


const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
});

// router.beforeEach(async (to, from, next) => {
//   if (to.matched.some(record => record.meta.loged) && !localStorage.user) {
//     next({ name: 'Login' })
//     return;
//   }
// })

export default router;
