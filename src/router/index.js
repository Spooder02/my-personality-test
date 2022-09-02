import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import ptlist from '@/views/personality-tests.vue'
import lifestylept from '@/views/lifestyle-personality.vue'
import lifestylepttest from '@/views/lifestyle-personality-test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/personality-tests',
    name: 'ptlist',
    component: ptlist
  },
  {
    path: '/lifestyle-personality',
    name: 'lifestyle-personality',
    component: lifestylept
  },
  {
    path: '/lifestyle-personality-test',
    name: 'lifestyle-personality-test',
    component: lifestylepttest
  },
  {
    path: '/results',
    name: 'results',
    component: require('@/views/result.vue').default,
    props: true
  }, 
  {
    path: '/school-personality',
    name: 'school-personality',
    component: require('@/views/school-personality.vue').default,
    props: true
  },
  {
    path: '/school-personality-test',
    name: 'school-personality-test',
    component: require('@/views/school-personality-test.vue').default,
    props: true
  },
  {
    path: '/chatbot-test',
    name: 'chatbot-test',
    component: require('@/views/chatbot-test.vue').default
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
