import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../components/HomeLayout.vue";


const routes = [
  {
    path:'/',
    component:HomeLayout,
    children:[
      {
        path:'dashboard',
        component:()=>import('@/views/dashboard.vue')
      }
    ]
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router

