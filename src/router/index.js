import Vue from 'vue'
import VueRouter from 'vue-router'
import exhibition from '../page/exhibition/index.vue'
import pressCenter from '../page/press_center/press_center'
// import message from '@/page/press_center/subpage/message/message'
// import article from '@/page/press_center/subpage/article/article'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'exhibition',
    component: exhibition
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: () => import('../page/home_page/index.vue')
  },
  {
    path: '/press_center/:name',
    component: pressCenter,
    beforeEnter: (to, from, next) => {
      // console.log(to, from)
      next()
    }
    // ,
    // children: [
    //   {
    //     path: '',
    //     component: message
    //   },
    //   {
    //     path: 'message',
    //     name: 'message',
    //     component: message
    //   },
    //   {
    //     path: 'article',
    //     name: 'article',
    //     component: article
    //   }
    // ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
