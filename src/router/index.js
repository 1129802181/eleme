import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import goods from '@/components/goods'
import ratings from '@/components/ratings'
import seller from '@/components/seller'
// eslint-disable-next-line
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',
          component: goods,
          redirect: '/goods'
        },
        {
          path: '/goods',
          component: goods
        },
        {
          path: '/ratings',
          component: ratings
        },
        {
          path: '/seller',
          component: seller
        }
      ]
    }
  ]
})
