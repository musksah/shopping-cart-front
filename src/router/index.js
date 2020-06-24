import Vue from 'vue'
import Router from 'vue-router'
import CartLayout from '@/layouts/CartLayout'
import ReviewPay from '@/layouts/ReviewPay'

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
      name: 'cartLayout',
      component: CartLayout,
    },
    {
      path: '/pay-review',
      name: 'pay-review',
      component: ReviewPay,
    },
  ]
})
