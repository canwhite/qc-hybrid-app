/*
 * @Author: liyafei liyafei@csii.com.cn
 * @Date: 2023-02-23 18:42:45
 * @LastEditors: liyafei liyafei@csii.com.cn
 * @LastEditTime: 2023-02-24 15:53:54
 * @FilePath: /qc-hybrid-app/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
import ExampleView from '../components/ExampleView.vue';

// import HomePage from '../views/HomePage.vue'

// const routes = [
//   {
//     path: '/',
//     redirect: '/home'
//   },
//   {
//     path: '/home',
//     name: 'Home',
//     component: HomePage
//   }
// ]
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: ExampleView,
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: 'home',
        component: () => import('../views/HomePage.vue'),
      },
      {
        path: 'radio',
        component: () => import('../views/RadioPage.vue'),
      },
      {
        path: 'library',
        component: () => import('../views/LibraryPage.vue'),
      },
      {
        path: 'search',
        component: () => import('../views/SearchPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  // Use: createWebHistory(process.env.BASE_URL) in your app
  history: createWebHistory(),
  routes
})

export default router
