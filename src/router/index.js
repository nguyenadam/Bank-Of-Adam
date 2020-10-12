import Vue from 'vue'
import VueRouter from 'vue-router'
import Overview from "@/views/Overview"
import Accounts from "@/views/Accounts"
import UnderConstruction from "@/views/UnderConstruction"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: Overview
  },  
  {
    path: '/accounts',
    name: 'Accounts',
    component: Accounts
  },
  {
    path: '/rewards',
    name: 'Rewards',
    component: UnderConstruction
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
