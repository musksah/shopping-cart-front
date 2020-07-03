import Vue from 'vue'
import Router from 'vue-router'
import ReviewPay from '@/views/ReviewPay'
import ListItems from '@/views/ListItems'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Listitems',
      component: ListItems,
    },
    {
      path: '/pay-review',
      name: 'pay-review',
      component: ReviewPay,
    },
  ],
  mode: `history`,
})
