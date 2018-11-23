// 路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// import About from '../pages/About.vue'
// import Home from '../pages/Home.vue'
//
// import News from '../pages/News'
// import Message from '../pages/Message'
//
// import MessageDetail from '../pages/MessageDetail'

import Index from "@/components/Index"
import Course from "@/components/Course"
import Micro from "@/components/Micro"
import News from "@/components/News"

Vue.use(VueRouter)

export default new VueRouter({
  //n个路由
  routes: [
    {
      path: '/index',

      component: Index,
    },
    {
      path: '/news',

      component: News,
    },
    {
      path: '/course',

      component: Course,
    },
    {
      path: '/micro',

      component: Micro,
    },

    // {
    //   path: '/home',
    //   component: Home,
    //   children: [
    //     {
    //       path: '/home/news',
    //       component: News,
    //     },
    //     {
    //       path: 'message',
    //       component: Message,
    //       children: [
    //         {
    //           path: '/home/message/detail/:id',
    //           component: MessageDetail,
    //         },
    //       ]
    //     },
    //     {
    //       path: "",
    //       // component: News,
    //       redirect: "/home/news",
    //     },
    //   ]
    // },

    {
      // 根路由
      path: "/",
      redirect: "/index"
    }
  ]
})
