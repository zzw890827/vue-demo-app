import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/shopping-site-app',
      name: 'e-shopping',
      component: () => import('./views/ShoppingSite'),
    },
    {
      path: '/todo-list-app',
      name: 'todo list',
      component: () => import('./views/TodoList'),
    }
  ]
});
