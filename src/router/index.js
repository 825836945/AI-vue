import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../components/HomeLayout.vue";
import { PieChart, ChatLineSquare, Message } from '@element-plus/icons-vue'

const routes = [
  {
    path:'/',
    component:HomeLayout,
    children:[
      {
        path:'dashboard',
        component:()=>import('@/views/dashboard.vue'),
        meta:{
          title:'数据分析',
          icon: PieChart
        }
      },
      {
        path:'knowledge',
        component:()=>import('@/views/knowledge.vue'),
        meta:{
          title:'知识文章',
          icon: ChatLineSquare
        }
      },
      {
        path:'consultations',
        component:()=>import('@/views/consultations.vue'),
        meta:{
          title:'咨询记录',
          icon: Message
        }
      }
    ]
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router